export class WebSocketClient {
  private static readonly MAX_RECONNECT_ATTEMPTS = 5;
  private static readonly INITIAL_RECONNECT_DELAY = 5000;
  private static readonly MAX_RECONNECT_DELAY = 30000;
  private static readonly INITIAL_INCREMENT_DELAY = 1000;

  private socket: WebSocket | null = null;
  private reconnectAttempts = 0;
  private reconnectTimeout: number | null = null;
  private url: string;
  private messageCallback: ((event: MessageEvent) => void) | null = null;

  constructor(url: string) {
    this.url = url;
    this.connect();
  }

  private connect() {
    if (this.socket) {
      this.socket.onclose = null;
      this.socket.onerror = null;
      this.socket.onmessage = null;
    }

    this.socket = new WebSocket(this.url);

    this.socket.onopen = this.onOpen;
    this.socket.onclose = this.onClose;
    this.socket.onerror = this.onError;
  }

  private onOpen = () => {
    this.reconnectAttempts = 0;

    if (this.messageCallback && this.socket) {
      this.socket.addEventListener('message', this.messageCallback);
    }
  };

  public onClose = (event: CloseEvent) => {
    if (!event.wasClean) this.handleReconnect();
  };

  private onError = () => {
    this.handleReconnect();
  };

  private handleReconnect() {
    if (this.reconnectTimeout !== null) return;

    if (this.reconnectAttempts >= WebSocketClient.MAX_RECONNECT_ATTEMPTS) return;

    const delay =
      this.reconnectAttempts === 0
        ? WebSocketClient.INITIAL_INCREMENT_DELAY
        : Math.min(
            WebSocketClient.INITIAL_RECONNECT_DELAY * Math.pow(2, this.reconnectAttempts - 1),
            WebSocketClient.MAX_RECONNECT_DELAY,
          );

    this.reconnectTimeout = window.setTimeout(() => {
      this.reconnectAttempts++;
      this.reconnectTimeout = null;
      this.connect();
    }, delay);
  }

  public closeConnection() {
    if (this.socket?.readyState === WebSocket.OPEN) {
      this.socket.close();
    }
    if (this.reconnectTimeout !== null) {
      clearTimeout(this.reconnectTimeout);
      this.reconnectTimeout = null;
    }
  }

  public onMessage(callback: (event: MessageEvent) => void) {
    this.messageCallback = callback;
    if (this.socket) {
      this.socket.addEventListener('message', callback);
    }
  }
}
