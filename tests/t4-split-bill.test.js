const { splitTheBill } = require('../tasks/t4-split-bill');

describe('', () => {
  const testCases = [
    {
      testName: 'Group with 3 person',
      argument: { Alex: 20, John: 15, Bill: 10 },
      expectedObj: { Alex: 5, John: 0, Bill: -5 },
    },
    {
      testName: 'Group with 2 person',
      argument: { Alex: 12, John: 15 },
      expectedObj: { Alex: -1.5, John: 1.5 },
    },
    {
      testName: 'Group with 5 person and coasts wit float number',
      argument: { Alex: 21.25, John: 1, Bill: 10.13, Ann: 12.02, Bob: 3 },
      expectedObj: {
        Alex: 11.77,
        John: -8.48,
        Bill: 0.65,
        Ann: 2.54,
        Bob: -6.48,
      },
    },
    {
      testName: "one of group doesn't have money",
      argument: { Alex: 2.34, John: 0, Bill: 3 },
      expectedObj: { Alex: 0.56, John: -1.78, Bill: 1.22 },
    },
  ];

  testCases.forEach((test) => {
    it(test.testName, () => {
      const testedFunc = splitTheBill(test.argument);

      expect(testedFunc).toEqual(test.expectedObj);
    });
  });
});

//additional checking (values are undefined, null, string)

describe('Errors cases', () => {
  const testCases = [
    {
      testName: 'ErrorMessage with undefned value',
      argument: { Alex: 2.34, John: 0, Bill: undefined },
      expectedError: 'One of fields is empty...',
    },
    {
      testName: 'ErrorMessage with null value',
      argument: { Alex: null, John: 0, Bill: 2 },
      expectedError: 'One of fields is empty...',
    },
    {
      testName: 'ErrorMessage with string value',
      argument: { Alex: 2.34, John: '23.33', Bill: 5 },
      expectedError: "One of the values isn't number",
    },
  ];

  testCases.forEach((test) => {
    it(test.testName, () => {
      expect(() => splitTheBill(test.argument)).toThrow(test.expectedError);
    });
  });
});
