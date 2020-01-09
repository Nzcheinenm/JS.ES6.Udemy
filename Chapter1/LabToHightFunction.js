/**
 * ФУНКЦИИ ВЫСШЕГО ПОРЯДКА.
 */


// function firstFunc(arr, fn) {
//     return "New value: " + fn(arr);
// }


// function handler1(arr) {
//     for (let i in arr) {
//         let a = arr[i].split("");
//         a.unshift(a.shift().toUpperCase());
//         arr[i] = a.join("");
//     }
//     return arr.join("");
// }

// function handler2(arr) {
//     for (let i in arr) {
//         arr[i] = arr[i] * 10;
//     }
//     return arr;
// }

// function handler3(arr) {
//     let s = '';
//     let p = '';
//     let age = '';
//     let name = '';
//     for (let i of arr) {
//         for (let j in i) {
//             if (typeof i[j] === 'string') {
//                 name = i[j];
//             } else { age = i[j]; }
//             s = name + " is " + age;
//         }
//         p = s + ", " + p;
//     }
//     return p;
// }


// function handler4(arr) {
//     for (let i in arr) {
//         let a = arr[i].split("");
//         a.reverse();
//         arr[i] = a.join("");
//     }
//     arr.reverse();
//     return arr.join(", ");
// }


// console.log(firstFunc(['tylli', 'is', 'back'], handler1));
// console.log(firstFunc([10, 20, 30], handler2));
// console.log(firstFunc([{ age: 45, name: 'Jhon' }, { age: 35, name: 'Aaron' }], handler3));
// console.log(firstFunc(["123", "abc"], handler4));













function every(fn, val, indx, arr) {
    if (!Array.isArray(arr)) {
        return "Не массив";
    }

    if (typeof fn !== 'function') {
        return "Не функция";
    }

    return fn(val, indx, arr);

}

function firstFunc(val, indx, arr) {
    if (arr[indx] === val) {
        if (val > 5) {
            return true;
        } else {
            return false;
        }
    } else {
        return 'Что то не так ввели';
    }
}

console.log(every(firstFunc, 7, 3, [1, 2, 3, 7, 7, 8]));