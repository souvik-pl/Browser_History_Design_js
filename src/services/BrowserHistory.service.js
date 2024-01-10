export default class BrowserHistoryService {
    constructor() {
        this.forwardStack = [];
        this.backwardStack = [];
    }

    visit(url) {
        this.backwardStack.push(url);
        this.forwardStack = [];
    }

    back() {
        if (this.backwardStack.length > 1) {
            let data = this.backwardStack.pop();
            this.forwardStack.push(data);
        }

        return this.backwardStack[this.backwardStack.length - 1];
    }

    forward() {
        if (this.forwardStack.length > 0) {
            let data = this.forwardStack.pop();
            this.backwardStack.push(data);
        }

        return this.backwardStack[this.backwardStack.length - 1];
    }
}