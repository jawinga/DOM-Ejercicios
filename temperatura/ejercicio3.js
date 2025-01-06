// ### Ejercicio 3: Conversor de Temperatura

// **Objetivo:** Crear un conversor de temperaturas entre Celsius y Fahrenheit.

// **Instrucciones:**

// 1. Solicita al usuario que ingrese una temperatura en Celsius en un input.
// 2. Convierte la temperatura a Fahrenheit y muéstrala.
// 3. Solicita al usuario que ingrese una temperatura en Fahrenheit.
// 4. Convierte la temperatura a Celsius y muéstrala.

let fahrenBtn = document.querySelector("#fahrenheitBtn");
let celsiusBtn = document.querySelector("#celsiusBtn");
let celsiusInput = document.querySelector("#celsius");
let fahrenInput = document.querySelector("#fahrenheit");
let fahrenResultado = document.querySelector("#resultadoF");
let celsiusResultado = document.querySelector("#resultadoC");
let resetear = document.querySelectorAll(".resetear");

function celsiusFahrenheit(celsius) {
  let f = (celsius * 9) / 5 + 32;
  return f;
}

function fahrenheitCelsius(fahrenheit) {
  let c = ((fahrenheit - 32) * 5) / 9;
  return c;
}

fahrenBtn.addEventListener("click", (e) => {
  let celsius = celsiusInput.value;
  let fahren = celsiusFahrenheit(celsius);
  fahrenResultado.textContent = fahren.toFixed(2);
});

celsiusBtn.addEventListener("click", (e) => {
  let fahren = fahrenInput.value;
  let celsius = fahrenheitCelsius(fahren);
  celsiusResultado.textContent = celsius.toFixed(2);
});

resetear.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    let padreDiv = boton.closest("div"); // Get the closest div wrapper
    let resultSpan = padreDiv.querySelector(".resultado"); // Find the corresponding result

    celsiusInput.value = "";
    fahrenInput.value = "";

    if (resultSpan) {
      resultSpan.textContent = "--";
    }
  });
});
