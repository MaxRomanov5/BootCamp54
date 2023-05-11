//TODO:============================
//Написати функцію для банку, яка приймає три параметри:колбек,колбек,масив.
//Перша стрілочна функція буде виконуватись,якщо сума чисел в масиві більша або дорінює 0
// та поветрає рядок 'Користувач не боржник, сумма на його балансі <число>!'
//Друга  стрілочна функція буде виконуватись,якщо сума чисел в масиві менша 0
// та поветрає рядок 'Користувач винен банку <число>!'
//

function bankAdmin(functionDebtor, functionNotDebtor, array) {
  let sum = 0;
  array.forEach((value) => (sum += value));
  if (sum >= 0) {
   return functionNotDebtor(sum);
  } else {
    return functionDebtor(sum);
  }
}

function userDebtor(negativeSum) {
  return `Користувач винен банку ${negativeSum}!`;
}

function userNotDebtor(positiveSum) {
  return `Користувач не боржник, сума на його балансі ${positiveSum}!`;
}

console.log(bankAdmin(userDebtor, userNotDebtor, [100, 500, -700]));
console.log(bankAdmin([100, 500, -600]));
// console.log(bankAdmin([100, 500, -300, 600]));
