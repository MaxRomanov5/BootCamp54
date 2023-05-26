// // import {color} from './randomColor.js'
// const _ = require('lodash');
// import newColor from './randomColor.js'
// console.log(newColor);

// document.body.style.backgroundColor = newColor;

// const buttonEl = document.querySelector('[type="button"]');

// function onButtonClick() {
//   console.log("Shoot");
// }
// buttonEl.addEventListener("click", _.throttle(onButtonClick, 2000));

//написати to do list , який при онвленні сторінки буде зберігати значення

//Повісити слухач на +, який буде додавати таску в #tasks
//і localstorage та очищати input
// В localStorage додається об'єкт з ключами value,complete,id
//id генерується за допомогою uuid
//шаблон таски <li class="task"><span class="delete-task">-</span></li>

import { v4 as uuidv4 } from 'uuid';
import storage from './localstorage.js';

// console.log(createId);
const refs = {
  addTask: document.querySelector('#addTask'),
  input: document.querySelector('input'),
  list: document.querySelector('ul'),
};

const taskAdder = evt => {
  if (!refs.input.value) {
    return;
  }
  const savedId = uuidv4();
  refs.list.insertAdjacentHTML(
    'beforeend',
    `<li class="task" id = "${savedId}">
      <span class="delete-task">-</span>${refs.input.value.trim()}
    </li>`
  );
  console.log(storage.save);
  const arr = storage.load('todolist') || [];
  arr.push({ id: savedId, value: refs.input.value, completed: false });
  storage.save('todolist', arr);
  refs.input.value = '';
};

refs.addTask.addEventListener('click', taskAdder);
