import type Room from "../../objects/Room";

type RoomPropsTypes = {
    room: Room;
    onClick: () => void;
};

export default function RoomComponent({ room, onClick }: RoomPropsTypes) {
    return (
        <div className="room" onClick={onClick}>
            <div className="left">
                <h3>{room.name}</h3>
                <p>Игроков: {room.players.length}/{room.capacity}</p>
            </div>
            <div className="right">
                <p style={{ color: room.status === "free" ? "lime" : "red" }}>{room.status === "free" ? "доступна" : "идёт игра"}</p>
            </div>
        </div>
    );
}
