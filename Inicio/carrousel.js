// let imagenes = ["carne.jpg","bagre.jpg" ,"costillas.jpg","menudencia.jpg"]
// let cont = 1;
//
// function carrousel (contenedor) {
//       contenedor.addEventListener ("click", e => {
//       let atras = contenedor.querySelectorAll(".boton_atras")
//       let adelante = contenedor.querySelectorAll(".boton_adelante")
//       let img = contenedor.querySelectorAll(".imagenes")
//       let tgt = e.target;
//
//       if (tgt == atras){
//         if(cont >0){
//         img.src = imagenes[cont -1];
//         cont--;
//         console.log(img)
//        }
//       else{
//         img.src =imagenes[imagenes.length -1];
//         cont = imagenes.length - 1;
//       }
//        } else if(tgt == adelante){
//         if(cont <imagenes.length-1){
//         img.src = imagenes[cont +1];
//         cont++;
//        }
//       else{
//         img.src =imagenes[0];
//         cont = 0
//       }
//        }
//     });
// }
//
// document.addEventListener("DOMcontentLoaded", () => {
//   let contenedor_conta = document.querySelectorAll(".carrousel_container")
//   carrousel(contenedor_conta)
// });
window.addEventListener("load", function(){
   let imagenes =[]
   imagenes[0]="../imagenes_carrucel/combo_frito.png"
   imagenes[1]="../imagenes_carrucel/combo_broaster.png"
   imagenes[2]="../imagenes_carrucel/chino_cuarto.jpg"
   imagenes[3]="../imagenes_carrucel/combo_paisa.jpg"
   imagenes[4]="../imagenes_carrucel/sobrebarriga.jpg"
   let descripciones=[]
   descripciones[0] ="COMBO DE POLLO FRITO"
   descripciones[1] ="COMBO DE POLLO BROASTER"
   descripciones[2] ="COMBO DE ARROZ CHINO CON CUARTO DE POLLO"
   descripciones[3] ="COMBO ARROZ PAISA"
   descripciones[4] ="SOBREBARRIGA AL HORNO O EN SALSA"

   let cont = 0
   let imagen = document.getElementById("imagen")
   let descripcion = document.getElementById("descripcion_imagen_carrousel")
   function carrousel(){
    imagen.src = imagenes[cont];
    descripcion.innerHTML = descripciones[cont]
    if (cont<4){
      cont++
    }
    else {
      cont=0
    }
  }
  setInterval(carrousel,3000);
});
