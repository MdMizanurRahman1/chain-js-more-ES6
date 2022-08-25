const users = [
    { id: 1, name: 'abul', job: 'doctor' }
]
//console.log(users);
//console.log(users[0]);
//console.log(users[0].job);

const data = {
    count: 5000,
    data: [
        { id: 1, name: 'babul', job: 'leader' },
        { id: 2, name: 'dabul', job: 'nurse' },
    ]
}
//console.log(data);
//console.log(data.data);
//console.log(data.data[1]);
//console.log(data.data[1].job);

const user = {
    id: 5001,
    name: 'Thomas Alba Edison',
    address: {
        street: {
            first: '34/A lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'dhaka'
    }
}
console.log(user.address.stret?.third);