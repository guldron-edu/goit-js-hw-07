const sliderRef = document.querySelector('#font-size-control');
const fontSizeRef = document.querySelector('#text');

sliderRef.addEventListener('input', () => {
  fontSizeRef.style.fontSize = `${sliderRef.value}px`;
});
