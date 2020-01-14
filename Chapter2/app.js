/**
 * Задание 1.1
 */
// console.log(document.head);
// console.log(document.body);
// console.log(document.body.children);
// console.log(document.body.firstElementChild.childNodes);
// console.log(document.body.firstElementChild.firstElementChild.nextElementSibling);
// console.log(document.body.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling);

/**
 * Задание 1.2
 */


// function isParent(parent, child) {


//     let current = child.parentElement;
//     let isParent = false;

//     while (current) {
//         isParent = parent === current;
//         if (isParent) {
//             current = null;
//         } else {
//             current = current.parentElement;
//         }
//     }
//     return isParent;
// }

// console.log(isParent(document.body.children[0],
//     document.querySelector('mark')));


/**
 * Задание 1.3
 */

// let hrefs = document.getElementsByTagName('a');

// for (var i = 0, max = hrefs.length; i < max; i++) {
//     if (!hrefs[i].closest('ul')) {
//         console.log(hrefs[i]);
//     }
// }



/**
 * Задание 1.4
 */

// console.log(document.querySelector('ul').previousElementSibling);
// console.log(document.querySelector('ul').nextElementSibling);






/**
 * Задание 2.1
 */


// let par = document.querySelector('p');
// console.log(par.textContent);

/**
 * Задание 2.2
 */

// function isDom(dom) {
//     return {
//         type: dom.nodeType,
//         name: dom.nodeName,
//         child: dom.children.length
//     }
// }
// console.log(isDom(par));


/**
 * Задание 2.3
 */

// let ulArr = document.querySelector('ul').children;
// let arr = [];

// for (var i = 0, max = ulArr.length; i < max; i++) {
//     arr.push(ulArr[i].textContent);
// }

// console.log(arr);



/**
 * Задание 2.4
 */

// let par = document.querySelector('p');

// const [...childNodes] = par.childNodes;

// childNodes.forEach(node => {
//     if (node.nodeType === 3) {
//         node.textContent = '-text-';
//     }
// })



/**
 * Задание 2.5
 */

// document.querySelector('ul').classList.add('list');
// console.log(document.querySelector('ul'));





/**
 * Задание 2.6
 */

// let ulAr = document.querySelector('ul');
// ulAr.nextElementSibling.nextElementSibling.setAttribute('id', 'link');
// console.log(document.body);




/**
 * Задание 2.7
 */

// let ulAr = document.querySelector('ul');
// const [...children] = ulAr.children;

// for (let i = 0, max = children.length; i < max; i = i + 2) {
//     children[i].classList.add('item');
// }

// console.log(ulAr);





/**
 * Задание 2.8
 */

// let classic = document.getElementsByTagName('a');

// for (let i = 0; i < classic.length; i++) {
//     classic[i].classList.add('custom-link');
// }

// console.log(document.querySelector('a'));





/**
 * Задание 2.9
 */

// let uli = document.querySelector('ul');

// const [...children] = uli.children;

// let lengthUl = children.length;
// let count = 3;

// for (let i = 1; i < count; i++) {
//     var setCount = lengthUl + i;
//     var li = document.createElement('li');
//     li.className = 'new - item';
//     li.textContent = `item ${setCount}`;
//     uli.appendChild(li);
// }



/**
 * Задание 2.10
 */

// let uli = document.querySelector('ul');
// const [...children] = uli.children;

// for (let i = 0; i < children.length; i++) {
//     uli.children[i].insertAdjacentHTML('beforeend', '<strong> </strong>');
// }




/**
 * Задание 2.11
 */
// var img = document.createElement('img');
// img.setAttribute('src', '#');
// img.setAttribute('alt', 'Photo is there');
// document.body.insertBefore(img, document.body.firstChild);





/**
 * Задание 2.12
 */
// let mark = document.querySelector('mark');
// mark.setAttribute('class', 'green');
// mark.insertAdjacentText('beforeend', ' green ');




/**
 * Задание 2.13
 */

// let uli = document.querySelector('ul');
// const [...children] = uli.children;

// for (let i = children.length - 1; i >= 0; i--) {
//     let li = uli.children[i];
//     console.log(li);
//     li.insertAdjacentElement('afterend', uli.children[0]);
// }
// console.log(uli);




/**
 * Задание 2.14
 */

// const map = {
//     id: "ID",
//     name: "Name",
//     email: "Email",
//     balance: "Balance"
// };
// const users = [{
//         "_id": "5d220b10e8265cc978e2586b",
//         "isActive": true,
//         "balance": 2853.33,
//         "age": 20,
//         "name": "Buckner Osborne",
//         "gender": "male",
//         "company": "EMPIRICA",
//         "email": "bucknerosborne@empirica.com",
//         "phone": "+1 (850) 411-2997",
//         "registered": "2018-08-13T04:28:45 -03:00",
//         "nestedField": { total: 300 }
//     },
//     {
//         "_id": "5d220b10144ef972f6c2b332",
//         "isActive": true,
//         "balance": 1464.63,
//         "age": 38,
//         "name": "Rosalie Smith",
//         "gender": "female",
//         "company": "KATAKANA",
//         "email": "rosaliesmith@katakana.com",
//         "phone": "+1 (943) 463-2496",
//         "registered": "2016-12-09T05:15:34 -02:00",
//         "nestedField": { total: 400 }
//     },
//     {
//         "_id": "5d220b1083a0494655cdecf6",
//         "isActive": false,
//         "balance": 2823.39,
//         "age": 40,
//         "name": "Estrada Davenport",
//         "gender": "male",
//         "company": "EBIDCO",
//         "email": "estradadavenport@ebidco.com",
//         "phone": "+1 (890) 461-2088",
//         "registered": "2016-03-04T03:36:38 -02:00",
//         "nestedField": { total: 200 }
//     }
// ];


// var fragment = document.createDocumentFragment();
// var table = document.createElement('table');
// var tr = document.createElement('tr');
// table.insertAdjacentElement('beforeend', tr);


// for (let i in map) {
//     var th = document.createElement('th');
//     th.insertAdjacentText('beforeend', map[i]);
//     tr.insertAdjacentElement('beforeend', th);
// }

// let totalPrice = 0;

// for (let j in users) {
//     var tr1 = document.createElement('tr');

//     var th4 = document.createElement('td');
//     th4.insertAdjacentText('beforeend', j);

//     var th1 = document.createElement('td');
//     th1.insertAdjacentText('beforeend', users[j].name);

//     var th2 = document.createElement('td');
//     th2.insertAdjacentText('beforeend', users[j].email);

//     var th3 = document.createElement('td');
//     th3.insertAdjacentText('beforeend', users[j].balance);

//     tr1.insertAdjacentElement('beforeend', th4);
//     tr1.insertAdjacentElement('beforeend', th1);
//     tr1.insertAdjacentElement('beforeend', th2);
//     tr1.insertAdjacentElement('beforeend', th3);

//     table.insertAdjacentElement('beforeend', tr1);
//     totalPrice += users[j].balance;
// }

// let tr_total = document.createElement('tr');

// let th4_total = document.createElement('th');
// th4_total.insertAdjacentText('beforeend', " ");
// tr_total.insertAdjacentElement('beforeend', th4_total);

// let th1_total = document.createElement('th');
// th1_total.insertAdjacentText('beforeend', " ");
// tr_total.insertAdjacentElement('beforeend', th1_total);

// let th2_total = document.createElement('th');
// th2_total.insertAdjacentText('beforeend', " ");
// tr_total.insertAdjacentElement('beforeend', th2_total);

// let th3_total = document.createElement('th');
// th3_total.insertAdjacentText('beforeend', totalPrice);
// tr_total.insertAdjacentElement('beforeend', th3_total);

// table.insertAdjacentElement('beforeend', tr_total);

// fragment.appendChild(table);
// document.querySelector('.table').appendChild(fragment);








/**
 * Задание 3.1
 */
// let btn_msg = document.querySelector('#btn-msg');
// btn_msg.addEventListener('click', e => {
//     alert(btn_msg.getAttribute('data-text'));
// });



/**
 * Задание 3.2
 */

// let btn_msg = document.querySelector('#btn-msg');

// btn_msg.addEventListener('mouseenter', e => {
//     btn_msg.setAttribute('style', 'background: #fc0707');
// });

// btn_msg.addEventListener('mouseleave', e => {
//     btn_msg.setAttribute('style', ' ');
// });




/**
 * Задание 3.3
 */

// let btn_msg = document.querySelector('#btn-msg');
// let btn_gen = document.querySelector('#btn-generate');

// btn_msg.addEventListener('click', e => {
//     document.querySelector('#tag').textContent = btn_msg.getAttribute('id');
// });


// btn_gen.addEventListener('click', e => {
//     document.querySelector('#tag').textContent = btn_gen.getAttribute('id');
// });







/**
 * Задание 3.4
 */

// let btn_gen = document.querySelector('#btn-generate');
// let count = 2;

// btn_gen.addEventListener('click', e => {
//     let li = document.createElement('li');
//     li.textContent = "Item " + ++count;
//     document.querySelector('ul').appendChild(li);
// });





/**
 * Задание 3.5
 */

let item = document.querySelector('.dropdown-item');
let none = document.querySelector('.dropdown-menu');

item.addEventListener('click', e => {
    if (none.getAttribute('stylr') === 'display: list-item') {
        none.setAttribute('style', 'display: none');
    } else {
        none.setAttribute('style', 'display: list-item');
    }
})