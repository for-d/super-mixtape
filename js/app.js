const caja = document.querySelector(".case");
const disco = document.querySelector(".disc");

let abierta = false;
let discoFuera = false;

// Abrir / cerrar caja
caja.addEventListener("click", (e) => {

    if (e.target === disco) return;

    abierta = !abierta;

    caja.classList.toggle("open", abierta);

    if (!abierta) {
        discoFuera = false;
        disco.classList.remove("outside");
    }

});

// Sacar / guardar CD
disco.addEventListener("click", (e) => {

    e.stopPropagation();

    if (!abierta) return;

    discoFuera = !discoFuera;

    disco.classList.toggle("outside", discoFuera);

});

// Movimiento 3D MUY suave
document.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5) * 18;
    const y = (e.clientY / window.innerHeight - 0.5) * -18;

    caja.style.transform =
        `rotateY(${x}deg) rotateX(${y}deg)`;

    // El CD se mueve un poquito independiente
    const dx = x * 0.35;
    const dy = y * 0.35;

    if (!discoFuera) {

        disco.style.transform =
            `translate(${dx}px, ${dy}px)`;

    }

});
