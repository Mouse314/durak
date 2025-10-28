import { useState } from "react";
import Room from "../../objects/Room";
import type WSClient from "../../communication/WSClient";

type NewRoomTypes = {
    handleCreateRoom: (room: Room) => void;
    handleCancel: () => void;
    ws: WSClient;
};

export default function NewRoom({ handleCreateRoom, handleCancel, ws }: NewRoomTypes) {
    const [roomName, setRoomName] = useState("");
    const [roomCapacity, setRoomCapacity] = useState(2);
    const [roomDeck, setRoomDeck] = useState<36 | 52>(36);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newRoom: Room = new Room(roomName, roomCapacity, roomDeck, -1, []);
        ws.sendMessage(JSON.stringify({ type: "createRoom", room: newRoom }));
        handleCreateRoom(newRoom);
    };

    return (
        <div className="form">
            <div className="title-header">
                <h2>Создать новую комнату</h2>
                <button className="cancel" onClick={handleCancel} title="отменить">X</button>
            </div>
            <div className="row">
                <label htmlFor="roomName">Название комнаты:</label>
                <input type="text" id="roomName" name="roomName" placeholder="Игровая комната" value={roomName} onChange={(e) => setRoomName(e.target.value)} />
            </div>
            <div className="row">
                <label htmlFor="roomCapacity">Вместимость комнаты:</label>
                <div className="buttons-container">
                    <button onClick={() => setRoomCapacity(2)} style={{ backgroundColor: roomCapacity === 2 ? 'blue' : 'black' }}>2</button>
                    <button onClick={() => setRoomCapacity(3)} style={{ backgroundColor: roomCapacity === 3 ? 'blue' : 'black' }}>3</button>
                    <button onClick={() => setRoomCapacity(4)} style={{ backgroundColor: roomCapacity === 4 ? 'blue' : 'black' }}>4</button>
                    <button onClick={() => setRoomCapacity(5)} style={{ backgroundColor: roomCapacity === 5 ? 'blue' : 'black' }}>5</button>
                    <button onClick={() => setRoomCapacity(6)} style={{ backgroundColor: roomCapacity === 6 ? 'blue' : 'black' }}>6</button>
                </div>
            </div>
            <div className="row">
                <label htmlFor="roomDeck">Колода карт:</label>
                <div className="buttons-container">
                    <button onClick={() => setRoomDeck(36)} style={{ backgroundColor: roomDeck === 36 ? 'blue' : 'black' }}>36</button>
                    <button onClick={() => setRoomDeck(52)} style={{ backgroundColor: roomDeck === 52 ? 'blue' : 'black' }}>52</button>
                </div>
                    
                
            </div>
            <button type="submit" onClick={handleSubmit}>Создать</button>
        </div>
    );
}
