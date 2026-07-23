document.addEventListener("DOMContentLoaded",()=>{

const cards=document.querySelectorAll(".card,.price,.gallery img");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},{threshold:.2});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition="0.8s";

observer.observe(card);

});

const images=document.querySelectorAll(".gallery img");

images.forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.top="0";
overlay.style.left="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.95)";
overlay.style.display="flex";
overlay.style.justifyContent="center";
overlay.style.alignItems="center";
overlay.style.zIndex="9999";

const photo=document.createElement("img");

photo.src=img.src;
photo.style.maxWidth="90%";
photo.style.maxHeight="90%";
photo.style.borderRadius="20px";
photo.style.boxShadow="0 0 40px #b95cff";

overlay.appendChild(photo);

overlay.onclick=()=>overlay.remove();

document.body.appendChild(overlay);

});

});

const hero=document.querySelector("header");

window.addEventListener("scroll",()=>{

hero.style.backgroundPositionY=window.scrollY*0.4+"px";

});

});
