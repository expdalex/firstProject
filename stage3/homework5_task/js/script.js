'use strict';

let menuItem = document.querySelectorAll('.menu-item');
let menu = document.querySelector('.menu');
let menuItem5 = document.createElement('li');
let title = document.getElementById('title');
let column = document.querySelectorAll('.column');
let adv = document.querySelector('.column .adv');
//let adv = column[1].querySelector('.adv');
let promptBox = column[1].querySelector('#prompt');

console.log(adv);
/*menuItem[1].textContent = 'Второй пункт';
menuItem[2].textContent = 'Третий пункт';*/

menu.insertBefore(menuItem[2], menuItem[1]);

menuItem5.classList.add('menu-item');
menuItem5.textContent = 'Пятый пункт';
menu.appendChild(menuItem5);

document.body.style.background = 'url(img/apple_true.jpg)';

title.textContent = 'Мы продаем только подлинную технику Apple';

column[1].removeChild(adv);

let answer = prompt("Ваше отношение к технике Apple?", '');
promptBox.textContent = answer;




