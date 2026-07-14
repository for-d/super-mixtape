const jewel=document.querySelector(".jewel-case");

const lid=document.querySelector(".lid");

const disc=document.querySelector(".disc");

let abierta=false;

document.addEventListener("mousemove",(e)=>{

if(abierta)return;

const x=(window.innerWidth/2-e.clientX)/30;

const y=(window.innerHeight/2-e.clientY)/30;

jewel.style.transform=

`rotateX(${y}deg)
 rotateY(${-x}deg)`;

});

jewel.onclick=()=>{

abierta=!abierta;

if(abierta){

lid.style.transform="rotateY(-135deg)";

disc.style.transform="rotate(180deg)";

}else{

lid.style.transform="rotateY(0deg)";

disc.style.transform="rotate(0deg)";

}

};
