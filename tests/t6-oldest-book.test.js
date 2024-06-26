const { getOldestBook } = require('../tasks/t6-oldest-book');

describe("Find oldest book's name", () => {
  const testCases = [
    {
      name: 'Book2 - oldest book',
      argument: [
        {
          title: 'Book1',
          year: 1976,
        },
        {
          title: 'Book2',
          year: 1941,
        },
        {
          title: 'Book3',
          year: 2016,
        },
      ],
      expected: 'Book2 - 1941',
    },
    {
      name: 'Ice and burn - oldest book',
      argument: [
        {
          title: 'Romeo',
          year: 1981,
        },
        {
          title: 'Ukrainian constitution',
          year: 1991,
        },
        {
          title: 'Ice and burn',
          year: 765,
        },
      ],
      expected: 'Ice and burn - 765',
    },
    {
      name: 'New era - oldest book',
      argument: [
        {
          title: 'New era',
          year: 0,
        },
        {
          title: 'Roga and Copita',
          year: 2016,
        },
        {
          title: 'Ice and burn',
          year: 765,
        },
      ],
      expected: 'New era - 0',
    },
  ];

  testCases.forEach((test) => {
    it(test.name, () => {
      expect(getOldestBook(test.argument)).toBe(test.expected);
    });
  });
});

//additional validation

describe('Additional validation', () => {
  const testCases = [
    {
      name: 'Book is undefined',
      argument: [
        {
          title: 'Book1',
          year: 2000,
        },
        undefined,
        {
          title: 'Book2',
          year: 1999,
        },
        undefined,
        {
          title: 'Book3',
          year: 2022,
        },
      ],
      expected: 'Book2 - 1999',
    },
    {
      name: 'Book is null',
      argument: [
        {
          title: 'Book1',
          year: 2000,
        },
        null,
        {
          title: 'Book2',
          year: 1999,
        },
        null,
        {
          title: 'Book3',
          year: 2022,
        },
      ],
      expected: 'Book2 - 1999',
    },
  ];

  testCases.forEach((test) => {
    it(test.name, () => {
      expect(getOldestBook(test.argument)).toBe(test.expected);
    });
  });
});

//Errors cases

describe('Errors validation', () => {
  const testCases = [
    {
      name: 'Books name is undefined',
      argument: [
        {
          title: 'Book1',
          year: 1455,
        },
        {
          title: undefined,
          year: 1200,
        },
        {
          title: 'Book3',
          year: 2022,
        },
      ],
      errorMessage: "Book's name is empty",
    },
    {
      name: 'Books name is null',
      argument: [
        {
          title: 'Book1',
          year: 2002,
        },
        {
          title: 'Book2',
          year: 2000,
        },
        {
          title: null,
          year: 1922,
        },
      ],
      errorMessage: "Book's name is empty",
    },
    {
      name: 'Books year is undefined',
      argument: [
        {
          title: 'Book1',
          year: undefined,
        },
        {
          title: 'Book2',
          year: 2000,
        },
        {
          title: 'Book3',
          year: 1922,
        },
      ],
      errorMessage: "One of books don't have year",
    },
    {
      name: 'Books year is null',
      argument: [
        {
          title: 'Book1',
          year: 2024,
        },
        {
          title: 'Book2',
          year: null,
        },
        {
          title: 'Book3',
          year: 1922,
        },
      ],
      errorMessage: "One of books don't have year",
    },
  ];

  testCases.forEach((test) => {
    it(test.name, () => {
      expect(() => getOldestBook(test.argument)).toThrow(test.errorMessage);
    });
  });
});
