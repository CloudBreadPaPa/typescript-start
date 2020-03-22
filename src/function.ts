// function sum(x: number, y: number): number {
//     return x + y;
//   }
  
//   sum(1, 2);

// 에러 발생
// function sum(x: number, y: number): number {
//     return null;
//   }
  
//   sum(1, 2);

function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);

// return 값을 void로 가능
function returnNothing(): void {
    console.log('I am just saying hello world');
}