export default class MessageChannelService {
    postMessage(message) { 
        this.callbackFn(message);
    }

    onMessage(callback) {
        this.callbackFn = callback;
    }
}