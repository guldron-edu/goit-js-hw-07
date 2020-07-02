let input;
const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('change', ev => {
  input = ev.target.value;
  input.length >= inputRef.attributes['data-length'].value
    ? (inputRef.classList.add('valid'), inputRef.classList.remove('invalid'))
    : (inputRef.classList.remove('valid'), inputRef.classList.add('invalid'));
});
