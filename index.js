//написати функцію "дробовик"
//ми здійснюємо по кліку на кнопку постріл,але не частіше ніж у 2 секунди,бо потрібна перезарядка

// const buttonEl = document.querySelector('[type="button"]');

// function onButtonClick() {
//   console.log("Shoot");
// }
// buttonEl.addEventListener("click", _.throttle(onButtonClick, 2000));

//-------------------
//написати функцію,яка буде рахувати,скільки ми можемо безперервно(не більше 0.5секунд) натиснути на кнопку разів
// const buttonEl = document.querySelector('[type="button"]');

// let counter = 0;

// buttonEl.addEventListener("click", (event) => {
//     counter += 1;

// });

// buttonEl.addEventListener("click", _.debounce(quantityClick, 500));

// function quantityClick() {
//     console.log(`Ви клікнули ${counter} разів`);
//     counter = 0;
// }

// const recursion = () => {
//   console.log(1);
//   _.debounce(recursion(), 500);
// };

// const newRecursion = _.debounce(() => {
//   console.log(1);
//   newRecursion();
// }, 5000);
// newRecursion();


// const input = document.getElementById('validation-input');

// input.addEventListener('input', _.debounce(() => {
//     const expectedLength = Number(input.getAttribute('data-length'));
//     const enteredValue = input.value.length;

//     if (expectedLength === enteredValue) {
//         input.classList.remove('invalid');
//         input.classList.add('valid');
//     } else {
//         input.classList.remove('valid');
//         input.classList.add('invalid');
//     }
// }, 3000))

