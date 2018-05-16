const FizzBuzz = require("./FizzBuzz.js");
const expect = require("chai").expect;

/**
 * All Suite Test
 */
describe("Test Dojo 01", () => {
  it("should be a function", () => {
    expect(FizzBuzz).to.be.a("function");
  });

  it("should have an argument which is a number", () => {
    expect(FizzBuzz("aea")).to.be.null;
  });

  it("should be a multiple of 3", () => {
    expect(FizzBuzz(12)).to.be.equal("Fizz");
  });

  it("should be a multiple of 5", () => {
    expect(FizzBuzz(5)).to.be.equal("Buzz");
  });

  it("should be a multiple of 3 and 5", () => {
    expect(FizzBuzz(15)).to.be.equal("FizzBuzz");
  });

  it("should NOT be a multiple of 3 and 5", () => {
    expect(FizzBuzz(4)).to.be.equal(4);
  });
});
