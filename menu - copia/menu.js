
// // let abrir_hamburguer= document.querySelectorAll(".nav_toggle")[0]
// // let show_nav_mobile=document.querySelectorAll(".nav_ul_login_container")[0]
// // abrir_hamburguer.addEventListener("click",()=>{
// //   show_nav_mobile.classList.toggle("show_nav_login_container")
// //   // alert("hola")
// // })



// document.addEventListener('DOMContentLoaded', function() {
//   let buttons = document.querySelectorAll('button');

//   buttons.forEach(function(button){
//     button.addEventListener("click", function(event){
//       console.log("Botón presionado");
//       event.preventDefault();
//       event.stopPropagation();
//       let list = this.parentNode;
//       console.log(button.id);
//       const dates = list.querySelector("li").textContent;
//       let arrdates = dates.split("|");
//       console.log("Fechas: ", arrdates);
//       let ventana = window.open('', '', 'height=00,width=1000');
//         ventana.document.write('<html><head><title>Imprimir elemento</title>');
//         ventana.document.write('</head><body>');
//       arrdates.forEach(i => ventana.document.write(i,"</br>"));
//         ventana.document.write('</body></html>');
  
//         // Imprimir la ventana
//         ventana.print();
//         ventana.close();
//         console.log("Ventana cerrada");
//     });

//   });
// });


document.addEventListener('DOMContentLoaded', function() {
  let buttons = document.querySelectorAll('button');

  buttons.forEach(function(button){
    button.addEventListener("click", function(event){
      console.log("Botón presionado");
      event.preventDefault();
      event.stopPropagation();
      let list = this.parentNode;
      console.log(button.id);
      const lis = list.querySelectorAll("li");
      let dates=[]
      lis.forEach(li=>dates.push(li.textContent));
      let arrdates = []
      dates.forEach(x=>arrdates.push(x.split("|")));
      const dates1 =list.querySelector("p").textContent;
      let arrdates1=dates1.split("|")

      let ventana = window.open('', '', 'height=1000,width=400');
      ventana.location = "";
       ventana.document.write('<html><head><title>Imprimir elemento</title>');
        ventana.document.write('</head><body>');
      // arrdates.forEach(i => ventana.document.write(i.join(""),"</br>"));
      arrdates.forEach(i => i.forEach(x=>ventana.document.write(x,"<br>")));
      arrdates1.forEach(i => ventana.document.write(i,"</br>"));
      ventana.document.body.style.maxHeight="500px";
      html2canvas(ventana.document.body).then(canvas => {
        const img = canvas.toDataURL();
        ventana.document.write(`<img src="${img}" style="max-width:100%">`);
      });
        ventana.document.write('</body></html>');
  
        // Imprimir la ventana
        
        ventana.print("hola");
        ventana.close();
        console.log("Ventana cerrada");
    });

  });
});







































// document.addEventListener('DOMContentLoaded', function() {
//   let buttons = document.querySelectorAll('button');

//   buttons.forEach(function(button){
//     button.addEventListener("click", function(event){
//       console.log("Botón presionado");
//       event.preventDefault();
//       event.stopPropagation();
//       let list = this.parentNode;
//       console.log(button.id);
//       const dates = list.querySelector("li").textContent;
//       let arrdates = dates.split("|");
//       console.log("Fechas: ", arrdates);
//       let ventana = window.open('', '', 'height=1000,width=400');
//       ventana.location = "";
//       ventana.document.write('<html><head><title>Imprimir elemento</title>');
//         ventana.document.write('</head><body>');
//       arrdates.forEach(i => ventana.document.write(i,"</br>"));
//       ventana.document.body.style.maxHeight="500px";
//       html2canvas(ventana.document.body).then(canvas => {
//         const img = canvas.toDataURL();
//         ventana.document.write(`<img src="${img}" style="max-width:100%">`);
//       });
//         ventana.document.write('</body></html>');
  
//         // Imprimir la ventana
        
//         ventana.print("hola");
//         ventana.close();
//         console.log("Ventana cerrada");
//     });

//   });
// });