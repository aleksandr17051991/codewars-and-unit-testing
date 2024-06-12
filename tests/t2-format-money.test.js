const { formatMoney } = require('../tasks/t2-format-money');

describe('correct total', () => {
  const testCase = [
    {
      argument: 22.345,
      expectedString: '$22.34',
    },
    {
      argument: 2.3,
      expectedString: '$2.30',
    },
    {
      argument: 5,
      expectedString: '$5.00',
    },
    {
      argument: -10,
      expectedString: '$-10.00',
    },
    {
      argument: 0,
      expectedString: '$0.00',
    },
  ];

  testCase.forEach((test) => {
    it(`input ${test.argument} expected ${test.expectedString}`, () => {
      const testedFunc = formatMoney(test.argument);
      expect(testedFunc).toBe(test.expectedString);
    });
  });
});

//additional checkings

describe('boundary values', () => {
  const boundaryCase = [
    {
      testName: 'Error - input is string',
      argument: 'string',
      expectedError: 'You add string...',
    },
    {
      testName: 'Error - input is null',
      argument: null,
      expectedError: 'You amount is incorrect',
    },
    {
      testName: 'Error - input is undefined',
      argument: undefined,
      expectedError: 'You amount is incorrect',
    },
    {
      testName: 'Error - input is Number.MAX_VALUE',
      argument: Number.MAX_VALUE,
      expectedError: "It's really big number. We dont't have this amount",
    },
  ];

  boundaryCase.forEach((test) => {
    it(test.testName, function () {
      expect(() => formatMoney(test.argument)).toThrow(test.expectedError);
    });
  });
});
