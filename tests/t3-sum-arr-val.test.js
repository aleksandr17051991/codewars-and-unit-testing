const { sumArrVal } = require('../tasks/t3-sum-arr-val');

describe('Sum arr numbers', () => {
  const testCase = [
    {
      testName: 'Sum in sorted array',
      argument: [1, 2, 3, 4],
      expected: 5,
    },
    {
      testName: 'Sum in unsorted array',
      argument: [-881, 22, 13, 400, 0, 0],
      expected: 35,
    },
    {
      testName: 'Sum in array with 2 elements',
      argument: [22, 13],
      expected: 0,
    },
    {
      testName: 'Sum in array with 1 elements',
      argument: [8],
      expected: 0,
    },
    {
      testName: 'Sum in empty array',
      argument: [],
      expected: 0,
    },
  ];

  testCase.forEach((test) => {
    it(test.testName, () => {
      const testedFunc = sumArrVal(test.argument);

      expect(testedFunc).toBe(test.expected);
    });
  });
});

//additional checking (undefined, null, string etc)

describe('Additional checking sumArrVal', () => {
  const testCases = [
    {
      testName: 'undefined in array',
      argument: [4, undefined, 5, 6, 10],
      expected: 11,
    },
    {
      testName: 'undefined and 2 numbers in array',
      argument: [4, undefined, 5],
      expected: 0,
    },
    {
      testName: 'null in array',
      argument: [null, 5, null, 10, 15],
      expected: 10,
    },
    {
      testName: 'null and 2 numbers in array',
      argument: [1, null, 3, null],
      expected: 0,
    },
    {
      testName: 'string in array',
      argument: [4, '4', 6, 9, 10],
      expected: 15,
    },
    {
      testName: 'undefined, null and string in array',
      argument: [4, undefined, 5, 6, 'some', 10, null],
      expected: 11,
    },
  ];

  testCases.forEach((test) => {
    it(test.testName, () => {
      const testedFunc = sumArrVal(test.argument);

      expect(testedFunc).toBe(test.expected);
    });
  });
});
