import { useEffect, useState } from "react";
import Room from "../../objects/Room";
import RoomComponent from "./Room";
import NewRoom from "./NewRoom";
import GameUI from "../game/GameUI";
import type WSClient from "../../communication/WSClient";

type MainMenuPropsType = {
    nickname: string;
    ws: WSClient;
};

export default function MainMenu({ nickname, ws }: MainMenuPropsType) {
    const [online, setOnline] = useState<number>(0);
    const [rooms, setRooms] = useState<Room[]>([]);
    const [creatingNewRoom, setCreatingNewRoom] = useState(false);
    const [inGame, setInGame] = useState(false);

    const handleNewRoom = (room: Room) => {
        setRooms((prevRooms) => [...prevRooms, room]);
        setCreatingNewRoom(false);
    };

    const handleGameBack = () => {
        ws.sendMessage(JSON.stringify({ type: "leftRoom" }));
        setInGame(false);
    };

    const handleRoomClick = (room: Room) => {
        if (room.players.length < room.capacity) {
            // Если в комнате есть свободные места, присоединяемся к ней
            ws.sendMessage(JSON.stringify({ type: "joinRoom", roomId: room.id }));
            setInGame(true);
        } else {
            // Если комната полная, показываем сообщение
            alert("Комната полная");
        }
    }

    useEffect(() => {
        const id = new Date().getTime();

        // Отправляем на сервер сообщение о входе
        ws.sendMessage(JSON.stringify({ type: "enter", nickname, id }));

        // Запрашиваем список комнат
        ws.sendMessage(JSON.stringify({ type: "getRooms" }));

        ws.onMessage((data) => {
            // Получаем в ответ список комнат
            const msg = JSON.parse(data);

            console.log(msg);

            // Слушаем изменение комнат
            if (msg.type === "rooms") {
                const updatedRooms = msg.rooms.map((roomData: { name: string; capacity: number; deckType: 36 | 52; id: number | undefined; players: string[] }) => 
                    new Room(roomData.name, roomData.capacity, roomData.deckType, roomData.id, roomData.players));
                setRooms(updatedRooms);
            }

            if (msg.type === "onlineCount") {
                setOnline(msg.count);
            }
        });
    }, []);

    return (
        <>
            {!inGame && (creatingNewRoom ? <NewRoom handleCreateRoom={handleNewRoom} handleCancel={() => setCreatingNewRoom(false)} ws={ws} /> : <div id="app">
                <div className="name-block">
                    <div className="h1"><h1>♠️Дурак онлайн♠️</h1></div>
                </div>
                <p>Онлайн: {online}</p>
                <div className="rooms">
                    <div className="rooms-title">
                        <h2>Комнаты: {rooms.length}</h2>
                        <div className="buttons-block">
                            <button onClick={() => setCreatingNewRoom(true)}>создать комнату</button>
                        </div>
                    </div>
                    <div className="rooms-container">
                        {rooms.map((room) => (
                            <RoomComponent key={room.id} room={room} onClick={() => handleRoomClick(room)} />
                        ))}
                    </div>
                </div>
            </div>)}
            {inGame && <GameUI handleBack={handleGameBack} />}
        </>
    )
}
