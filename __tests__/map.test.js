const double = require("../map").double;
const doubleArrow = require("../map").doubleArrow;
const doubleSep = require("../map").doubleSep;
const doubleFatArrow = require("../map").doubleFatArrow;

describe("Map function testing", () => {
  it("double", () => {
    expect(double).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });

  it("double arrow", () => {
    expect(doubleArrow).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });

  it("double separate", () => {
    expect(doubleSep).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });
  it("double fat arrow", () => {
    expect(doubleFatArrow).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });
});
