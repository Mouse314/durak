import Card from "./Card.js";

export default class Deck {
    deck = [];

    constructor(cardAmount) {
        this.createDeck(cardAmount);
        this.shuffleDeck();
    }

    createDeck(n) {
        this.deck = [];
        const suits = ["hearts", "diamonds", "clubs", "spades"];
        const ranks = n === 36 ?
            ["6", "7", "8", "9", "10", "J", "Q", "K", "A"] :
            ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        for (let suit of suits) {
            for (let rank of ranks) {
                this.deck.push(new Card(rank, suit));
            }
        }
    }

    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    giveCards(numCards) {
        if (numCards < 1 || numCards > this.deck.length) {
            return [];
        }
        return this.deck.splice(0, numCards);
    }

    getBottomCardTrump() {
        return this.deck[this.deck.length - 1].suit;
    }
}