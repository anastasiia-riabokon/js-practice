// TODO:==========================Task-1====================================================
// Напиши функцію, яка приймає массив чисел і повертає новий масив, де всі парні числа переміщені в початок, а всі непарні - в кінець.

// #region
function sortEvenAndOdd(array) {
  if (!Array.isArray(array)) return false;

  let newArray = [];
  let evenArray = [];
  let oddArray = [];

  for (const item of array) {
    item % 2 === 0 ? evenArray.push(item) : oddArray.push(item);
  }
  newArray = evenArray.concat(oddArray);

  return newArray;
}

// console.log(sortEvenAndOdd([1, 2, 3, 4, 5, 6, 7, 8]));
// #endregion

// TODO:==========================Task-2====================================================
// Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен елемент є сумою усіх попередніх елементів.

// #region
function everyElemIsSumPreviousElem(array) {
  if (!Array.isArray(array)) return false;

  let newArray = [];

  for (let i = 0; i < array.length - 1; i += 1) {
    array[i] += array[i + 1];
    newArray.push(array[i]);
  }

  return newArray;
}

// console.log(everyElemIsSumPreviousElem([1, 2, 3, 4, 5, 6, 7, 8]));
// #endregion

// TODO:==========================Task-3====================================================
// Напиши функцію, яка приймає массив чисел і повертає новий массив, що містить лише унікальні числа.

// #region
function arrayUnique(array) {
  if (!Array.isArray(array)) return false;

  let newArray = [];

  for (const item of array) {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  }

  return newArray;
}

// console.log(arrayUnique([1, 2, 3, 4, 5, 2, 3, 4]));
// #endregion

// TODO:==========================Task-4====================================================
// Напиши функцію, яка приймає два масиви і повертає об'єднаний массив без дублювання елементів.

// #region

function combiningArray(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;

  let mergedArray = arr1.concat(arr2);
  let uniArray = [];

  for (const item of mergedArray) {
    if (!uniArray.includes(item)) {
      uniArray.push(item);
    }
  }

  return uniArray;
}

// console.log(combiningArray([1, 2, 3, 4, 5, 2, 3, 4], [4, 5, 7, 8, 9, 10]));
// #endregion

// TODO:==========================Task-5====================================================
// Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен елемент є середньоарифметичним всіх сусідніх елементів.

// #region
function everyElemIsAveragePreviousElem(array = []) {
  if (!Array.isArray(array)) return false;

  let arrayWithAverElem = [...array];

  for (let i = 1; i < arrayWithAverElem.length - 1; i += 1) {
    arrayWithAverElem[i] =
      (arrayWithAverElem[i - 1] + arrayWithAverElem[i + 1]) / 2;
  }

  return arrayWithAverElem;
}

// console.log(everyElemIsAveragePreviousElem([2, 2, 4, 4, 6]));
// #endregion

// TODO:==========================Task-6====================================================
// Напиши функцію, яка приймає массив чисел і повертає новий массив, де елементи відсортовані в порядку збільшення або зменшення.

// #region
function sortNum(array) {
  if (!Array.isArray(array)) return false;

  let sortArray = [...array];
  let util;

  for (let i = 0; i < sortArray.length; i += 1) {
    for (let j = 1 + i; j < sortArray.length; j += 1) {
      if (sortArray[i] > sortArray[j]) {
        util = sortArray[i];
        sortArray[i] = sortArray[j];
        sortArray[j] = util;
      }
    }
  }

  return sortArray;
}

// console.log(sortNum([5, 7, 1, 3, 9, 5]));
// #endregion

// TODO:==========================Task-7====================================================
// Напиши функцію, яка приймає массив рядочків та сортує їх за довжиною елементів.

// #region
function sortStrElemArray(a = []) {
  if (!Array.isArray(a)) return false;

  let sortArray = [...a];
  let util;

  for (let i = 0; i < sortArray.length; i += 1) {
    for (let j = 1 + i; j < sortArray.length; j += 1) {
      if (sortArray[i].length > sortArray[j].length) {
        util = sortArray[i];
        sortArray[i] = sortArray[j];
        sortArray[j] = util;
      }
    }
  }

  return sortArray;
}

// console.log(
//   sortStrElemArray(['hello', 'world', '!', 'my', 'name', 'is', '...'])
// );
// #endregion
