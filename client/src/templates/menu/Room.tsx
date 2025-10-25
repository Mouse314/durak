import type Room from "../../objects/Room";

export default function RoomComponent({ room }: { room: Room }) {
    return (
        <div className="room">
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
