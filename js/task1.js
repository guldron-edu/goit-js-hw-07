const quantityOfElements = document.querySelectorAll('.item');
console.log(`В списке ${quantityOfElements.length} категории`);

quantityOfElements.forEach(element => {
  const elementName = element.querySelector('h2');
  console.log(`Категория: ${elementName.textContent}`);

  const quantityOfLi = element.querySelectorAll('li');
  console.log(`Количество элементов: ${quantityOfLi.length}`);
});
