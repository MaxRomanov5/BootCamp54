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

const oldClients = ["Mango", "Ajax", "Poly","Jane","Choti","Toni","Alex","David","John","Dorian"];
const blackList = ["David","Mango","John", "Toni"];
const clearClients = [];

for (const client of oldClients) {
if (!blackList.includes(client)) {
clearClients.push(client);
}
    //console.log(client);
} 
console.log(clearClients);