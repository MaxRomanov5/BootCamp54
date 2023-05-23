//Написати повзунки зміни кольорів(RGB)
//Створити три інпути(range)  зі значеннями від 0 до 255(початкове значення 255)
// Створити об'єкт з ключами red, green,blue;
//Зробити так,щоб вони в реальному часі змінювали фоновий колір body


const inputForm = document.querySelector('#inputForm')

// console.log(inputForm);

const inputKeys = {
    red: 0,
    green: 0,
    blue: 0,
}

const inputUse = (event) => {
    
    inputKeys[event.target.name] = event.target.value
    console.log(inputKeys);
    document.body.style.backgroundColor = `rgb(${inputKeys.red}, ${inputKeys.green}, ${inputKeys.blue})`;

}

inputForm.addEventListener('input', inputUse)