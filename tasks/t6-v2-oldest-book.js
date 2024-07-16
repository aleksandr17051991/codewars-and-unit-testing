const { findOldestYear } = require('../utils/t6-v2-find-oldest-year');

//second variant

const getOldestBook = function (books) {
  const yearsList = books.map((book) => book.year);
  return findOldestYear(yearsList);
};

module.exports = {
  getOldestBook,
};
