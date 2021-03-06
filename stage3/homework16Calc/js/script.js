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
        contactForm = document.getElementById('form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

    function sendForm(elem) {
        elem.addEventListener('submit', function(e) {
            e.preventDefault();
            elem.appendChild(statusMessage);

            let formData = new FormData(elem);
                    
            let obj = {};

            formData.forEach(function(value, key){ //перевод данных из formData в объект ключ-значение
                obj[key] = value;
            });

            let json = JSON.stringify(obj);

            function requestPOST(data){
                return new Promise(function(resolve,reject){
                    let request = new XMLHttpRequest();
        
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');    // json
                    //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //xml- формат запроса
                    request.send(data);
        
                    request.addEventListener('readystatechange', function(){
                        if (request.readyState < 4) {
                            resolve();                           
                        } else if (request.readyState === 4 &&  request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    });                    
                });
            }

            function clearInput(){
                for (let i = 0; i < input.length; i++){
                    input[i].value = '';
                }
            }

            requestPOST(json)
                            .then(()=> statusMessage.innerHTML = message.loading)
                            .then(()=> {
                                statusMessage.style.color = '#fff';
                                statusMessage.innerHTML = message.success;
                            })
                            .catch(()=> statusMessage.innerHTML = message.failure)
                            .then(clearInput);
        });
    }

    sendForm(form);
    sendForm(contactForm);


    //slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    slider(slideIndex,slides,prev,next,dotsWrap,dots);

    function slider(slideIndex,slides,prev,next,dotsWrap,dots){
        showSlides(slideIndex);

        function showSlides(n){

            if (n > slides.length){
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }

            slides.forEach(function(item){
                item.style.display = 'none';
            });

            dots.forEach((item)=> item.classList.remove('dot-active'));
            slides[slideIndex - 1].style.display = 'block';
            dots[slideIndex - 1].classList.add('dot-active');
        }

        function plusSlides(n){
            showSlides(slideIndex += n);
        }
        function currentSlide(n){
            showSlides(slideIndex = n);
        }
        prev.addEventListener('click', function(){
            plusSlides(-1);
        });
        next.addEventListener('click', function(){
            plusSlides(1);
        });

        dotsWrap.addEventListener('click', function(e){
            for (let i=0; i < dots.length + 1;i++){
                if (e.target.classList.contains('dot') && e.target == dots[i-1]){
                    currentSlide(i);
                }
            }

        });
    }

    //calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        plase = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;
    
    totalValue.innerHTML = 0;

    persons.addEventListener('change', function() {
        personsSum = this.value;
        total = (daysSum + personsSum)*4000;
        
        if (restDays.value == '' || persons.value == '' || persons.value == '0') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('change', function() {
        daysSum = this.value;
        total = (daysSum + personsSum)*4000;
        
        if (persons.value == '' || restDays.value == '' || restDays.value == '0') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    plase.addEventListener('change', function(){
        if (restDays.value == '' || persons.value == '' || restDays.value == '0' || persons.value == '0'){
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });


});