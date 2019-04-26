'use strict';

let btnStart = document.getElementById('start');
let budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value');
let expensesItem = document.querySelectorAll('.expenses-item');
let itemBtn = document.getElementsByTagName('button'),
    expensesItemBtn = itemBtn[0],
    optionalexpensesBtn = itemBtn[1],
    countBudgetBtn = itemBtn[2];
let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');
let chooseIncome = document.querySelector('.choose-income');
let checkSavings = document.querySelector('#savings');
let chooseSum = document.querySelector('.choose-sum');
let choosePercent = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

expensesItemBtn.disabled = true;
expensesItemBtn.style.opacity = '0.5';
countBudgetBtn.disabled = true;
countBudgetBtn.style.opacity = '0.5';
optionalexpensesBtn.disabled = true;
optionalexpensesBtn.style.opacity = '0.5';

let money, time;

btnStart.addEventListener('click', function(){

    expensesItemBtn.disabled = false;
    expensesItemBtn.style.opacity = '1';
    countBudgetBtn.disabled = false;
    countBudgetBtn.style.opacity = '1';
    optionalexpensesBtn.disabled = false;
    optionalexpensesBtn.style.opacity = '1';

    time = prompt("Введите дату в формате YYYY-MM-DD",'');
    money = +prompt("Ваш бюждет за месяц",'');

    while((isNaN(money)) || (money == '') || (money == null)) {
        money = +prompt("Ваш бюждет за месяц",'');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();
});

expensesItemBtn.addEventListener('click', function(){
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++){
        let a = expensesItem[i].value;
        let b = expensesItem[++i].value;

        if ( (typeof(a)) === 'string' && (typeof(a)) != null && 
        (typeof(b)) != null && (a != '') && (b != "") && (a.length < 20) ) {
            console.log('done');
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log('data error');
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalexpensesBtn.addEventListener('click', function(){
    for (let i = 0; i < optionalexpensesItem.length; i++){
        let a = optionalexpensesItem[i].value;
        //if ( (typeof(a)) === 'string' && (typeof(a)) != null && (a != '') && (a.length < 50) ) {
            appData.optionalExpennses[i] = a;
        //} else {
            //console.log('data error');
         //  i--;
        //}
        optionalexpensesValue.textContent += appData.optionalExpennses[i] + ' '; 
    }
});

countBudgetBtn.addEventListener('click', function(){
    if (appData.budget != undefined) {
        let sum = 0;
        for(let key in appData.expenses){
            sum += +appData.expenses[key];
        }
        console.log(sum);
        appData.moneyOneDay = ((appData.budget - sum)/30).toFixed();
        daybudgetValue.textContent = appData.moneyOneDay;
    
        if (appData.moneyOneDay <=100) {
            levelValue.textContent = 'минимальный уровень достатка';
        } else if((appData.moneyOneDay > 100) && (appData.moneyOneDay < 2000)){
            levelValue.textContent = 'средний уровень достатка';
        } else if (appData.moneyOneDay >= 2000) {
            levelValue.textContent = 'высокий уровень достатка';
        } else {
            levelValue.textContent = 'ошибка данных в moneyOneDay';
        }
    }
    else{
        daybudgetValue.textContent = 'произошла ошибка';
    }
});

chooseIncome.addEventListener('input', function(){
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function(){
    if (appData.savings == true){
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
        appData.monthIncome = sum/100/12 * percent;
        appData.yearIncome = sum/100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpennses: {},
    income: [],
    savings: false
};


