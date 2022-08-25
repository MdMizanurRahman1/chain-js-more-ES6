const numbers = [78, 23, 10, 20, 30];
const value = num => num * 2;
const result = value(numbers);
//console.log(result);

const makeIt = numbers.map(num => num * 2);
console.log(makeIt);