const { getGrade } = require('../tasks/t7-grade-book');

describe('Task: get grade book', () => {
  const testCases = [
    {
      name: 'Average number expected "A"',
      argument: [95, 90, 93],
      expectedGrade: 'A',
    },
    {
      name: 'Average number expected "B"',
      argument: [70, 70, 100, 80],
      expectedGrade: 'B',
    },
    {
      name: 'Average number expected "C"',
      argument: [75, 70],
      expectedGrade: 'C',
    },
    {
      name: 'Average number expected "D"',
      argument: [66, 62, 68],
      expectedGrade: 'D',
    },
    {
      name: 'Average number expected "F"',
      argument: [48, 55, 52, 50, 53, 49],
      expectedGrade: 'F',
    },
  ];

  testCases.forEach((test) => {
    it(test.name, () => {
      const testedFunc = getGrade(...test.argument);

      expect(testedFunc).toBe(test.expectedGrade);
    });
  });
});
