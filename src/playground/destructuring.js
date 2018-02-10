console.log('destructuring');

const person = {
    name: 'Miguel',
    age: 28,
    location: {
        city: 'CDMX',
        temp: 5
    }
};

// const name = person.name;
// const age = person.age;
//alternative using ES6:
const {name, age} = person;

// console.log(`${name} is ${age}`);

//renaming syntax temp: new name here
//default syntax city = default value
//combining both syntax ' temp : temperature = 25   '
const {city = 'GRE', temp: temperature} = person.location;

//if(city && temperature)
    // console.log(`its ${temperature} in ${city}.`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '231']

//we can use defaults the same way as before using =
const [street, citie, state, zip] = address;

console.log(`You are in ${citie} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [product, , price] = item;

console.log(`A medium ${product} cost ${price}`);