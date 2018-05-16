function moveZeros(tab = []) {
  const noBool = tab.filter(item => typeof item !== typeof true && item !== 0);
  const zeros = tab.filter(item => item === 0);
  return [...noBool, ...zeros];
}

module.exports = moveZeros;

moveZeros([false, 1, 0, 1, 2, 0, 1, true, 0, 3, "a"]);
