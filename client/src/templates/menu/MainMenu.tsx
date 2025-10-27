import { useState } from "react";
import Room from "../../objects/Room";
import RoomComponent from "./Room";
import NewRoom from "./NewRoom";
import Game from "../game/Game";
import GameUI from "../game/GameUI";

export default function MainMenu({ username }: { username: string }) {
    const [rooms, setRooms] = useState<Room[]>([new Room("Тестовая комната", 2)]);
    const [creatingNewRoom, setCreatingNewRoom] = useState(false);
    const [inGame, setInGame] = useState(false);

    const handleNewRoom = (room: Room) => {
        setRooms((prevRooms) => [...prevRooms, room]);
        setCreatingNewRoom(false);
    };

    const handleGameBack = () => {
        setInGame(false);
    };

    return (
        <>
            {!inGame && (creatingNewRoom ? <NewRoom handleCreateRoom={handleNewRoom} handleCancel={() => setCreatingNewRoom(false)} /> : <div id="app">
                <div className="name-block">
                    <div className="h1"><h1>♠️Дурак онлайн♠️</h1></div>
                </div>
                <div className="rooms">
                    <div className="rooms-title">
                        <h2>Комнаты: {rooms.length}</h2>
                        <div className="buttons-block">
                            <button onClick={() => setCreatingNewRoom(true)}>создать комнату</button>
                            <button>обновить</button>
                        </div>
                    </div>
                    <div className="rooms-container">
                        {rooms.map((room) => (
                            <RoomComponent key={room.id} room={room} handleInGame={() => setInGame(true)} />
                        ))}
                    </div>
                </div>
            </div>)}
            {inGame && <GameUI handleBack={handleGameBack} />}
        </>
    )
}
