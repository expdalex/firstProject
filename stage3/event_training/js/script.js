window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    
    let btn = document.querySelector('#btn1');
    let btn2 = document.querySelector('#btn2');
    
    // btn.addEventListener('touchstart', function(e){
    //     e.target.style.background = 'brown';
    //     console.log(e.target + 'поменяла цвет на ' + e.target.style.background);

    
    // let timerID = setTimeout(function log(){
    //     console.log('hello!');
    //     setTimeout(log, 2000);
    // });
    let box = document.querySelector('.box');

    function startAplication(){
        let pos = 0;
        let id = setInterval(changePos, 10);

        function changePos(){
            if (pos == 250){
                clearInterval(id);
            } else {
                pos++;   
                box.style.left = pos + 'px';
                box.style.top = pos + 'px';
            }
        }
    }
    
    function startAplicationС(){
        let pos = 0;
        let id = setInterval(changePos, 10);

        function changePos(){
            box.style.borderRadius = '100%';
            if (pos == 250){
                clearInterval(id);
            } else {
                pos++;   
                box.style.left = pos + 'px';
                box.style.top = pos + 'px';
                //box.style.BorderRadius = '100%';
            }
        }
    }

    btn.addEventListener('click', startAplication);
    btn2.addEventListener('click', startAplicationС);

    let btnBlock = document.querySelector('.btn-block'),
        btns = document.getElementsByTagName('button');

    btnBlock.addEventListener('click', function(e){
        if (e.target && e.target.matches('button.first')){
            console.log('tap');
        }
    });
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

    /*btn.forEach(function(item, i, buttons){
        item.addEventListener('mouseleave', function(){
            item.style.background = 'green';
        });
    });
    */

});