const reverse = require("../stringReverse");

describe("stringMatching", () => {
  it("add string demo and expect omed", () => {
    expect(reverse("demo")).toBe("omed");
  });
});
