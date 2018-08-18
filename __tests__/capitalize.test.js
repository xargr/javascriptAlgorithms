const capitalize = require("../capitalize");

const sentence = "hello, how are you";

describe("Capitalize function testing", () => {
  it("The given sentence hello, how are you return Hello, How Are You", () => {
    expect(capitalize(sentence)).toBe("Hello, How Are You");
  });
});
