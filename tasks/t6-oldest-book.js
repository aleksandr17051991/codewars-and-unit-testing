//create function that loking for oldest book in list

const getOldestBook = function (books) {
  const MAX_DATE = 3000;
  const oldestBookObj = books.reduce(
    (acc, book) => {
      //additional validation
      if (typeof book === 'undefined' || book === null) {
        return acc;
      }
      if (typeof book.title === 'undefined' || book.title === null) {
        throw new Error("Book's name is empty");
      }
      if (typeof book.year === 'undefined' || book.year === null) {
        throw new Error("One of books don't have year");
      }

      if (book.year < acc.leastYear) {
        acc.leastYear = book.year;
        acc.bookName = book.title;
      }
      return acc;
    },
    {
      leastYear: MAX_DATE,
      bookName: '',
    }
  );

  return `${oldestBookObj.bookName} - ${oldestBookObj.leastYear}`;
};

module.exports = {
  getOldestBook,
};
