const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', ev => {
  outputNameRef.textContent = ev.target.value || 'незнакомец';
});
