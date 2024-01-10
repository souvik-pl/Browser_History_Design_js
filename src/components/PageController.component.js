export default class PageControllerComponent {
    constructor(browserHistoryService, messageChannelService) {
        this.browserHistoryService = browserHistoryService;
        this.messageChannelService = messageChannelService;
        this.backBtn = document.getElementById("back_btn");
        this.forwardBtn = document.getElementById("forward_btn");
        this.homeBtn = document.getElementById("home_btn");
        this.goBtn = document.getElementById("go_btn");
        this.searchInput = document.getElementById("search_input");
        this.homePageURL = "https://www.google.com/";
    }

    init() {
        this.backBtn.addEventListener("click", this.backButtonClickHandler.bind(this));
        this.forwardBtn.addEventListener("click", this.forwardButtonClickHandler.bind(this));
        this.homeBtn.addEventListener("click", this.homeButtonClickHandler.bind(this));
        this.goBtn.addEventListener("click", this.goButtonClickHandler.bind(this));
        this.searchInput.addEventListener("keyup", this.searchInputKeyupHandler.bind(this));
        this.initializeBrowserHistory();
    }

    initializeBrowserHistory() {
        this.setSearchInputValue(this.homePageURL);
        this.goButtonClickHandler();
    }

    setSearchInputValue(value) {
        this.searchInput.value = value;
    }

    backButtonClickHandler() {
        this.currentURL = this.browserHistoryService.back();
        this.setSearchInputValue(this.currentURL);
        this.messageChannelService.postMessage(this.currentURL);
    }

    forwardButtonClickHandler() {
        this.currentURL = this.browserHistoryService.forward();
        this.setSearchInputValue(this.currentURL);
        this.messageChannelService.postMessage(this.currentURL);
    }

    homeButtonClickHandler() {
        this.setSearchInputValue(this.homePageURL);
        this.goButtonClickHandler();
    }

    goButtonClickHandler() {
        if (this.searchInput.value) {
            this.currentURL = this.searchInput.value;
            this.browserHistoryService.visit(this.currentURL);
            this.messageChannelService.postMessage(this.currentURL);
        }
    }

    searchInputKeyupHandler(event) {
        if (event.key === "Enter") {
            this.goButtonClickHandler();
        }
    }
}