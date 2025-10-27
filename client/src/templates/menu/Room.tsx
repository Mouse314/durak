import type Room from "../../objects/Room";

type RoomPropsTypes = {
    room: Room;
    handleInGame: () => void;
};

export default function RoomComponent({ room, handleInGame }: RoomPropsTypes) {
    return (
        <div className="room" onClick={() => {
            if (room.players.length < room.capacity) {
                handleInGame();
            }
        }}>
            <div className="left">
                <h3>{room.name}</h3>
                <p>Вместимость: {room.capacity}</p>
            </div>
            <div className="right">
                <p style={{ color: room.status === "free" ? "lime" : "red" }}>{room.status === "free" ? "доступна" : "идёт игра"}</p>
            </div>
        </div>
    );
}
