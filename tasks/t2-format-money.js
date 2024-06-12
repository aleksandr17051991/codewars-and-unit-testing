//create function that takes any valid number
// and returns the value rounded to two zeros after decimal point with "$"
// input: 33,2 - output: '$33,20'
// input: 3,22434 - output: '$3,22'
// input: 0 - output: '$0,00'

exports.formatMoney = (number) => {
  if (typeof number === 'string') {
    throw new Error('You add string...');
  }
  if (number === null || number === undefined) {
    throw new Error('You amount is incorrect');
  }
  if (number === Number.MAX_VALUE) {
    throw new Error("It's really big number. We dont't have this amount");
  }

  return `$${number.toFixed(2)}`;
};
