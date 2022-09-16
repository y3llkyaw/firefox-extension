document.querySelector('#hello').addEventListener('click',clickListener);

function clickListener(){
    console.log("clicked");
    browser.tabs.query({active:true,currentWindow:true},gotTabs);
    function gotTabs(tabs){
        console.log("got.tabs");
        console.log(tabs);
        let msg = {txt:"hello"}
        browser.tabs.sendMessage(tabs[0].id,msg);
    }

}
document.querySelector('#hi').addEventListener('click',hi);

function hi(){
    console.log("clicked");
    browser.tabs.query({active:true,currentWindow:true},gotTabs);
    function gotTabs(tabs){
        console.log("got.tabs");
        console.log(tabs);
        let msg = {txt:"hi"}
        browser.tabs.sendMessage(tabs[0].id,msg);
    }

}