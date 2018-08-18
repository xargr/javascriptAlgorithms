const palidrome = require("../palidrome");

describe("check if word is palidrome", () => {
  it("add civic and expect civic", () => {
    expect(palidrome("civic")).toBe(true);
  });

  it("add paok and expect not paok", () => {
    expect(palidrome("paok")).not.toBe(true);
  });
});
