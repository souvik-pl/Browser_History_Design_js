(()=>{"use strict";const t=new class{constructor(){this.forwardStack=[],this.backwardStack=[]}visit(t){this.backwardStack.push(t),this.forwardStack=[]}back(){if(this.backwardStack.length>1){let t=this.backwardStack.pop();this.forwardStack.push(t)}return this.backwardStack[this.backwardStack.length-1]}forward(){if(this.forwardStack.length>0){let t=this.forwardStack.pop();this.backwardStack.push(t)}return this.backwardStack[this.backwardStack.length-1]}},e=new class{postMessage(t){this.callbackFn(t)}onMessage(t){this.callbackFn=t}},s=new class{constructor(t){this.messageChannelService=t,this.pageContent=document.getElementById("page_content")}init(){this.messageChannelService.onMessage(this.messageHandler.bind(this))}messageHandler(t){this.pageContent.innerText=t}}(e),i=new class{constructor(t,e){this.browserHistoryService=t,this.messageChannelService=e,this.backBtn=document.getElementById("back_btn"),this.forwardBtn=document.getElementById("forward_btn"),this.homeBtn=document.getElementById("home_btn"),this.goBtn=document.getElementById("go_btn"),this.searchInput=document.getElementById("search_input"),this.homePageURL="https://www.google.com/"}init(){this.backBtn.addEventListener("click",this.backButtonClickHandler.bind(this)),this.forwardBtn.addEventListener("click",this.forwardButtonClickHandler.bind(this)),this.homeBtn.addEventListener("click",this.homeButtonClickHandler.bind(this)),this.goBtn.addEventListener("click",this.goButtonClickHandler.bind(this)),this.searchInput.addEventListener("keyup",this.searchInputKeyupHandler.bind(this)),this.initializeBrowserHistory()}initializeBrowserHistory(){this.setSearchInputValue(this.homePageURL),this.goButtonClickHandler()}setSearchInputValue(t){this.searchInput.value=t}backButtonClickHandler(){this.currentURL=this.browserHistoryService.back(),this.setSearchInputValue(this.currentURL),this.messageChannelService.postMessage(this.currentURL)}forwardButtonClickHandler(){this.currentURL=this.browserHistoryService.forward(),this.setSearchInputValue(this.currentURL),this.messageChannelService.postMessage(this.currentURL)}homeButtonClickHandler(){this.setSearchInputValue(this.homePageURL),this.goButtonClickHandler()}goButtonClickHandler(){this.searchInput.value&&(this.currentURL=this.searchInput.value,this.browserHistoryService.visit(this.currentURL),this.messageChannelService.postMessage(this.currentURL))}searchInputKeyupHandler(t){"Enter"===t.key&&this.goButtonClickHandler()}}(t,e);s.init(),i.init()})();