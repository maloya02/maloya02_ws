// custom script
// alert('Welcome to js')

// Variable type - ref
// 1. Array
// 2. Objects
// 3. Functions
// Literals
// 1. []    array literal
// 2. {}    object literal
// 3. ``    template literal
// 4. ''/"" string literal

const colors = [];
// .push() -- append lineary
colors.push('red');
colors.push('blue');
colors.push('black', 'white', 'green');

console.log('After array push');

// .pop() -> get last elem and remove it from the array || its like drawing a card from the END of deck
let color = colors.pop()
console.log(color);
console.log('After array pop');

// .shift() --> get first elem || its like drawing a card from the START of deck
let firstColor = colors.shift();
console.log(firstColor);
console.log('After array shift');

// .unshift() --> append on start
let newFirst = colors.unshift('azure');
console.log(newFirst);
console.log('After aaray unshift');

// delete and elem in array
// delete colors[2]; //--> not resetting the lenght
// console.log('After delete elem');

// .splice() --> delete a portion, optionally replace that porion
let deletedOldColors = colors.splice(1, 2); // splice(index, value)
colors.push('torquiose', 'magenta', 'pink', 'rose')
let replacedColors = colors.splice(2, 3, 'silver', 'gold', 'bronze') //splice and replace data inside []



console.log('After array splice');

// .slice() --> get a portion
let meat = ['head', 'neck', 'wings', 'legs', 'feet', 'breast', ['liver', 'bituka']];
const toSell = meat.slice(2);
const toPromo = meat.slice(3, 6);
const getLiver = [...meat.slice(6).shift()].shift();
// const toMash = meat.pop().shift();
const toMash = meat[meat.length - 1][0]

console.log('After array slice');

// .toString();
let commercial = meat.toString();
console.log(commercial);
let jsonified = JSON.stringify(meat)
console.log(jsonified);

const revive = JSON.parse(jsonified)

console.log('After array tostring');

// .sort(); ASC - Ascending
meat.sort();

// .reverse(); DESC - Descending
revive.reverse();

console.log('After Array Sort');

const sortAndReverse = () => {
    const coll = ['apple', 'aster', 'ball', 'bail', 1.01, 1.011, 3, 5, false, true];
    return coll.sort().reverse();
};

const result = sortAndReverse();
console.log(result);

// 4 ways to write a function
// 1. function <name>(...params) {}             ---> function add(a, b) {return a + b;}
// 2. function (...params) {}                   ---> function (a, b) {return a + b;}
// 3. const <name>  = function (...params) {}   ---> const add = function (a + b) {return a + b;}
// 4. arrow function (params, body|return value)
//    4.a. params
//         4.a.1 no params    () => {}          ---> () => {return a + b; }
//         4.a.2 with params  (...prams) => {}  ---> (a, b) => {return a + b; }
//         4.a.3 exactly 1 param    param => {} ---> a => { return a*a; }
//    4.b. body & return value
//         4.b.1 only one statement, ommit braces/return       ---> (a, b) => a + b;
//         4.b.2 more than one statement, got braces/return    ---> (a, b) => { a = parseInt(a); return a + b; }
//         4.b.3 no return value, more than one                ---> (a, b) => { a = parseInt(a); b = parseInt(b); writeToDB(a,b); }



const grades = [87, 88, 93, 90, 75, 83];


grades.sort((e, f) => e - f); // can be ((a,b) => a- b)
console.log(grades);


// .min, .max, .apply
let minGrade = Math.min.apply(null, grades);
let maxGrade = Math.max.apply(null, grades);

// .forEach();
// -----------------------------------------
grades.forEach(function (value) {
    console.log(`Your grade is ${value}\n`);
});

grades.forEach(val => console.log(`Your grade is ${val}\n`));

// -----------------------------------------
grades.forEach(function (value, index) {
    console.log(`Your grade is ${value} at position ${index}\n`);
});

grades.forEach((val, i) => console.log(`Your grade is ${val} at position ${i}\n`));

// -----------------------------------------
grades.forEach(function () {
    console.log('A record was received.');
});

let logs = grades.forEach(() => 'A record was received.');

function acknowledgement() {
    return 'A record was received';
}
logs = grades.forEach(acknowledgement);

const received = function () {
    return 'A record was received';
}
logs = grades.forEach(received);
// -----------------------------------------

logs = grades.map(() => '<li>A record was received.</li>')

logs = `<ul>${logs}</ul>`;

console.log('After sort')

// .filter() --> get elements that will pass the test, callbackfn === test
let passingGrades = grades
    .filter(grade => grade >= 88)
    .map(gr => `<b>${gr}</b>`)
    .map(g => {
        g = `<li>${g}</li>`;
        g = `${g} - <small>sys generated</small>`;
        return g;
    });

passingGrades = grades.map(g => {
    return g >= 8 ? `<li><b>${g}</b></li> - <small>generated</small>` : null;
});

passingGrades = grades => {
    // do something
    console.log('do soemthing')
};

passingGrades(grades)

console.log(passingGrades);

// .reduce() ---> reduce to a single value
let totalGrade = grades.reduce((prev, curr) => prev + curr);

const names = ['Lean', 'L', 'Jerios'];
let fullName = names.reduce((x, y) => x + ' ' + y).trim();

// .some, .every
const isDeanLister = grades.every(g => g >= 85); // false
const needsGuidance = grades.some(g => g <= 75); // true
const is90GraderTop = grades.filter(g => g >= 90).some(g => g >= 95);

const contains90 = grades.includes(90); // grades.some(g => g == 90)
const postion90 = grades.indexOf(90);

const isMediocre = grades.every(g => (g >= 75 && g <= 90 && g != null) || g == 'exempted');


