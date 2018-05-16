const moveZeros = require("./dojoOne");
const expect = require("chai").expect;

describe("Test Dojo 11:One", () => {
  it("should have removed booleans", () => {
    expect(moveZeros([false, false, false, false])).to.be.a("array").that.is
      .empty;
  });

  it("should have keep the order", () => {
    expect(moveZeros([1, 2, 3, 4, 5]))
      .to.be.a("array")
      .that.is.deep.equal([1, 2, 3, 4, 5]);
  });

  it("should have push all the zeros to the end", () => {
    expect(moveZeros([1, 0, 0, 1, 1, 0, 1]))
      .to.be.a("array")
      .that.is.deep.equal([1, 1, 1, 1, 0, 0, 0]);
  });

  it("should solve this", () => {
    expect(moveZeros([false, 1, 0, 1, 2, 0, 1, true, 0, 3, "a"]))
      .to.be.a("array")
      .that.is.deep.equal([1, 1, 2, 1, 3, "a", 0, 0, 0]);
  });
});
