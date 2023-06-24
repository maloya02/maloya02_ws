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
// FOR OF --> Iteratables (Array, Collection, )
let crayons = [1, true, 'Red', 'Green', 'Blue'];
let colors = [];
let vivids = new Array(5);

console.log('After Array!');

// for (key of Iterables) {statement|break|continue;}
for(crayola of crayons) {
  console.log(typeof crayola);
  console.log(`Current crayola is colored ${crayola}`);
}

// FOR IN --> Object keys/values
let creature = {};
let person = new Object();
let human = {
  hairColor: 'pink',
  hands: 2,
  eyeColor: 'brown', 
  alive: true,
  height: 175,
  weight: 67,
  eat: function() {this.weight += 1;}
};

console.log('After Object!');

// for (key in object) { statement|break|continue;};
for(key in human) {
  console.log(`${key}: Current value is ${human[key]}`)
}

let car = {
  model: 'Tesla',
  year: '2022',
  accessories: {
    seat: 4,
    windows: 4,
    battery: 3000,
    lights: 27,
    tires: 3
  } 
};

console.log('\n'+'*'.repeat(30));
for(key in car) {
  //console.log(typeof key);
  if(car[key] == '[object Object]') {
    console.log(key+':');
    for(key2 in car[key]) {
      console.log(`\t${key2}: Current value is ${car[key][key2]}`);
    }
  } else {
    console.log(`${key}: Current value is ${car[key]}`);
  } 
}

console.log('\n'+'*'.repeat(30));
for(key in car.accessories) {
  console.log(`${key}: Current value is ${car[key]}`);
}


console.log('\n'+'*'.repeat(30));
// While Loop --- O or More RUN
// init counter;
// while (condition) {statement|break|continue; delta(counter);}
let counter = 10;
while(counter > 0) {
  console.log(`Current value of index/counter is ${counter}`);
  counter--;
}

// while(1) {
//   // implem
// }

// while(true) {
//   // implem
// }

console.log('\n'+'*'.repeat(30));
// DO WHILE --- AT LEAST ONCE
// init counter;
// do {statement|break|continue; delta(counter)} while (condition)
let tally = -1;
do {
  console.log(`Current value of tally is ${tally}`);
  tally--;
} while (tally > 0);
