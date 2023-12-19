// ventana emergente
const botonCerrar = document.getElementById("cerrar");
const botonSalir = document.getElementById("salir");
const emergente = document.getElementById("emergente");



botonCerrar.addEventListener("click", () => {
    emergente.classList.add("close");
});



