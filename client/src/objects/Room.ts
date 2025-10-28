export default class Room {
    id: number;
    name: string;
    capacity: number;
    deckType: 36 | 52 = 36;
    players: string[];
    status: "free" | "occupied" = "free";

    constructor(name: string, capacity: number, deckNumber: 36 | 52, id = -1, players: string[]) {
        this.id = id === -1 ? Date.now() : id;
        this.name = name;
        this.capacity = capacity;
        this.deckType = deckNumber;
        this.players = players;
    }
}