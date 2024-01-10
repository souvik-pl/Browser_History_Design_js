export default class PageComponent {
    constructor(messageChannelService) {
        this.messageChannelService = messageChannelService;
        this.pageContent = document.getElementById("page_content");
    }

    init() {
        this.messageChannelService.onMessage(this.messageHandler.bind(this));
    }

    messageHandler(message) {
        this.pageContent.innerText = message;
    }
}