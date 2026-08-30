// SMARTPATH AI APP DOWNLOAD SYSTEM


document.addEventListener("DOMContentLoaded",()=>{


const banner =
document.getElementById(
"appDownloadBanner"
);


if(!banner) return;


// Always show when user enters

setTimeout(()=>{

banner.classList.add("show");

},1200);



window.hideAppBanner=function(){


banner.classList.remove("show");


};



window.downloadApp=function(){


// Replace later with your real APK link

window.location.href =
"SmartPath-AI.apk";


};



});
