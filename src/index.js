import validator from "./validator.js";
// creo una cont la cual llamo button
//document permite interactuar con el DOM (Modelo de Objetos del Documento) para realizar
//tareas como la selección de elementos, nuestro elemento seria ("Button");
const button = document.getElementById("Button");

button.addEventListener("click", miFuncion);

function miFuncion(event) {
  event.preventDefault();

  // Obtener el valor del número de tarjeta ingresado
  const numeroTarjeta = document.getElementById("tarjeta").value;
  // Llamar a la función de validación de tarjeta
  const isValid = validator.isValid(numeroTarjeta);

  // Dentro de la función de validación de la tarjeta
  //mensaje de alerta si es valido o no
  if (isValid) {
    alert("La tarjeta es válida");
  } else {
    alert("La tarjeta es inválida");
  }
}

// se crea una variable llamada maskify se asigna el valor de la cadena de texto "########".
let nuevoValor = "########";
const maskify = prompt("Ingresa el nuevo valor para maskify:");
// if se agrega una declaracion llamada nuevo valor y luego le indicamos 
//que el nuevo valor es igual al maskify
if (nuevoValor) {
  nuevoValor = maskify;
}
// Asignar el nuevo valor a maskify
function doSomething(maskify) {
  nuevoValor = maskify
}

// Llamar a la función La función puede realizar cualquier tarea o
// cálculo específico que necesites en tu programa.
doSomething(nuevoValor);
