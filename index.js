import { getPockemon, getPockemonList } from "./fetchPockemon.js";

const refs = {
  input: document.querySelector('[type="text"]'),
  button: document.querySelector("button"),
  container: document.querySelector(".container"),
};

let offset = 0;

// refs.button.addEventListener("click", onBtnClick);

// function onBtnClick() {
//   const inputValue = refs.input.value.toLowerCase().trim();
//   getPockemon(inputValue).then((data) => {
//     console.log(data);
//     const markup = `<div><p>${data.name}</p><img src="${data.sprites.other.dream_world.front_default}" alt="${data.name}"></div>`;
//     refs.container.innerHTML = markup;
//   });
// }

getPockemonList(offset).then((data) => {
  console.log(data);
  data.results.forEach((dataItem) => {
    getPockemon(dataItem.name).then((data) => {
      console.log(data);
      const markup = `<div><p>${data.name}</p><img src="${data.sprites.other.dream_world.front_default}" alt="${data.name}"></div>`;
      refs.container.insertAdjacentHTML("beforeend", markup);
    });
  });
});
const getNewPockemon =()=>{
    refs.container.innerHTML = '';
    offset += 5;
    getPockemonList(offset).then((data) => {
  console.log(data);
  data.results.forEach((dataItem) => {
    getPockemon(dataItem.name).then((data) => {
      console.log(data);
      const markup = `<div><p>${data.name}</p><img src="${data.sprites.other.dream_world.front_default}" alt="${data.name}"></div>`;
      refs.container.insertAdjacentHTML("beforeend", markup);
    });
  });
});
 }


refs.button.addEventListener('click',getNewPockemon)