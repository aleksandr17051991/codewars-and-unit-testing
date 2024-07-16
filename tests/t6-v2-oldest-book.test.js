const { getOldestBook } = require('../tasks/t6-v2-oldest-book');
const { findOldestYear } = require('../utils/t6-v2-find-oldest-year');

jest.mock('../utils/t6-v2-find-oldest-year', () => {
  return {
    findOldestYear: jest.fn(),
  };
});

describe('Oldest book task', () => {
  const testCases = [
    {
      name: 'Oldest book - 1944',
      argument: [
        { title: 'Book1', year: 2019 },
        { title: 'Book2', year: 1960 },
        { title: 'Book3', year: 1944 },
        { title: 'Book4', year: 1960 },
        { title: 'Book5', year: 2021 },
      ],
      expectedYear: 1944,
    },
  ];

  testCases.forEach((test) => {
    it(test.name, () => {
      findOldestYear.mockReturnValue(1944);
      const res = getOldestBook(test.argument);
      expect(res).toBe(test.expectedYear);
      expect(findOldestYear).toHaveBeenCalledTimes(1);
    });
  });
});
