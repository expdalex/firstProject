'use strict';
let money, time;

function start() {
    money = +prompt("Ваш бюждет за месяц",'');
    time = prompt("Введите дату в формате YYYY-MM-DD",'');

    while((isNaN(money)) || (money == '') || (money == null)) {
        money = +prompt("Ваш бюждет за месяц",'');
    }
}

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpennses: {},
    income: [],
    savings: true
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце",'');
        let b = +prompt("Во сколько обойдется?",'');
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && 
        (typeof(b)) != null && (a != '') && (b != "") && (a.length < 20) ) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            console.log('data error');
            i--;
        }
    }
}

function chooseOptExpenses(){
    for (let i = 1; i < 4; i++){
        let a = prompt("Введите необязательную статью расходов в этом месяце",'');
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (a != '') && (a.length < 50) ) {
            appData.optionalExpennses[i] = a;
        } else {
            console.log('data error');
            i--;
        }
    }
}

function detectDayBudget(){
    appData.moneyOneDay = (appData.budget / 30).toFixed();
    alert("Ваш бюджет на день: " + "= " + appData.moneyOneDay);
}

function detectLevel(){
    if (appData.moneyOneDay <=100) {
        console.log('минимальный уровень достатка');
    } else if((appData.moneyOneDay > 100) && (appData.moneyOneDay < 2000)){
        console.log('средний уровень достатка');
    } else if (appData.moneyOneDay >= 2000) {
        console.log('высокий уровень достатка');
    } else {
        console.log('ошибка данных в moneyOneDay');
    }
}

function checkSaving() {
    if (appData.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход с депозита: " + appData.monthIncome);
    }
}

/*let i = 0;
while (i < 2){
    let a = prompt("Введите обязательную статью расходов в этом месяце",'');
    let b = +prompt("Во сколько обойдется?",'');
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && 
    (typeof(b)) != null && (a != '') && (b != "") && (a.length < 20) ) {
        console.log('done');
        appData.expenses[a] = b;
        i++;
    } else {
        console.log('data error');
    }
}*/

/*let i = 0;
do{
    let a = prompt("Введите обязательную статью расходов в этом месяце",'');
    let b = +prompt("Во сколько обойдется?",'');
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && 
    (typeof(b)) != null && (a != '') && (b != "") && (a.length < 20) ) {
        console.log('done');
        appData.expenses[a] = b;
        i++;
    } else {
        console.log('data error');
    }
    
} while (i < 2);*/