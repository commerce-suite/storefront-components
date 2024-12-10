const MAX_RECONNECT_ATTEMPTS = 5;
const INITIAL_RECONNECT_DELAY = 5000;
const MAX_RECONNECT_DELAY = 30000;
const HEALTH_CHECK_INTERVAL = 60000;

export class WebSocketClient {
  private socket: WebSocket | null = null;
  private reconnectAttempts = 0;
  private reconnectTimeout: number | null = null;
  private healthCheckInterval: number | null = null;
  private healthCheckCallback: (() => object) | null = null;

  private messageCallback: ((event: MessageEvent) => void) | null = null;

  private url: string;

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

    if (this.healthCheckCallback) {
      this.startHealthCheck();
    }

    if (this.messageCallback && this.socket) {
      this.socket.addEventListener('message', this.messageCallback);
    }
  };

  public onClose = (event: CloseEvent) => {
    this.stopHealthCheck();
    if (!event.wasClean) this.handleReconnect();
  };

  private onError = () => {
    this.handleReconnect();
  };

  private handleReconnect() {
    if (this.reconnectTimeout !== null) return;

    if (this.reconnectAttempts >= MAX_RECONNECT_ATTEMPTS) return;

    const delay = Math.min(
      INITIAL_RECONNECT_DELAY * Math.pow(2, this.reconnectAttempts),
      MAX_RECONNECT_DELAY,
    );

    this.reconnectTimeout = window.setTimeout(() => {
      this.reconnectAttempts++;
      this.reconnectTimeout = null;
      this.connect();
    }, delay);
  }

  public closeConnection() {
    this.stopHealthCheck();
    if (this.socket?.readyState === WebSocket.OPEN) {
      this.socket.close();
    }
    if (this.reconnectTimeout !== null) {
      clearTimeout(this.reconnectTimeout);
      this.reconnectTimeout = null;
    }
  }

  private sendMessage(payload: object) {
    if (this.socket?.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(payload));
    }
  }

  public onMessage(callback: (event: MessageEvent) => void) {
    this.messageCallback = callback;
    if (this.socket) {
      this.socket.addEventListener('message', callback);
    }
  }

  public setHealthCheck(callback: () => object) {
    this.healthCheckCallback = callback;
    if (this.socket?.readyState === WebSocket.OPEN) {
      this.startHealthCheck();
    }
  }

  private startHealthCheck() {
    this.stopHealthCheck();

    this.healthCheckInterval = window.setInterval(() => {
      if (this.socket?.readyState === WebSocket.OPEN && this.healthCheckCallback) {
        this.sendMessage(this.healthCheckCallback());
      }
    }, HEALTH_CHECK_INTERVAL);
  }

  private stopHealthCheck() {
    if (this.healthCheckInterval !== null) {
      clearInterval(this.healthCheckInterval);
      this.healthCheckInterval = null;
    }
  }
}
