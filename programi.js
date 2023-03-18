function mostrarMensaje(){
  console.log('Hicieron click en el botón'+ new Date().toLocaleTimeString())

}


//Agregar un eventListener a otro Boton 
//este metodo es mucho mejor y mas organizado

let boton=document.getElementById("otroBoton");

boton.addEventListener("click",()=>{console.log('Hicieron click en el botón')};