$(document).ready(function(){
    $('.main_btna').on('click', function(){
        console.log(this);
        $('.overlay').animate({opacity: 'toggle'}, 3000);
        $('.modal').animate({height: 'toggle'}, 3000);
        //$('.modal').slideToggle('slow');
    });
    $('.main_btn').on('click', function(){
        console.log(this);
        $('.overlay').animate({opacity: 'toggle'}, 3000);
        //$('.modal').animate({height: 'toggle'}, 3000);
        $('.modal').slideToggle('slow');
    });
    console.log($('.main_nav li:eq(1)'));
    $('.main_nav li:eq(1)').on('click', function(){
        console.log(this);
        $('.overlay').animate({opacity: 'toggle'}, 3000);
        $('.modal').animate({height: 'toggle'}, 3000);
        //$('.modal').slideToggle('slow');
    });
    
    $('.close').on('click', function(){
        $('.overlay').animate({opacity: 'toggle'}, 3000);
        $('.modal').animate({height: 'toggle'}, 3000);
    })


});