import * as THREE from 'three';
import type Card from '../../objects/cards/Card';

export default class CardModel {
    public card: Card;
    public isFlipped: boolean;
    public depthZ: number;

    public isDraggable: boolean;
    public isHide: boolean;

    public selected: boolean = false;

    public THREEMesh = new THREE.Mesh();

    constructor(card: Card, isDraggable: boolean, isHide: boolean) {
        this.card = card;
        this.isFlipped = false;
        this.depthZ = 0;

        this.isDraggable = isDraggable;
        this.isHide = isHide;
    }

    public async formTHREEMesh(): Promise<void> {
        const textureLoader = new THREE.TextureLoader();
        const texture = await textureLoader.loadAsync(!this.isHide ? this.card.getImage() : './cards/card_back.png');

        if ('colorSpace' in texture) (texture as any).colorSpace = 'srgb';
        else if ('encoding' in texture) (texture as any).encoding = (THREE as any).sRGBEncoding;

        const sizeVector = new THREE.Vector2(texture.image.width, texture.image.height).normalize().multiplyScalar(1.5);
        const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
        const geometry = new THREE.PlaneGeometry(sizeVector.x, sizeVector.y);
        const cardObject = new THREE.Mesh(geometry, material);
        cardObject.position.set(this.THREEMesh.position.x, this.THREEMesh.position.y, 0 + this.depthZ);
        cardObject.rotation.z = this.THREEMesh.rotation.z;
        
        this.THREEMesh = cardObject;
    }
}