import type CardModel from "../templates/game/CardModel";
import type BoundingBox from '../geometry/BoundingBox';
import gsap from "gsap";

export type EnemyPosition = 'top' | 'left' | 'right' | 'topLeft' | 'topRight';

export default class Enemy {
	private hand: CardModel[] = [];
	private position: EnemyPosition;
	private corners: BoundingBox;

	constructor(position: EnemyPosition, corners: BoundingBox) {
		this.position = position;
		this.corners = corners;
	}

	public getHand(): CardModel[] {
		return this.hand;
	}

	public createHand(cards: CardModel[]): CardModel[] {
		// Все карты скрыты (рубашка)
		for (const card of cards) {
			card.isHide = true;
		}
		this.hand = cards;
		return this.hand;
	}

	public placeOnScene(): void {
		const box = this.corners;
		const N = this.hand.length;
		if (N === 0) return;

		let centerX = 0, centerY = 0, radius = 0, baseAngle = 0, maxAngle = Math.PI / 3;
		switch (this.position) {
			case 'top':
				centerX = (box.topLeft.x + box.topRight.x) / 2;
				centerY = box.topLeft.y - 0.5;
				radius = Math.abs(box.topRight.x - box.topLeft.x) / 2.2;
				baseAngle = Math.PI; // карты веером вниз
				break;
			case 'left':
				centerX = box.topLeft.x + 0.5;
				centerY = (box.topLeft.y + box.bottomLeft.y) / 2;
				radius = Math.abs(box.topLeft.y - box.bottomLeft.y) / 2.2;
				baseAngle = -Math.PI / 2; // карты веером вправо
				break;
			case 'right':
				centerX = box.topRight.x - 0.5;
				centerY = (box.topRight.y + box.bottomRight.y) / 2;
				radius = Math.abs(box.topRight.y - box.bottomRight.y) / 2.2;
				baseAngle = Math.PI / 2; // карты веером влево
				break;
			case 'topLeft':
				centerX = box.topLeft.x + 2;
				centerY = box.topLeft.y - 0.5;
				radius = Math.abs(box.topRight.x - box.topLeft.x) / 4;
				baseAngle = Math.PI * 1.1; // чуть наклонённый веер вниз-вправо
				break;
			case 'topRight':
				centerX = box.topRight.x - 2;
				centerY = box.topRight.y - 0.5;
				radius = Math.abs(box.topRight.x - box.topLeft.x) / 4;
				baseAngle = Math.PI * 0.9; // чуть наклонённый веер вниз-влево
				break;
		}

		for (let i = 0; i < N; i++) {
			const rel = (N === 1) ? 0.5 : i / (N - 1); // 0...1
			const angle = (rel - 0.5) * maxAngle;
			let x = centerX, y = centerY, z = 1 + 0.01 * i, rot = 0;
			switch (this.position) {
				case 'top':
					x = centerX + radius * Math.sin(angle);
					y = centerY + radius * (1 - Math.cos(angle));
					rot = angle;
					break;
				case 'left':
					x = centerX - radius * (1 - Math.cos(angle));
					y = centerY + radius * Math.sin(angle);
					rot = angle + Math.PI;
					break;
				case 'right':
					x = centerX + radius * (1 - Math.cos(angle));
					y = centerY + radius * Math.sin(angle);
					rot = -angle - Math.PI;
					break;
				case 'topLeft':
					x = centerX + radius * Math.sin(angle);
					y = centerY + radius * (1 - Math.cos(angle));
					rot = angle + Math.PI * 0.1;
					break;
				case 'topRight':
					x = centerX + radius * Math.sin(angle);
					y = centerY + radius * (1 - Math.cos(angle));
					rot = angle - Math.PI * 0.1;
					break;
			}
			gsap.to(this.hand[i].THREEMesh.position, {
				x: x,
				y: y,
				z: z,
				duration: .5,
				ease: "power2.out"
			});
			gsap.to(this.hand[i].THREEMesh.rotation, {
				z: rot + baseAngle,
				duration: .5,
				ease: "power2.out"
			});
		}
	}
}
