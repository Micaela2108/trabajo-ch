let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let decripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

function cargar(item){
mostrador.style.width = "60%";
seleccion.style.width = "40%";
seleccion.style.opacity = "1";
item.style.bolder = "2px solid #ecbddd";

imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

modeloSeleccionado.innerHTML = item.getElementsByTagName("p")[0].innerHTML;

decripSeleccionada.innerHTML = "descripción del modelo";

precioSeleccionado.innerHTML = item.getElementsByTagName("span")[0].innerHTML;
}