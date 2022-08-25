const numbers = [23, 46, 78, 394, 367];
const value = numbers.map(num => num / 2);
const result = numbers.map(num => num / 3);
//console.log(value);
//console.log(result);

const friends = ['solaiman', 'mizan', 'bandormosai', 'lovelybibi'];
const human = friends.map(friend => friend[0]);
const human2 = friends.map(friend => friend.length);
//console.log(human2);

const products = [
    { id: 1, name: 'laptp', price: 45000 },
    { id: 1, name: 'iphone', price: 95000 },
    { id: 1, name: 'ewatch', price: 65000 }
];

//const update = products.map(updates => updates.name);
//console.log(update);
products.forEach(val => console.log(val.price));