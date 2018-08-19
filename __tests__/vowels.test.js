const vowels = require("../vowels");

describe("Vowel function testing", () => {
  it("take work grigoris and return number 3", () => {
    expect(vowels("grigoris")).toBe(3);
  });
});
