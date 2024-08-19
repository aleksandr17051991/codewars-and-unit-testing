const { filter_list } = require('../tasks/t9-only-number-list');

describe('Filtered list with numbers', () => {
  const testCases = [
    {
      name: `[1, 2, 'a', 'b'] list retuns [1,2]`,
      argument: [1, 2, 'a', 'b'],
      expectedList: [1, 2],
    },
    {
      name: `[1, 'a', 'b', 0, 15] list retuns [1, 0, 15]`,
      argument: [1, 'a', 'b', 0, 15],
      expectedList: [1, 0, 15],
    },
    {
      name: `[1, 2, 'aasf', '1', '123', 123] list retuns [1, 2, 123]`,
      argument: [1, 2, 'aasf', '1', '123', 123],
      expectedList: [1, 2, 123],
    },
  ];

  testCases.forEach((test) => {
    it(test.name, () => {
      const testedFunc = filter_list(test.argument);

      expect(testedFunc).toEqual(test.expectedList);
    });
  });
});
