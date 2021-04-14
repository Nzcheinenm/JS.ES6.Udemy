// Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.
console.clear();
// Создать объект с полем product, равным ‘iphone’
object = {
  product: "iphone",
};

// Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
object.price = 1000;
object.currency = "dollar";

// Добавить поле details, которое будет содержать объект с полями model и color
object.details = {
  model: "",
  color: "",
};

console.log(object);

// Создать произвольную переменную, присвоеть ей значение и написать условие, если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let a = "";
a == "hidden" ? (a = "visible") : (a = "hidden");

// Создать переменную и присвойте ей число.
// Используя if, записать условие:
// - если переменная равна нулю, присвоить ей 1;
// - если меньше нуля - строку “less then zero”;
// - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
let b = -2;
if (b == 0) {
  b = 1;
} else if (b < 0) {
  b = "less then zero";
} else {
  b = b * 10;
}
console.log(b);

// Дан объект
let car = {
  name: "Lexus",
  age: 10,
  create: 2008,
  needRepair: false,
};
// Написать условие если возраст машины больше 5 лет то нужно вывести
// в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
if (car.age > 5) {
  console.log("Need repair");
  car.needRepair = true;
} else {
  car.needRepair = false;
}

// Дан объект
let item = {
  name: "Intel core i7",
  price: "100$",
  discount: "15%",
};

// Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть
// поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount
// и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount
//  и price это строки и вам из них нужно получить числа чтобы выполнить расчет.
//   иначе если поля discount нет то вывести просто поле price в консоль.

if (
  (item.discount != undefined && item.discount != NaN) ||
  (item.price != undefined && item.price != NaN)
) {
  item.priceWithDiscount =
    parseInt(item.price) -
    (parseInt(item.price) * parseInt(item.discount)) / 100;
  console.log(item.priceWithDiscount);
} else if ((item.discount = undefined)) {
  console.log(item.price);
}

// Дан следующий код:

let product = {
  name: "Яблоко",
  price: "10$",
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена

// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль
// название этого товара, иначе вывести в консоль что товаров не найдено.
if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
  console.log(product.name);
} else {
  console.log("No find product");
}

// Вопросы к этому заданию
// Записать в виде switch case следующее условие:

if (a === "block") {
  console.log("block");
} else if (a === "none") {
  console.log("none");
} else if (a === "inline") {
  console.log("inline");
} else {
  console.log("other");
}

switch (a) {
  case "block":
    console.log("block");
    break;
  case "none":
    console.log("none");
    break;
  case "inline":
    console.log("inline");
    break;
  default:
    console.log("other");
    break;
}

function multiply(...arr) {
  if (arr.length == 0) {
    console.log("Нет данных");
    return 0;
  }
  let k = 1;
  for (var i = 0; i < arr.length; i++) {
    k *= arr[i];
  }
  console.log(k);
  return k;
}

multiply(2, 4, 5, 6);
multiply();

function reverseString(str) {
  if (str == null || str.length === 0 || str == undefined) {
    return "nothing";
  }
  let reverse = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  console.log(reverse);
  return reverse;
}

reverseString("test");
reverseString("");
reverseString(null);
reverseString(undefined);
reverseString();

// На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
// будут в верхнем регистре. Использовать for или while.
var str = "i am in the easycode";
var strUpperCase = "";
var i = 0;
while (i < str.length) {
  if (i === 0) {
    strUpperCase += str[i].toUpperCase();
    i++;
    continue;
  }
  if (str[i - 1] == " ") {
    strUpperCase += str[i].toUpperCase();
    i++;
    continue;
  }
  strUpperCase += str[i];
  i++;
}
console.log(strUpperCase);

// Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш
// (то есть последняя буква становится первой, предпоследняя - второй итд).
var strReverse = "",
  str = "tseb eht ma i";

for (var i = str.length - 1; i >= 0; i--) {
  strReverse += str[i];
}
console.log(strReverse);

// Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
var n = 10;
var fact = 1;
for (var i = 0; i <= n; i++) {
  if (i >= 1) {
    fact *= i;
  }
}
console.log(fact);

// На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
var str = "JavaScript is a pretty good language";
var strUpperCase = "";
var i = 0;
while (i < str.length) {
  if (i === 0) {
    strUpperCase += str[i].toUpperCase();
    i++;
    continue;
  }
  if (str[i - 1] == " ") {
    strUpperCase += str[i].toUpperCase();
    i++;
    continue;
  }
  if (str[i] == " ") {
    i++;
    continue;
  }
  strUpperCase += str[i];
  i++;
}
console.log(strUpperCase);

// Найти все нечетные числа в массиве от 1 до 15 включительно
// и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (var k of arr) {
  console.log(k);
}

// Дан объект:

let list = {
  name: "denis",
  work: "easycode",
  age: 29,
};
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
for (let k in list) {
  if (typeof list[k] === "string") {
    list[k] = list[k].toUpperCase();
  }
}
console.log(list);

// Функция , что парсит каждый символ
function getCodeStringFromText(str) {
  let k = "";
  for (let i = 0; i < str.length; i++) {
    k += str.charCodeAt(i) + " ";
  }
  k.trim(k);
  return k;
}

console.log(getCodeStringFromText("hello"));

// Функция, что выводит массив элементов по возрастанию  от 1 до n
function getArray(num) {
  let arr = [];
  for (let i = 0; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(getArray(10));
getArray(10);

// Функция, что возвращает дублированный массив
function doubleArray(arr) {
  return arr.concat(arr);
}
doubleArray([1, 2, 3]); // [1,2,3,1,2,3]
console.log(doubleArray([1, 2, 3]));

// 1 Task to Callback
function firstFunc(arr, fn) {
  let str = "";
  for (let k in arr) {
    str += fn(arr[k]);
  }
  return "New Value: " + str;
}

function handler1(el) {
  let str = "";
  for (let k in el) {
    if (k == 0) {
      str += el[k].toUpperCase();
      continue;
    }
    str += el[k];
  }
  return str;
}

console.log(firstFunc(["my", "name", "is", "Trinity"], handler1));

function handler2(el) {
  el = el * 10;
  return el + ", ";
}

console.log(firstFunc([10, 20, 30], handler2));

function handler3(el) {
  el = `${el.name} is ${el.age}, `;
  return el;
}

console.log(
  firstFunc(
    [
      { age: 45, name: "Jhon" },
      { age: 20, name: "Aaron" },
    ],
    handler3
  )
);

function handler4(el) {
  let str = "";
  for (let i = el.length - 1; i >= 0; i--) {
    str += el[i];
  }
  return str + ", ";
}

console.log(firstFunc(["abs", "123"], handler4));

///Аналог метода every. 2 задача по Callback
function every(arr, fn) {
  if (!(arr instanceof Array) || typeof fn != "function") {
    return new Error("error");
  }
  for (let k in arr) {
    if (fn(arr[k], k, arr) === false) {
      return false;
    }
  }
  return true;
}

function isBigEnough(element, index, array) {
  return element >= 2;
}

var arr = [2, 1, 3];
console.log(every(arr, isBigEnough));

// Вопросы к этому заданию. Замыкания
// Создайте функцию которая бы умела делать:
function minus(el1 = 0) {
  return function (el2 = 0) {
    return el1 - el2;
  };
}
console.log(minus(10)(6)); // 4
console.log(minus(5)(6)); // -1
console.log(minus(10)()); // 10
console.log(minus()(6)); // -6
console.log(minus()()); // 0

// Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
function multiplyMaker(el) {
  let x = el;
  return function (el2) {
    x = el2 * x;
    return x;
  };
}

const multiplyFunc = multiplyMaker(2);
console.log(multiplyFunc(2)); // 4 (2 * 2)
console.log(multiplyFunc(1)); // 4 (4 * 1)
console.log(multiplyFunc(3)); // 12 (4 * 3)
console.log(multiplyFunc(10)); // 120 (12 * 10)

// Реализовать модуль, который работает со строкой и имеет методы:

// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
const moduleString = {
  str : "",
  setString(str = "") {
      if (typeof str === "number") {
        str = str.toString();
      } else {this.str = str;}
  },
  getString() {
      return this.str;
  },
  getLenghtString() {
      return this.str.length;
  },
  getStringReverse() {
      return this.str.split('').reverse().join('');
  }
}
// Пример:
moduleString.setString('abcde');
moduleString.getString(); // ‘abcde’
moduleString.getLenghtString(); // 5
console.log(moduleString.getStringReverse()); // 5)



// Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать,
// делить и возводить в степень. Конечное значение округлить до двух знаков после точки
// (значение должно храниться в обычной переменной, не в this).

// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100
const numModule = (function (){
  let num = 0; 
  function setValues(value) {
    num = value;
    return this;
  }
  function sumValue(value) {
    num += value;
    return this;
  }
  function devideValue(value) {
    num *= value;
    return this;
  }
  function getValue() {
    return  Number(num.toFixed(2));
  }
  return {
    setValues,
    sumValue,
    devideValue,
    getValue
  }
}());
console.log(numModule.setValues(5).devideValue(2).sumValue(4).getValue());













// Вопросы к этому заданию. Деструктуризация
// Используя rest оператор и деструктуризацию, создать функцию, 
// которая принимает любое количество аргументов и возвращает объект, 
// содержащий первый аргумент и массив из остатка:
// func('a', 'b', 'c', 'd') 
// { first: 'a', other: ['b', 'c', 'd'] }
function func(firstEl,...othersEl) {
    return {
      first: firstEl,
      others: othersEl
    }
}
console.log(func('a', 'b', 'c', 'd'))




// Организовать функцию getInfo, которая принимает объект вида
// { name: ..., info: { employees: [...], partners: [ … ] } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

const getInfo = (obj) => {
    let name = "Unknown";
    if (obj.name != "") {
        name = obj.name;
    }
    return `Name: ${name} \n` + 
    `Partners: ${obj.info.partners[0]} ${obj.info.partners[1]}`
}
const organisation = {
name: 'Google',
info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing'] }
};

console.log(getInfo(organisation));
// getInfo(organisation); →
// Name: Google
// Partners: Microsoft Facebook




// Дан объект:

let user = {
    "guid": "dd969d30-841d-436e-9550-3b0c649e4d34",
    "isActive": false,
    "balance": "$2,474.46",
    "age": 30,
    "eyeColor": "blue",
    "name": "Tameka Maxwell",
    "gender": "female",
    "company": "ENOMEN",
    "email": "tamekamaxwell@enomen.com",
    "phone": "+1 (902) 557-3898",
    "tags": [
      "aliquip",
      "anim",
      "exercitation",
      "non",
    ],
    "friends": [
      {
        "id": 0,
        "name": "Barber Hicks"
      },
      {
        "id": 1,
        "name": "Santana Cruz"
      },
      {
        "id": 2,
        "name": "Leola Cabrera"
      }
    ],
  };

// Используя деструктуризацию получить значения из следующих полей
// 1. name,  balance, email
// 2. из массива tags получить первый и последний элемент
// 3. из массива friends получить значение поле name из первого элемента массива
// Если какое то из полей не имеет значения то подставить значение по умолчанию.
console.log(user.name + " " + user.balance + " " + user.email);
console.log(user.tags[0] + " " + user.tags[user.tags.length - 1]);
console.log(user.friends[0].name);

// С помощью оператора rest, из объекта user (из предыдущей задачи) скопировать в новый массив значение следующих полей tags и friends.

