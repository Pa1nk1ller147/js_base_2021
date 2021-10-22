/* Задание 1 */
// function getSquare(a){
//     return a**2
// }
// let result = getSquare(3);
// console.log(result);

/* Задание 2 */
// function sum(a, b){
// return a+b
// }
// let result = sum(3, 15);
// console.log(result);

/* Задание 3 */
// function calc(a, b, c){
// return (a - b)/c
// }
// let result = calc(20, 10, 2);
// console.log(result);

/* Задание 4   не заработало*/    
// function getDay(a){
//     if(a==1){
// return "Понедельник"
// }else if(a==2){
//     return "Вторник"
// }else if(a==3){
//     return "Среда"
// }else if(a==4){
//     return "Четверг"
// }else if(a==5){
//     return "Пяьница"
// }else if(a==6){
//     return "Суббота"
// }else if(a==7){
//     return "Воскресенье"
// }
// console.log(getDay(a))
// }
// getDay(2)
 
/* Задание 5 */
// let result = (a, b) => (a == b ? true : false);
// console.log(result(2,2)); 

/* Задание 6 */
// let result = (a, b) => ((a + b)>10 ? true : false);
// console.log(result(2,20)); 

/* Задание 7 */
// let result = (a) => (a<0 ? true : false);
// console.log(result(2)); 

/* Задание 8 */
// let isNumberInRange = (a) => (a>0 && a<10);
// console.log(isNumberInRange(-1)); 

/* Задание 9  выдаёт пустые скобки [] */
// let arr1 = [1, 4, 7, 14, 20, 34, 50]
// let arr2 = []
// let n = 0
// let isNumberInRange = (i) => (i>0 && i<10)
// for (let i of arr1) {
//     if(isNumberInRange(i) == true) continue;
//         arr2[n] == i
//         n += 1
//     }
// console.log(arr2)