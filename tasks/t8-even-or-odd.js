//Create a function that takes an integer as an argument
//and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOdd(number) {
  if (number >= Number.MAX_SAFE_INTEGER) {
    throw Error('The number is too big');
  }
  if (number <= Number.MIN_SAFE_INTEGER) {
    throw Error('The number is too small');
  }

  return number % 2 === 0 ? 'Even' : 'Odd';
}

module.exports = {
  evenOdd,
};
