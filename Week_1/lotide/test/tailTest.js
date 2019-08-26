const assert = require('chai').assert;
const tail = require("../tail");

describe("#tail", () => {
  const result = ["Yoyo", "Lighthouse", "Labs"];
  const words = result;
  it("returns ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(result), ["Lighthouse", "Labs"]);
  });
  it("returns [5,6] from [4,5,6]", () => {
    assert.deepEqual(tail([4,5,6]), [5,6]);
  });
  it("result still has a length of 3", () => {
    tail(result);
    assert.deepEqual(result.length, 3);
  });
});