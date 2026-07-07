// Задание 3. Объект с моими данными

const person = {
  name: 'Rustam',
  firstName: 'Malsurgenov',
  age: '32',
  country: 'Russia',
  city: 'Nalchik',
  email: "rustam.alsharkasi@gmail.com",
  job: 'driver',
  status: 'Married'
};

// Задание 4. Объект сданными автомобиля

const myAuto = {
  brand: 'Hyundai',
  model: 'Sonata',

  year: 2004,

  color: 'White',
  transmission: 'Automatic',
  maxspeed: 240
};

myAuto.owner = person;

// Задание 5. Функция с проверкой макс.скорости

function checkMaxSpeed(auto) {
  if ('maxspeed' in auto) {
    return;
  };
  auto.maxspeed = 200;
};

checkMaxSpeed(myAuto);
console.log(myAuto);

// Задание 6.

function showPropertyValue(auto, propertyValue) {
  console.log(auto[propertyValue])
};

showPropertyValue(myAuto, 'model');


// Задание 7. Создаем массив книг

const russianClassics = [
  {
    title: "Война и мир",
    author: "Лев Толстой",
    year: 1869,
    coverColor: "Светло-серый",
    genre: "Роман"
  },
  {
    title: "Евгений Онегин",
    author: "Александр Пушкин",
    year: 1833,
    coverColor: "Голубой ",
    genre: "Роман"
  },
  {
    title: "Анна Каренина",
    author: "Лев Толстой",
    year: 1878,
    coverColor: "Коричневый",
    genre: "Роман"
  },
  {
    title: "Герой нашего времени",
    author: "Михаил Лермонтов",
    year: 1840,
    coverColor: "Бежевый",
    genre: "Роман"
  }
];

russianClassics.push({
  title: "Преступление и наказание",
  author: "Федор Достоевский",
  year: "1866"
  , coverColor: "Тёмно-синий",
  genre: "Роман"
});

console.log(russianClassics);

// Задание 8. ОбЬединяем массивы в один

const englishClassics = [
  {
    title: "Гордость и предубеждение",
    author: "Джейн Остин",
    year: 1813,
    coverColor: "Кремовый",
    genre: "Роман"
  },
  {
    title: "Джейн Эйр",
    author: "Шарлотта Бронте",
    year: 1847,
    coverColor: "Тёмно-синий",
    genre: "Драма"
  },
  {
    title: "Портрет Дориана Грея",
    author: "Оскар Уайльд",
    year: 1890,
    coverColor: "Чёрный",
    genre: "Роман"
  },
  {
    title: "Приключения Оливера Твиста",
    author: "Чарльз Диккенс",
    year: 1838,
    coverColor: "Коричневый",
    genre: "Роман"
  }
];

const uniteBooks = [...russianClassics, ...englishClassics];

console.log(uniteBooks);

// Задание 9. Применение метода map.

let chekRareBooks = uniteBooks.map(function (book) {
  return {
    ...book,
    isRare: book.
      year < 1850

  };
});

console.log(chekRareBooks);