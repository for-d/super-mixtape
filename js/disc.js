const disc=document.querySelector(".disc");

let discOutside=false;

disc.addEventListener("dblclick",()=>{

discOutside=!discOutside;

if(discOutside){

disc.classList.add("removed");

}

else{

disc.classList.remove("removed");

}

});
