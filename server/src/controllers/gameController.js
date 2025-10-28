import Deck from "../models/cards/Deck.js";

export default class GameController {

    id = -1;
    roomName = "";

    gameStatus = "waiting"; // "waiting" | "ongoing" | "paused" | "finished"

    roomCapacity;

    players = [];

    deck = null;
    trumpSuit = null; // 'hearts' | 'diamonds' | 'clubs' | 'spades'

    turn = 0; // Ход игрока

    constructor(id, cardsAmount, capacity, roomName) {
        this.id = id;
        this.deck = new Deck(cardsAmount);
        this.capacity = capacity;
        this.trumpSuit = this.deck.getBottomCardTrump();
        this.roomName = roomName;
    }

    addNewPlayer(player) {
        if (this.players.length < this.capacity) {

            // Отправить сообщение о присоединении игрока

            this.players.push(player);
            console.log(`Player ${player.nickname} joined the game.`);
            if (this.players.length === this.capacity) {
                this.gameStart();
            }
        } else {
            throw new Error("Room is full");
        }
    }

    removePlayer(player) {
        const index = this.players.findIndex(p => p.id === player.id);
        if (index !== -1) {
            this.players.splice(index, 1);
            console.log(`Player ${player.nickname} left the room.`);
        }
    }

    gameStart() {

        // Отправить сообщение о начале игры всем игрокам

        this.trumpSuit = this.deck.getBottomCardTrump();
        this.prepareGame();
        this.initFirstTurn();
        console.log("Game started!");
        this.gameStatus = "ongoing";
    }

    prepareGame() {
        // Заполняем руки игроков
        for (let player of this.players) {
            player.trump = this.trumpSuit;
            player.hand = this.deck.giveCards(6);
            player.sortHand();
        }
    }

    initFirstTurn() {
        const leastTrumpValues = this.players.map(player => player.getLeastTrumpCardValue());
        const minValue = Math.min(...leastTrumpValues.filter(value => value !== null));
        this.turn = leastTrumpValues.indexOf(minValue);
    }

    nextTurn() {
        this.turn = (this.turn + 1) % this.players.length;
    }

    printDebugConsole() {
        console.log("Player hands:");
        this.players.forEach((player, index) => {
            console.log(`  Player ${index + 1}: ${player.hand.map(card => card.toString()).join(", ")}`);
        });
    }
}