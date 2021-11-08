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


let a = 0
// if(a==0 || a==2){
//   console.log(a+7);
// }else{console.log(a/10);}

// let a = 3
// let b = 5
// if((a >2 && a <11)||(b>=6 && b<14)){
//   console.log("da");
// }else{
//   console.log("net");
// }

// let num = 'two'
// switch (num) {
//   case 'one': 
//   console.log('winter');
//   break;
//   case 'two':
//     console.log('spring');
//     break;
//     case 'three': 
//     console.log('summer');
//     break;
//     case 'fore': 
//     console.log('autumn');
//     break
//   }


// let day = 11
// if(day>0 && day<10){
//   console.log("I");
// }else if(day>=10 && day<20){
//   console.log("II");
// }else if(day>=20 && day<31){
//   console.log("III");
// }

/* Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки 
является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'. */
// let str = "abcde"
// str[1] == "a" ? console.log('da') : console.log('net')
// console.log(str[2]);


/*  Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является
 цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'. */
//  let nubs = "12345"
//  nubs[0] == 1 || nubs[0] == 2 || nubs[0] == 3 ? console.log('da') : console.log('net')

/* Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий. */
// let str = "479"
// let sum = +(str[0]) + +(str[1]) + +(str[2]) 
// console.log(sum);

/* Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех
 цифр. Если это так - выведите 'да', в противном случае выведите 'нет'. */
//  let str = "435246"
//  let sum1 = +(str[0]) + +(str[1]) + +(str[2]) 
//  let sum2 = +(str[3]) + +(str[4]) + +(str[5])
//  sum1 == sum2 ? console.log('da') : console.log('net'); 

/* Циклы while и for
Решите эти задачи сначала через цикл while, а затем через цикл for.*/
/*  Выведите столбец чисел от 1 до 100. */
// let a = 0
// while (a<=100){
//   console.log(a);
//   // a += 1
//   a++
// }

// let a = 11
// for (;a<=33;a++)
// console.log(a);

/*  Выведите столбец четных чисел в промежутке от 0 до 100. */
// let a = 0
// while (a<=100){
//   console.log(a);
//   a += 2
//   }

// let a = 0
// for (; a<=100; a++) {
//   if(a%2 !=0)continue
// console.log(a)
// }

/* С помощью цикла найдите сумму чисел от 1 до 100. */
// let a = 1;
// let sum = 0;
// while (a<=100){
//   sum = sum + a
//   a ++
// console.log(sum);
// }

// let b = 0;
// for (let a=1;a<=100; a++){
//   b = b+a
// }
// console.log(b);

/* Работа с for для массивов */
/*  Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран. */
// let arr = [1, 2, 3, 4, 5]
// for (let i=0;i<arr.length ;i++ ){
//   console.log(arr[i]);
// }

/* Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result. */
// let arr = [1, 2, 3, 4, 5]
// let sum = 0
// for (let i=0;i<arr.length ;i++ ){
//   sum = sum + arr[i]
//   console.log(sum);
// }

/* Задачи общие. */
/* Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10. */
// let arr = [2, 5, 9, 15, 0, 4]
// for (i=0; i<=arr.length; i++){
//   if(arr[i]>3 && arr[i]<10){
//     console.log(arr[i]);
//   }
// }

/* Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива. */
// let arr = [2, 5, 9, -15, 0, 4, -9]
// let sum = 0
// for (i=0; i<=arr.length; i++){
//   if(arr[i]>0){
//     sum = sum+arr[i]
//   }
//   console.log(sum);
// }

/* Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент 
со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо. */
// let arr = [1, 2, 5, 9, 4, 13, 8, 10]
// for (i=0; i<=arr.length; i++){
//   if(arr[i]===4){
//     console.log('est!');
//     break;
//   }
// }

/* Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5. */
// let arr = [10, 20, 30, 50, 235, 3000, 5000]
// for (i=0; i<=arr.length; i++){
//   a = String(arr[i])
//   if (a[0]==1 || a[0]==2 || a[0]==5) {
//      console.log(arr[i])
//       }
//   }

 /* Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9- */
//  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//  arrSt = '-'
//  for (i=0; i<arr.length; i++){
//   arrSt = arrSt + arr[i] + '-'}
//  console.log(arrSt);

/* Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным. */
// let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятнца', 'Суббота', 'Воскресенье']
// for (i=0; i<arr.length; i++){
//   if (arr[i] == 'Суббота'){
//     let a = arr[i].bold();
//     console.log(a);
//   }else if (arr[i] == 'Воскресенье'){
//     let b = arr[i].bold();
//     console.log(b);
//   }else{
//     console.log(arr[i]);
//   }
// }


/* Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Текущий день должен храниться в переменной day. */
// let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятнца', 'Суббота', 'Воскресенье']
// let day = 'Пятнца'
// for (i=0; i<arr.length; i++){
//   if(arr[i]== day){
//     let a = arr[i].italics()
//     console.log(a);
//   }else{
//     console.log(arr[i]);
//   }
// }


/* Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, 
необходимых для этого (итерация - это проход цикла), и запишите его в переменную num. */
let n = 1000
let num = 0
while (n>=50){
  n=n/2
  num++
}
console.log(n);
console.log(num);