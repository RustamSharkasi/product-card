const showTempSity = (sity, temp) => {
  console.log(`Сейчас в ${sity} температура — ${temp} градусов по Цельсию`);
};

showTempSity('Medina', '38');

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
const price = 50;

function saleProduct(budget) {
  if (budget >= price) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${price - budget}, пополните баланс`);
  }
}

saleProduct(40);