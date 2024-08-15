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
      findOldestYear.mockReturnValue(test.expectedYear);
      const res = getOldestBook(test.argument);

      expect(res).toBe(test.expectedYear);
    });
  });
});

describe('Checking callback - findOldestYear', () => {
  const testCases = [
    {
      name: 'Oldest book - 1900',
      argument: [
        { title: 'Book1', year: 2019 },
        { title: 'Book2', year: 1960 },
        { title: 'Book3', year: 1944 },
        { title: 'Book4', year: 1960 },
        { title: 'Book5', year: 1900 },
      ],
      callbackArg: [2019, 1960, 1944, 1960, 1900],
      expectedYear: 1900,
    },
    {
      name: 'Oldest book - 2016',
      argument: [
        { title: 'Book1', year: 2016 },
        { title: 'Book2', year: 2020 },
      ],
      callbackArg: [2016, 2020],
      expectedYear: 2016,
    },
  ];

  testCases.forEach((test) => {
    it(test.name, () => {
      getOldestBook(test.argument);

      expect(findOldestYear).toHaveBeenCalled();
      expect(findOldestYear).toHaveBeenCalledWith(test.callbackArg);
    });
  });
});
