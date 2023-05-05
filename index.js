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