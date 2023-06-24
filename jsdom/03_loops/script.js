// custom script
// FOR LOOP
// for (initialization; terminal condition; delta) {<statements>;}
/* 

for (let index = 0; index < array.length; index++) {
     const element = array[index];
    
 }

 */

//  for(let i = 0; i < 12; i++){
//     console.log(`Current value of index/counter is ${i}`); template
//  } 

for (let i = 0; i < 12; i++) {
    // console.log(`Current value of index/counter is ${i}`); //output : 0,1,2,3...11
}

for (let i = 0; i < 12; ++i) {
    // console.log(`Current value of index/counter is ${++i}`); //out put 3, 5, 7 ,9, 11
}

for (let i = 12; i > 0; i--) {
    // console.log(`Current value of index/counter is ${i}`); 
}

for (let i = 0; i < 12; i += 2) {
    // console.log(`Current value of index/counter is ${i}`); 
}
/*
 infinite loops
 for(let i = 0; i < 12; i--){
    console.log(`Current value of index/counter is ${i}`); 
 } 

 for(1;1;1){

 }

 for(true; true;){

 }
 */


// Break ---> way to exit a loop
for (let i = 0; i < 10; i++) {
    if (i == 8) break;
    console.log(`Current value of index/counter is ${i}`);
}

// continue --> skip a loop
for (let i = 0; i < 10; i++) {
    if (i % 2 == 8) continue;
    console.log(`Current value of index/counter is ${i}`);
}

// FOR
// FOR OF
// FOR IN
// FOREACH
// WHILE
// DO WHILE

// FOR of --> Iteratables [ARRAY]
let crayons = ['Red', 'Green', 'BLue'];
let colors = [];
let vivids = new Array(5);

console.log('After Array!');
// For (key of iteratables) {statement|break|continue}
for (crayolala of crayons) {
    console.log(typeof crayolala);
    console.log(`Current crayola is colored ${crayolala}`);
}

console.log('After Array');

// FOR --------
let creature = {};
let person = new Object();
let human = {
    hairColor: 'Red',
    hands: 2,
    eyeColor: 'Brown',
    alive: true,
    height: 175,
    weight: 55,
    eat: () => { this.weight += 1; }
};

console.log('After Object!');
// for in
for (key in human) {
    console.log(`${key}: Current value is ${human[key]}`);
}



// While Loop
// init counter;
// while (condition) {statement|break|continue; delta(counter)}
let counter = 10;
while (counter > 0) {
    console.log(`Current value of index/counter is ${counter}`);
    counter--;
}

// DO WHILE
// init counter;
// do {statement|break|continue; delta(counter) while (counter)}
let tally = 10;
do {
    console.log(`Current value of index/counter is ${tally}`);
    tally--
} while (tally > 0);
