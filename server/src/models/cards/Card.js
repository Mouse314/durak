import {rankValueMap, suitValueMap} from "./CardConsts.js";

export default class Card {

    constructor(rank, suit) {
        this.suit = suit;
        this.rank = rank;
        this.rankValue = rankValueMap[this.rank];
        this.suitValue = suitValueMap[this.suit];
    }

    toString() {
        return `${this.rank} of ${this.suit}`;
    }
}