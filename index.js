//Запустити інтервал ,який щосекундно буде логувати поточний рахунок total
// Кнопка increment повинна кожну секунду збільшувати значення на 1,яке додається до total
// Кнопка decrement має кожну секунду зменшувати значення на 1,яке додається до total
//якщо total менше ніж -50 або більше ніж 50 інтервал видаляється

// const incrementButtonRef = document.querySelector(".increment");
// const decrementButtonRef = document.querySelector(".decrement");

// let total = 0;
// let count = 0;

// const intID = setInterval(() => {
//   total += count;
//   console.log(total);
//     if (total > 50 || total < -50) {
//       console.log('end');
//     clearInterval(intID);
//   }
// }, 1000);

// incrementButtonRef.addEventListener("click", () => {
//   count += 1;
// });

// decrementButtonRef.addEventListener("click", () => {
//   count -= 1;
// });

// Функція countWithDelay приймає 3 аргументи:
// 1) кількість секунд перед тим як спрацює ф-ція console.log
// 2) скільки разів має відпрацювати console.log
// 3) затримка між викликами ф-ції

// const countWithDelay = (delay = 0, times = 0, stepInterval = 0) => {
//   setTimeout(() => {
//       let quantity = 1;
//       console.log(quantity);

//     const intId = setInterval(() => {
//       quantity += 1;
//       console.log(quantity);
//       if (quantity === times) {
//         clearInterval(intId);
//       }
//     }, stepInterval);
//   }, delay);
// };

// countWithDelay(3000, 6, 1000);

// Функція startTimer повинна логувати кожен елемент масиву один раз на секунду.
// Коли черга дійде до останнього елемента масиву, продовжити логувати у зворотному порядку
// поки не дійде до першого елемента, потім зупинити процес.
// startTimer(["a", "b", "c", "d", "e", "f"]);
// function startTimer(arr) {
//   let i = -1;
//   const timerId = setInterval(() => {
//     i++;
//     console.log(arr[i]);
//     if (i === arr.length - 1) {
//       const reverseTimerId = setInterval(() => {
//         i--;
//         console.log(arr[i]);
//         if (i === 0) {
//           clearInterval(reverseTimerId);
//         }
//       }, 1000);
//       clearInterval(timerId);
//     }
//   }, 1000);
// }

// Створити з масиву об'єктів масив промісів
// і вивести в консоль той,що виконається швидше(всі)

const cars = [{name:'BMW',speed:300},{name:'Lanos',speed:400},{name:'Mersedes',speed:240},{name:'Bugatti',speed:250},{name:'Pagani',speed:220}];



const makePromise = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
  }); 
};

const newCars = cars.map((el) => {
    return makePromise(el.name, el.speed);
})

Promise.all(newCars)
  .then((fastestCar) => {
    console.log('Найшвидша машина:', fastestCar);
  })