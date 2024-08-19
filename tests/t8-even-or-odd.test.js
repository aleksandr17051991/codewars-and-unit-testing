const { evenOdd } = require('../tasks/t8-even-or-odd');

describe('Must return "Even" or "Odd"', () => {
  const testCases = [
    {
      name: 'number 12 must return "Even"',
      argument: 12,
      expected: 'Even',
    },
    {
      name: 'number 3 must return "Odd"',
      argument: 3,
      expected: 'Odd',
    },
    {
      name: 'number 0 must return "Even"',
      argument: 0,
      expected: 'Even',
    },
    {
      name: 'number -11 must return "Odd"',
      argument: -11,
      expected: 'Odd',
    },
    {
      name: 'number -4 must return "Even"',
      argument: -4,
      expected: 'Even',
    },
    {
      name: 'number 1024 must return "Even"',
      argument: 1024,
      expected: 'Even',
    },
    {
      name: 'number 54943 must return "Odd"',
      argument: 54943,
      expected: 'Odd',
    },
  ];

  testCases.forEach((test) => {
    it(test.name, () => {
      const testedFunc = evenOdd(test.argument);

      expect(testedFunc).toBe(test.expected);
    });
  });
});
