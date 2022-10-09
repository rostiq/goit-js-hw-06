const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients');

ul.append(...ingredients.map(text => {
  const li = document.createElement('li');
  li.classList.add("item")
  li.textContent = text;
  return li;
  }));