export class WebSocketClient {
  private socket: WebSocket;
  private url: string;

  constructor(url: string) {
    this.url = url;
    this.socket = new WebSocket(this.url);

    this.socket.onopen = this.onOpen;
    this.socket.onmessage = (event: MessageEvent) => event.data;
    this.socket.onclose = this.onClose;
    this.socket.onerror = this.onError;
  }

  private onOpen = () => {};

  private onClose = () => {};

  onError = () => {};

  onMessage(callback: (event: MessageEvent) => void) {
    this.socket.onmessage = callback;
  }

  closeConnection() {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.close();
    }
  }
}
