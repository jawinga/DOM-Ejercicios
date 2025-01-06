let numeroInput = document.querySelector("#numeroInput");
let generarBtn = document.querySelector("#generarBtn");

generarBtn.addEventListener("click", (e) => {
  let inputValue = parseFloat(numeroInput.value) || 0;

  let numerosPrimos = [];

  if (num <= 1) return false; // Los números <=1 no son primos
  if (num <= 3) return true; // 2 y 3 son primos
  if (num % 2 === 0 || num % 3 === 0) return false; // Si es divisible por 2 o 3, no es primo

  for (let index = 1; index <= inputValue; index++) {
    if (index === 1) {
      console.log("El numero 1 no es primo");
    } else if (index === 2 || index === 3) {
      numerosPrimos.push(index);
      console.log(index + "Es primo");
    } else if (index % 2 === 0) {
    }
  }
});
