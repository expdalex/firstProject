window.addEventListener('DOMContentLoaded', function(){
'use strict';

// сделать функцию методом объекта => изменить ее контекст вызова
let age = document.getElementById('age');
let userInfo = {
    age: age.value,
    showUser: function(surname, name) {
        alert("Пользователь " + surname + " " + name + ", его возраст " + this.age);
    }
};

userInfo.showUser('smith', 'alex');

});

// используем замыкание функции
//     let age = document.getElementById('age');

//     function showUser(surname, name) {
//         alert("Пользователь " + surname + " " + name + ", его возраст " + age.value);
//     }

//     showUser('smith', 'alex');

// });