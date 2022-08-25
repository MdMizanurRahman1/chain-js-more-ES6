const numbers = [3, 4, 6, 8, 90, 45, 67, 34, 78, 6, 8];
const value = numbers.filter(x => x > 20);
const value1 = numbers.filter(x => x < 10);
const value2 = numbers.find(x => x > 10);
console.log(value2);

//console.log(value1);

const products = [
    { id: 1, name: 'laptp', price: 45000 },
    { id: 1, name: 'iphone', price: 95000 },
    { id: 1, name: 'ewatch', price: 65000 }
];

//const product = products.filter(p => p.price < 90000);
const product = products.find(p => p.price < 90000);
console.log(product);