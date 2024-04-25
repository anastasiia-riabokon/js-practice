// TODO: ======================task-1=====================================

// Напиши функцію, яка приймає масив та виводить кожен елемент масиву у консоль.

// #region

function arrOutput(arr = []) {
  if (!Array.isArray(arr)) return false;

  for (const item of arr) console.log(item);
}

// arrOutput([1, 2, 3, 4, 5]);
// #endregion

// TODO: ======================task-2=====================================
// Напиши функцію, яка приймає масив та виводить кожен парний елемент масиву у консоль.

// #region
function evenElement(array = []) {
  if (!Array.isArray(array)) return false;

  for (let i = 0; i < array.length; i += 2)
    console.log(`index ${i} - ${array[i]}`);
}

// evenElement([5, 8, 'hello', true, 41]);
// #endregion

// TODO: ======================task-3=====================================
// Напиши функцію, яка приймає масив чисел та виводить лише парні числа у консоль.

// #region

function evenNumber(numbers = []) {
  if (!Array.isArray(numbers)) return false;

  for (const num of numbers) {
    if (typeof num !== 'number') return false;
    if (num % 2 === 0) return console.log(num);
  }
  return console.log('Not found even numbers!');
}

// evenNumber([1, 5, 9, 7]);

// #endregion

// TODO: ======================task-4=====================================
// Напиши функцію, яка приймає два параметри (arr, max). Де arr - це масив чисел. Потрібно вивести лише ті елементи масиву які більші за max.

// #region
function maxNumPerCondition(arr = [], max) {
  if (!Array.isArray(arr) || typeof max !== 'number') return 'Enter Numbers!';

  let maxNum = [];

  for (const item of arr) {
    if (typeof item !== 'number') return 'Enter Numbers!';
    if (item > max) maxNum.push(item);
  }
  return maxNum;
}

// console.log(maxNumPerCondition([1, 3, 8, 9], 5));
// #endregion

// TODO: ======================task-5=====================================
// Напиши функцію яка приймає масив та повертає суму всіх чисел у масиві.

// #region
function sumArray(arr = []) {
  if (!Array.isArray(arr)) return false;

  let totalSum = 0;

  for (const item of arr) {
    if (typeof item !== 'number') return false;

    totalSum += item;
  }
  return totalSum;
}

// console.log(sumArray([]));
// #endregion

// TODO: ======================task-6=====================================
// Напиши функцію яка приймає масив та елемент для пошуку. Фукнція повинна порахувати скільки разів шуканий елемент зустрічається у масиві.

// #region
function counterNum(array = [], n) {
  if (!Array.isArray(array)) return false;

  let count = 0;

  for (const item of array) {
    if (typeof item !== 'number' || typeof n !== 'number') return false;
    if (item === n) count += 1;
  }

  return count;
}

// console.log(counterNum([4, 5, 7, 5, 5, 3], 5));
// #endregion

// TODO: ======================task-7=====================================
// Напиши функцію яка приймає масив чисел. Функція повинна видалити усі негативні(відємні числа) з масиву та повернути новий масив.

// #region
function delNegativeNum(array) {
  if (!Array.isArray(array)) return false;

  let newArray = [...array];
  for (let i = newArray.length - 1; i >= 0; i--) {
    if (newArray[i] < 0) {
      newArray.splice(i, 1);
    }
  }
  return newArray;
}

// function delNegativeNum(array) {
//   let newArray = [];
//   for (let item of array) {
//     if (item >= 0) {
//       newArray.push(item);
//     }
//   }
//   return newArray;
// }

console.log(delNegativeNum([-2, 5, 8, -1, -4]));
// #endregion

// TODO: ======================task-8=====================================
// Напиши функцію яка приймає масив рядочків. Потрібно змінити кожен елемент масиву наступним чином - якщо
// довжина рядочку менша за 6 до привести рядок до нижнього регістру, в іншому випадку привести до верхнього регістру.

// #region

// #endregion

// TODO: ======================task-9=====================================
// Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить лише непарні числа.
// TODO: ======================task-10=====================================
// Напиши функцію, яка приймає масив чисел і повертає новий масив, де кожне число помножене на індекс, за яким воно знаходиться в масиві.
// TODO: ======================task-11=====================================
// Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить лише числа, які діляться на 3.
