// app.js
function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir entre cero");
  }
  return a / b;
}

console.log("Suma 5 + 3:", suma(5, 3));
console.log("Resta 10 - 7:", resta(10, 7));
console.log("Multiplicación 4 x 6:", multiplicar(4, 6));
console.log("División 8 / 2:", dividir(8, 2));
