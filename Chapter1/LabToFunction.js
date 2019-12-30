// function multiply(...arr) {
//     if (!arr[0]) {
//         console.log(0);
//         return 0;
//     } else {
//         let k = 1;
//         for (let i of arr) {
//             k = k * i;
//         }
//         console.log(k);
//         return k;
//     }
// }
// multiply(2, 3, 4);





// function revers(str) {
//     nullStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         nullStr = nullStr + str[i];
//     }
//     console.log(nullStr);
//     return nullStr;
// }
// revers("Hello");




// function getCodeStringFromText(str) {
//     nullStr = '';
//     for (let i of str) {
//         console.log(i);
//         nullStr = nullStr + i.charCodeAt() + " ";
//     }
//     console.log(nullStr);
//     return nullStr;
// }
// getCodeStringFromText("hello");






// function giftNumber(num) {
//     if (num > 10 && num < 0) {
//         console.log('Вы ввели что-то не то...');
//         return false;
//     } else {
//         let rand = Math.ceil(Math.random() * 10);
//         console.log('Число - ' + rand);
//         if (rand === num) {
//             console.log("Вы выиграли!0!");
//         } else {
//             console.log('Увы, но не сегодня');
//         }
//     }
// }
// giftNumber(3);








// function getArray(num) {
//     let k = 1;
//     let arr = [];
//     arr[num] = num;
//     for (let i = 1; i < arr.length; i++) {
//         arr[i] = i;
//     }
//     console.log(arr);
// }
// getArray(6);






// function doubleArray(arr) {
//     let arrNew = [];
//     let p = arr.length * 2;
//     arrNew[p - 1] = arr[arr.length - 1];
//     for (let i = 0; i < arrNew.length; i++) {
//         if (arr[i] === undefined) {
//             arrNew[i] = arr[i - arr.length];
//         } else {
//             arrNew[i] = arr[i];
//         }
//     }
//     console.log(arrNew);
// }
// doubleArray([1, 2, 3, 4]);


function doubleArray(arr) {
    return arr.concat(arr);
}
console.log(doubleArray([1, 2, 3, 4]));






// function changeCollection() {
//     for (let i in arguments) {
//         let arrNull = [];
//         let k = 1;
//         for (let j = 1; j < arguments[i].length; j++) {
//             if (j === 0) {
//                 continue;
//             } else {
//                 arrNull[j - 1] = arguments[i][k];
//                 k++;
//             }
//         }
//         arguments[i] = arrNull;
//     }
//     return arguments;
// }
// console.log(changeCollection([1, 2, 3, 4, 5], [2, 3, 4, 5]));


// function changeCollection() {
//     for (let i in arguments) {
//         arguments[i].shift();
//     }
//     return arguments;
// }
// console.log(changeCollection([1, 2, 3, 4, 5], [2, 3, 4, 5]));







// arr = [{
//         name: "Denis",
//         age: "29",
//         gender: "male"
//     },

//     {
//         name: "Sergey",
//         age: "19",
//         gender: "male"
//     },

//     {
//         name: "Tanya",
//         age: "20",
//         gender: "female"
//     },

//     {
//         name: "Vasya",
//         age: "23",
//         gender: "male"
//     },
// ]


// function funcGetUsers(arr, pole, count) {
//     let arrNull = [];
//     let j = 0;
//     for (let i in arr) {
//         if (arr[i][pole] !== count) {
//             continue;
//         } else {
//             arrNull[j] = arr[i];
//             j++;
//         }
//     }
//     console.log(arrNull);
//     return arrNull;
// }
// funcGetUsers(arr, "gender", "male");