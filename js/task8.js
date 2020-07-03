const inputRef = document.querySelector('#controls > input');
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const htmlBoxesLink = document.querySelector('#boxes');

function renderElement() {
  const boxRef = document.createElement('div');
  boxRef.classList.add('box');
  return boxRef;
}

// function destroyElement(box) {
//   box.remove();
// }

const createBoxes = amount => {
  destroyBoxes();
  let boxesListRef = [];

  for (let i = 0; i < amount; i++) {
    let element = renderElement();
    let minSize = 30;
    element.style.backgroundColor =
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
    if (i < 1) {
      element.style.height = minSize + 'px';
      element.style.width = minSize + 'px';
    } else {
      element.style.height = minSize + 10 * i + 'px';
      element.style.width = minSize + 10 * i + 'px';
    }
    boxesListRef.push(element);
  }
  htmlBoxesLink.append(...boxesListRef);
  inputRef.value = '';
};

const destroyBoxes = () => {
  // const boxes = document.querySelectorAll('.box');
  // boxes.forEach(box => destroyElement(box));
  htmlBoxesLink.innerHTML = '';
};

renderBtnRef.addEventListener('click', () => createBoxes(inputRef.value));
destroyBtnRef.addEventListener('click', () => destroyBoxes());
