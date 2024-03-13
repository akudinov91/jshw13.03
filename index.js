//Задача1.

// function generateRandomNumber(min, max, callback) {
//   const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//   callback(randomNumber);
// }

// function callbackFunction(number) {
//   console.log("Случайное число:", number);
// }

// generateRandomNumber(1, 100, callbackFunction);

//Задача2.

// function checkEven(number, callback) {
//   if (number % 2 === 0) {
//     callback(true);
//   } else {
//     callback(false);
//   }
// }

// function callbackFunction(result) {
//   console.log(result);
// }
// checkEven(13, callbackFunction);
// checkEven(6, callbackFunction);

//Задача3.

// const numbers = [9, -23, 1, -12, 4, -2, 66];

// const positiveNumbers = [];

// numbers.forEach((number) => {
//   if (number > 0) {
//     positiveNumbers.push(number);
//   }
// });

// console.log(positiveNumbers);
