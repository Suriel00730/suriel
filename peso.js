let numero1 = document.querySelector(".numero1");
let numero2 = document.querySelector(".numero2");
let boton = document.querySelector(".boton");
let resultado = document.querySelector(".resultado");
let opciones = document.querySelector("#opciones");
let valorDeOperacion;

/*
// snake case
valor_suma

// Cameon case
valorSuma
*/

function suma() {
  valorDeOperacion = parseInt(numero1.value) + parseInt(numero2.value);
  // console.log(`La suma es igual a:  ${valorDeOperacion}`);
  resultado.innerText = "La suma es igual a: " + valorDeOperacion;
}
function resta() {
  valorDeOperacion = parseInt(numero1.value) - parseInt(numero2.value);
  // console.log(`La resta es igual a:  ${restaValor}`);
  resultado.innerText = "La Resta es igual a: " + valorDeOperacion;
}
function multiplicacion() {
  valorDeOperacion = parseInt(numero1.value) * parseInt(numero2.value);
  //   console.log(`La multiplicacion es igual a:  ${multiplicacionValor}`);
  resultado.innerText = "La multiplicacion es igual a: " + valorDeOperacion;
}

boton.addEventListener("click", () => {
  if (opciones.value === "suma") suma();
  if (opciones.value === "resta") resta();
  if (opciones.value === "multiplicacion") multiplicacion();
});
