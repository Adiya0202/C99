var speech_recognition= window.webkitSpeechRecognition;

var recognition= new speech_recognition();
 function pic_take(){
     document.getElementById("text_box").innerHTML="";
     recognition.start();
 }
 recognition.onresult= function(event){
     console.log(event);
     var content=event.results[0][0].transcript;
     document.getElementById("text_box").innerHTML=content;
     talk();
 }
function talk(){
 synth= window.speechSynthesis;
 var speak_data=document.getElementById("text_box").innerHTML;
 var utterThis=new SpeechSynthesisUtterance(speak_data);
 synth.speak(utterThis);
 Webcam.attach(camera);
}
Webcam.set({
    height:250,
    width:360,
    image_format:'png',
    png_quality:100
});

var camera=document.getElementById("camera");