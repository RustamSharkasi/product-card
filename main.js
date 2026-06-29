//Покраска всех карточек

const productCards = document.querySelectorAll('.card');
const changeColorAllCards = document.querySelector('#change-color-all-cards');
const greenColorHash = '#45fd45';
const blueColorHash = '#ff7e7e';
const googleURL = 'https://google.com';

changeColorAllCards.addEventListener('click', () => {
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

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №6'))

function outputConsoleLog(massege) {
  alert(massege)
  console.log(massege)
}

// Вывод заголовка в консоль лог при наведении

const titleElement = document.querySelector('.container__title')

titleElement.addEventListener('mouseover', logTitle)

function logTitle() {
  console.log(titleElement.textContent)
}

// Добовляем кнопку меняющую цвет при нажатии

const changeColorButton = document.querySelector('#change-color-button')

changeColorButton.addEventListener('click', () => {
  changeColorButton.classList.toggle('red-button')
});
