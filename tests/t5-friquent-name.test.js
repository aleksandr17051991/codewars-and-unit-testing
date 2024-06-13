const { friquentName } = require('../tasks/t5-friquent-name');

describe('Correct list of names', () => {
  const testCases = [
    {
      testName: 'Max used name - Ann',
      argument: ['Ann', 'John', 'Bob', 'Ann', 'Ann'],
      expectedName: 'Ann',
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
//разобрать случай с пустым массивом
//разобрать случай что все имена разные то ответ приходит кокоето сообщение
