// TODO: task Count Odd Numbers below n
//Given a number n, return the number of positive odd numbers below n, EASY!

// function oddCount(n) {
//   oddNum = [];
//   for (let i = 0; i < n; i++) {
//     if (i % 2 === 1) {
//       oddNum.push(i);
//     }
//   }
//   return oddNum.length;
// }

function oddCount(n) {
  return Math.floor(n / 2);
}
