const jewelCase = document.getElementById("jewelCase");

document.addEventListener("mousemove",(e)=>{

const x =
(e.clientX/window.innerWidth -0.5)*20;

const y =
(e.clientY/window.innerHeight -0.5)*20;

jewelCase.style.transform =
`rotateY(${x}deg) rotateX(${-y}deg)`;

});
