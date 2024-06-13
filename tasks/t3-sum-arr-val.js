//Task 3
// create function that sums all values in array without max and min value

exports.sumArrVal = (arr) => {
  // added additional filter for undefined, null, string etc
  const filteredArr = arr.filter((item) => typeof item === 'number');

  if (filteredArr.length < 2) {
    return 0;
  }

  const totalSumObj = filteredArr.reduce(
    (acc, rec) => {
      return {
        sum: acc.sum + rec,
        minVal: Math.min(acc.minVal, rec),
        maxVal: Math.max(acc.maxVal, rec),
      };
    },
    {
      sum: 0,
      minVal: filteredArr[0] ?? 0,
      maxVal: filteredArr[0] ?? 0,
    }
  );
  return totalSumObj.sum - totalSumObj.minVal - totalSumObj.maxVal;
};
