import type { suitType } from "../../objects/cards/Consts";
import type Player from "../../objects/Player";

export default class GameController {
    public trump: suitType;

    public enemies: Player[];

    constructor() {
        this.trump = 'hearts';
        this.enemies = [];
    }
}