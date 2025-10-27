import type { suitType } from "../../objects/cards/Consts";

export default class GameController {
    public trump: suitType;

    constructor() {
        this.trump = 'hearts';
    }
}