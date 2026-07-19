// Задание 2.

import { productCards } from "./product-cards.js";

// Задание 3 и 5.

const productTemplate = document.getElementById('product-template');
const productList = document.getElementById('product-list');

function getCardsCount() {
  for (; ;) {
    const count = Number(prompt("Сколько карточек отобразить? От 1 до 5"));
    if (count >= 1 && count <= 5) {
      return count;
    }
    alert("Введите число от 1 до 5");
  }
};

const count = getCardsCount();
console.log(count);
console.log(productCards.slice(0, count));

function renderCards(productCards) {
  productCards.forEach(product => {
    const productClone = productTemplate.content.cloneNode(true);
    productClone.querySelector('.card__img').src = `./img/${product.image}.png`
    productClone.querySelector('.card__img').alt = product.title
    productClone.querySelector('.card__subtitle').textContent = product.subtitle
    productClone.querySelector('.card__title').textContent = product.title
    productClone.querySelector('.card__descr').textContent = product.description
    productClone.querySelector('.price__value').textContent = `${product.priceValue} \u20BD`

    const compoundsList = productClone.querySelector('.compound__list');
    product.compounds.forEach(compound => {
      const li = document.createElement('li');
      li.className = 'compound__list'
      li.textContent = compound;
      compoundsList.appendChild(li);
    });

    productList.appendChild(productClone);
    console.log(productList);
  })
};

renderCards(productCards.slice(0, count));

// Задание 4.

const cardNamesAndDescr = productCards.reduce((result, product) => {
  const productNameAndDescr = { [product.title]: product.description };
  result.push(productNameAndDescr);
  return result
}, []);

console.log(cardNamesAndDescr);