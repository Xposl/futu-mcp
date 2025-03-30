import ftWebsocket from 'futu-api';
declare const futuClient: {
    isConnect: boolean;
    websocket: ftWebsocket;
};
export declare const connect: () => Promise<unknown>;
export declare const disconnect: () => void;
export default futuClient;
