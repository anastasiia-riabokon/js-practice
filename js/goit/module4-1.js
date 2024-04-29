// TODO:==========================================Task-1==========================================

// Напиши функцію, яка створює об'єкт з ім'ям і віком.
// Функція повинна приймати два аргументи: ім'я (рядок) і вік (число).
// Поверни цей об'єкт.

// #region
function createObject(name, age) {
  const obj = {
    name,
    age,
  };
  return obj;
}

// console.log(createObject('Kiwi', 23));

// #endregion

// TODO:==========================================Task-2==========================================

// Напиши функцію, яка приймає об'єкт і додає до нього нову властивість "address" (рядок).
// Поверни оновлений об'єкт.

// #region
function addAddress(obj) {
  obj.address = '';
  return obj;
}

const myObj = {
  name: 'Lan',
  age: 18,
};

// console.log(addAddress(myObj));

// #endregion

// TODO:==========================================Task-3==========================================

// Напиши функцію, яка приймає об'єкт і новий вік.
// Функція повинна змінити значення властивості "age" в об'єкті на нове значення.
// Поверни оновлений об'єкт.

// #region
function changeAge(obj, newAge) {
  obj.age = newAge;
  return obj;
}

// console.log(changeAge(myObj, 25));

// #endregion

// TODO:==========================================Task-4==========================================

// Напиши функцію, яка приймає об'єкт і видаляє з нього властивість "age".
// Поверни оновлений об'єкт.

// #region
function removeAge(obj) {
  delete obj.age;
  return obj;
}

// console.log(removeAge(myObj));
// #endregion
// TODO:==========================================Task-5==========================================

// Напиши функцію, яка приймає об'єкт і повертає значення властивості "name".

// #region
function lookName(obj) {
  return obj.name;
}

// console.log(lookName(myObj));
// #endregion
// TODO:==========================================Task-6==========================================

// Напиши функцію, яка приймає об'єкт і повертає true, якщо властивість "address" існує в об'єкті, і false, якщо ні.

// #region
function checkAddress(obj) {
  return 'address' in obj;
}

// console.log(checkAddress(myObj));

// console.log(checkAddress(addAddress(myObj)));

// #endregion
// TODO:==========================================Task-7==========================================

// Напиши функцію, яка приймає два об'єкти і об'єднує їх в один.
// Якщо у об'єктів є однакові властивості, значення другого об'єкта мають замінити значення першого.
// Поверни результат.

// #region
function combineObj(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
// #endregion
// TODO:==========================================Task-8==========================================

// Напиши функцію, яка створює об'єкт з трьома властивостями: ім'ям, віком і адресою.
// Якщо ім'я та вік не передані, встанови їх значення за замовчуванням ("Unknown", 0 відповідно).
// Поверни об'єкт.

// #region
function createObjectDefault(name = 'Unknown', age = 0, address = '') {
  return { name, age, address };
}

// console.log(createObjectDefault('Misha', 35, 'New York'));
// console.log(createObjectDefault());
// #endregion
// TODO:==========================================Task-9==========================================

// Напиши функцію, яка приймає об'єкт та нові значення для імені та віку. Функція повинна змінити обидві властивості в об'єкті. Поверни оновлений об'єкт.

// #region
function updNameAndAge(obj, name, age) {
  obj.name = name;
  obj.age = age;
  return obj;
}

// console.log(updNameAndAge(myObj, 'Wei', 17));
// #endregion
// TODO:==========================================Task-10==========================================

// Напиши функцію, яка приймає об'єкт та нову властивість "email" (якщо її немає).
// Якщо в об'єкті вже є "email", нічого не роби.
// Поверни оновлений об'єкт.

// #region
function changeEmail(obj) {
  if ('email' in obj) {
    return obj;
  } else {
    obj.email = 'teat@test.ua';
  }

  return obj;
}

// console.log(changeEmail(myObj));
// #endregion
// TODO:==========================================Task-11==========================================

// Напиши функцію, яка приймає об'єкт і змінює тип значення властивості "age" з числа на рядок.
// Поверни оновлений об'єкт.

// #region
function changeTypeAge(obj) {
  obj.age = obj.age.toString();
  return obj;
}

// console.log(changeTypeAge(myObj));
// #endregion
// TODO:==========================================Task-12==========================================

// Напиши функцію, яка приймає об'єкт і змінює значення властивості "address", але тільки якщо ця властивість вже існує.
// Якщо її немає, поверни об'єкт без змін.

// #region
function checkChangeAddress(obj) {
  if ('address' in obj) {
    obj.address = 'new address';
  }

  return obj;
}
// #endregion
// TODO:==========================================Task-13==========================================

// Напиши функцію, яка приймає об'єкт користувача з властивостями name та сity. Та повертає рядок "User {імя користувача} from {місто користувача}!"

// #region
const secondObj = {
  name: 'Hua Chen',
  city: 'Ghost Town',
};

function returnInfo(obj) {
  return `User ${obj.name} from ${obj.city}`;
}

// console.log(returnInfo(secondObj));
// #endregion
// TODO:==========================================Task-14==========================================

// Напиши функцію, яка приймає масив з ключами і значеннями (наприклад, [["name", "John"], ["age", 25], ["address", "123 Street"]]) і створює об'єкт з цих пар. Поверни об'єкт.

// #region
function createObjectThroughArray(arr) {
  let obj = {};
  for (let pair of arr) {
    obj[pair[0]] = pair[1];
  }
  return obj;
}

// console.log(
//   createObjectThroughArray([
//     ['name', 'John'],
//     ['age', 25],
//     ['address', '123 Street'],
//   ])
// );
// #endregion
// TODO:==========================================Task-15==========================================

// Напиши функцію, яка приймає масив об'єктів і змінює в кожному з них властивість "age", збільшуючи її на 1. Поверни оновлений масив об'єктів.

// #region
function incrAge(obj) {
  for (const item of obj) {
    item.age += 1;
  }
  return obj;
}

const arrObj = [
  { name: 'John', age: 18 },
  { name: 'Mary', age: 19 },
  { name: 'Bob', age: 17 },
];

// console.log(incrAge(arrObj));
// #endregion
