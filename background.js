console.log("background is running");
browser.browserAction.onClicked.addListener(clickListener);
function clickListener(tab){
    console.log("button clicked");
    console.log(tab);
    let msg = {txt:"hello"}
    browser.tabs.sendMessage(tab.id,msg);
}