//Objectivo: Crea una app que simule el funcionamiento de la red social x mediante la publicación de tweets en el timeline.

// Instrucciones:

// 5. En la parte central, diseña un sistema de filtros, para poder buscar tweets por categorias

let tweetTitle = document.querySelector("#tweet-title");
let tweetCategory = document.querySelector("#tweet-category");
let tweetContent = document.querySelector("#tweet-content");
let publishTweet = document.querySelector("#publish-tweet");
let filterCategory = document.querySelector("#filter-category");
let tweetList = document.querySelector("#tweet-list");
let charCount = document.querySelector("#char-count");
let deleteTweet = document.querySelectorAll(".delete-tweet");

filterCategory.addEventListener("click", (e) => {});

tweetList.addEventListener("click", (e) => {
  // let tweetCard = e.target.closest(".col-12");
  // if (tweetCard) {
  //   tweetCard.remove();

  //   Swal.fire({
  //     title: "Tweet eliminado",
  //     icon: "success",
  //     text: "El tweet ha sido eliminado correctamente.",
  //     timer: 2000,
  //     showConfirmButton: false,
  //   });
  // }

  let tweetCard = e.target.parentElement.parentElement;
  tweetCard.remove();
  Swal.fire({
    title: "Tweet eliminado",
    icon: "success",
    text: "El tweet ha sido eliminado correctamente.",
    timer: 2000,
    showConfirmButton: false,
  });
});

publishTweet.addEventListener("click", (e) => {
  // 1. El usuario introducirá el título del tweet y su temática en imputs diferentes
  // 3. Tras darle al botón de publicar, se creará una carta en el TL y se borrarán los campos
  // 4. En el caso de intentar publicar algo sin datos en los inpus, saltará una alerta (utiliza sweetAlerts)

  let elementoCarta = document.createElement("div");

  tweetList.appendChild(elementoCarta);

  if (
    tweetTitle.value === "" ||
    tweetContent.value === "" ||
    tweetCategory.value === ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  } else {
    elementoCarta.innerHTML = `<div class="col-12">
            <div class="card shadow-sm">
              <div class="card-body">
                <h5 class="card-title">${tweetTitle.value}</h5>
                <span class="badge bg-primary mb-2">${tweetCategory.value}</span>
                <p class="card-text">
                ${tweetContent.value}
                </p>
                <button class="btn btn-danger btn-sm delete-tweet">
                  🗑️ Eliminar
                </button>
              </div>
            </div>
          </div>`;

    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });

    tweetTitle.value = "";
    tweetCategory.value = "";
    tweetContent.value = "";
  }
});

tweetContent.addEventListener("input", (e) => {
  // 2. Se mostrará un span con el número de letras que se escribe en el tweet

  let content = e.target.value;
  let countChar = content.length;
  console.log(countChar);
  charCount.textContent = `${countChar}`;

  if (countChar > 280) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = "";
  }
});
