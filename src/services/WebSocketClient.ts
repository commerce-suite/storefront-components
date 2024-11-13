export class WebSocketClient {
  private socket: WebSocket;
  private url: string;

  constructor(url: string) {
    this.url = url;
    this.socket = new WebSocket(this.url);

    this.socket.onopen = this.onOpen;
    this.socket.onmessage = this.onMessage;
    this.socket.onclose = this.onClose;
    this.socket.onerror = this.onError;
  }

  private onOpen = () => {
    console.log('Conectado à sala.');
  };

  private onClose = () => {
    console.log('Conexão fechada.');
  };

  private onError = (error: Event) => {
    console.error('Erro na conexão:', error);
  };

  onMessage = (event: MessageEvent) => {
    console.log('Mensagem recebida:', event.data);
  };

  closeConnection() {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.close();
    }
  }
}
