const { getGrade } = require('../tasks/t7-grade-book');

describe('Task: get grade book', () => {
  const testCases = [
    {
      name: 'Average number expected "A"',
      argument: [95, 90, 93],
      expectedGrade: 'A',
    },
  ];

  testCases.forEach((test) => {
    it(test.name, () => {
      const testedFunc = getGrade(...test.argument);

      expect(testedFunc).toBe(test.expectedGrade);
    });
  });
});
