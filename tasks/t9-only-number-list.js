//TASK - In this kata you will create a function that takes a list of
//non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(list) {
  return list.filter((item) => typeof item === 'number');
}

module.exports = {
  filter_list,
};
