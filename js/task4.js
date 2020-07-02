let counterValue = 0;
const counterValueRef = document.querySelector('#value');
const btnIncRef = document.querySelector('button[data-action="increment"]');
const btnDecRef = document.querySelector('button[data-action="decrement"]');

btnIncRef.addEventListener('click', increment);
btnDecRef.addEventListener('click', decrement);

function increment() {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
}
function decrement() {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
}
