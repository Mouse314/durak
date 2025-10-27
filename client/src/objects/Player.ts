import * as THREE from "three";

import type CardModel from "../templates/game/CardModel";
import type BoundingBox from '../geometry/BoundingBox';
import type GameController from "../templates/game/GameController";
import gsap from "gsap";

export default class Player {
    private hand: CardModel[] = [];
    private gameController: GameController;
    private selectedCard: CardModel | null = null;
    private mouseClicked: boolean = false;

    private corners: BoundingBox;

    constructor(gameController: GameController, corners: BoundingBox) {
        this.gameController = gameController;
        this.corners = corners;
    }

    public getHand(): CardModel[] {
        return this.hand;
    }

    public createHand(cards: CardModel[]): CardModel[] {
        this.hand = cards;
        this.sortHand();
        return this.hand;
    }

    private getMouseWorld(mousePos : { x: number, y: number }) {
        const mouseWorld = new THREE.Vector2(
            mousePos.x * this.corners.width / 2,
            -mousePos.y * this.corners.height / 2
        );
        return mouseWorld;
    }

    private intersectCards(mouse: THREE.Vector2, camera: THREE.Camera) {
        const cardIntersected = [];
        for (const card of this.hand) {
            // Raycaster
            const raycaster = new THREE.Raycaster();
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObject(card.THREEMesh);
            if (intersects.length > 0) {
                cardIntersected.push(card);
            }
        }

        const maxDepth = Math.max(...cardIntersected.map(card => card.depthZ), -1);
        for (const card of this.hand) {
            if (card.depthZ === maxDepth) {
                card.selected = true;
                this.selectedCard = card;
                gsap.to(card.THREEMesh.scale, {
                    y: 1.2,
                    duration: 0.2,
                    ease: "power2.out"
                });
            }
            else {
                card.selected = false;
                gsap.to(card.THREEMesh.scale, {
                    y: 1,
                    duration: 0.2,
                    ease: "power2.out"
                });
            }
        }
    }

    public handleMouseMove(mousePos: { x: number, y: number }, camera: THREE.Camera, domElement: HTMLElement): void {
        const mouseWorld = this.getMouseWorld(mousePos);

        if (this.mouseClicked) {
            // Обработка перетаскивания карты
            if (this.selectedCard) {
                const card = this.selectedCard;
                gsap.to(card.THREEMesh.position, {
                    x: mouseWorld.x,
                    y: mouseWorld.y,
                    duration: 0.2,
                    ease: "power2.out"
                });
                gsap.to(card.THREEMesh.scale, {
                    y: 1,
                    duration: 0.2,
                    ease: "power2.out"
                });
                gsap.to(card.THREEMesh.rotation, {
                    z: 0,
                    duration: 0.2,
                    ease: "power2.out"
                });

                // Проверка, если карта движется над рукой
                if (mouseWorld.x > this.corners.bottomLeft.x && mouseWorld.x < this.corners.bottomRight.x &&
                    mouseWorld.y > this.corners.bottomLeft.y && mouseWorld.y < this.corners.bottomLeft.y + 3) {
                    // Сортируем массив по позиции x
                    this.hand.sort((a, b) => a.THREEMesh.position.x - b.THREEMesh.position.x);
                }
            }
        }
        else {
            this.intersectCards(new THREE.Vector2(mousePos.x, mousePos.y), camera);
        }
    }

    public handleMouseDown(mousePos: { x: number, y: number }, camera: THREE.Camera, domElement: HTMLElement): void {
        this.mouseClicked = true;
        const mouseWorld = this.getMouseWorld(mousePos);
        this.intersectCards(new THREE.Vector2(mousePos.x, mousePos.y), camera);
    }
    public handleMouseUp(mousePos: { x: number, y: number }, camera: THREE.Camera, domElement: HTMLElement): void {
        this.mouseClicked = false;
        this.selectedCard = null;
    }

    public placeOnScene(): void {
        const box = this.corners;
        const maxDepth = .1; // максимальная глубина размещения
        // Веерное размещениe
        const N = this.hand.length;
        if (N === 0) return;
        const center = (box.bottomLeft.x + box.bottomRight.x) / 2;
        const radius = Math.abs(box.bottomRight.x - box.bottomLeft.x) / 2.2;
        const baseY = box.bottomLeft.y + 1;
        const maxAngle = Math.PI / 3; // угол "веера" (60°)
        for (let i = 0; i < N; i++) {
            const rel = (N === 1) ? 0.5 : i / (N - 1); // 0...1
            const angle = (rel - 0.5) * maxAngle;
            const x = center + radius * Math.sin(angle);
            const y = baseY - radius * (1 - Math.cos(angle)) * 1;
            this.hand[i].depthZ = maxDepth * rel;
            if (this.hand[i].selected && this.mouseClicked) {
                gsap.to(this.hand[i].THREEMesh.position, {
                    z: 1 + maxDepth * 2,
                    duration: .5,
                    ease: "power2.out"
                });
            } else {
                gsap.to(this.hand[i].THREEMesh.position, {
                    x: x,
                    y: y,
                    z: 1 + this.hand[i].depthZ,
                    duration: .5,
                    ease: "power2.out"
                });
                gsap.to(this.hand[i].THREEMesh.rotation, {
                    z: -angle,
                    duration: .5,
                    ease: "power2.out"
                });
            }
        }
    }

    public sortHand(): void {
        this.hand.sort((a, b) => {
            let aValue = a.card.rankValue * 5 + a.card.suitValue;
            let bValue = b.card.rankValue * 5 + b.card.suitValue;

            if (a.card.suit === this.gameController.trump) aValue += 100;
            if (b.card.suit === this.gameController.trump) bValue += 100;

            return aValue - bValue;
        });
    }
}