import getPockemon from "./fetchPockemon.js";

const refs = {
  input: document.querySelector('[type="text"]'),
  button: document.querySelector("button"),
  container: document.querySelector(".container"),
};

refs.button.addEventListener("click", onBtnClick);

function onBtnClick() {
  const inputValue = refs.input.value.toLowerCase().trim();
  getPockemon(inputValue).then((data) => {
    console.log(data);
    const markup = `<div><p>${data.name}</p><img src="${data.sprites.other.dream_world.front_default}" alt="${data.name}"></div>`;
    refs.container.innerHTML = markup;
  });
}

getPockemon("pikachu").then((data) => console.log(data));
