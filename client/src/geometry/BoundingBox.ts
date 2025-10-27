import * as THREE from "three";

export default class BoundingBox {
    public topLeft: THREE.Vector2;
    public topRight: THREE.Vector2;
    public bottomLeft: THREE.Vector2;
    public bottomRight: THREE.Vector2;

    public width: number;
    public height: number;

    constructor(topLeft: THREE.Vector2, topRight: THREE.Vector2, bottomLeft: THREE.Vector2, bottomRight: THREE.Vector2) {
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;

        this.width = this.getWidth();
        this.height = this.getHeight();
    }

    public getWidth(): number {
        return this.topRight.x - this.topLeft.x;
    }

    public getHeight(): number {
        return this.bottomRight.y - this.topRight.y;
    }

    public contains(x: number, y: number): boolean {
        return x >= this.topLeft.x && x <= this.topRight.x && y >= this.bottomLeft.y && y <= this.bottomRight.y;
    }

    /**
     * Получить границы экрана в мировых координатах
     * @param camera THREE.Camera
     * @param z Плоскость, на которой нужны координаты (для перспективной камеры)
     */
    static getFromTHREE(camera: THREE.Camera, z = 1): BoundingBox {
        if ((camera as any).isOrthographicCamera) {
            // Для ортографической камеры — напрямую из параметров
            const ortho = camera as THREE.OrthographicCamera;
            const topLeft = new THREE.Vector2(ortho.left, ortho.top);
            const topRight = new THREE.Vector2(ortho.right, ortho.top);
            const bottomLeft = new THREE.Vector2(ortho.left, ortho.bottom);
            const bottomRight = new THREE.Vector2(ortho.right, ortho.bottom);
            return new BoundingBox(topLeft, topRight, bottomLeft, bottomRight);
        } else if ((camera as any).isPerspectiveCamera) {
            // Для перспективной камеры — пересечение лучей с плоскостью z
            const ndc = [
                new THREE.Vector2(-1, -1), // левый нижний
                new THREE.Vector2(1, -1),  // правый нижний
                new THREE.Vector2(1, 1),   // правый верхний
                new THREE.Vector2(-1, 1),  // левый верхний
            ];
            const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -z);
            const points = ndc.map(ndc2 => {
                const mouse = new THREE.Vector2(ndc2.x, ndc2.y);
                const raycaster = new THREE.Raycaster();
                raycaster.setFromCamera(mouse, camera as THREE.PerspectiveCamera);
                const intersection = new THREE.Vector3();
                plane.intersectLine(new THREE.Line3(raycaster.ray.origin, raycaster.ray.origin.clone().add(raycaster.ray.direction.clone().multiplyScalar(10000))), intersection);
                return new THREE.Vector2(intersection.x, intersection.y);
            });
            return new BoundingBox(points[3], points[2], points[0], points[1]);
        } else {
            throw new Error('Unsupported camera type for BoundingBox.getFromTHREE');
        }
    }

    /**
     * Получить мировые координаты курсора мыши/тача на плоскости z
     * @param camera THREE.Camera
     * @param domElement HTMLElement
     * @param clientX number
     * @param clientY number
     * @param z number
     */
    static getWorldCursor(camera: THREE.Camera, domElement: HTMLElement, clientX: number, clientY: number, z = 1): THREE.Vector2 {
        const rect = domElement.getBoundingClientRect();
        const x = ((clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((clientY - rect.top) / rect.height) * 2 + 1;
        const mouse = new THREE.Vector2(x, y);
        if ((camera as any).isOrthographicCamera) {
            // Для ортографической камеры — прямое преобразование
            const ortho = camera as THREE.OrthographicCamera;
            const worldX = ortho.left + (x + 1) / 2 * (ortho.right - ortho.left);
            const worldY = ortho.bottom + (y + 1) / 2 * (ortho.top - ortho.bottom);
            return new THREE.Vector2(worldX, worldY);
        } else if ((camera as any).isPerspectiveCamera) {
            // Для перспективной камеры — raycaster пересечение с плоскостью z
            const raycaster = new THREE.Raycaster();
            raycaster.setFromCamera(mouse, camera as THREE.PerspectiveCamera);
            const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -z);
            const intersection = new THREE.Vector3();
            plane.intersectLine(new THREE.Line3(raycaster.ray.origin, raycaster.ray.origin.clone().add(raycaster.ray.direction.clone().multiplyScalar(10000))), intersection);
            return new THREE.Vector2(intersection.x, intersection.y);
        } else {
            throw new Error('Unsupported camera type for BoundingBox.getWorldCursor');
        }
    }
}