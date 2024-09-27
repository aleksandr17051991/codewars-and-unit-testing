const { isIsogram } = require('../tasks/t11-isogram-word');

describe('Correct isograms', () => {
  const testCases = [
    {
      name: `"olEksAndr" is isogram`,
      argument: 'olEksAndr',
    },
    {
      name: `empty string is isogram`,
      argument: '',
    },
    {
      name: `"ASx79" is isogram`,
      argument: 'ASx79',
    },
  ];

  testCases.forEach((test) => {
    const testedFunc = isIsogram(test.argument);

    it(test.name, () => {
      expect(testedFunc).toBeTruthy();
    });
  });
});

describe('Incorrect isograms', () => {
  const testCases = [
    {
      name: `"moOuse" isn't isogram`,
      argument: 'moOuse',
    },
    {
      name: `"Anna" isn't isogram`,
      argument: 'Anna',
    },
  ];

  testCases.forEach((test) => {
    const testedFunc = isIsogram(test.argument);

    it(test.name, () => {
      expect(testedFunc).toBeFalsy();
    });
  });
});
