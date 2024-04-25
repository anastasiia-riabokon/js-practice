/*
TODO: task 2 Search good idea
In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
If there are no good ideas, as is often the case, return 'Fail!'.
*/

function well(x) {
  if (x.length === 0) {
    return 'Fail!';
  }
  const xGood = x.filter(i => i === 'good');
  for (let i = 0; i < x.length; i++) {
    if (xGood.length === 0) {
      return 'Fail!';
    } else if (xGood.length <= 2) {
      return 'Publish!';
    } else {
      return 'I smell a series!';
    }
  }
}
