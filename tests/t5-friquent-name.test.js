const { friquentName } = require('../tasks/t5-friquent-name');

describe('Correct list of names', () => {
  const testCases = [
    {
      testName: 'Max used name - Ann',
      argument: ['Ann', 'John', 'Bob', 'Ann', 'Ann'],
      expectedName: 'Ann',
    },
    {
      testName: 'value in array - undefined',
      argument: ['Ann', 'John', undefined, null, 'Bob', 'Bob'],
      expectedName: 'Bob',
    },
    {
      testName: 'value in array - null',
      argument: ['Ann', 'John', null, 'Bob', 'Bob'],
      expectedName: 'Bob',
    },
  ];

  testCases.forEach((test) => {
    it(test.testName, () => {
      const testedFunc = friquentName(test.argument);

      expect(testedFunc).toBe(test.expectedName);
    });
  });
});

//additional validation for list
describe('Additional checking', () => {
  const testCases = [
    {
      testName: 'Empty array',
      argument: [],
      expectedMessage: 'Your list is empty',
    },
    {
      testName: 'all values in array - undefined and null',
      argument: [null, undefined, null],
      expectedMessage: "Your list doesn't have names",
    },
    {
      testName: 'Without double names in array',
      argument: ['Ann', 'John', null, 'Bob', undefined, 'Jack', 'Rocky'],
      expectedMessage:
        "There are only different names. Don't find the most used name",
    },
  ];

  testCases.forEach((test) => {
    it(test.testName, () => {
      const testedFunc = friquentName(test.argument);

      expect(testedFunc).toBe(test.expectedMessage);
    });
  });
});
