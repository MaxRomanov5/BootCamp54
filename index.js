import { getPockemon, getPockemonList } from "./fetchPockemon.js";

const refs = {
  input: document.querySelector('[type="text"]'),
  prevButton: document.querySelector(".prev"),
  nextButton: document.querySelector(".next"),
  container: document.querySelector(".container"),
  loader: document.querySelector(".loader"),
};

let offset = 0;
let totalPokemons = 0;

// refs.button.addEventListener("click", onBtnClick);

// function onBtnClick() {
//   const inputValue = refs.input.value.toLowerCase().trim();
//   getPockemon(inputValue).then((data) => {
//     console.log(data);
//     const markup = `<div><p>${data.name}</p><img src="${data.sprites.other.dream_world.front_default}" alt="${data.name}"></div>`;
//     refs.container.innerHTML = markup;
//   });
// }

function loadPockemons() {
  refs.loader.classList.toggle("invisible");
  refs.container.classList.toggle("invisible");

  getPockemonList(offset)
    .then((data) => {
      console.log(data);
      totalPokemons = data.count;
      data.results.forEach((dataItem) => {
        getPockemon(dataItem.name).then((data) => {
          console.log(data);
          const markup = `<div class="container-item"><p class="item-name">${data.name}</p><img src="${data.sprites.front_default}" alt="${data.name}"></div>`;
          refs.container.insertAdjacentHTML("beforeend", markup);
        });
      });
    })
    .finally(() => {
      setTimeout(() => {
        refs.loader.classList.toggle("invisible");
        refs.container.classList.toggle("invisible");
      }, 500);
    });
}
loadPockemons();

const getNewPockemon = () => {
  refs.container.innerHTML = "";

  if (offset >= totalPokemons - 5) {
    offset = 0;
  } else {
    offset += 5;
  }

  console.log(offset);
  loadPockemons();
};

const onPrevBtnClick = () => {
  // if (offset === 0) {
  //   Notiflix.Notify.failure("Ви знаходитесь на першій сторінці!");
  //   return;
  // }

  if (offset <= 0) {
    offset = totalPokemons - 5;
  } else {
    offset -= 5;
  }

  refs.container.innerHTML = "";
  loadPockemons();
};

refs.prevButton.addEventListener("click", onPrevBtnClick);
refs.nextButton.addEventListener("click", getNewPockemon);
