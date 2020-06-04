const display = document.querySelector('.display');
const btnEq = document.querySelector('.btn-eq');

document.querySelectorAll('.digits button')
    .forEach( button => button.addEventListener('click', digitPressed) )

function digitPressed (ev) {
    display.value += ev.target.innerText;   
}

document.querySelectorAll('.opers button')
    .forEach( button => button.addEventListener('click', operPressed) )

function operPressed (ev) {
    display.value += ev.target.innerText;   
}
btnEq.addEventListener('click', () => display.value = eval(display.value));

document.querySelectorAll('.clear button')
    .forEach( button => button.addEventListener('click', clearPressed) )

function clearPressed () {
    display.value = " ";    
}

document.querySelectorAll('.backspace button')
    .forEach( button => button.addEventListener('click', backspacePressed) )

function backspacePressed () {
    var exp = display.value
    display.value = exp.substring(0, exp.length-1);    
}

document.querySelectorAll('.error')
    .forEach( button => button.addEventListener('click', error) )

function error() {
  var eval1 = eval(display.value);
  if (Math.abs(eval1) == Infinity) return alert("Error!");
  else display.value = eval1;
}

setInterval( ()=> {
    document.querySelector('.clock').innerText = (new Date()).toLocaleTimeString();
}, 1000);