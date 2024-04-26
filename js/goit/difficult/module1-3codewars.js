// TODO:============================Task-1=========================================
// TODO:====================Sort array by string length============================
// ?Condition
// #region
// ?===============================================================================
// Write a function that takes an array of strings as an argument
// and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:
// * ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:
// * ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths,
// so you will not have to decide how to order multiple strings of the same length.
// ?===============================================================================
// #endregion

// !Solution
// #region
function sortByLength(array) {
  if (!Array.isArray(array)) return false;

  let sortArray = [...array];
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

// console.log(sortByLength(['Telescopes', 'Glasses', 'Eyes', 'Monocles']));
//["Eyes", "Glasses", "Monocles", "Telescopes"]

// #endregion
// TODO:============================Task-2=========================================
// TODO:========================Remove the minimum=================================
// ?Condition
// #region
// ?===============================================================================
// Given an array of integers, remove the smallest value. Do not mutate the original array/list.
// If there are multiple elements with the same value, remove the one with the lowest index.
// If you get an empty array / list, return an empty array / list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]
// ?===============================================================================
// #endregion

// !Solution
// #region

function removeSmallest(numbers) {
  if (!Array.isArray(numbers)) return false;

  const min = Math.min(...numbers);
  let arrayWithoutSmallest = [...numbers];

  //   for (const item of arrayWithoutSmallest) {
  if (arrayWithoutSmallest.includes(min))
    arrayWithoutSmallest.splice(arrayWithoutSmallest.indexOf(min), 1);
  //   }

  return arrayWithoutSmallest;
}
// console.log(removeSmallest([1, 2, 3, 4, 5]));
//[2,3,4,5]

// console.log(removeSmallest([5, 3, 2, 1, 4]));
//[5,3,2,4]

// console.log(removeSmallest([2, 2, 1, 2, 1]));
//[2,2,2,1]

// #endregion
// TODO:============================Task-3=========================================
// TODO:========================Don't give me five!================================
// ?Condition
// #region
// ?===============================================================================
// In this kata you get the start number and the end number of a region
// and should return the count of all numbers except numbers with a 5 in it.
// The start and the end number are both inclusive!

// Examples:

// * 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// * 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!
// ?===============================================================================
// #endregion

// !Solution
// #region

function dontGiveMeFive(start, end) {
  if (typeof start !== 'number' || typeof end !== 'number' || start > end)
    return 'Error';

  let count = 0;

  for (let i = start; i <= end; i += 1) {
    if (i.toString().includes('5')) continue;
    count += 1;
  }

  return `Result ${count}`;
}

// console.log(dontGiveMeFive(1, 9));
//Result 8

// console.log(dontGiveMeFive(4, 17));
//Result 12

// #endregion
// TODO:============================Task-4=========================================
// TODO:========================Likes VS Dislikes==================================
// ?Condition
// #region
// ?===============================================================================
// Create a function that takes in a list of button inputs and returns the final state.

// Examples
// * likeOrDislike([Dislike]) => Dislike
// * likeOrDislike([Like,Like]) => Nothing
// *likeOrDislike([Dislike,Like]) => Like
// * likeOrDislike([Like,Dislike,Dislike]) => Nothing

// Notes
// If no button is currently active, return Nothing.
// If the list is empty, return Nothing.
// ?===============================================================================
// #endregion

// !Solution
// #region

const Dislike = 'Dislike';
const Nothing = 'Nothing';
const Like = 'Like';

// function likeOrDislike(buttons) {
//   let state = Nothing;

//   for (let i = 0; i < buttons.length; i++) {
//     if (buttons[i] === state) {
//       state = Nothing;
//     } else {
//       state = buttons[i];
//     }
//   }

//   return state;
// }

function likeOrDislike(buttons) {
  let state;

  for (const button of buttons) {
    switch (button) {
      case 'Like':
        state = state === 'Like' ? 'Nothing' : 'Like';
        break;
      case 'Dislike':
        state = state === 'Dislike' ? 'Nothing' : 'Dislike';
        break;
      default:
        return state;
    }
  }

  return state;
}

// console.log(likeOrDislike([Dislike]));
// Dislike

// console.log(likeOrDislike([Like, Like]));
// Nothing

// console.log(likeOrDislike([Dislike, Like]));
// Like

// console.log(likeOrDislike([Like, Dislike, Dislike]));
// Nothing

// console.log(likeOrDislike([Dislike, Dislike]));
//Nothing

// console.log(likeOrDislike([Like, Like, Like]));
//Like

// console.log(likeOrDislike([Like, Dislike]));
//Dislike

// console.log(likeOrDislike([Dislike, Like, Dislike]));
//Dislike

// #endregion
// TODO:============================Task-5=========================================
// ?Condition
// #region
// ?===============================================================================

// ?===============================================================================
// #endregion

// !Solution
// #region

// #endregion
// TODO:============================Task-6=========================================
// ?Condition
// #region
// ?===============================================================================

// ?===============================================================================
// #endregion

// !Solution
// #region

// #endregion
// TODO:============================Task-7=========================================
// ?Condition
// #region
// ?===============================================================================

// ?===============================================================================
// #endregion

// !Solution
// #region

// #endregion
// TODO:============================Task-8=========================================
// ?Condition
// #region
// ?===============================================================================

// ?===============================================================================
// #endregion

// !Solution
// #region

// #endregion
// TODO:============================Task-9=========================================
// ?Condition
// #region
// ?===============================================================================

// ?===============================================================================
// #endregion

// !Solution
// #region

// #endregion
// TODO:============================Task-10=========================================
// ?Condition
// #region
// ?===============================================================================

// ?===============================================================================
// #endregion

// !Solution
// #region

// #endregion
// TODO:============================Task-11=========================================
// ?Condition
// #region
// ?===============================================================================

// ?===============================================================================
// #endregion

// !Solution
// #region

// #endregion
