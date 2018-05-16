const checkout = require("./Panier.js");
const assert = require("chai").assert;
const expect = require("chai").expect;

/**
 * All Suite Test
 */
describe("Test Dojo 02", () => {
  it("test si le panier est bon", done => {
    let articles = checkout();
    assert.equal(articles.length, 4);
    done();
  });
});
