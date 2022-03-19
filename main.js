var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();
function start
{
document.getElementById("textbox").innerHtml ="";
Recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var Content=event.result[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHtml =Content;
}