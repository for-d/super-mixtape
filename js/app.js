const caja=document.querySelector(".case");

let abierta=false;

caja.addEventListener("click",()=>{

abierta=!abierta;

if(abierta){

caja.classList.add("open");

}else{

caja.classList.remove("open");

}

});

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*12;

const y=(e.clientY/window.innerHeight-.5)*-12;

caja.style.transform=

`rotateY(${x}deg) rotateX(${y}deg)`;

});
