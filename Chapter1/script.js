/**
 * ДЕСТРУКТУРИЗАЦИЯ.
 */

/* 
 * Задание 1. 
 */

function func(...arr) {
    const [first, ...argum] = arr;
    return {
        'first': first,
        'other': argum
    }
}

console.log(func('a', 'b', 'c', 'd'));




/* 
 * Задание 2. 
 */

const organisation = {
    name: 'Google',
    info: {
        employees: ['Vlad', 'Olga'],
        partners: ['Microsoft', 'Facebook', 'Xing']
    }
};


function getInfo(obj) {
    const { name = "Unknown", info: { employees, partners: [part1, part2] } } = obj;
    console.log("Name: " + name);
    console.log("Patners: " + part1 + " " + part2);
}

getInfo(organisation);