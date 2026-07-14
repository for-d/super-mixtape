const jewel = document.querySelector(".jewel-case");
const lid = document.querySelector(".lid");

let open = false;

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/35;

const y=(window.innerHeight/2-e.clientY)/35;

if(!open){

jewel.style.transform=

`rotateX(${y}deg)
 rotateY(${-x}deg)`;

}

});

jewel.addEventListener("click",()=>{

open=!open;

if(open){

lid.style.transform="rotateY(-120deg)";

}else{

lid.style.transform="rotateY(0deg)";

}

});
