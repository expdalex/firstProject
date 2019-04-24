'use strict';

let arr = [1, 2, 3, 4];
arr.pop();
console.log(arr);

let arr1 = ["first", 2, 3, "four", 5];
arr1.forEach(function(item,i,mass) {
    console.log(i + ': ' + item);
});

