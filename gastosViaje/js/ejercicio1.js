// ### Ejercicio 1: Calculadora de Gastos de Viaje

// **Objetivo:** Crear una calculadora que sume los gastos de alojamiento, alimentación y entretenimiento.

// **Instrucciones:**

// 1. Solicita al usuario que ingrese los gastos estimados para cada categoría mediante inputs.
// 2. Calcula el coste total sumando todos los gastos.
// 3. Muestra el coste total al usuario.

// **Ejemplo de entrada:**

// - Gastos de alojamiento: 200€
// - Gastos de alimentación: 150€
// - Gastos de entretenimiento: 100€

// **Salida esperada:** El coste total del viaje es 450€.

// Select input fields
let alojamiento = document.querySelector("#alojamiento");
let alimentacion = document.querySelector("#alimentacion");
let entretenimiento = document.querySelector("#entretenimiento");
let transporte = document.querySelector("#transporte");
let calcularBtn = document.querySelector("#calcular");
let resultado = document.querySelector("#resultado");

// Select the container
let containerBody = document.querySelector("#container");

// Create the paragraph only once
let mostrarTotal = document.createElement("p");

containerBody.appendChild(mostrarTotal); // Append it initially

// Event listener for calculating total
calcularBtn.addEventListener("click", (e) => {
  mostrarTotal.classList.add(
    "alert",
    "alert-primary",
    "mt-3",
    "text-center",
    "fw-bold",
    "fs-4"
  );
  // Parse input values (handle empty inputs with `|| 0`)
  let valueAlojamiento = parseFloat(alojamiento.value) || 0;
  let valueAlimentacion = parseFloat(alimentacion.value) || 0;
  let valueEntretenimiento = parseFloat(entretenimiento.value) || 0;
  let valueTransporte = parseFloat(transporte.value) || 0;

  // Calculate the total
  let total =
    valueAlojamiento +
    valueAlimentacion +
    valueEntretenimiento +
    valueTransporte;

  // Update the paragraph dynamically inside the event listener
  mostrarTotal.textContent = `El coste total del viaje es de ${total}€`;
  console.log(total);
});
