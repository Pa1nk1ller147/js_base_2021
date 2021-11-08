/* 1. Преобразовать строку в массив слов */
// let str = 'Каждый охотник желает знать';
// function stringToarray(str) { 
//   let srtArr = str.split([" "]);      /* let srtArr = str.split([" "[4]]);  почему-то бьёт по буквам, хотя должен разбить на 4 слова */
//   return srtArr
// };
// let arr = stringToarray(str);    
// console.log(arr);


/* 2. Удаление указанного количества символов из строки */
// let str = 'Каждый охотник желает знать';
// function delete_characters(str, length) {
//     //     let delChar = str.substr(3,8);
//     return delChar;
// };
// let arr = delete_characters(str);    
// console.log(arr);


/* 3. Вставить тире между словами строки */
// var str = "HTML JavaScript PHP";
// function insert_dash(str) {
//     let ins = str.replace(/ /g, "-");
//     return ins;
// }
// console.log(insert_dash(str))

/* 4. Сделать первую букву строки прописной */
// var str = "string not starting with capital";  
// function cursive_letter(str) {
//     let big = str[0].toUpperCase() + str.slice(1);
//     return big
// }
// console.log(cursive_letter(str));


/* 5. Первая буква каждого слова заглавная */
// var str = "каждый охотник желает знать";   
// function capitalize(str) {
//     let strSplit = str.split([" "])
//     function (strSplit[0]) {
//         let big = str[0].toUpperCase() + str.slice(1);
//     return big
//     }
//     return strSplit
    
// }
// console.log(capitalize(str));


var str = "каждый охотник желает знать";
function capitalize(str) {
var newStr = "";
    newStr +=str[0].toUpperCase();
    for (let i = 1; i<str.length; i++){
            if (str[i] === " "){
                newStr += str[i];
                newStr += str[i+1].toUpperCase();
                i++;
            }else{
                newStr +=str[i];
            }
        }return newStr;
}
console.log(capitalize(str));

