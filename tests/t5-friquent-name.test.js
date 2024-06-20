const { friquentName } = require('../tasks/t5-friquent-name');

describe('Correct list of names', () => {
  const testCases = [
    {
      testName: 'Max used name - Ann',
      argument: ['Ann', 'John', 'Bob', 'Ann', 'Ann'],
      expectedName: 'Ann',
    },
    {
      testName: 'Empty array',
      argument: [],
      expectedName: 'Your list is empty',
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
    {
      testName: 'all values in array - undefined and null',
      argument: [null, undefined, null],
      expectedName: "Your list doesn't have names",
    },
  ];

  testCases.forEach((test) => {
    it(test.testName, () => {
      const testedFunc = friquentName(test.argument);

      expect(testedFunc).toBe(test.expectedName);
    });
  });
});

//разобрать случаи с undefined / null

//разобрать случай что все имена разные то ответ приходит кокоето сообщение
