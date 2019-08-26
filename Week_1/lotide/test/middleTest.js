const middle = require("../middle");
const assert = require('chai'). assert;


describe("#middle", () => {
  it("results should equal [4] in [1, 2, 3, 4, 5, 6, 7]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7]), [4]);
  });
  it("results should equal [4,5] in [1, 2, 3, 4, 5, 6, 7 ,8]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8]), [4,5]);
  });
  it("results should equal [1,2] in [1,2]", () => {
    assert.deepEqual(middle([1,2]), []);
  });
});