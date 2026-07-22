/* =====================================
   SMARTPATH AI COMPETENCY JS
===================================== */


// Competency PDF Database

const competencyFiles = {
"Grade 9":[

{
unit:"Unit 2",
title:"Grade 9 History Unit 2 Competency Guide",
description:"Major Spots of Ancient World Civilizations",
pdf:"HistoryUnitTwo.pdf"
},

{
unit:"Unit 4",
title:"Grade 9 Maths Unit 4 Competency Guide",
description:"Introduction to Trigonometry",
pdf:"Grade9MathsUnit4IntroductiontoTrigonometry.pdf"
},

{
unit:"Unit 2",
title:"Grade 9 History Unit 2 Competency Guide",
description:"Ancient World Civilizations",
pdf:"Grade9HistUnit2.pdf"
},

{
unit:"Unit 3",
title:"Grade 9 History Unit 3 Competency Guide",
description:"World History and Civilizations",
pdf:"Grade9HistoryUnit3.pdf"
},

{
unit:"Unit 4",
title:"Grade 9 Geography Unit 4 Competency Guide",
description:"Population and Demographic Characteristics of Ethiopia",
pdf:"Grade9GeoUnit4.pdf"
}

],


"Grade 10":[

{
unit:"Unit 2",
title:"Grade 10 Biology Unit 2 Competency Guide",
description:"Biological Molecules",
pdf:"G10bu2.pdf"
},

{
unit:"Unit 3",
title:"Grade 10 Biology Unit 3 Competency Guide",
description:"Cell Biology",
pdf:"G10bu3.pdf"
},

{
unit:"Unit 3",
title:"Grade 10 Geography Unit 3 Competency Guide",
description:"Geography Unit 3",
pdf:"G10GU3.pdf"
},

{
unit:"Unit 1",
title:"Grade 10 Maths Unit 1 Competency Guide",
description:"Relations and Functions",
pdf:"G10Mu1.pdf"
}

],
"Grade 11":[

{
unit:"Unit 2",
title:"Grade 11 Physics Unit 2 Competency Guide",
description:"Vectors",
pdf:"Grade11PhyUnit2Vector.pdf"
},

{
unit:"Unit 7",
title:"Grade 11 Physics Unit 7 Competency Guide",
description:"Nuclear Physics",
pdf:"Grade11PhysUnit7.pdf"
},

{
unit:"Unit 4",
title:"Grade 11 Physics Unit 4 Competency Guide",
description:"Dynamics",
pdf:"Grade11PhysicsUnit4.pdf"
},

{
unit:"Unit 3",
title:"Grade 11 Physics Unit 3 Competency Guide",
description:"Motion in One and Two Dimensions",
pdf:"Grade11PhysicsUnit3.pdf"
},

{
unit:"Unit 7",
title:"Grade 11 Maths Unit 7 Competency Guide",
description:"Introduction to Calculus",
pdf:"Grade11MathsUnit7Competency.pdf"
},

{
unit:"Unit 6",
title:"Grade 11 Maths Unit 6 Competency Guide",
description:"Statistics and Probability",
pdf:"Grade11MathsUnit6Competency.pdf"
},

{
unit:"Unit 5",
title:"Grade 11 Maths Unit 5 Competency Guide",
description:"Vectors",
pdf:"Grade11MathsUnit5Competency.pdf"
},

{
unit:"Unit 1",
title:"Grade 11 Maths Unit 1 Competency Guide",
description:"Sets, Relations and Functions",
pdf:"Grade11mathsunit1Computencyfinal.pdf"
},

{
unit:"Unit 2",
title:"Grade 11 Geography Unit 2 Competency Guide",
description:"Physical Geography of Ethiopia",
pdf:"Grade11GeographyUnit2.pdf"
},

{
unit:"Unit 2",
title:"Grade 11 Chemistry Unit 2 Competency Guide",
description:"Chemical Bonding",
pdf:"Grade11ChemistryUnit2ChemicalBonding.pdf"
},

{
unit:"Unit 1",
title:"Grade 11 Chemistry Unit 1 Competency Guide",
description:"Atomic Structure and Periodic Properties",
pdf:"GRADE11CHEMISTRYUNIT1Competen.pdf"
},

{
unit:"Unit 1",
title:"Grade 11 Biology Unit 1 Competency Guide",
description:"Biology and Its Applications",
pdf:"Grade11BioUnit1_2.pdf"
},

{
unit:"Unit 4",
title:"Grade 11 Biology Unit 4 Competency Guide",
description:"Plant Biology",
pdf:"Grade11BiologyUnitFour.pdf"
},

{
unit:"Unit 3",
title:"Grade 11 Biology Unit 3 Competency Guide",
description:"Cell Biology",
pdf:"Grade11BiologyUnit3.pdf"
}

],


"Grade 12":[

{
unit:"Unit 1",
title:"Grade 12 Competency Guide",
description:"Application of Physics in Other Fields",
pdf:"Grade12unit1C.pdf"
},

{
unit:"Unit 1",
title:"Grade 12 Physics Unit 1 Competency Guide",
description:"Application of Physics in Other Fields",
pdf:"Grade12PhyUnit1_2.pdf"
},

{
unit:"Unit 5",
title:"Grade 12 Maths Unit 5 Competency Guide",
description:"Mathematical Applications in Business",
pdf:"Grade12MathsUnit5Com.pdf"
},

{
unit:"Unit 4",
title:"Grade 12 Maths Unit 4 Competency Guide",
description:"Introduction to Linear Programming",
pdf:"Grade12MathsUnit4Comp.pdf"
},

{
unit:"Unit 3",
title:"Grade 12 Maths Unit 3 Competency Guide",
description:"Statistics",
pdf:"Grade12MathsUnit3Co.pdf"
},

{
unit:"Unit 3",
title:"Grade 12 Chemistry Unit 3 Competency Guide",
description:"Industrial Chemistry",
pdf:"Grade12ChemistryUnit3IndustrialChemistry.pdf"
},

{
unit:"Unit 3",
title:"Grade 12 Chemistry Unit 3 Competency Guide",
description:"Industrial Chemistry",
pdf:"Grade12ChemistryUnit3.pdf"
},

{
unit:"Unit 3",
title:"Grade 12 Biology Unit 3 Competency Guide",
description:"Energy Transformation",
pdf:"Grade12BioUnit3.pdf"
}

],
};

const container = document.getElementById(
"competency-container"
);

function createCards(){

Object.keys(competencyFiles).forEach(grade=>{


let box=document.createElement("div");

box.className="grade-box";


box.innerHTML=`

<div class="grade-header">

<h2>${grade} 🎓</h2>

<button class="open-grade">
⬇️ View Chapters
</button>

</div>


<div class="grade-content"></div>

`;


let content=
box.querySelector(".grade-content");



competencyFiles[grade].forEach(file=>{


let card=document.createElement("div");

card.className="competency-card";


card.innerHTML=`

<div class="pdf-icon">
📘
</div>


<h3>${file.unit}</h3>

<p>${file.title}</p>

<p>${file.description}</p>


<button class="download-btn"
data-file="${file.pdf}">

<span class="download-text">
⬇ Download PDF
</span>

<span class="download-progress"></span>

</button>

`;


content.appendChild(card);


});


box.querySelector(".open-grade").onclick=()=>{


const modal =
document.getElementById("competency-modal");


const modalTitle =
document.getElementById("modal-title");


const modalContent =
document.getElementById("modal-content");



modalTitle.innerHTML =
grade + " 🎓 Competency Chapters";



modalContent.innerHTML =
content.innerHTML;



modal.classList.add("show");


};



document.getElementById("close-modal").onclick=()=>{

document
.getElementById("competency-modal")
.classList.remove("show");

};

container.appendChild(box);


});


}

createCards();





// Download System


document.addEventListener(
"click",
function(e){



if(e.target.closest(".download-btn")){


const button=e.target.closest(
".download-btn"
);


const url=button.dataset.file;


downloadPDF(
url,
button
);


}



});







async function downloadPDF(url,button){



if(button.classList.contains("completed"))
return;



const text =
button.querySelector(".download-text");


const progress =
button.querySelector(".download-progress");



text.innerHTML="Downloading 0%";



try{



const response =
await fetch(url);



const total =
response.headers.get(
"content-length"
);



const reader =
response.body.getReader();


let received=0;



const chunks=[];



while(true){


const {done,value}=await reader.read();


if(done)
break;



chunks.push(value);


received += value.length;



let percent;



if(total){

percent=Math.round(
(received / total)*100
);

}
else{


// fallback if server hides size

percent=Math.min(
99,
received/10000
);


}




text.innerHTML=
"Downloading "
+percent+
"%";



progress.style.width=
percent+"%";



}




const blob=
new Blob(chunks);



const link=
document.createElement(
"a"
);


link.href=
URL.createObjectURL(blob);


link.download=
url.split("/").pop();



link.click();





progress.style.width="100%";


text.innerHTML=
"Completed ✓";


button.classList.add(
"completed"
);



}

catch(error){


console.log(error);


text.innerHTML=
"Download Error";


}



}

// ==============================
// HEADER MENU
// ==============================

function toggleMenu(){

const menu =
document.getElementById("menuBox");


menu.classList.toggle("show");

}


// ==============================
// THEME SWITCH
// ==============================

const themeBtn =
document.getElementById("themeToggle");


if(themeBtn){


themeBtn.onclick=function(){


document.body.classList.toggle(
"light-mode"
);


if(document.body.classList.contains("light-mode")){

themeBtn.innerHTML="☀️";

}
else{

themeBtn.innerHTML="🌙";

}


};


}

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
