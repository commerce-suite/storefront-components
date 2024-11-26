export class WebSocketClient {
    constructor(url) {
        this.onOpen = () => {
            console.log('Conectado à sala.');
        };
        this.onClose = () => {
            console.log('Conexão fechada.');
        };
        this.onError = (error) => {
            console.error('Erro na conexão:', error);
        };
        this.url = url;
        this.socket = new WebSocket(this.url);
        this.socket.onopen = this.onOpen;
        this.socket.onmessage = (event) => event.data;
        this.socket.onclose = this.onClose;
        this.socket.onerror = this.onError;
    }
    onMessage(callback) {
        this.socket.onmessage = callback;
    }
    closeConnection() {
        if (this.socket.readyState === WebSocket.OPEN) {
            this.socket.close();
        }
    }
}
//# sourceMappingURL=WebSocketClient.js.map
