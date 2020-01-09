/**
 * ЗАМЫКАНИЯ.
 */

/* 
 * Задание 1. 
 */

function minus(num1 = 0) {
    return function(num2 = 0) {
        return num1 - num2;
    }
}
const min = minus(10)();
console.log(min);




/* 
 * Задание 2. 
 */

function multiplyMaker(num1) {
    let rez = num1;
    return function(num2) {
        return rez = rez * num2;
    }
}

const multi = multiplyMaker(2);
console.log(multi(2)); // 4
console.log(multi(1)); // 4
console.log(multi(3)); // 12
console.log(multi(10)); // 120





/* 
 * Задание 3. 
 */

const module = {
    str: "",
    setStr(arr = "") {
        this.str = arr;
    },
    getStr() {
        return this.str;
    },
    getLength() {
        return this.str.length;
    },
    getReverse() {
        return this.str.split("").reverse().join("");
    }
}

module.setStr('avdcd');
console.log(module.getStr());
console.log(module.getLength());
console.log(module.getReverse());
console.log(module.getStr());





/* 
 * Задание 4. 
 */


const moduleCanc = {
    num: 0,
    setNum(num = 0) {
        this.num = num;
        return this;
    },
    add(num1) {
        this.num += num1;
        return this;
    },
    minus(num1) {
        this.num -= num1;
        return this;
    },
    step(num1) {
        this.num = this.num ** num1;
        return this;
    },
    getNum() {
        console.log(this.num.toFixed(2));
        return this;
    }
}

moduleCanc.setNum(2).step(2).add(5).minus(3).getNum();