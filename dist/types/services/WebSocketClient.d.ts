export declare class WebSocketClient {
    private static readonly MAX_RECONNECT_ATTEMPTS;
    private static readonly INITIAL_RECONNECT_DELAY;
    private static readonly MAX_RECONNECT_DELAY;
    private static readonly INITIAL_INCREMENT_DELAY;
    private socket;
    private reconnectAttempts;
    private reconnectTimeout;
    private url;
    private messageCallback;
    constructor(url: string);
    private connect;
    private onOpen;
    onClose: (event: CloseEvent) => void;
    private onError;
    private handleReconnect;
    closeConnection(): void;
    onMessage(callback: (event: MessageEvent) => void): void;
}
