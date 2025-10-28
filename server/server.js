import { WebSocketServer } from "ws";
import GameController from "./src/controllers/gameController.js";
import Player from "./src/models/players/Player.js";

const wss = new WebSocketServer({ port: 8080 });

const roomIDIterator = (function* () {
    let id = 1;
    while (true) {
        yield id++;
    }
})();

const clients = new Set(); // Все посетители сайта
const rooms = new Map(); // Все комнаты: roomId -> [игроки, gameController]

let onlineCount = 0;


wss.on("connection", (ws) => {
    console.log("Client connected");
    clients.add(ws);
    onlineCount++;
    broadcastOnlineCount();

    let player = null;
    let playerRoomId = -1;

    // Получаем сообщения от посетителей (формат - {type: "message", content: "..."})
    ws.on("message", (data) => {
        let msg;
        try {
            msg = JSON.parse(data);
        } catch (e) {
            console.log("Invalid JSON message", data);
            return;
        }
        console.log("Parsed message:", msg);
        const type = msg.type;
        const roomId = msg.roomId;

        

        switch (type) {
            case "enter":
                // Посетитель ввёл ник и зашёл
                player = new Player(ws, msg.nickname, msg.id);
                break;
            case "getRooms":
                // посетитель попросил список комнат
                const roomList = getRoomsArray();
                ws.send(JSON.stringify({ type: "rooms", rooms: roomList }));
                break;
            case "joinRoom":
                // Посетитель присоединился к комнате
                playerRoomId = roomId;
                rooms.get(roomId).addNewPlayer(player);
                broadcastRooms();
                break;
            case "leftRoom":
                // Игрок покинул комнату
                rooms.get(playerRoomId).removePlayer(player);
                playerRoomId = -1;
                broadcastRooms();
                break;
            case "createRoom":
                // Посетитель создал комнату
                const { id, deckType, capacity, name } = msg.room;
                const newRoom = new GameController(id, deckType, capacity, name);
                rooms.set(id, newRoom);
                broadcastRooms();
                break;
            case "updating":
                // Здесь можно отправить список комнат или что-то ещё
                break;
            default:
                console.log(`Unknown message type: ${type}`);
        }
    });

    ws.on("close", () => {
        console.log("Client disconnected");
        clients.delete(ws);
        onlineCount--;
        broadcastOnlineCount();
    });
});

function broadcast(data) {
    clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
    });
}

function getRoomsArray() {
    const roomList = Array.from(rooms.keys()).map((roomId) => {
        const room = rooms.get(roomId);
        return {
            id: roomId,
            name: room.roomName,
            capacity: room.capacity,
            players: room.players.map((player) => player.nickname),
        };
    });
    return roomList;
}

function broadcastRooms() {
    const roomList = getRoomsArray();
    broadcast(JSON.stringify({ type: "rooms", rooms: roomList }));
}

function broadcastOnlineCount() {
    broadcast(JSON.stringify({ type: "onlineCount", count: onlineCount }));
}

console.log("Сервер запущен на порту: //localhost:8080");