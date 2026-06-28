//Покраска всех карточек

const productCards = document.querySelectorAll('.card');
const changeColorAllCard = document.querySelector('#change-color-all-card');
const greenColorHash = '#00ff00';
const blueColorHash = '#0000ff';
const googleURL = 'https://google.com';

changeColorAllCard.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})


//Покраска первой карточки

const productCard = document.querySelector('.card');
const changeColorFirstCard = document.querySelector('#change-color-first-card');

changeColorFirstCard.addEventListener('click', () => {
  productCard.style.backgroundColor = blueColorHash;
})

// Открыть google

const opengooglebutton = document.querySelector('#open-google');

opengooglebutton.addEventListener('click', () => {
  //Или (window.open(googleURL)) // Или через URL без константы (window.open('https://google.com'))
})

// Добовляем всплывающее окно

opengooglebutton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open(googleURL)
  } else {
    return;
  }
}

//Вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №4'))

function outputConsoleLog(massege) {
  alert(massege)
  console.log(massege)
}

// Вывод заголовка в консоль лог при наведении

const titleElement = document.querySelector('.container__title')

titleElement.addEventListener('mouseover', () => titleConsoleLog('Выбери свой продукт'))

function titleConsoleLog(massege) {
  console.log(massege)
}

// Добовляем кнопку меняющую цвет при нажатии

const changeColorButton = document.querySelector('#change-color-button')

changeColorButton.addEventListener('click', () => {
  changeColorButton.classList.toggle('red-button')
});
