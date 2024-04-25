// todo:============Replace all vowel to exclamation mark in the sentence=====

// Replace all vowel to exclamation mark in the sentence.
// !aeiouAEIOU is vowel.

/*
?Examples
*replace("Hi!") === "H!!"
*replace("!Hi! Hi!") === "!H!! H!!"
*replace("aeiou") === "!!!!!"
*replace("ABCDE") === "!BCD!"

*/

function replace(s) {
  const vowels = 'aeiouAEIOU'.split('');
  const str = s.split('');
  for (let i = 0; i < str.length; i += 1) {
    if (vowels.includes(str[i])) {
      str[i] = '!';
    }
  }
  return str.join('');
}
