const showTempCity = (city, temp) => {
  console.log(`Сейчас в городе ${city} температура — ${temp} градусов по Цельсию`);
};

showTempCity('Medina', '38');

const LIGHT_SPEED = 299;

function checkSpeed(speed) {
  if (speed > LIGHT_SPEED) {
    console.log('Сверхсветовая скорость');
  } else if (speed === LIGHT_SPEED) {
    console.log('Скорость света');
  } else {
    console.log('Субсветовая скорость');
  }
}

checkSpeed(300);

let product = 'Хлеб';
let price = 50;

function saleProduct(budget) {
  if (budget >= price) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${price - budget}, пополните баланс`);
  }
}

saleProduct(40);

function calcPerc(a, b) {
  console.log(`${b}%  от числа ${a} равен ${a * b / 100}`);
};

calcPerc(200, 25);

const speed = '250км/ч';
let dist = '12000км';
var hour = '24ч';