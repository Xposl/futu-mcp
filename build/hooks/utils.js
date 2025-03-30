import ftWebsocket from 'futu-api';
// 富途API连接配置
const FUTU_CONFIG = {
    host: process.env.FUTU_HOST || '127.0.0.1',
    port: parseInt(process.env.FUTU_PORT || '11111'),
    useSSl: false,
    websocketPort: parseInt(process.env.FUTU_WEBSOCKET_PORT || '33333'),
    websocketKey: process.env.FUTU_WEBSOCKET_KEY || 'f3c8bbd4f8a59695',
};
const futuClient = {
    isConnect: false,
    websocket: new ftWebsocket(),
};
export const connect = () => {
    return new Promise((resolve, reject) => {
        if (!futuClient.isConnect) {
            try {
                console.log(`try connect OpenD Websocket: ${FUTU_CONFIG.host}:${FUTU_CONFIG.websocketPort}`);
                futuClient.websocket.onlogin = (ret, msg) => {
                    if (ret) {
                        futuClient.isConnect = true;
                        console.log('FutuOpenD connected:', msg);
                        resolve({ ret, msg });
                    }
                    else {
                        console.error('FutuOpenD connect failed:', msg);
                    }
                };
                console.log('FutuOpenD login:', FUTU_CONFIG.host, FUTU_CONFIG.websocketPort, FUTU_CONFIG.useSSl, FUTU_CONFIG.websocketKey);
                futuClient.websocket.start(FUTU_CONFIG.host, FUTU_CONFIG.websocketPort, FUTU_CONFIG.useSSl, FUTU_CONFIG.websocketKey);
            }
            catch (error) {
                reject(error);
            }
        }
    });
};
export const disconnect = () => {
    futuClient.websocket.stop();
    futuClient.isConnect = false;
    console.log('FutuOpenD disconnected');
};
export default futuClient;
