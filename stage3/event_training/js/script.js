'use strict';

let btn = document.querySelectorAll('button');

/*btn[0].onclick = function(){
    console.log('нажал на кнопку1');
};*/


/*btn[0].addEventListener('click', function(){
    console.log('button1 clicked');
});
btn[1].addEventListener('click', function(event){
    let target = event.target;
    target.style.background = 'green';
    console.log('event: ' + event.type + ' on ' + target);
});*/
btn.forEach(function(item, i, buttons){
    item.addEventListener('mouseleave', function(){
        item.style.background = 'green';
    });
});
