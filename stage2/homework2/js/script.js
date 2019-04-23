'use strict';
let money = +prompt("Ваш бюждет за месяц",'');
let time = prompt("Введите дату в формате YYYY-MM-DD",'');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpennses: {},
    income: [],
    savings: false
}

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

console.log(appData);
let moneyOneDay = appData.budget / 30;
alert("Ваш бюджет на день " + "= " + moneyOneDay);

if (moneyOneDay <=100) {
    console.log('минимальный уровень достатка');
} else if((moneyOneDay > 100) && (moneyOneDay < 2000)){
    console.log('средний уровень достатка');
} else if (moneyOneDay >= 2000) {
    console.log('высокий уровень достатка');
} else {
    console.log('ошибка данных в moneyOneDay');
}