const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const containerEl = document.querySelector('#ingredients');

const makeNewElements = ingredients.map(ingredient => {

  const liElement = document.createElement('li');
  liElement.textContent = ingredient;

  return liElement;
});

console.log(makeNewElements);

containerEl.append(...makeNewElements);
