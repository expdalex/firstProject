window.addEventListener("DOMContentLoaded", function(){
    'use strict';

    function ShowHideTabs(tab, headerTabsBox, tabContent){
        
        //hide tabs starting with a
        function hideTabContent(a){  
            for (let i = a; i < tabContent.length; i++){
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }
        hideTabContent(1);

        //show b-th tab
        function showContent(b){
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
            
        }

        //processing a tab click and displaying content
        headerTabsBox.addEventListener('click', function(e){
            let target = e.target;
            if(target && target.classList.contains('info-header-tab')){
                for(let i = 0; i < tab.length; i++){
                    if (target == tab[i]){
                        hideTabContent(0);
                        showContent(i);
                        break;
                    }
                }
            }
        });
    }
    
    //переменные
    let tab = document.querySelectorAll('.info-header-tab'),
        headerTabsBox = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
        
    ShowHideTabs(tab,headerTabsBox,tabContent);
    
    



    //timer
    let deadline = '2019-05-30';
    function timer(deadline){
        

        function getTimeRemaining(endtime) {
            let t = Date.parse(endtime) - Date.parse(new Date()),
                seconds = Math.floor((t/1000) % 60),
                minutes = Math.floor((t/1000/60) % 60),
                hours = Math.floor((t/(1000*60*60)))-3; //+3 moscow

            return {
                'total': t,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }

        function setClock(id, endtime) {
            let timer = document.getElementById(id),
                hours = timer.querySelector('.hours'),
                minutes = timer.querySelector('.minutes'),
                seconds = timer.querySelector('.seconds'),
                timeInterval = setInterval(updateClock, 1000);

            function updateClock(){
                let t = getTimeRemaining(endtime);
                if ((''+t.seconds).length == 1 && (''+t.hours).length == 1 && (''+t.minutes).length == 1){
                    hours.textContent = '0' + t.hours;
                    minutes.textContent = '0' + t.minutes;
                    seconds.textContent = '0' + t.seconds;
                }else if ((''+t.seconds).length == 1 && (''+t.hours).length == 1){
                    hours.textContent = '0' + t.hours;
                    minutes.textContent = t.minutes;
                    seconds.textContent = '0' + t.seconds;
                } else if((''+t.minutes).length == 1 && (''+t.hours).length == 1){
                    minutes.textContent = '0' + t.minutes;
                    hours.textContent = '0' + t.hours;
                    seconds.textContent = t.seconds;
                } else if((''+t.minutes).length == 1 && (''+t.seconds).length == 1){
                    minutes.textContent = '0' + t.minutes;
                    hours.textContent = t.hours;
                    seconds.textContent = '0' + t.seconds;
                } else if ((''+t.hours).length == 1){
                    hours.textContent = '0' + t.hours;
                    minutes.textContent = t.minutes;
                    seconds.textContent = t.seconds;   
                } else if((''+t.minutes).length == 1){
                    minutes.textContent = '0' + t.minutes;
                    hours.textContent = t.hours;
                    seconds.textContent = t.seconds;
                } else if((''+t.seconds).length == 1) {
                    hours.textContent = t.hours;
                    minutes.textContent = t.minutes;
                    seconds.textContent = '0' + t.seconds;
                }
                else {
                    hours.textContent = t.hours;
                    minutes.textContent = t.minutes;
                    seconds.textContent = t.seconds;
                    
                }      
                if (t.total <= 0){
                    clearInterval(timeInterval);
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                }
            }
        }
        setClock('timer', deadline);
    }
    timer(deadline);
    
    // modal window
    
    let more = document.querySelector('.more'), //кнопка
        overlay = document.querySelector('.overlay'), //модальное окно
        close = document.querySelector('.popup-close'); //кнопка-крестик закрыть
    
    function overlayWindow(more, overlay, close){
        more.addEventListener('click', function(e){
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    
        close.addEventListener('click', function(){
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
        });
    }
    
    overlayWindow(more, overlay, close);

    // modal window tabs
    let descriptionBtn = document.querySelectorAll('.description-btn');
    for(let i = 0; i < descriptionBtn.length; i++){
        overlayWindow(descriptionBtn[i], overlay, close);
    }
    
    //form  
    
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с Вами свяжемся!',
        failure: 'Что-то не так...'
    };
    //form popup
    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();

        request.open('POST', 'server.php');
        //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //xml-формат запроса
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(form);
        
        let obj = {};

        formData.forEach(function(value, key){ //перевод данных из formData в объект ключ-значение
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function(){
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 &&  request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++){
            input[i].value = '';
        }
    });

    //contact-form

    let contactForm = document.getElementById('form'),
        contactInput = contactForm.getElementsByTagName('input');
    
    contactForm.addEventListener('submit', function(e){
        e.preventDefault();
        contactForm.appendChild(statusMessage);

        let request = new XMLHttpRequest();

        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(contactForm);

        let obj = {};

        formData.forEach(function(value, key){ //перевод данных из formData в объект ключ-значение
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function(){
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
                statusMessage.style.color = '#fff';
            } else if (request.readyState === 4 &&  request.status == 200) {
                statusMessage.innerHTML = message.success;
                statusMessage.style.color = '#fff';
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < contactInput.length; i++){
            contactInput[i].value = '';
        }
    });



});