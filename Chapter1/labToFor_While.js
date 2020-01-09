/**
 * ЦИКЛЫ.
 */

let value = 'JavaScript is a pretty good language';
let str = '';

// for (let i = 0; i < value.length; i++) {
//     if (i === 0 && value[0] !== " ") {
//         str = str + value[0].toUpperCase();
//     } else {
//         if (value[i - 1] === " ") {
//             str = str + value[i].toUpperCase();
//         } else {
//             str = str + value[i];
//         }
//     }

// }





// for (let i = value.length - 1; i >= 0; i--) {
//     str = str + value[i];
// }





// let n = 4;
// let x = 1;

// for (let i = 1; i <= n; i++) {
//     x = x * i;
// }





// for (let i = 0; i < value.length; i++) {
//     if (i === 0 && value[0] !== " ") {
//         str = str + value[0].toUpperCase();
//     } else {
//         if (value[i] === " ") {} else if (value[i - 1] === " ") {
//             str = str + value[i].toUpperCase();

//         } else {
//             str = str + value[i];
//         }
//     }

// }





// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// for (let i of arr) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }






let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
}

for (let i in list) {
    if (typeof list[i] === 'string') {
        let s = list[i];
        list[i] = s.toUpperCase();
    }
}

console.log(list);