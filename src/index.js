import BrowserHistoryService from "./services/BrowserHistory.service";
import MessageChannelService from "./services/MessageChannel.service";
import PageControllerComponent from "./components/PageController.component";
import PageComponent from "./components/Page.component";

// service initialization
const browserHistoryService = new BrowserHistoryService();
const messageChannelService = new MessageChannelService();

// component initialization
const pageComponent = new PageComponent(messageChannelService);
const pageControllerComponent = new PageControllerComponent(browserHistoryService, messageChannelService);
pageComponent.init();
pageControllerComponent.init();
