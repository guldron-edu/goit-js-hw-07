const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createElement = element => {
  const elementRef = document.createElement('li');
  elementRef.classList.add('element');
  elementRef.textContent = element;

  return elementRef;
};

const ingredientsListRef = ingredients.map(ingredient =>
  createElement(ingredient),
);

const htmlLink = document.querySelector('#ingredients');
htmlLink.append(...ingredientsListRef);
