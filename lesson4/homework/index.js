/*  */

// let a = 5;
// let b = 15;
// let c = 3;

// if (a > b && a > c) {
//   console.log(a);
// } else if (a < b && a > c) {
//   console.log(b);
// } else if (a < b && b < c) {
//   console.log(c);
// }

// const temp = 4;
// if (temp < -30) {
//   console.log(-30, " = Оставайтесь дома!");
// } else if (temp <= -10) {
//   console.log("Сегодня холодно");
// } else if (temp <= 5) {
//   console.log("Не холодно");
// } else if (temp <= 15) {
//   console.log("Очень тепло");
// } else if (temp <= 25) {
//   console.log("Жарко");
// } else if (temp >= 35) {
//   console.log("Пекло");
// }

// switch ("user") {
//   case "admin":
//     console.log("самый главный");
//     break;
//   case "manager":
//     console.log("не такй главный");
//     break;
//   case "user":
//     console.log("ну такое");
//     break;
// }

// let year = 1;
// let n = 5
// for(;year <= n; year++){
// console.log("string")
// }

// let m=100;                   //автомобили
// let n=23;
// let days=0;
// while (m>=n){
//   m/=2;
//   days+=1;
// }
// console.log(days)

// let m=1800;       //високосные года
// let n=2000;
// for(m;m<=n;m=m+4){
//   console.log(m);
//   console.log(iters)

// }
// let m=1800; 
// let n=2000;
// let iters=0; 
// while(m<=n){
//   m+=4;
//   iters+=1;
// }
// console.log(iters-1);
// console.log(m-4)



/*                 Работа с if-else              */
// let a = -3;
// if (a === 0){
//   console.log('Верно')
// } else if(a != 0){
//   console.log('Неверно')
// } 

// let a = -1;
// if (a > 0) {
//     console.log('Верно')
//   } else if(a >= 0){
//     console.log('Неверно')
//   } else if(a <= 0){
//     console.log('Неверно')
//   }

// let a = 0;
// if (a < 0) {
//     console.log('Верно')
//   } else if(a >= 0){
//     console.log('Неверно')
//   } else if(a <= 0){
//     console.log('Неверно')
//   }

// let a = -1;
// if (a >= 0) {
//     console.log('Верно')
//   } else if(a < 0){
//     console.log('Неверно')
//   }

// let a = -1;
// if (a <= 0) {
//     console.log('Верно')
//   } else if(a > 0){
//     console.log('Неверно')
//   }

// let a = 0;
// if (a !== 0) {
//     console.log('Верно')
//   } else if(a === 0) {
//     console.log('Неверно')
//   }

// let a = "test";
// if (a === "test") {
//     console.log('Верно')
//   } else {
//     console.log('Неверно')
//   }

// let a = '2';
// if (a == 1) {
//     console.log('Верно')
//   } else {
//     console.log('Неверно')
//   }


/*              Работа с логическими переменными                 */
// let a = true;
// if (a == true){
//   console.log('Верно')
// } else {
// console.log('Неверно')
// }

// let a = ''
// a == true ? console.log('Верно') : console.log('Неверно')


// let a = 0;
// if (a != true){
//   console.log('Верно')
// } else {
// console.log('Неверно')
// }

// let a = 1
// a != true ? console.log('Верно') : console.log('Неверно')


/*                   Работа с && (и) и || (или)                         */
// const a = 1;
// const b = 1;
// a > 0 && a < 5 ? console.log('Верно') : console.log('Неверно')

// const a = 10;
// a == 0 || a == 2 ? console.log(a+7) : console.log(a/10)

// const a = 1;
// const b = 4;
// a <= 1 && b >=3 ? console.log(a+b) : console.log(a-b)

// const a = 3;
// const b = 4;
// (a > 2 || a <11) && (b >= 6 || b < 14) ? console.log('Верно') : console.log('Неверно')


/*             На switch-case                     */
// let num = 3;
// let result;
// switch (num) {
//   case 1:
//     result = 'Зима'
//     console.log(result);
//     break;
//   case 2:
//     result = 'Весна'
//     console.log(result);
//     break;
//   case 3:
//     result = 'Лето'
//     console.log(result);
//     break;
//   case 4:
//     result = 'Осень'
//     console.log(result);
//     break;
// }



/*                  Общие задачи              */
// let day = 12;
// let result;

// if(day >= 1 && day <11) {
//   result = '1 декада';
//   console.log(result);
// }
// if(day >=12 && day < 21) {
//   result = '2 декада';
//   console.log(result);
// }
// if(day >= 21 && day <=31) {
//   result = '3 декада';
//   console.log(result);
// }

// let month = 3;
// let result;

// if(month >= 1 && month <2 && month ==12) {
//   result = 'Зима';
//   console.log(result);
// }
// else if(month >=3 && month <=5) {
//   result = 'Весна';
//   console.log(result);
// }
// else if(month >=6 && month <=8) {
//   result = 'Лето';
//   console.log(result);
// }  
// else if(month >=9 && month <=11) {
//   result = 'осень';
//   console.log(result);
// }



/*  Дальше не успел сделать, доделаю в ближайшие пару дней.  */