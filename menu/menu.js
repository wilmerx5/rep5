let cerrar = document.querySelectorAll(".close")[0];
let cerrarL =document.querySelectorAll(".close_login")[0]
let abrir = document.querySelectorAll(".cta")[0];
let abrir1 = document.querySelectorAll(".cta")[1];
let abrir2 = document.querySelectorAll(".cta")[2];
let abrir3 = document.querySelectorAll(".cta")[3];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".container_modal")[0];
let modalCL=document.querySelectorAll(".container_modal_login")[0];
let trabajandoo = document.getElementsByClassName('boton_precio')
for (c of trabajandoo){
  c.addEventListener("click" , trabajando);
}

abrir.addEventListener("click" ,function(e){
  e.preventDefault();
  modalCL.classList.toggle("modal_close_login")
})
cerrarL.addEventListener("click" ,function(e){
  e.preventDefault();
  modalCL.classList.toggle("modal_close_login")
})
abrir1.addEventListener("click" ,function(e){
  e.preventDefault();
  modalC.classList.toggle("modal_close")
})

cerrar.addEventListener("click", function(){
  modalC.classList.toggle("modal_close")
})
abrir2.addEventListener("click" ,function(e){
  e.preventDefault();
  modalCL.classList.toggle("modal_close_login")
})

abrir3.addEventListener("click", function(){
  modalC.classList.toggle("modal_close")
})

let abrir_hamburguer= document.querySelectorAll(".nav_toggle")[0]
let nav_mobile=document.querySelectorAll(".nav_mobile")[0]
abrir_hamburguer.addEventListener("click",()=>{
  nav_mobile.classList.toggle("nav_mobile_visibile")
})

function trabajando(){
 swal("Estas trabajando en esta funcion", "pronto estara disponible", "error")
}
