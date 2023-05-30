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
