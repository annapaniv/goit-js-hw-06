// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


  const listIngradients = document.querySelector('#ingredients');
  const itemIngredients = [];


function createItem (arr){
  arr.map((item) => {const listLi = document.createElement('li');
  listLi.classList.add('item');
  listLi.textContent = item;
  itemIngredients.push(listLi)}).join('');
  
listIngradients.append(...itemIngredients);}

createItem(ingredients);
