export default function receiveMessage(ws, callback) {
    ws.on("message", (message) => {
        const data = JSON.parse(message);
        callback(data);
    });
}
