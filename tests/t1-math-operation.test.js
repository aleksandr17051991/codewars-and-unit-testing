const { basicOp } = require('../tasks/t1-math-operations');

describe('checking "+" operation', () => {
  const testCase = [
    {
      testName: 'sum of 5 and 5',
      operation: '+',
      argument: [5, 5],
      expected: 10,
    },
    {
      testName: 'sum of 10 and -5',
      operation: '+',
      argument: [10, -5],
      expected: 5,
    },
    {
      testName: 'sum of 0 and -9',
      operation: '+',
      argument: [0, -9],
      expected: -9,
    },
  ];

  testCase.forEach((test) => {
    it(test.testName, () => {
      const testFunc = basicOp(
        test.operation,
        test.argument[0],
        test.argument[1]
      );
      expect(testFunc).toBe(test.expected);
    });
  });
});

describe('checking "-" operation', () => {
  const testCase = [
    {
      testName: 'sub of 5 and 5',
      operation: '-',
      argument: [5, 5],
      expected: 0,
    },
    {
      testName: 'sub of 10 and -5',
      operation: '-',
      argument: [10, -5],
      expected: 15,
    },
    {
      testName: 'sub of 10 and -9',
      operation: '-',
      argument: [10, -9],
      expected: 19,
    },
  ];

  testCase.forEach((test) => {
    it(test.testName, () => {
      const testFunc = basicOp(
        test.operation,
        test.argument[0],
        test.argument[1]
      );
      expect(testFunc).toBe(test.expected);
    });
  });
});

describe('checking "*" operation', () => {
  const testCase = [
    {
      testName: 'multipliying of 5 and 5',
      operation: '*',
      argument: [5, 5],
      expected: 25,
    },
    {
      testName: 'multipliying of 10 and -5',
      operation: '*',
      argument: [10, -5],
      expected: -50,
    },
    {
      testName: 'multipliying of 0 and -9',
      operation: '*',
      argument: [0, -9],
      expected: -0,
    },
  ];

  testCase.forEach((test) => {
    it(test.testName, () => {
      const testFunc = basicOp(
        test.operation,
        test.argument[0],
        test.argument[1]
      );
      expect(testFunc).toBe(test.expected);
    });
  });
});

describe('checking "/" operation', () => {
  const testCase = [
    {
      testName: 'division of 15 and 5',
      operation: '/',
      argument: [15, 5],
      expected: 3,
    },
    {
      testName: 'division of 10 and -5',
      operation: '/',
      argument: [10, -5],
      expected: -2,
    },
    {
      testName: 'division of 0 and -9',
      operation: '/',
      argument: [0, 2],
      expected: 0,
    },
    {
      testName: 'division of 9 and 0',
      operation: '/',
      argument: [9, 0],
      expected: 'Division by 0 is NOT allowed! Change value...',
    },
  ];

  testCase.forEach((test) => {
    it(test.testName, () => {
      const testFunc = basicOp(
        test.operation,
        test.argument[0],
        test.argument[1]
      );
      expect(testFunc).toBe(test.expected);
    });
  });
});

//additional checkings

describe('additional checking', () => {
  const testCase = [
    {
      testName: 'division by zero',
      operation: '/',
      argument: [22, 0],
      expectedMessage: 'Division by 0 is NOT allowed! Change value...',
    },
    {
      testName: 'operation is undefined',
      operation: undefined,
      argument: [22, 10],
      expectedMessage: 'One of arguments - null or undefined',
    },
    {
      testName: 'first value is null',
      operation: '+',
      argument: [null, 10],
      expectedMessage: 'One of arguments - null or undefined',
    },
    {
      testName: 'second value is undefined',
      operation: '-',
      argument: [10, undefined],
      expectedMessage: 'One of arguments - null or undefined',
    },
    {
      testName: 'one of values is string',
      operation: '*',
      argument: [10, 'string'],
      expectedMessage: 'Check input. Your values is not a number.',
    },
    {
      testName: 'one of values is Number.MAX_VALUE',
      operation: '*',
      argument: [Number.MAX_VALUE, 12],
      expectedMessage: 'Your number is TOO LARGE',
    },
  ];

  testCase.forEach((test) => {
    it(test.testName, () => {
      const testFunc = basicOp(
        test.operation,
        test.argument[0],
        test.argument[1]
      );
      expect(testFunc).toBe(test.expectedMessage);
    });
  });
});
