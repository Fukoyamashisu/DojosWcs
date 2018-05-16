const countPhrase = require("./main.js");
const assert = require("chai").assert; // Librarie Chai : http://chaijs.com/guide/installation/

describe("Main test", () => {
  it("test si phrase is ok", done => {
    assert.isObject(countPhrase("Ok"));
    assert.deepEqual(countPhrase("Ok"), { O: 1, k: 1 });
    done();
  });
});
