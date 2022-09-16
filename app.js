

let numb = document.getElementById("refreshimg").childNodes[0].src;
document.getElementById("captcha").value = numb.substring(56);
console.log(numb.substring(56));
// document.getElementById('32').disabled = false;

browser.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendResponse){
    if(message.txt == "hello"){
        console.log("Radio Buttons Enabled")
        var btns = document.querySelectorAll('input[type="radio"]')
        for(var i=0;i<btns.length;i++){
              btns[i].removeAttribute("disabled");
           }
        document.getElementById("btnNext").removeAttribute("disabled");
    }
    else {
        let numb = document.getElementById("refreshimg").childNodes[0].src;
        document.getElementById("captcha").value = numb.substring(56);
        console.log(numb.substring(56));
        console.log(typeof(message.txt));
    }

}