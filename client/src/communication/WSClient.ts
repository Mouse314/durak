export default class WSClient {
    private socket: WebSocket;
    private isReady: boolean;

    constructor(url: string) {
        this.socket = new WebSocket(url);
        this.isReady = false;

        this.socket.onopen = () => {
            console.log("WebSocket connection established");
            this.isReady = true;
        };

        this.socket.onclose = () => {
            console.log("WebSocket connection closed");
            this.isReady = false;
        };
    }

    public sendMessage(message: string) {
        if (this.isReady) {
            this.socket.send(message);
        }
    }

    public onMessage(callback: (message: string) => void) {
        this.socket.onmessage = (event) => {
            callback(event.data);
        };
    }
}