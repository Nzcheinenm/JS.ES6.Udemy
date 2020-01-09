/**
 * УСЛОВНЫЕ ОПЕРАТОРЫ.
 */

let value;


// if (value === 'hidden') {
//     value = 'visible';
// } else {
//     value = 'hidden';
// }



// value = 1;
// if (value === 0) {
//     value = 1;
// } else if (value < 0) {
//     value = 'less then zero';
// } else {
//     value *= 10;
// }




// let car = {
//     name: 'Lexus',
//     age: 10,
//     create: 2008,
//     needRepair: false
// };

// if (car.age < 2013) {
//     console.log('Need repair');
//     car.needRepair = true;
// } else {
//     car.needRepair = false;
// }




// let item = {
//     name: 'Intel core i7',
//     price: '100$',
//     discount: '15%'
// }

// if (item.discount) {
//     item.priceWithDiscount = parseInt(item.price) * (100 - parseInt(item.discount)) / 100;
//     console.log(item.priceWithDiscount);
// } else {
//     console.log(item.price);
// }






let product = {
    name: "Яблоко",
    price: "10$"
};

let min = 10;
let max = 20;


if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
    console.log(product.name);
} else {
    console.log('Товаров не найдено');
}

console.log(product);