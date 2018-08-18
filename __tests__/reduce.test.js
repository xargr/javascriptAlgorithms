const total = require("../reduce").total;
const sumOfObj = require("../reduce").sumOfObj;
const flattened = require("../reduce").flattened;

describe("Reduce function testing", () => {
  it("sum values from array", () => {
    expect(total).toBe(55);
  });

  it("sum values from array object", () => {
    expect(sumOfObj).toBe(6);
  });

  it("flatten array", () => {
    expect(flattened).toEqual([0, 1, 2, 3, 4, 5]);
  });
});
