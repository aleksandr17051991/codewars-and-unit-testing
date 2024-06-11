// create function basicOp(operation, value1, value2)
// that sums, subs, divisions and multiplying args

exports.basicOp = function basicOp(operation, value1, value2) {
  //except string in values
  if (typeof value1 === 'string' || typeof value2 === 'string') {
    return 'Check input. Your values is not a number.';
  }

  //except too large numbers
  if (value1 === Number.MAX_VALUE || value2 === Number.MAX_VALUE) {
    return 'Your number is TOO LARGE';
  }

  //except Null, undefined, NaN
  if (
    operation === null ||
    operation === undefined ||
    value1 === null ||
    value1 === undefined ||
    value2 === null ||
    value2 === undefined
  ) {
    return 'One of arguments - null or undefined';
  }

  // common part - math operation
  if (operation === '+') {
    return value1 + value2;
  }
  if (operation === '-') {
    return value1 - value2;
  }
  if (operation === '*') {
    return value1 * value2;
  }
  if (operation === '/') {
    if (value2 === 0) {
      return 'Division by 0 is NOT allowed! Change value...';
    }
    return value1 / value2;
  }
  return 'You mast insert only: "+", "-", "*", "/"';
};
