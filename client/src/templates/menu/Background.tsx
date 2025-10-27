import * as THREE from 'three';
import { useEffect, useRef } from 'react';

export default function Background() {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
        camera.position.z = 5;


        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        // Гамма-коррекция для рендера (современный three.js)
        if ('colorSpace' in renderer) {
            (renderer as any).colorSpace = 'srgb';
        } else if ('outputEncoding' in renderer) {
            (renderer as any).outputEncoding = (THREE as any).sRGBEncoding;
        }
        mount.appendChild(renderer.domElement);

        // Texture

        const textureLoader = new THREE.TextureLoader();
        const textureSpades = textureLoader.load('/suits/spade.png', (tex) => {
            if ('colorSpace' in tex) (tex as any).colorSpace = 'srgb';
            else if ('encoding' in tex) (tex as any).encoding = (THREE as any).sRGBEncoding;
        });
        const textureClubs = textureLoader.load('/suits/clubs.png', (tex) => {
            if ('colorSpace' in tex) (tex as any).colorSpace = 'srgb';
            else if ('encoding' in tex) (tex as any).encoding = (THREE as any).sRGBEncoding;
        });
        const textureHearts = textureLoader.load('/suits/hearts.png', (tex) => {
            if ('colorSpace' in tex) (tex as any).colorSpace = 'srgb';
            else if ('encoding' in tex) (tex as any).encoding = (THREE as any).sRGBEncoding;
        });
        const textureDiamonds = textureLoader.load('/suits/diamonds.png', (tex) => {
            if ('colorSpace' in tex) (tex as any).colorSpace = 'srgb';
            else if ('encoding' in tex) (tex as any).encoding = (THREE as any).sRGBEncoding;
        });

        // Particles: каждая частица со случайной текстурой одной из 4 мастей
        const particleCount = 1000;
        const textures = [textureSpades, textureClubs, textureHearts, textureDiamonds];
        // Сохраняем все группы для вращения
        const pointsGroups: THREE.Points[] = [];
        for (let t = 0; t < textures.length; t++) {
            const count = Math.floor(particleCount / textures.length);
            const positions = new Float32Array(count * 3);
            for (let i = 0; i < count; i++) {
                positions.set([
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10
                ], i * 3);
            }
            const geometry = new THREE.BufferGeometry();
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            const material = new THREE.PointsMaterial({ color: 0xffffff, size: 1, map: textures[t], alphaTest: 0.5, transparent: true });
            const points = new THREE.Points(geometry, material);
            scene.add(points);
            pointsGroups.push(points);
        }


        // Animation (вращаем все группы)
        let frameId: number | null = null;
        const animate = () => {
            for (const points of pointsGroups) {
                points.rotation.x += 0.0002;
                points.rotation.y += 0.0002;
            }
            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };
        animate();

        // Resize handler
        const handleResize = () => {
            const current = mountRef.current;
            if (!current) return;
            camera.aspect = current.clientWidth / current.clientHeight;
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
