export declare class WebSocketClient {
    private socket;
    private url;
    constructor(url: string);
    private onOpen;
    private onClose;
    onError: (error: Event) => void;
    onMessage(callback: (event: MessageEvent) => void): void;
    closeConnection(): void;
}
