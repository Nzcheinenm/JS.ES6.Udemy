/**
 * МЕТОДЫ МАССИВОВ.
 */


// let arr = [1, 2, 3, 5, 8, 9, 10];
// let arrNew = [];
// arr.forEach((item) => {
//     if (item % 2 === 0) {
//         arrNew.push({ item: item, odd: true, });
//     } else {
//         arrNew.push({ item: item, odd: false, });
//     }
// });
// console.log(arrNew);




// let arr1 = [12, 4, 50, 1, 0, 1, 40];
// console.log(arr1.some(value => value === 0));





// let arr2 = ['yes', 'hello', 'no', 'easycode', 'what'];
// console.log(arr2.some(value => value.length > 3));





// let charInfo = [{
//         char: "a",
//         index: 12
//     },
//     {
//         char: "w",
//         index: 8
//     },
//     {
//         char: "Y",
//         index: 10
//     },
//     {
//         char: "p",
//         index: 3
//     },
//     {
//         char: "p",
//         index: 2
//     },
//     {
//         char: "N",
//         index: 6
//     },
//     {
//         char: " ",
//         index: 5
//     },
//     {
//         char: "y",
//         index: 4
//     },
//     {
//         char: "r",
//         index: 13
//     },
//     {
//         char: "H",
//         index: 0
//     },
//     {
//         char: "e",
//         index: 11
//     },
//     {
//         char: "a",
//         index: 1
//     },
//     {
//         char: " ",
//         index: 9
//     },
//     {
//         char: "!",
//         index: 14
//     },
//     {
//         char: "e",
//         index: 7
//     },
// ]




// const funcArr = (arr) => {
//     let arrNull = [];
//     const charObj = arr.reduce((acc, char) => {
//         acc[char.index] = char;
//         return acc;
//     }, arrNull);

//     let charArr1 = arrNull.map(char => {
//         return char.char;
//     });

//     let str = charArr1.join("");
//     return str;
// }



// const funcArr = (arr) => {
//     const copyArr = arr.slice();
//     const sortedArr = copyArr.sort((prev, next) => prev.index - next.index);
//     const strFromArr = sortedArr.reduce((acc, current) => {
//         return (acc += current.char);
//     }, '');
//     return strFromArr;
// }


// console.log(funcArr(charInfo));



// let arrArrays = [
//     [14, 25],
//     [1],
//     ['a', 'b', 'c']
// ];

// let arr = [1, 2, 3];

// const sortArray = arrArrays.sort((prev, next) =>
//     prev.length - next.length);

// console.log(sortArray);




// let arrayObj = [
//     { cpu: 'Intel', info: { cores: 2, cache: 3 } },
//     { cpu: 'Intel', info: { cores: 4, cache: 4 } },
//     { cpu: 'AMD', info: { cores: 1, cache: 1 } },
//     { cpu: 'Intel', info: { cores: 3, cache: 2 } },
//     { cpu: 'AMD', info: { cores: 4, cache: 2 } },
// ]

// arrNull = [];

// const arrayO = arrayObj.reduce((acc, obj) => {
//     acc[obj.info.cores] = obj;
//     return acc;
// }, {});

// console.log(arrayO);





let products = [
    { title: 'prod1', price: 5.2 },
    { title: 'prod2', price: 0.18 },
    { title: 'prod3', price: 15 },
    { title: 'prod4', price: 25 },
    { title: 'prod5', price: 18.9 },
    { title: 'prod6', price: 8 },
    { title: 'prod7', price: 19 },
    { title: 'prod8', price: 63 },
    { title: 'prod9', price: 21 },
]

const funcSortProd = (arr, low, higth) => {
    const prodSort = arr.filter(num => (num.price > low) && (num.price < higth));
    return prodSort;
}

console.log(funcSortProd(products, 15, 30));