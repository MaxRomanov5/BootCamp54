//написати функцію "дробовик"
//ми здійснюємо по кліку на кнопку постріл,але не частіше ніж у 2 секунди,бо потрібна перезарядка

// const buttonEl = document.querySelector('[type="button"]');

// function onButtonClick() {
//   console.log("Shoot");
// }
// buttonEl.addEventListener("click", _.throttle(onButtonClick, 2000));


//-------------------
//написати функцію,яка буде рахувати,скільки ми можемо безперервно(не більше 0.5секунд) натиснути на кнопку разів
const buttonEl = document.querySelector('[type="button"]');

let counter = 0;

buttonEl.addEventListener("click", (event) => {
    counter += 1;
    
});

buttonEl.addEventListener("click", _.debounce(quantityClick, 500));

function quantityClick() {
    console.log(`Ви клікнули ${counter} разів`);
    counter = 0;
}
