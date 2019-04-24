'use strict';

let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    inlineBox = document.querySelectorAll('.inlinebox');

box.style.backgroundColor = 'green';
btn[1].style.borderRadius = '100%';

for(let i=0; i < circle.length; i++){
    circle[i].style.backgroundColor = 'yellow';
}

inlineBox.forEach(function(item, i, inlineBoxs){
    item.style.backgroundColor = '#eee';
});

let div = document.createElement('div'),
    text = document.createTextNode('hello');

div.classList.add('black-box');

document.body.appendChild(div);
div.style.margin = '15px';
div.innerHTML = '<h2>test</h2>';