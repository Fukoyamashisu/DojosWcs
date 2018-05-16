[
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
].forEach(function(value, index) {
  this[value] = x => (x ? x(index) : index);
});

const plus = x => y => y + x;
const minus = x => y => y - x;
const times = x => y => y * x;
const dividedBy = x => y => y / x;

module.exports = {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy
};
