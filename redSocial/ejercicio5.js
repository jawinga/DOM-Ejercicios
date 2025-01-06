//Objectivo: Crea una app que simule el funcionamiento de la red social x mediante la publicación de tweets en el timeline.

// Instrucciones:

// 1. El usuario introducirá el título del tweet y su temática en imputs diferentes
// 2. Se mostrará un span con el número de letras que se escribe en el tweet
// 3. Tras darle al botón de publicar, se creará una carta en el TL y se borrarán los campos
// 4. En el caso de intentar publicar algo sin datos en los inpus, saltará una alerta (utiliza sweetAlerts)
// 5. En la parte central, diseña un sistema de filtros, para poder buscar tweets por categorias

let tweetTitle = document.querySelector("#tweet-title");
let tweetCategory = document.querySelector("#tweet-category");
let tweetContent = document.querySelector("#tweet-content");
let publishTweet = document.querySelector("#publish-tweet");
let filterCategory = document.querySelector("#filter-category");
let tweetList = document.querySelector("#tweet-list");

publishTweet.addEventListener("click", (e) => {
  // 1. El usuario introducirá el título del tweet y su temática en imputs diferentes

  let titulo = tweetTitle.value;
  let categoria = tweetCategory.value;
});
