//  TESK - grade book
//  Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
//  90 <= score <= 100	'A'
//  80 <= score < 90	'B'
//  70 <= score < 80	'C'
//  60 <= score < 70	'D'
//  0 <= score < 60	'F'

function getGrade() {
  const argList = [...arguments];

  const sum = argList.reduce((acc, rec) => acc + rec);
  const members = argList.length;
  const average = sum / members;

  if (average >= 90 && average <= 100) {
    return 'A';
  }
  if (average >= 80 && average <= 90) {
    return 'B';
  }
  if (average >= 70 && average <= 80) {
    return 'C';
  }
  if (average >= 60 && average <= 70) {
    return 'D';
  }
  return 'F';
}

module.exports = {
  getGrade,
};
