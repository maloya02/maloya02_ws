// custom script
// alert('Welcome to JS')

//Output
// 1. Console
console.log('Welcome rotonda');
console.warn('Welcome to my life');
console.error('Welcome home');
// 2. Alert
// alert('Click ok');
console.log('After Alert');
// 3. Document
document.write('Welcome to js Docs');
document.write('<br /><p>Welcome to js Docs</p>');
document.write('<br /><h1 id="ddd">Welcome to js Docs</h1>');
// 4. InnerHtml
//* target + content
// getElementById
// getElementByClassName
document.getElementById('hello-heading').innerHTML = 'World Hello!';
document.getElementById('ddd').innerHTML = 'Aa Dasalla pogi!';
document.querySelector('#hello-heading').innerHTML = "Hello World to aa dasalla!";

// Js Basic

// variable
// >>> how to declare a varialbe

// var, let, const
// var is global
// let is scope
// const can be both
var name;

var name = 'aadas'
let my_name = 'aadas'
const MY_NAME = 'PEDRO DELECRUZ'

// naming var
//name_of_var = [a-z A-Z 0-9 _$]; 
// var name cant start with number * case sensitive
var $return;
var _$price;

//-----

let a = 7;
let A = 8;

console.log(a == A);
let write = id => document.querySelector(`#${id}`);
write('result').innerHTML = a == A;

// operators
// unary (+,-) --> one operand
// binary (+,-,*,/,**,%) --> two operand
// ternary (?:) --> 3 operand

// PEMDAS


// Equality
// = , assigment operator
var x = 1;
// ==, value comparison
var c = 2;
var d = 3;
c == d; // value comparison; loose comparison
// ===, value & type compare; strict comparison
var e = Number(7);
var f = new Object(7);
write(e === f); 

// +=, -=, *=, /=, **=, %=
x += 2;
x = x + 2;

// ++, --
x++; x--;
++x; --x;
// ++ x += 1;
// -- x -= 1;

// != not equal
// !== not equal not same type

// Inequalities
// >, <, >=, <=

// ? ternary operator
// ?:
// (condition) ? (true value) : (false value);

let bal = true ? 'true_output' : 'false_output';
write(bal);

// logical and, logical or, not
// && - logical and
// || - logical or
// ! - not

// bitwise operator
// & - bitwise and
// | - bitwise or


// Data types 
// 1. string - primitives = p
// 2. number -p
// 3. BigInb
// 4. boolean - p
// 5. Undefined - p
// 6. Null
// 7. Symbol
// 8. Object - reference type = r
// 9. Array - r
// 10. Function - r