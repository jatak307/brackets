module.exports = function check(str, bracketsConfig) {
  if (!str % 2) return;

  let result = [];
  let bracketsObj = Object.fromEntries(bracketsConfig);

  for (elem of str.split('')) {
    if (result[0] === elem) {
      result.shift();
    } else if (bracketsObj[elem]) {
      result.unshift(bracketsObj[elem]);
    } else {
      return false;
    }
  }

  return result.length === 0;
}
