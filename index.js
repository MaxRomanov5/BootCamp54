//Звернутися до елемента за допомогою класу,id та атрибуту
// Змінити йому textContent на 'Ми змінили текст'
//Змінити йому клас 'textClass' на 'text'
// Затоглити клас 'open'

// const elementEl1 = document.querySelector(".textClass");
// const elementEl2 = document.querySelector("#textId");
// const elementEl3 = document.querySelector("[data-info='textData']");

// console.log(elementEl1);
// console.log(elementEl2);
// console.log(elementEl3);

// elementEl1.textContent = "Ми змінили йому текст";
// elementEl1.classList.replace("textClass", "text");
// elementEl1.classList.toggle("open");
// elementEl1.classList.toggle("open");

// const countries = [{name: 'Tunisian Republic',population: 11818618,area:163610,borders: ['DZA','LBY']},
// {name: 'Virgin Islands',population: 30237,area:151,borders: []}
// ,{name: 'Montenegro',population: 621718,area:13812,borders: ['ALB','BIH','HRV','UNK','SRB']}
// ,{name: 'Federal Democratic Republic of Nepal',population: 29136808,area:147181,borders: ['CHN','IND']}
// ,{name: 'Republic of Indonesia',population: 273523621,area:1904569,borders: ['TLS','MYS','PNG']}
// ,{name: 'Republic of Rwanda',population: 12952209,area:26338,borders: ['BDI','COD','TZA','UGA']}
// ,{name: 'Bouvet Island',population: 0,area:49,borders: []}
// ,{name: 'Kingdom of Denmark',population: 5831404,area:43094,borders: ['DEU']}
// ,{name: 'Republic of Cameroon',population: 26545864,area:475442,borders: ['CAF','TCD','COG','GNQ','GAB','NGA']}
// ,{name: 'Republic of Nicaragua',population: 6624554,area:130373,borders: ['CRI','HND']}
// ,{name: 'Republic of El Salvador',population: 6486201,area:21041,borders: ['GTM','HND']}
// ,{name: 'Independent and Sovereign Republic of Kiribati',population: 119446,area:811,borders: []}
// ,{name: 'Commonwealth of Australia',population: 25687041,area:7692024,borders: []}
// ,{name: 'Réunion Island',population: 840974,area:2511,borders: []}
// ,{name: 'South Georgia and the South Sandwich Islands',population: 30,area:3903,borders: []}
// ,{name: 'Guam',population: 168783,area:549,borders: []}
// ,{name: 'Territory of the French Southern and Antarctic Lands',population: 400,area:7747,borders: []}
// ,{name: 'Kingdom of Morocco',population: 36910558,area:446550,borders: ['DZA','ESH','ESP']}
// ,{name: 'Republic of Guatemala',population: 16858333,area:108889,borders: ['BLZ','SLV','HND','MEX']}
// ,{name: 'Republic of India',population: 1380004385,area:3287590,borders: ['BGD','BTN','MMR','CHN','NPL','PAK']}
// ,{name: 'Kingdom of Saudi Arabia',population: 34813867,area:2149690,borders: ['IRQ','JOR','KWT','OMN','QAT','ARE','YEM']}
// ,{name: 'Principality of Andorra',population: 77265,area:468,borders: ['FRA','ESP']}
// ,{name: 'Commonwealth of the Bahamas',population: 393248,area:13943,borders: []}
// ,{name: 'Guiana',population: 254541,area:83534,borders: ['BRA','SUR']}
// ,{name: 'Kingdom of Spain',population: 47351567,area:505992,borders: ['AND','FRA','GIB','PRT','MAR']}
// ,{name: 'Kyrgyz Republic',population: 6591600,area:199951,borders: ['CHN','KAZ','TJK','UZB']}
// ,{name: 'Republic of Yemen',population: 29825968,area:527968,borders: ['OMN','SAU']}
// ,{name: 'State of Israel',population: 9216900,area:20770,borders: ['EGY','JOR','LBN','PSE','SYR']}
// ,{name: 'Macao Special Administrative Region of the People`s Republic of China',population: 649342,area:30,borders: ['CHN']}
// ,{name: 'Syrian Arab Republic',population: 17500657,area:185180,borders: ['IRQ','ISR','JOR','LBN','TUR']}
// ,{name: 'Republic of Iraq',population: 40222503,area:438317,borders: ['IRN','JOR','KWT','SAU','SYR','TUR']}
// ,{name: 'Republic of Albania',population: 2837743,area:28748,borders: ['MNE','GRC','MKD','UNK']}]

// Вивести на сторінку масив назв та площ країн
// Створити ul, задати йому класс list та додати на сторінку
// Для додавання країн використати insertAdjacentHTML
// Змінити колір тексту на червоний

// const list = document.createElement('ul');
// list.classList.add('list');
// document.body.prepend(list);
// list.style.color = 'red';
// let items = '';
// countries.forEach(contry => {
//   const item = `<li> <p class = "name"> ${contry.name} </p> <p class = "area"> ${contry.area} </p> </li>`;
//   items += item;
// });
// console.log(items);

// list.insertAdjacentHTML("afterbegin", items);

// // const firstElementChild = bodyElement.firstElementChild;

// //Країнам у назві яких є 'Republic' задати зелений колір

// const newList = [...list.children]
// console.log(newList);
// newList.forEach(element => {
//     element.firstElementChild.textContent.includes('Republic') ? element.style.color = "green" : "";

//     console.log(element.firstElementChild);
// });

// //Видалити всі країни площа яких менша за 300000

// newList.forEach(element => {
//   // console.log(element.querySelector('.area'));
//   const area = element.querySelector('.area');
//   console.log(+area.textContent);
//   if (+area.textContent < 300000) {
//     element.remove();
//   }
// })

//Повісити на кнопку слухач,який прикожному натисканні буде змінювати
//колір body на чорний,а колір тексту на білий

const refs = {
  button: document.getElementById("button"),
  input1: document.querySelector(".input1"),
  input2: document.querySelector(".input2"),
  form: document.querySelector("form"),
};

// refs.button.addEventListener("click", changeColor);
// const changeColor = (event) => {
// document.body.style.backgroundColor="black"
// document.body.style.color="white"
// }

// Створити кнопку і два інпути.При натисканні на кнопку
// текст всередині першого інпуту має перейти в другий інпут,
// а текст всередині другого в перший

// refs.button.addEventListener("click", (event) => {
//   const input1New = refs.input1.value;
//   refs.input1.value = refs.input2.value;
//   refs.input2.value = input1New;
// });

//Написати форму покупки,де буде три обовязкових поля ім'я,назва товару і кількість
//Всі три поля обов'язкові.
//Сабміт форми виводить обєкт з данними в консоль

// const onSubmit = (event) => {
//   event.preventDefault();
//   if (
//     itemsNumber.value === "" ||
//     name.value.length === 0 ||
//     !customerName.value
//   ) {
//     console.log(itemsNumber.value === "");
//     console.log(name.value.length === 0);
//     console.log(!customerName.value);
//     return;
//   }

//   const { itemsNumber, name, customerName } = event.target.elements;
//   console.log({
//     itemsNumber: itemsNumber.value,
//     name: name.value,
//     customerName: customerName.value,
//   });

//   event.target.reset();
// };

// refs.form.addEventListener("submit", onSubmit);
// let DRAW_PIXEL = 1;
// let DRAW_COLOR = 'black';

// const ourBody = document.body;
// const inputDrawSize = document.querySelector('[name="drawPx"]')
// const changeColorRef = document.querySelector(".color");

// changeColorRef.addEventListener('change', onChangeColor)

// function onChangeColor() {
//   // console.log(changeColorRef.value);
//   DRAW_COLOR = changeColorRef.value;
// }

// inputDrawSize.addEventListener('change', onChangeDrawSize)

// function onChangeDrawSize() {
//   DRAW_PIXEL = inputDrawSize.value
// }

// ourBody.style.height = "100vh";
// ourBody.addEventListener('mousedown', onClickDraw)  //1
// ourBody.addEventListener('mouseup', onCancelDraw) //4

// function onClickDraw() {
//   ourBody.addEventListener('mousemove', drawSquare) // 2
// }

// function onCancelDraw() {
//   ourBody.removeEventListener('mousemove', drawSquare) //5
// }

// function drawSquare(event) { // 3
//   // console.log(event, event.pageX, event.pageY);

//   const box = document.createElement('div');
//   box.style.position = 'absolute';
//   box.style.left = event.pageX + 'px';
//   box.style.top = event.pageY + 'px';
//   box.style.width = DRAW_PIXEL + 'px';
//   box.style.height = DRAW_PIXEL + 'px';
//   box.style.backgroundColor = DRAW_COLOR;

//   ourBody.append(box);
// }

//Склонувати форму за допомогою node.cloneNode(true)
const formClone = refs.form.cloneNode(false);

console.log(formClone);
