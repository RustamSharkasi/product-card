// Уровень 2. Задание 6.

import { comments } from "./comments.js";

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

// Уровень 2. Задание 7.

console.log(comments.filter(comment => comment.email.includes('.com')));

// Уровень 2. Задание 8.

const changePostId = comments.map(comment => {
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1
  };
});

console.log(changePostId);

// Уровень 2. Задание 9.

const idNameComments = comments.map(comment => {
  return {
    id: comment.id,
    name: comment.name
  };
});

console.log(idNameComments);

// Уровень 2. Задание 10.

const addIsInvalid = comments.map(comment => {
  return {
    ...comment,
    isInvalid: comment.body.length > 180
  };
});

console.log(addIsInvalid);

// Уровень 3. Задание 11.

const userEmailsByReduce = comments.reduce((result, user) => {
  result.push(user.email);
  return result;
}, []);

const userEmailsByMap = comments.map(user => {
  return (user.email)
});

console.log(userEmailsByReduce);
console.log(userEmailsByMap);

// Уровень 3. Задание 12.

const userEmailsStrByReduce = userEmailsByReduce.join('\n');
const userEmailsStrByMap = userEmailsByMap.join('\n');

console.log(userEmailsStrByReduce);
console.log(userEmailsStrByMap);