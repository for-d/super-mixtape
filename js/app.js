const caja=document.querySelector(".case");

const disco=document.querySelector(".disc");

let abierta=false;

let discoFuera=false;

caja.addEventListener("click",(e)=>{

if(e.target===disco)return;

abierta=!abierta;

if(abierta){

caja.classList.add("open");

}else{

caja.classList.remove("open");

disco.classList.remove("outside");

discoFuera=false;

}

});

disco.addEventListener("click",(e)=>{

e.stopPropagation();

if(!abierta)return;

discoFuera=!discoFuera;

if(discoFuera){

disco.classList.add("outside");

}else{

disco.classList.remove("outside");

}

});

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*12;

const y=(e.clientY/window.innerHeight-.5)*-12;

caja.style.transform=

`rotateY(${x}deg) rotateX(${y}deg)`;

});
