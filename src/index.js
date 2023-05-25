// import {color} from './randomColor.js'
const _ = require('lodash');
import newColor from './randomColor.js'
console.log(newColor);

document.body.style.backgroundColor = newColor;

const buttonEl = document.querySelector('[type="button"]');

function onButtonClick() {
  console.log("Shoot");
}
buttonEl.addEventListener("click", _.throttle(onButtonClick, 2000));