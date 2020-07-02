const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', ev => {
  ev.target.value
    ? (outputNameRef.textContent = ev.target.value)
    : (outputNameRef.textContent = 'незнакомец');
});
