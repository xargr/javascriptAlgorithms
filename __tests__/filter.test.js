const upTo = require("../filter").upTo;
const dupToArrow = require("../filter").dupToArrow;
const upToFatArrow = require("../filter").upToFatArrow;
const upToSep = require("../filter").upToSep;

describe("Filter function testing", () => {
  it("filter up to", () => {
    expect(upTo).toEqual([3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("filter up to arrow", () => {
    expect(dupToArrow).toEqual([3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("filter up to separate", () => {
    expect(upToSep).toEqual([3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("filter up to fat arrow", () => {
    expect(upToFatArrow).toEqual([3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
