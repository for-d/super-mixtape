const jewel = document.querySelector(".jewel-case");

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/35;

const y=(window.innerHeight/2-e.clientY)/35;

jewel.style.transform=

`rotateX(${y}deg)

rotateY(${-x}deg)

`;

});
