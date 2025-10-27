import Card from "./cards/Card";

export default class Deck {
    private cards: Card[] = [];

    constructor(n : 36 | 52) {
        this.cards = this.createDeck(n);
    }

    private createDeck(n: 36 | 52): Card[] {

        const suits = ['hearts', 'diamonds', 'clubs', 'spades'] as const;
        const ranks = n === 36 ? 
        ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'] : 
        ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

        const deck: Card[] = [];
        for (const suit of suits) {
            for (const rank of ranks) {
                deck.push(new Card(rank as any, suit));
            }
        }
        return deck;
    }

    public shuffle(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    public getCards(): Card[] {
        return this.cards;
    }

    public giveCards(amount: number): Card[] | null {
        if (amount > this.cards.length) {
            return null;
        }
        return this.cards.splice(0, amount);
    }
}