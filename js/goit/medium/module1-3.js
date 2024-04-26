// TODO:=============================Task-1===================================================
// Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив де будуть лише ті елементи які зустрічаються і в arr1 і arr2.

// #region
function commonElem(arr1 = [], arr2 = []) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;

  let newArray = [];
  for (const item of arr1) {
    if (arr2.includes(item) && !newArray.includes(item)) newArray.push(item);
  }

  return newArray;
}

// console.log(
//   commonElem([1, 5, 8, 7, 9, 'h', 6, 'j', 'o', 8], [5, 'o', 'h', 8, 7, 8])
// );
// #endregion

// TODO:=============================Task-2===================================================
// Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив де будуть лише елементи масиву arr1 яких не має у масиві arr2.

// #region
function nonCommonElem(arr1 = [], arr2 = []) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;

  let newArray = [];

  for (const item of arr1) {
    if (!arr2.includes(item) && !newArray.includes(item)) newArray.push(item);
  }

  for (const item of arr2) {
    if (!arr1.includes(item) && !newArray.includes(item)) newArray.push(item);
  }

  return newArray;
}

// console.log(
//   nonCommonElem(
//     [1, 5, 8, 7, 12, 9, 'h', 6, 'j', 'o', 8],
//     [5, 'o', 'h', 8, 7, 8, 10]
//   )
// );
// #endregion

// TODO:=============================Task-3===================================================
// Напиши функцію яка приймає масив та знаходить мінімальний елемент.

// #region
function searchMinInArray(array) {
  if (!Array.isArray(array)) return false;

  let min = Infinity;

  for (const item of array) {
    if (item < min) min = item;
  }
  return min;
}

// console.log(searchMinInArray([1, 5, -5, 5, -7]));
// #endregion

// TODO:=============================Task-4===================================================
// Напиши функцію яка приймає масив та знаходить максимальний елемент.

// #region
function searchMaxInArray(array) {
  if (!Array.isArray(array)) return false;

  let max = -Infinity;

  for (const item of array) {
    if (item > max) max = item;
  }

  return max;
}

// console.log(searchMaxInArray([1, 6, -5, 5, -7, 78]));
// #endregion

// TODO:=============================Task-5===================================================
// Напиши функцію яка приймає масив та повертає масив лише з тих елементів які більші за середнє значення всіх елементів масиву.

// #region
function greaterThanAverage(array) {
  if (!Array.isArray(array)) return false;

  let newArray = [];
  let totalSumElem = 0;

  for (const item of array) {
    totalSumElem += item;
  }

  const averageElem = totalSumElem / array.length;

  for (const item of array) {
    totalSumElem += item;
    if (item > averageElem) newArray.push(item);
  }

  //   console.log(averageElem);
  return newArray;
}

// console.log(greaterThanAverage([1, 2, 3, 4, 8, 10, 1, 6]));
// #endregion

// TODO:=============================Task-6===================================================
// Напиши функцію яка приймає масив та повертає масив лише з тих елементів які більші за власний індекс.

// #region
function greaterThanIndex(array) {
  if (!Array.isArray(array)) return false;

  let newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > i) newArray.push(array[i]);
  }

  return newArray;
}

// console.log(greaterThanIndex([1, 0, 5, 4, 0, 2]));
// #endregion

// TODO:=============================Task-7===================================================
// Напишіть функці яка приймає масив чисел. Функція повинна знайти мінімальний елемент та видалити його з масиву.

// #region
function searchMinAndDel(array) {
  if (!Array.isArray(array)) return false;

  let min = Infinity;

  for (const item of array) {
    if (item < min) min = item;
  }

  while (array.includes(min)) {
    array.splice(array.indexOf(min), 1);
  }

  return array;
}

// function searchMinAndDel(array) {
//   if (!Array.isArray(array)) return false;

//   let min = Infinity;
//   let newArray = [];

//   for (const item of array) {
//     if (item < min) min = item;
//   }

//   for (const item of array) {
//     if (item !== min) newArray.push(item);
//   }

//   return newArray;
// }

// console.log(searchMinAndDel([1, 5, -5, 5, -7, -7]));
// #endregion

// TODO:=============================Task-8===================================================
// Напиши функцію яка приймає два параметри start та end. Функія повина повернути масив де будуть числа з діапазону але лише ті у яких не має цифри 5.
// К прикладу числа(51, 25, 15, 256) не підходять бо містять символ "5" у собі.

// #region
function createNewArr(start, end, value) {
  if (typeof start !== 'number' || typeof end !== 'number') return false;

  newArray = [];

  for (let i = start; i <= end; i += 1) {
    if (i.toString().includes(value) === false) newArray.push(i);
  }

  return newArray;
}

// console.log(createNewArr(1, 16, 5));
// #endregion
