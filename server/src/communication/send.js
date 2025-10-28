export default function sendMessage(ws, message) {
    ws.send(JSON.stringify(message));
}
