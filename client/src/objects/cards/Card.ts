import { rankTranslationMap, rankValueMap, suitTranslationMap, suitValueMap, type rankType, type suitType } from "./Consts";

export default class Card {
    public suit: suitType;
    public rank: rankType;

    public rankValue: number;
    public suitValue: number;

    public textureName: string;

    constructor(rank: rankType, suit: suitType) {
        this.suit = suit;
        this.rank = rank;
        this.textureName = this.getTextureName();
        this.rankValue = rankValueMap[this.rank];
        this.suitValue = suitValueMap[this.suit];
    }

    public getTextureName(): string {
        return `${rankTranslationMap[this.rank]} ${suitTranslationMap[this.suit]}.png`;
    }

    public getImage(): string {
        return `./cards/52cards/${this.textureName}`;
    }
}