/**
 * ТЕРНАРНЫЕ ОПЕРАТОРЫ.
 */

let value = 2;

// switch (value) {
//     case 'block':
//         console.log('block');
//         break;
//     case 'none':
//         console.log('none');
//         break;
//     case 'inline':
//         console.log('inline');
//         break;
//     default:
//         console.log('other');
//         break;
// }


// value === 'hidden' ? value = 'visible' : value = 'hidden';

value === 0 ? value = 1 : value < 0 ? value = 'less then zero' : value *= 10;


console.log(value);