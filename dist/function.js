"use strict";
// function sum(x: number, y: number): number {
//     return x + y;
//   }
//   sum(1, 2);
// 에러 발생
// function sum(x: number, y: number): number {
//     return null;
//   }
//   sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
// return 값을 void로 가능
function returnNothing() {
    console.log('I am just saying hello world');
}
