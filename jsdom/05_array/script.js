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
colors.push('black','white','green');

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
colors.push('torquiose','magenta','pink','rose')
let replacedColors = colors.splice(2,3, 'silver','gold','bronze') //splice and replace data inside []



console.log('After array splice');

// .slice() --> get a portion
let meat = ['head','neck','wings','legs','feet','breast',['liver','bituka']];
const toSell = meat.slice(2);
const toPromo = meat.slice(3,6);
const getLiver = [...meat.slice(6).shift()].shift();
// const toMash = meat.pop().shift();
const toMash = meat[meat.length-1][0]

console.log('After array slice');

// .toString();
let commercial = meat.toString();
console.log(commercial);
let jsonified = JSON.stringify(meat)
console.log(jsonified);

const revive = JSON.parse(jsonified)

console.log('After array tostring');

// .sort(); 
meat.sort();

// .reverse();
revive.reverse();

console.log('After Array Sort');
