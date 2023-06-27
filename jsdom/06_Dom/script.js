// custom script
// alert('Welcome to js')

// setting the html child/content
const hello = document.getElementById('hello')
if (hello) {
    hello.innerText = '<b>Hello dom - text lang</b>'
    // hello.innerHTML = '<span style="color:red;weight:900;">Hello Dom</span>'
    hello.innerHTML = '<span style="color:red;weight:900;">Hello Dom</span>'
}

// tag specific
const pic = document.getElementById('hello-pic')
if (pic) {
    pic.src = './images/burger2.jpg'
}

const byId = id => document.getElementById(id);
const alink = byId('hello-link');
alink ? alink.href = 'https://youtube.com' : null;

// change style of a tag
const title = byId('hello');
if (title) {
    title.style.backgroundColor = 'red';
    title.style.border = '5px solid black';
    title.style.color = 'pink';
    // 2nd syntax
    title.style.cssText = 'color: violet !important; font-size:30px';
    title.style.cssText = 'border: 5px solid pink !important';
    // 3rd syntaxt
    const colorStyle = ['color', 'blue', 'important'];
    title.style.setProperty(...colorStyle);

    title.style.setProperty('color','blue','important');
    title.style.setProperty('border','5px solid red','important');
    
}


console.log('after getting hello');
// console.dir();