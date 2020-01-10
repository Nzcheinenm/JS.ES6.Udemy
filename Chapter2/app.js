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