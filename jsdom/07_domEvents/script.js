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