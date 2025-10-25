type suitType = 'spades' | 'clubs' | 'hearts' | 'diamonds';
type rankType = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'jack' | 'queen' | 'king' | 'ace';

const suitTranslationMap = {
    'spades': 'П',
    'clubs': 'К',
    'hearts': 'Ч',
    'diamonds': 'Б'
}

const rankTranslationMap = {
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '10': '10',
    'jack': 'В',
    'queen': 'Д',
    'king': 'К',
    'ace': 'Т'
}

export default class Card {
    public suit: suitType;
    public rank: rankType;

    constructor(suit: suitType, rank: rankType) {
        this.suit = suit;
        this.rank = rank;
    }

    public getTextureName(): string {
        return `${rankTranslationMap[this.rank]} ${suitTranslationMap[this.suit]}.png`;
    }
}