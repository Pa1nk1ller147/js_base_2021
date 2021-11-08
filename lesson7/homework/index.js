/* Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины. */

// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// let vegetableLength = vegetables.map((e)=>e = e.length)
// console.log(vegetableLength); // 7,4,7,8

/* Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию
 currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции
  будет находиться сумма элементов массива numbers до этой позиции включительно. */

// let numbers = [2, 3, 5, 7, 11, 13, 17]
// let currentSums = (numbers) => {
//  let arr =[]
//  let res =[]
//   for (i=0; i<=numbers.length; i++){
//     arr.push(numbers[i])
//     res.push(arr.reduce((sum, current) => sum + current, 0))
//       }
//   return res
// }
// console.log(currentSums);
// // ваш код

// currentSums(numbers); // [2, 2+3, 2+3+5, 2+3+5+7, 2+3+5+7+11, 2+3+5+7+11+13, 2+3+5+7+11+13+17] = [ 2,5,10,17,28,41,58]


// let numbers = [2, 3, 5, 7, 11, 13, 17]
// let currentSums = (numbers) => {
//   let arr =[]
//   let sum = numbers.reduce((acum, current) => {
//     arr.push(acum);
//     return current+acum
//   })
//   arr.push(sum)
//   return arr
// }
// console.log(currentSums(numbers));


/* Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д. */
var arr = [0, 1, 2, 3, 4, 5, 6, 7];
// function sumSeven(numbers) {
  for (i=0, j=0; i<=arr.length, j<=arr.length; i++, j++){
    if((arr[i]+arr[j])=7){
      console.log(arr[i], ':', arr[j]);
    }else if((arr[i]+arr[j])!=7){
      console.log('не сработало');
    }
  }
  

