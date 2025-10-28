export default class Player {

    ws = null;
    nickname = "";
    id = -1;

    networkStatus = "connected"; // connected | disconnected
    inGameStatus = "not_in_game"; // not_in_game | in_game

    hand = [];
    trump = null;

    constructor(ws, nickname, id) {
        this.ws = ws;
        this.nickname = nickname;
        this.id = id;
    }

    sortHand() {
        this.hand.sort((a, b) => {
            let aValue = a.rankValue * 5 + a.suitValue;
            let bValue = b.rankValue * 5 + b.suitValue;

            if (a.suit === this.trump) aValue += 100;
            if (b.suit === this.trump) bValue += 100;

            return aValue - bValue;
        });
    }

    getLeastTrumpCardValue() {
        const leastTrumpCard = this.hand.filter(card => card.suit === this.trump).sort((a, b) => a.rankValue - b.rankValue)[0];
        return leastTrumpCard ? leastTrumpCard.rankValue : null;
    }
}