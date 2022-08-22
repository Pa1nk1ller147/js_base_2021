// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }

  // function checkAge(age) {
  //   return (age > 18) ? true : confirm
  // }

  // function checkAge(age) {
  //   console.log(age)
  //   return (age > 18) || confirm('Родители разрешили?');
  //   console.log(age);
  // }
  
  // checkAge(10)

  // let of = 'ecma';
  // if (of = 'ecma') {
  //   console.log('Правильно')
  // }else{
  //   console.log('Не знаете?')}

//   let result;
// result = (a + b < 4) ? 'Мало' : 'Много'

// let login = ('сотрудник');
// let message = (login == 'сотрудник') ? 'Привет' :
// (login == 'Директор') ? 'Здравствуйте' :
// (login == ' ') ? 'Нет логина' : ''
// console.log(message);

// let login = 'Cотрудник'
// let message = (login == 'Сотрудник') ? 'Привет' :
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина' :
//   '';
//   console.log(message)

// let message = ('noth');
// let login = 'Сотрудник'
// if (login == 'Сотрудник') {    
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
// console.log(message)

// let age = 10;
// if{
//   age<=14 ? console.log('popal') : console.log('nepopal');
// }else{
//   age>=90 ? console.log('popal') : console.log('nepopal');
// }

// for (let i=2; i<=10; i++){
//   if(i%2==0){
//     console.log(i);
//   }
// }
  

// let user = {}
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;
// console.log(user.name);

// let salaries = {
//   // John: 100,
//   // Ann: 160,
//   // Pete: 130
// }
// let sum = 0
// for (let key in salaries){
//   sum += salaries[key];
// }
// console.log(sum);

/* Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2. */
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// let a = 0
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
// let n = 1000
// let num = 0
// while (n>=50){
//   n=n/2
//   num++
// }
// console.log(n);
// console.log(num);

// Напечатать рядч исел 20 ввиде: 20 20 20 20 20 20 20 20 20 20. 
// let i=0
// for (i; i<10; i++ ){
//   console.log("20");
// }

// Напечатать числа следующим образом:10 10.411 11.4...25 25.4
// let a
// for (i=10; i<25; i++)
// console.log("%d %d.4\n", i , i);

// let a=10
// let b=a+(0.4)
// for (a; a<=25; a++){
// console.log(a, (a+0.4), "\n" );
// }

// Напечатать таблицу умножения на 7
// for(i=1; i<=9; i++){
//   console.log("i", "X", "7", "=", i*7);
// }


// Найти: 1.сумму всех целых чиселот 100 до 500; 
// 2.сумму всех целых чисел от a до b (значения a и b вводятсясклавиатуры; b>=a).
// let sum=0;
// for(i=100; i<=500; i++){
//   sum = sum + i
//   console.log(sum);
// }
// let sum=0;
// let a=100
// let b = 500
// for(i=a; i<=b; i++){
//   sum = sum + i
//   console.log(sum);
// }


// Даны натуральное число n и вещественные числа a1, a2, ..., an. 
// Определить среднееарифметическое вещественных чисел
let arr = [2, 5, 7, 3, 7, 2, 0, 5, 5, 16, 34, 23 ]
let n = 5
let sum = 0
for (a=0; a<n; a++){
  console.log("arr", arr[a]);
  sum = sum + arr[a]
  console.log("sum", sum);
  // ;
}
console.log("итог", sum/n)
