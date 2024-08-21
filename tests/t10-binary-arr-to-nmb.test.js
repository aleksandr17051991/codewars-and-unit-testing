const { binaryArrayToNumber } = require('../tasks/t10-binary-arr-to-nmb');

describe('Binary array turn into integer', () => {
  const testCases = [
    {
      name: 'Arr must return 1',
      argument: [0, 0, 0, 1],
      expectedNmb: 1,
    },
    {
      name: 'Arr must return 2',
      argument: [0, 0, 1, 0],
      expectedNmb: 2,
    },
    {
      name: 'Arr must return 5',
      argument: [0, 1, 0, 1],
      expectedNmb: 5,
    },
    {
      name: 'Arr must return 9',
      argument: [1, 0, 0, 1],
      expectedNmb: 9,
    },
    {
      name: 'Arr must return 2',
      argument: [0, 0, 1, 0],
      expectedNmb: 2,
    },
    {
      name: 'Arr must return 6',
      argument: [0, 1, 1, 0],
      expectedNmb: 6,
    },
    {
      name: 'Arr must return 15',
      argument: [1, 1, 1, 1],
      expectedNmb: 15,
    },
    {
      name: 'Arr must return 11',
      argument: [1, 0, 1, 1],
      expectedNmb: 11,
    },
  ];

  testCases.forEach((test) => {
    it(test.name, () => {
      const testedFunc = binaryArrayToNumber(test.argument);

      expect(testedFunc).toBe(test.expectedNmb);
    });
  });
});
