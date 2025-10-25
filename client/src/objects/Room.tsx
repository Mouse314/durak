export default class Room {
    id: string;
    name: string;
    capacity: number;
    players: string[];
    status: "free" | "occupied" = "free";

    constructor(name: string, capacity: number) {
        this.id = Date.now().toString();
        this.name = name;
        this.capacity = capacity;
        this.players = [];
    }
}