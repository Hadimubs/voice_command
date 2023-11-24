x=0;
y=0;
dc="";
dr="";
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
document.getElementById("status").innerHTML="System Is Listening, Please Speak";
recognition.start();
}
recognition.onresult=function(f){
console.log(f);
var l=f.results[0][0].transcript;
document.getElementById("status").innerHTML="Speech Has Been Recognised as : "+l;
if (l=="circle" || l=="Circle") {
x=Math.floor(Math.random()*900);
y=Math.floor(Math.random()*600); 
document.getElementById("status").innerHTML="I Am Drawing Circle";
dc="set"
}

if (l=="rectangle" || l=="Rectangle") {
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600); 
    document.getElementById("status").innerHTML="I Am Drawing Rectangle";
    dr="set"
    }

}
function setup(){
canvas=createCanvas(900,600);
}

function draw(){
if (dc=="set") {
radius=Math.floor(Math.random()*100);
circle(x,y,radius);  
document.getElementById("status").innerHTML="Circle Is Drawn";
dc="";
}

if (dr=="set") {
    rect(x,y,70,50);  
    document.getElementById("status").innerHTML="Rectangle Is Drawn";
    dr="";
    }

}