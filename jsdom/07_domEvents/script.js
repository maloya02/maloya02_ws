// custom script
// alert('Welcome to js')

// events requirements
// 1. host
// 2. callack
// 3. target

let btnClickCounter = 0;

// steps
// 1. per click, increment counter
// 2. assign counter to the innerText of the btn (id=btnClickable)
const setCounterBtnLabel = (id) => {
    const btn = document.getElementById(id);
    btnClickCounter++;
    btn ? btn.innerText = `Counter [${btnClickCounter}]` : null;
} 
const btnClickable = document.getElementById('btnClickable');
btnClickable.addEventListener('click', event => {
    setCounterBtnLabel('btnClickable')
});

// 2. Mouse: mouseover, mouseout, onmouseover, onmouseout
const genRandomNumber = (max, min) => Math.floor(Math.random() * (max - min) + min);
const setImgSrc = (id, src) => document.getElementById(id) ? document.getElementById(id).src = `img/0${src}.jpg` : null;
const img = document.getElementById("imgTarget");
if (img) {
  img.addEventListener('click', () => {
    const randNumber = genRandomNumber(4, 1);
    setImgSrc('imgTarget', randNumber);
  });
  img.addEventListener('mouseover', () => {
    const randNumber = genRandomNumber(4, 1);
    setImgSrc('imgTarget', randNumber);
  });
  img.addEventListener('mouseout', () => {
    const randNumber = genRandomNumber(4, 1);
    setImgSrc('imgTarget', randNumber);
  });
  
}

// hide reveal password field
// const passReveal = (id, icon) => {
//   const pwBox = document.getElementById(id);
//   const eye = document.getElementById(icon).children[0];
//   if(pwBox && eye) {
//     pwBox.type = "text";
//     eye.classList = 'fa-solid fa-eye-slash'; 
//   }
// };
// const passHide = (id, icon) => {
//   const pwBox = document.getElementById(id);
//   const eye = document.getElementById(icon).children[0];
//   if(pwBox && eye) {
//     pwBox.type = "password";
//     eye.classList = 'fa-solid fa-eye'; 
//   }
// };

const passViewer = (id, icon, toShow = 1) => {
  const pwBox = document.getElementById(id);
  const eye = document.getElementById(icon).children[0];
  if(pwBox && eye) {
    pwBox.type = toShow ? "text" : "password";
    eye.classList = `fa-solid fa-eye${toShow ? '-slash' : ''}`;
  }
};

// 3. Event, mousedown/onmousedown, mouseup/onmouseup
const btnEye = document.getElementById('ieye');
if(btnEye) {
  btnEye.addEventListener('mousedown', () => {
    passViewer('password', 'ieye', 1);
    img.dispatchEvent(new Event('click'));
  });
  btnEye.addEventListener('mouseup', () => {
    passViewer('password', 'ieye', 0);
  });
}