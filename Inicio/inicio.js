let cerrar = document.querySelectorAll(".close")[0];
let cerrarL =document.querySelectorAll(".close_login")[0]

let abrir = document.querySelectorAll(".cta")[0];
let abrir1 = document.querySelectorAll(".cta")[1];
let abrir2 = document.querySelectorAll(".cta")[2];
let abrir3 = document.querySelectorAll(".cta")[3];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".container_modal")[0];
let modalCL = document.querySelectorAll(".container_modal_login")[0];
let abrir_hamburguer= document.querySelectorAll(".nav_toggle")[0]
let nav_mobile=document.querySelectorAll(".nav_mobile")[0]
abrir_hamburguer.addEventListener("click",()=>{
  nav_mobile.classList.toggle("nav_mobile_visibile")
})
let noterror =document.getElementById("inic")
if(noterror.classList.contains("cta")==true){
cerrarL.addEventListener("click" ,function(e){
  e.preventDefault();
  modalCL.classList.toggle("modal_close_login")
})
abrir.addEventListener("click" ,function(e){
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
{

}
function trabajando(){
 swal("Estamos trabajando en esta funcion", "pronto estara disponible", "warning")
}

function  updapteTotalComboPolloFrtio(){
  // let total=0;
  let shoppingTotal = document.getElementsByClassName('total_carrito')[0]
  let total=Number(document.getElementsByClassName('total_carrito')[0].textContent.replace("$",""))
  let priceCombo  =document.getElementsByClassName('precio_combo')[0].textContent.replace("$","")
 priceCombo  =priceCombo.replace(".","")
  priceCombo=Number(priceCombo)
  let quantityCombo = Number(document.getElementsByClassName('buton_cantidad')[0].value)
  total = total +priceCombo*quantityCombo
  shoppingTotal.innerHTML= `$${total}`
 }
