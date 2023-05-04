//TODO:===================================
    //Порахувати середню зарплатню співробітників і округлити число до сотих
//      const Israel = '1600$'
//      const Alexander = '2350$'
//      const Dustin = '1344$'

//      const sum = ((Number.parseInt(Israel) + Number.parseInt(Alexander) + Number.parseInt(Dustin)) / 3).toFixed(2)
// console.log(sum)
     
//TODO:===================================
    // Запитати у користувача "скільки апельсинів він хоче купити?",а потім вивести alert
    //"Користувач хоче купити <число> апельсинів!"
    
// console.log(1);
// const fruitsNumber = prompt("скільки апельсинів він хоче купити?");
// console.log(2);
// alert(`Користувач хоче купити ${fruitsNumber} апельсинів!`);


//TODO:===================================
  
       //Знайти в рядку слово 'spam' та замінити його на '@@@@'
const str = 'I gEt sO much sPam at wOrk.'

// console.log(str.toLowerCase().replace('spam', '@@@@'));
console.log(str.toLowerCase().slice(0, str.toLowerCase().indexOf('spam')));

// Вивести в консоль все що написано до слова 'spam'

//TODO:===================================
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /.
//  Якщо ні, додай до кінця значення link цей символ. Використовуй конструкцію if...else.

let link = 'https://my-site.com/about';

if(!link.endsWith("/")){
link+="/"
}
console.log(link);