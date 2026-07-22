// =================================
// SMARTPATH AI ABOUT PAGE JS
// =================================


// ================================
// CONNECTION TEST
// ================================

console.log("SmartPath About JS Connected 🚀");



// ================================
// HAMBURGER MENU
// ================================

const menuBtn = document.getElementById("menu-btn");
const menuBox = document.getElementById("menu-box");


if(menuBtn && menuBox){


    menuBtn.addEventListener("click", function(e){

        e.stopPropagation();

        menuBox.classList.toggle("active");


        if(menuBox.classList.contains("active")){

            menuBtn.innerHTML = "✕";

        } else {

            menuBtn.innerHTML = "☰";

        }

    });



    document.addEventListener("click", function(e){


        if(
            !menuBtn.contains(e.target) &&
            !menuBox.contains(e.target)
        ){


            menuBox.classList.remove("active");

            menuBtn.innerHTML = "☰";


        }


    });


}




// ================================
// LIGHT / DARK MODE
// DEFAULT = NIGHT MODE
// ================================

const themeToggle = document.getElementById("themeToggle");


function loadTheme(){

    const savedTheme =
    localStorage.getItem("smartpath-theme");


    // First time opening = dark mode

    if(savedTheme === null || savedTheme === "dark"){


        document.body.classList.add("dark-mode");


        if(themeToggle){

            themeToggle.innerHTML="☀️";

        }


    }

    else{


        document.body.classList.remove("dark-mode");


        if(themeToggle){

            themeToggle.innerHTML="🌙";

        }


    }

}


loadTheme();



if(themeToggle){


themeToggle.addEventListener("click",function(){


document.body.classList.toggle("dark-mode");



if(document.body.classList.contains("dark-mode")){


localStorage.setItem(
"smartpath-theme",
"dark"
);


themeToggle.innerHTML="☀️";


}

else{


localStorage.setItem(
"smartpath-theme",
"light"
);


themeToggle.innerHTML="🌙";


}


});


}

// ================================
// SCROLL REVEAL ANIMATION
// ================================


const revealItems = document.querySelectorAll(
".info-card, .feature-card, .photo-card, .creator-info"
);



revealItems.forEach(item=>{


    item.style.opacity="0";

    item.style.transform="translateY(50px)";

    item.style.transition="0.8s ease";


});





function revealOnScroll(){



    revealItems.forEach(item=>{


        const position =
        item.getBoundingClientRect().top;


        const windowHeight =
        window.innerHeight;



        if(position < windowHeight - 100){


            item.style.opacity="1";

            item.style.transform="translateY(0)";


        }


    });


}



window.addEventListener(
"scroll",
revealOnScroll
);


revealOnScroll();





// ================================
// PHOTO 3D HOVER EFFECT
// ================================


const photos =
document.querySelectorAll(".photo-circle");



photos.forEach(photo=>{


    photo.addEventListener(
    "mousemove",
    function(e){



        const x =
        (e.offsetX / photo.offsetWidth - 0.5) * 20;



        const y =
        (e.offsetY / photo.offsetHeight - 0.5) * 20;



        photo.style.transform =
        `
        rotateX(${-y}deg)
        rotateY(${x}deg)
        scale(1.05)
        `;


    });



    photo.addEventListener(
    "mouseleave",
    function(){


        photo.style.transform="";


    });



}); 

// ================================
// HEADER BACK BUTTON
// ================================

const backButton = document.getElementById("backButton");

if(backButton){

    backButton.addEventListener("click", function(){

        if(document.referrer){

            history.back();

        }
        else{

            window.location.href = "index.html";

        }

    });

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
