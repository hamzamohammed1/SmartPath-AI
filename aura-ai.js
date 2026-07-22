const auraButton =
document.getElementById("auraButton");


const auraBox =
document.getElementById("auraBox");


const auraText =
document.getElementById("auraText");


const askAI =
document.getElementById("askAI");




auraButton.onclick=function(){


auraBox.classList.toggle("active");



if(auraBox.classList.contains("active")){


typeAura();


}


};





function typeAura(){


let message=
"Hello 👋 Hi there! I'm SmartPath AI. I can guide your learning journey. For now, click the button below and ask AI anything 🚀";


auraText.textContent="";


let i=0;


let typing=setInterval(()=>{


auraText.textContent+=message[i];


i++;


if(i>=message.length){

clearInterval(typing);

}


},40);


}




askAI.onclick=function(){


askAI.classList.add("loading");


askAI.querySelector("span").textContent=
"Opening AI...";


setTimeout(()=>{


window.location.href="https://duck.ai";


},1500);


};