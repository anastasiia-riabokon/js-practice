// TODO: Task 1
// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.

function flickSwitch(arr) {
  let switchBoolean = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'flick') {
      switchBoolean = !switchBoolean;
      arr[i] = switchBoolean;
    } else {
      arr[i] = switchBoolean;
    }
  }
  return arr;
}
