// const countries = [
//   { name: "Republic of Benin", population: 12123198, area: 112622 },
//   { name: "Republic of Cuba", population: 11326616, area: 109884 },
//   { name: "Commonwealth of the Bahamas", population: 393248, area: 13943 },
//   {
//     name: "Virgin Islands of the United States",
//     population: 106290,
//     area: 347,
//   },
//   { name: "Ukraine", population: 44134693, area: 603500 },
//   { name: "Aruba", population: 106766, area: 180 },
//   { name: "Swiss Confederation", population: 8654622, area: 41284 },
//   { name: "Principality of Liechtenstein", population: 38137, area: 160 },
//   { name: "Union of the Comoros", population: 869595, area: 1862 },
//   { name: "Syrian Arab Republic", population: 17500657, area: 185180 },
//   { name: "Nation of Brunei, Abode of Peace", population: 437483, area: 5765 },
//   { name: "Country of Curaçao", population: 155014, area: 444 },
//   { name: "Bailiwick of Guernsey", population: 62999, area: 78 },
//   { name: "Republic of Liberia", population: 5057677, area: 111369 },
//   { name: "Japan", population: 125836021, area: 377930 },
//   { name: "Independent State of Samoa", population: 198410, area: 2842 },
//   { name: "Solomon Islands", population: 686878, area: 28896 },
//   { name: "Central African Republic", population: 4829764, area: 622984 },
//   { name: "Italian Republic", population: 59554023, area: 301336 },
//   { name: "Réunion Island", population: 840974, area: 2511 },
//   { name: "Togolese Republic", population: 8278737, area: 56785 },
//   { name: "Tunisian Republic", population: 11818618, area: 163610 },
//   { name: "Republic of China (Taiwan)", population: 23503349, area: 36193 },
//   {
//     name: "Democratic Republic of the Congo",
//     population: 108407721,
//     area: 2344858,
//   },
//   { name: "United Mexican States", population: 128932753, area: 1964375 },
//   {
//     name: "Lao Peoples Democratic Republic",
//     population: 7275556,
//     area: 236800,
//   },
//   { name: "Republic of Namibia", population: 2540916, area: 825615 },
//   { name: "Kingdom of Saudi Arabia", population: 34813867, area: 2149690 },
// ];

//Знайти сумарне населення всіх країн

// let total = 0;

// for (const country of countries) {
//     total += country.population;
//     }

//     console.log(total);

// Написати функцію для знаходження країни найбільшею площею.Функція має повертати назву країни.

// const largestArea = function (array) {
//   let largestCountry = array[0];
//   for (const country of array) {
//     if (country.area > largestCountry.area) {
//       largestCountry = country;
//     }
//   }
//   return largestCountry.name;
// };
// console.log(largestArea(countries));




// const classTutor = {

//   students: [{ name: 'kriss', grades: { math: 9, geography: 10, physics: 7 } },
//   { name: 'jane', grades: { math: 6, geography: 10, physics: 7 } },
//   { name: 'alex', grades: { math: 9, geography: 4, physics: 7 } },
//   { name: 'gregory', grades: { math: 12, geography: 12, physics: 12 } },
//   { name: 'steve', grades: { math: 11, geography: 8, physics: 6 } },
//   { name: 'julia', grades: { math: 4, geography: 9, physics: 6 } },],

//   // //Написати функцію,яка буде повертати масив всіх студентів
//   getStudents() {
//     return this.students;
//   },
//   // //Написати функцію,яка буде додавати студета до класу
//   addStudent(name, math, geography, physics) {
//     this.students.push({ name, grades: { math, geography, physics } })
//   },
//   // //Написати функцію,яка буде повертати середню оцінку студета.Якщо студент не знайдений,то повертає 'Cтудент не знайдений'
//   studentGrade(name) {
//     for (const student of this.students) {
//       if (name === student.name) {
//         return ((student.grades.math + student.grades.geography + student.grades.physics) / 3).toFixed(1);
//       }
//     }
//     return "Cтудент не знайдений";
//   },
//   // //Наисати функцію,яка буде повертати середню оцінку класу по певному предмету
//   objectGrade(object) {
//     let total = 0;
//     for (const student of this.students) {
//       total += student.grades[object];
//     }
//     return (total / this.students.length).toFixed(1);
//   },

//   // //Написати функцію,яки порахує середню оцінку всього класу по всім предметам
//   classGrade() {

//   }




// }



// console.log(classTutor.addStudent('loly', 3, 3, 5));
// console.log(classTutor.studentGrade('steve'));
// // console.log(classTutor.classGrade());
// console.log(classTutor.objectGrade('math'));
// console.log(classTutor.getStudents());




// /Написати фунцію,яка буде приймати аргументами два обєкта і повертати один.Ключі в обєктах однакові і
// треба щоб обирався в фінальний обєкт ключ,який має більше значення

// const newObject = function (object1, object2) {
  
//   let newObject = {...object1};

//   const keys = Object.keys(object1);
//   for (const key of keys) {
//     if (object1[key] < object2[key]) {
//       newObject[key] = object2[key];
//       }
//     }
//   return newObject;
// }



// console.log(newObject({a:1,b:8,c:2},{a:5,b:3,c:9}));
// console.log(newObject({a:5,b:1,c:6},{a:4,b:7,c:3}));


const countries = [
  { name: "Republic of Benin", population: 12123198, area: 112622 },
  { name: "Republic of Cuba", population: 11326616, area: 109884 },
  { name: "Commonwealth of the Bahamas", population: 393248, area: 13943 },
  {
    name: "Virgin Islands of the United States",
    population: 106290,
    area: 347,
  },
  { name: "Ukraine", population: 44134693, area: 603500 },
  { name: "Aruba", population: 106766, area: 180 },
  { name: "Swiss Confederation", population: 8654622, area: 41284 },
  { name: "Principality of Liechtenstein", population: 38137, area: 160 },
  { name: "Union of the Comoros", population: 869595, area: 1862 },
  { name: "Syrian Arab Republic", population: 17500657, area: 185180 },
  { name: "Nation of Brunei, Abode of Peace", population: 437483, area: 5765 },
  { name: "Country of Curaçao", population: 155014, area: 444 },
  { name: "Bailiwick of Guernsey", population: 62999, area: 78 },
  { name: "Republic of Liberia", population: 5057677, area: 111369 },
  { name: "Japan", population: 125836021, area: 377930 },
  { name: "Independent State of Samoa", population: 198410, area: 2842 },
  { name: "Solomon Islands", population: 686878, area: 28896 },
  { name: "Central African Republic", population: 4829764, area: 622984 },
  { name: "Italian Republic", population: 59554023, area: 301336 },
  { name: "Réunion Island", population: 840974, area: 2511 },
  { name: "Togolese Republic", population: 8278737, area: 56785 },
  { name: "Tunisian Republic", population: 11818618, area: 163610 },
  { name: "Republic of China (Taiwan)", population: 23503349, area: 36193 },
  {
    name: "Democratic Republic of the Congo",
    population: 108407721,
    area: 2344858,
  },
  { name: "United Mexican States", population: 128932753, area: 1964375 },
  {
    name: "Lao Peoples Democratic Republic",
    population: 7275556,
    area: 236800,
  },
  { name: "Republic of Namibia", population: 2540916, area: 825615 },
  { name: "Kingdom of Saudi Arabia", population: 34813867, area: 2149690 },
];

// Створити новий масив з країнами, де всі країни,які мають в назві два
//або більше слова, будуть мати в назві тільки останнє слово.

const countriesNew = [];
for (const country of countries) {
  let { name } = country;
  let countryNew = {
    ...country
  }
  if (name.split(" ").length > 1) {
    countryNew.name = name.split(" ")[name.split(" ").length - 1];
    countriesNew.push(countryNew);
    continue;
  }
  countriesNew.push(country);
}
console.log(countriesNew);