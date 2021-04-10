"use strict";
var fun = function (a, b) {
    var summ = a + b;
    console.log();
    return (summ);
};
fun(1, 2);
fun('1', '2');
var makeArr = function (a, b) {
    var arr = [a, b];
    console.log(arr);
};
var v = makeArr(5, "x");
var v2 = makeArr(5, "x");
