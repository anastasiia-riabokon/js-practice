/*
TODO: task power of 2
Complete the function that takes a non-negative integer n as input, 
and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
*/

function powersOfTwo(n) {
  let result = [];
  if (n >= 0) {
    for (let i = 0; i <= n; i++) {
      result.push(2 ** i);
    }
    return result;
  } else {
    return 'Enter non-negative integer n';
  }
}
