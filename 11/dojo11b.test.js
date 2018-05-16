const {
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
} = require("./dojoTwo");
const expect = require("chai").expect;

describe("Test Dojo 11:Two", () => {
  it("should have 14 functions", () => {
    const functions = [
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
    ];
    expect(functions).to.have.lengthOf(14);
  });

  it("should have a result of 35", () => {
    expect(seven(times(five()))).to.be.equal(35);
  });

  it("should have a result of 13", () => {
    expect(four(plus(nine()))).to.be.equal(13);
  });

  it("should have a result of 5", () => {
    expect(eight(minus(three()))).to.be.equal(5);
  });

  it("should have a result of 3", () => {
    expect(six(dividedBy(two()))).to.be.equal(3);
  });
});
