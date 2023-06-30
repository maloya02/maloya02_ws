// custom script
// alert('Welcome to js')

// ES5
const car = {
    status: 'success',
    code: '200',
    data: [
        {
            make: 'Toyota',
            model: 'Camry',
            year: 2018,
        },
        {
            make: 'Honda',
            model: 'ZX9',
            year: 2022,
        },
    ],
};

var carMake = car.data[0].make;
var carMake = car.data[1].make;
var carModel = car.data[0].model;
var carYear = car.data[0]['year'];

// es6
let { make, model, year } = car.data[0];


const user = {
    name: 'A.a Dasalla',
    type: 'Master',
    region: 'southeast-asia-3',
    id: 'asdjkahsdhasd',
    token: '56a4sd5a4sd',
    lastLogin: '2023-06-30T193000',
    model: 'GTX-696969',
};

let { name, token, id } = user;
let { region: zone1, lastLogin } = user;
let { model: macho } = user;

const fruits = [{content:'apple'}, {content:'mango'}, {content:'pineapple'}];
let [red, green, yellow] = fruits; // cant rename
// spread operator = ...
const colors = ['red','purple','green','blue','black'];
const crayonBox = {...colors}; //obj
const crayonWheel = [...colors]; //arr

const logger = (...msg) => {
    console.log(msg);
} 

const multipy = (...operands) => {
    return operands.reduce((a,aa) => a*aa);
    let result;
    for(let i=0;i < operands.length; i++){
        result =+ operands[i];
    }
    return result;
}

const sum = (...addends) => {
    return addends.reduce((a,aa) => a+aa);
    let result;
    for(let i=0;i < addends.length; i++){
        result =+ addends[i];
    }
    return result;
}
console.log('after var val');