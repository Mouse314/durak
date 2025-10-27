import * as THREE from 'three';
import { useEffect, useRef } from "react";
import Player from '../../objects/Player';
import CardModel from './CardModel';
import Card from '../../objects/cards/Card';
import BoundingBox from '../../geometry/BoundingBox';
import GameController from './GameController';

export default function Game() {
    const mountRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {

        function getNDC(x: number, y: number) {
            const mouse = new THREE.Vector2(
                (x / window.innerWidth) * 2 - 1,
                -((y / window.innerHeight) * 2 - 1)
            );
            return mouse;
        };

        const mount = mountRef.current;
        if (!mount) return;

        // Scene setup
        const scene = new THREE.Scene();
        const aspect = mount.clientWidth / mount.clientHeight;
        const multiplier = 3;
        const camera = new THREE.OrthographicCamera(
            -aspect * multiplier,
            aspect * multiplier,
            1 * multiplier,
            -1 * multiplier,
            0.1,
            1000
        );
        
        console.log(window.devicePixelRatio);
        camera.position.z = 5;
        // camera.lookAt(new THREE.Vector3(0, 0, 0));
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        // Моковые данные

        const gameController = new GameController();
        const corners = BoundingBox.getFromTHREE(camera, 1);

        const player = new Player(gameController, corners);
        const mockCards = [
            new Card('jack', 'hearts'),
            new Card('queen', 'diamonds'),
            new Card('king', 'clubs'),
            new Card('ace', 'spades'),
            new Card('4', 'hearts'),
            new Card('5', 'diamonds'),
            new Card('6', 'clubs'),
            new Card('7', 'spades'),
            new Card('4', 'hearts'),
            new Card('5', 'diamonds'),
        ];
        player.createHand(mockCards.map(card => new CardModel(card, true, false)));
        player.placeOnScene();

        addEventListener('mousemove', (event) => player.handleMouseMove(getNDC(event.clientX, event.clientY), camera));
        addEventListener('mousedown', (event) => player.handleMouseDown(getNDC(event.clientX, event.clientY), camera));
        addEventListener('mouseup', () => player.handleMouseUp());

        addEventListener('touchstart', (event) => player.handleMouseDown(getNDC(event.touches[0].clientX, event.touches[0].clientY), camera));
        addEventListener('touchmove', (event) => player.handleMouseMove(getNDC(event.touches[0].clientX, event.touches[0].clientY), camera));
        addEventListener('touchend', () => player.handleMouseUp());

        // Гамма-коррекция для рендера (современный three.js)
        if ('colorSpace' in renderer) {
            (renderer as any).colorSpace = 'srgb';
        } else if ('outputEncoding' in renderer) {
            (renderer as any).outputEncoding = (THREE as any).sRGBEncoding;
        }
        mount.appendChild(renderer.domElement);

        // Player Cards
        player.getHand().forEach(async cardModel => {
            await cardModel.formTHREEMesh();
            scene.add(cardModel.THREEMesh);
        });

        // Animation (вращаем все группы)
        let frameId: number | null = null;
        const animate = () => {
            player.placeOnScene();
            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };
        animate();

        // Resize handler
        const handleResize = () => {
            const current = mountRef.current;
            if (!current) return;
            // camera.aspect = current.clientWidth / current.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(current.clientWidth, current.clientHeight, false);
            renderer.setPixelRatio(window.devicePixelRatio);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            if (frameId !== null) {
                cancelAnimationFrame(frameId);
            }
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
            const current = mountRef.current;
            if (current) {
                current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
            }}
        />
    );
}