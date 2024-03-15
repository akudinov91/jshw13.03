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

//Задача 4.

// const keyValuePairs = [
//     ["key1", "value1"],
//     ["key2", "value2"],
//     ["key3", "value3"]
// ];

// const obj = {};

// keyValuePairs.forEach(pair => {
//     const key = pair[0];
//     const value = pair[1];
//     obj[key] = value;
// });

// console.log(obj);

//Задача 5.

// const stringsArray = ["Hello", "world", "hows", "gone?"];

// const lengthsArray = [];

// stringsArray.forEach((str) => {
//   lengthsArray.push(str.length);
// });

// console.log(lengthsArray);
