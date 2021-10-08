const stringValue = "код";
const stringValue2 = "кот";
console.log(typeof stringValue2>stringValue ); // думал, кот будет больше, чем код, т.к. т по алфавиту позднее идёт, но пишет наоборот//
//* "2" + 2 * "2"// 
console.log("2" + 2 * "2" ); //результат 24, т.к. при раскрытии кавычек цифры объединяются, как символы в строке. После к ним добавляется 2.//
console.log(undefined == null ) //равны друг другу, т.к. не строгое сравнение, не равны никаким другим значениям
console.log(undefined != null ) // ! значит не равно
console.log(null == 0 )// false, не понял почему
console.log(2 > "3" )// false, т.к. при преобразовании кавычки уйдут
console.log(null - false + true )// 1, т.к. 0-0+1
console.log(1 / "l")//NaN, т.к. число детился на строку
console.log("2" * "3" )// 6, т.к. кавычки уйдут
console.log(4 + 5 + "0")//90, 4 и 5 суммируются, а 0 просто добавится
console.log("l" + 4 + 5 )// 145, полгаю, т.к. кавычки идут впереди, в тличие от предыдущего примера порядо действий иной
console.log("4" - 2 )//2? хз
console.log("4" - "4x")// NaN, т.к. вычитается нечисло из числа
console.log("23" == 23)
console.log(null == false )
console.log(" -4 "/ 0 + 1 )// -Infinity
console.log(null + 1 )//1
console.log(undefined + null)// nan
console.log(1 === "1")// false, строгое сравнение разных типов
console.log("2" > 10)// false
console.log(NaN == undefined)// false, тк.к могли сравниться при использовании других операторов сравнения.

