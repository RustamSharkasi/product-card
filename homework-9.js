// Уровень 1. Задание 2.

const nambers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filterFromFive = nambers.filter(function (namber) {
  return namber >= 5;
});

console.log(filterFromFive);

// Уровень 1. Задание 3.

const products = ['Картошка', 'Капуста', 'Помидор', 'Марковка', 'Свекла', 'Редиска'];

let findMarking = products.includes("Свекла");

console.log(findMarking)

// Уровень 1. Задание 4.

products.reverse();
nambers.reverse();
console.log(products);
console.log(nambers);