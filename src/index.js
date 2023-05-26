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

// import { v4 as uuidv4 } from 'uuid';
import storage from './localstorage.js';

// // console.log(createId);
// const refs = {
//   addTask: document.querySelector('#addTask'),
//   input: document.querySelector('input'),
//   list: document.querySelector('ul'),
// };

// const taskAdder = evt => {
//   if (!refs.input.value) {
//     return;
//   }
//   const savedId = uuidv4();
//   refs.list.insertAdjacentHTML(
//     'beforeend',
//     `<li class="task" id = "${savedId}">
//       <span class="delete-task">-</span>${refs.input.value.trim()}
//     </li>`
//   );
//   const arr = storage.load('todolist') || [];
//   arr.push({ id: savedId, value: refs.input.value, completed: false });
//   storage.save('todolist', arr);
//   refs.input.value = '';
// };

// refs.addTask.addEventListener('click', taskAdder);

// //2
// // повісити слухач на список, який при натисканні на span буде
// // видаляти цілу таску зі списку та з localStorage
// // А при натисканні на таску буде додавати їй клас complete
// // та змінювати в localStorage значення ключа complete цього об'кту

// refs.list.addEventListener('click', (e) => {
//   const arr = storage.load('todolist');
//   if (e.target.nodeName === 'SPAN') {
//     const newArr = arr.filter(item => e.target.closest('.task').id !== item.id)
//     storage.save('todolist', newArr);
//     e.target.closest('.task').remove();
//   }
//   if (e.target.nodeName === 'LI') {
//     e.target.classList.add('complete');
//     const sortArr = arr.map(elem => {
//       if (elem.id === e.target.id) {
//         console.log({...elem, completed: !elem.completed});
//         return {...elem, completed: !elem.completed}
//       }
//       return elem;
//     })
//     storage.save('todolist', sortArr);
//    }

// })

// // 3
// // при онвленні сторінки відобразити вміст localStorage

// const taskList = storage.load('todolist');
// if(taskList){
//   const markUp = taskList.map((task) => {return `<li class="${task.completed ? 'complete task' : 'task'}" id = "${task.id}">
//   <span class="delete-task">-</span>${task.value}
// </li>`}).join('')
// refs.list.insertAdjacentHTML('afterbegin', markUp)
// }


// const fruitStorage = ['apple', 'banana', 'orange'];

// storage.save('fruits', fruitStorage);

// const newListFruit = JSON.parse(localStorage.getItem('fruits'))

// newListFruit.splice(1, 1);

// console.log(newListFruit);

// // localStorage.removeItem('fruits');

// storage.save('fruits', newListFruit);


const button = document.querySelector('button')
button.addEventListener('click', buttonClick )

function buttonClick () {
 const array = storage.load('fruits') || []
 array.push(1)
 console.log(array);
 storage.save('fruits', array)
} 





