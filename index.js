//TODO:===================================
//Порахувати витрати компанії за квартал


// const firstq = [1500,1200,2000]
// const secondq = [100,1700,2500]
// const thirdq = [400, 900, 700]
// let sumTotal = 0;
// const sumArray = firstq.concat(secondq).concat(thirdq);

// for (const number of sumArray) {
//     sumTotal += number;
// }
// console.log(sumTotal);
// console.log(sumArray);



//Створити новий масив клієнтів,яких немає в чорному списку

// const oldClients = ["Mango", "Ajax", "Poly","Jane","Choti","Toni","Alex","David","John","Dorian"];
// const blackList = ["David","Mango","John", "Toni"];
// const clearClients = [];

// for (const client of oldClients) {
// if (!blackList.includes(client)) {
// clearClients.push(client);
// }
//     //console.log(client);
// }
// console.log(clearClients);




//TODO:===================================
//Переформатувати чергу так,щоб там були імена людей
// треба підставити імена в тому порядку,в якому вони знаходяться в масиві
// замість 'live' ьреба підставити одне ім'я,а замість elect треба два
// (тому що клієнти заздалегідь відправили документи)
// не можна використовувати push,shift

// const electronicTickets = ['live','elect','live','live','live','elect']
// const liveClient = ["Mango", "Ajax", "Poly","Jane","Choti","Toni"]
// const electronicClient = ["Alex", "David", "John", "Dorian"];

// for (const ticketType of electronicTickets) {
//     const index = electronicTickets.indexOf(ticketType);
//     console.log(ticketType);
//     if (ticketType === 'live') {
//         electronicTickets.splice(index, 1, liveClient[0]);
//         liveClient.splice(0, 1);
//     }
//     else if (ticketType === 'elect') {
//         electronicTickets.splice(index, 1, electronicClient[0], electronicClient[1]);
//         electronicClient.splice(0, 2);
//     }
// }
// console.log(electronicTickets);













//TODO:==========================
//Повернути відсортовану масив за зростанням

//не використовувати Array.prototype.sort()
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];


// for (let i of numbers) {
//    for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > numbers[i + 1]) {
//         let numberOne = numbers[i];
//         numbers[i] = numbers[i + 1];
//         numbers[i + 1] = numberOne;
//     }
    
// }
// }


// console.log(numbers);

// TODO:==========================
//Написати функцію розіграшу скидок в магазині Apple
//Вона приймає назву товару та його ціну,а повертає рядок
// 'Ваш <назва товару> буде коштувати <число> з урахуванням скидок!'
//доповнити функцію newPrice,щоб вона приймала ціну,генерувала рандомну скидку
// та повертала ціну з урахуванням скидки




// function newPrice(price){
// const randomNumber = (Math.random() * (10 - 1) + 1).toFixed(0)
// return price - price * randomNumber / 100
// }


// function saleApple(name,totalSpent){
    
//     return `Ваш ${name} буде коштувати ${newPrice(totalSpent)} з урахуванням скидок!`
// }

// console.log(saleApple('Iphone13',1000));
// console.log(saleApple('Iphone14ProMax',2000));
// console.log(saleApple('IphoneX',700));



// //TODO:==========================
//Написати функцію, яка буде перевіряти чи є в масиві 'лангуст' і повертати новий масив з ними.
//Якщо  в масиві є 'зіпсований', то функція повертає рядок 'В цьому в кошику є зіпсований лангуст'.
// Має бути паттерн раннє повернення


// function filterArray (arr){
//     let langust = [];
//     for (const fish of arr) {
//         if (fish === 'лангуст') {
//             langust.push(fish);
//             } else if (fish === 'зіпсований') {
//             return 'В цьому в кошику є зіпсований лангуст';
//              }
//     }
//     return langust;
        
// }

// console.log(filterArray(['лангуст','краб','лангуст','лангуст','краб','краб','лангуст','лангуст','лангуст','краб']));
// console.log(filterArray(['краб','зіпсований','лангуст','краб','лангуст','лангуст','краб','лангуст']));

// TODO:==========================
// Напишіть функцію, яка замінює регістр кожного символу
// у рядку на протилежний
// Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'
 console.log(changeCase('JavaScript'));

function changeCase(string){
   let words = '';
   let array = string.split('')
   for(let word of array){
    if(word === word.toLowerCase()){
      words = words + word.toUpperCase()
    } else {
        words += word.toLowerCase()
    }
   }

   return words
}
