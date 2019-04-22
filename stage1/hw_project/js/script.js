'use strict';
let money = +prompt("Ваш бюждет за месяц");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let answer1 = prompt("Введите обязательную статью расходов в этом месяце");
let answer2 = +prompt("Во сколько обойдется?");


let expenses = {
    answer1 : answer2
}

let optionalExpennses = {
    
}

let income = [''];

let appData = {
    money,
    timeData: time,
    expenses,
    optionalExpennses,
    savings: false
}

let moneyOneDay = (money - answer2) / 30;
alert("Ваш бюджет на день " + "= " + moneyOneDay);