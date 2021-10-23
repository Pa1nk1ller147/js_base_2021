// let num1 = 1;
// let num2 = num1;

// console.log(num1, num2);

// num1 = 2;

// console.log(num1, num2);

// const obj1 = {
//   name: "max",
// };
// const obj2 = obj1;
// console.log(obj1, obj2);

// obj1.name = "Ivan";

// console.log(obj1, obj2);

// const obj = {};

// obj.true = 1;       /* ttrue не обязательно, можно что-то другое.  */

// console.log(obj);

// const obj = {};

// console.log(obj);

// obj.age = "12";

// obj["name-user"] = "Ivan";

// console.log(obj);

// console.log(obj.age, obj["name-user"]);

// obj.age = "18";
// obj["name-user"] = "Max";

// console.log(obj);
// console.log(obj.age);

// delete obj.age;
// console.log(obj);
// console.log(obj.age);

// const obj = {
//   sayHi: function (name) {
//     console.log("Hi user", name);
//   },
// };

// obj.sayHi("Max");

// let obj = {};
// obj.name = "myFavoriteFilm";
// obj.profit = "100";
// obj.year = "2000";

// obj.getName = function () {
//   console.log(obj.name, obj.profit, obj.year);
//   //   delete obj.year;
//   //   console.log(obj);
// };

// obj.getName();
// console.log(obj);

// Реализовать функцию которая будет принимать числовой диапазон в качестве параметров
// [min, max] и будет возвращать случайное целое число из данного диапазона.
// const getRandomNumber = (min, max) => {
//   const rand = Math.random() * (max - min);
//   const result = min + rand;
//   console.log(result);
//   return Math.round(result);
// };

// console.log(getRandomNumber(1, 100));

// Реализовать функцию которая будет определять, в каком регистре записан n элемент
// переданной строки, если в верхнем то вернуть true, в противном случае вернуть false.
// const getRegistr = (str, n) => {
//   if (n > str.lenght) {
//     console.log("неверно");                     /* не работает */
//     return;
//   }
//   if (str[n] === str[n].toUpperCase()) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// getRegistr("Ivan LEHA", 3);

// Реализовать функцию которая заменяет в строке str, все вхождения
// подстроки find, на подстроку replace.
