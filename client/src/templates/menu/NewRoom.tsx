import { useState } from "react";
import Room from "../../objects/Room";

type NewRoomTypes = {
    handleCreateRoom: (room: Room) => void;
    handleCancel: () => void;
};

export default function NewRoom({ handleCreateRoom, handleCancel }: NewRoomTypes) {
    const [roomName, setRoomName] = useState("");
    const [roomCapacity, setRoomCapacity] = useState(2);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newRoom: Room = new Room(roomName, roomCapacity);
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
            <button type="submit" onClick={handleSubmit}>Создать</button>
        </div>
    );
}
