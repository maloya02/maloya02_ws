// custom script
// alert('Welcome to js')

// Selecting an Element
// 1. document.getElementById('id');
// 2. document.getElementsByClassName('class-name');
// 3. document.getElementsByName('anme');
// 4. document.getElementsByTagname('h1');

// 1.

const header = document.getElementById('header');
console.log(header);
console.log(typeof header);
console.dir(header);

// 2.

const items = document.getElementsByClassName('list-item');
console.log(items);
console.log(typeof items);
console.dir(items.length);
console.log(items[0]);

// 3.

const ulItems = document.getElementByName('listItems');
console.log(ulItems);
console.log(typeof ulItems);
console.log(items.length);
console.log(items[0]);

// 4.

const liItems = document.getElementsByTagName('li');
console.log(liItems);
console.log(typeof liItems);
console.log(liItems.length);
console.log(liItems[0]);

// 5.
// document.querySelector(), document.querySelectorAll();

let header1 = document.querySelector('#header');
let header2 = document.querySelectorAll('#header');

console.log(header1);
console.log(header2);

// Navigation
// document.createElement();

let div = document.createElement('div');
div.id = 'newDiv';
div.innerHTML = `<p class="bg-success text-white">Newly created paragraph</p>`;
document.body.appendChild(div);

const createMenu = name => {
  let li = document.createElement('li');
  li.classList.add('list-items');
  li.classList.add('new-item');
  li.textContent = name;
  return li;
};
const createSubHead = text => {
  let subHead = document.createElement('h3');
  subHead.textContent = text;
  return subHead;
};

const menu = document.querySelector('#listItems');

menu.appendChild(createMenu('New Item #1'));
menu.appendChild(createMenu('Home'));

document.body.insertBefore(createSubHead('User Options'), menu);
menu.insertBefore(createMenu('About'), menu.firstElementChild);
menu.insertBefore(createMenu('Zuki Deals'), menu.lastElementChild);