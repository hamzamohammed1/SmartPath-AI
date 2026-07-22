const slides = [

{
image:"photo1.png",
title:"AI Timetable Generator",
text:"Click the planner button and create a smart timetable designed for your goals."
},

{
image:"photo2.png",
title:"Competency Learning",
text:"Explore competency based learning and understand topics step by step."
},

{
image:"photo3.png",
title:"Smart Progress Tracking",
text:"Track your improvement and focus on areas that need attention."
},

{
image:"photo4.png",
title:"Personal Study Path",
text:"AI creates a learning path that matches your level."
},

{
image:"photo5.png",
title:"Future Learning With AI",
text:"SmartPath AI helps students study smarter."
}

];


let currentSlide = 0;


const image = document.getElementById("slideImage");
const title = document.getElementById("slideTitle");
const text = document.getElementById("slideText");


function showSlide(){

image.style.opacity="0";


setTimeout(()=>{

image.src = slides[currentSlide].image;


image.style.opacity="1";


// AI typing title
typeTitle(
title,
slides[currentSlide].title
);


// Normal description
text.textContent = slides[currentSlide].text;


},400);

}



function typeTitle(element,message){

element.textContent="";

let i=0;


let typing=setInterval(()=>{


element.textContent += message.charAt(i) + "|";


i++;


setTimeout(()=>{

element.textContent = message.substring(0,i) + "|";

},0);



if(i >= message.length){

clearInterval(typing);


// remove cursor after finishing
setTimeout(()=>{

element.textContent = message;

},1000);


}


},120);

}

function nextSlide(){

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;

}

showSlide();

}


function previousSlide(){

currentSlide--;

if(currentSlide < 0){

currentSlide = slides.length-1;

}

showSlide();

}



document.addEventListener("DOMContentLoaded",()=>{

showSlide();


document.querySelector(".right")
.addEventListener("click",nextSlide);


document.querySelector(".left")
.addEventListener("click",previousSlide);


setInterval(nextSlide,3000);


});
const messages = [
"Create smart study timetables",
"Master competency based learning",
"Improve your weak subjects",
"Build your personal learning path",
"Prepare smarter with AI guidance"
];


let textIndex = 0;
let charIndex = 0;


function typeAI(){

let element = document.getElementById("typingText");

if(charIndex < messages[textIndex].length){

element.innerHTML += messages[textIndex].charAt(charIndex);

charIndex++;

setTimeout(typeAI,80);

}

else{

setTimeout(()=>{

element.innerHTML="";

charIndex=0;

textIndex++;

if(textIndex >= messages.length){

textIndex=0;

}

typeAI();

},1500);

}

}


typeAI();

function toggleTemplates(){

let box=document.getElementById("templateBox");

box.classList.toggle("show");

}

document.addEventListener("DOMContentLoaded",()=>{


const themeBtn=document.getElementById("themeToggle");


if(themeBtn){


themeBtn.addEventListener("click",()=>{


document.body.classList.toggle("light-mode");



if(document.body.classList.contains("light-mode")){


themeBtn.innerHTML="☀️";


}

else{


themeBtn.innerHTML="🌙";


}



});


}



});

/* ===============================
/* ===============================
 SMARTPATH AI ASSISTANT
================================ */


const aiBox=document.querySelector(".floating-ai");

const aiButton=document.querySelector(".ai-avatar-btn");

const popup=document.getElementById("aiPopup");


let dragging=false;

let moved=false;

let startX,startY;

let startLeft,startTop;



// OPEN AI

aiButton.addEventListener("click",(e)=>{


if(moved){

moved=false;

return;

}


popup.classList.toggle("active");


if(popup.classList.contains("active")){

typeAIMessage();

}


});





// DRAG START

aiBox.addEventListener("pointerdown",(e)=>{


dragging=true;


moved=false;


aiBox.setPointerCapture(e.pointerId);



let rect=aiBox.getBoundingClientRect();



startX=e.clientX;

startY=e.clientY;


startLeft=rect.left;

startTop=rect.top;



});






// DRAG MOVE


aiBox.addEventListener("pointermove",(e)=>{


if(!dragging)return;



let x=e.clientX-startX;

let y=e.clientY-startY;



if(Math.abs(x)>8 || Math.abs(y)>8){

moved=true;

}



let left=startLeft+x;

let top=startTop+y;



// screen protection

left=Math.max(
0,
Math.min(left,window.innerWidth-aiBox.offsetWidth)
);


top=Math.max(
0,
Math.min(top,window.innerHeight-aiBox.offsetHeight)
);



aiBox.style.left=left+"px";

aiBox.style.top=top+"px";


aiBox.style.right="auto";

aiBox.style.bottom="auto";



});





// END DRAG


aiBox.addEventListener("pointerup",()=>{


dragging=false;


});






// AI MESSAGE


function typeAIMessage(){


const message=

"Hello 👋 I am SmartPath AI. I can guide your learning journey 🚀";


const output=document.getElementById("aiMessage");


output.textContent="";


let i=0;


let typing=setInterval(()=>{


output.textContent+=message[i];


i++;


if(i>=message.length){

clearInterval(typing);

}


},40);


}






// OPEN EXTERNAL AI


document.querySelector(".ai-ask-btn")
.addEventListener("click",()=>{


const btn=document.querySelector(".ai-btn-text");


btn.textContent="Opening AI...";


setTimeout(()=>{


window.open(
"https://duck.ai",
"_blank"
);


},1000);



});