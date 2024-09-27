// Task isogram

// An isogram is a word that has no repeating letters,
// consecutive or non-consecutive. Implement a function
// that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

// Examples:
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
  const strWithoutDoubles = str
    .toLowerCase()
    .split('')
    .filter((letter, index, arr) => index === arr.indexOf(letter))
    .join('');

  return str.length == strWithoutDoubles.length ? true : false;
}

//more modern variant

// function isIsogram(str) {
//   return new Set(str.toLowerCase()).size === str.length;
// }

module.exports = {
  isIsogram,
};
