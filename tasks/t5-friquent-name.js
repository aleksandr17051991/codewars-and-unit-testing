//Create function friquentName(namesList) that take array with names and find the most used name
//Example:
// input: ["Alex", "Bob", "Alex"] - output: "Alex"

const usersList = ['Alex', 'Bob', 'Alex', 'Ann', 'James'];

const friquentName = (nameList) => {
  //additional validation
  if (nameList.length === 0) {
    return 'Your list is empty';
  }

  const result = nameList.reduce(
    (acc, name) => {
      //additional validation (undefined, null)
      if (name === undefined || name === null) {
        return acc;
      }

      if (acc.counts[name] === undefined) {
        acc.counts[name] = 1;
      } else {
        acc.counts[name] = acc.counts[name] + 1;
      }

      if (acc.counts[name] > acc.maxCount) {
        acc.maxCount = acc.counts[name];
        acc.friquentName = name;
      }
      return acc;
    },
    { counts: {}, maxCount: 0, friquentName: '' }
  );

  //additional validation (all values are undefined or null)
  if (result.maxCount === 0) {
    return "Your list doesn't have names";
  }
  //additional validation (there aren't double used name)
  if (result.maxCount < 2) {
    return "There are only different names. Don't find the most used name";
  }
  return result.friquentName;
};

console.log(friquentName(usersList));

module.exports = {
  friquentName,
};
