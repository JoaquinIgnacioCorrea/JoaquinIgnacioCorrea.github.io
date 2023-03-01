const botonmenu = document.querySelector("#botonmenu");
const menu = document.querySelector("#menu");

botonmenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
});

const botoncontacto1 = document.querySelector("#botoncontacto1");
const botoncontacto2 = document.querySelector("#botoncontacto2");
const contacto = document.querySelector("#contacto");

botoncontacto1.addEventListener("click", function(){
    contacto.classList.toggle("mostrarcontacto");
});

botoncontacto2.addEventListener("click", function(){
    contacto.classList.toggle("mostrarcontacto");
});