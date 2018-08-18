const reverseNum = require("../numberReverse");

test("add 34 and expect 43", () => {
  expect(reverseNum(34)).toBe(43);
});

test("add 1000 and expect 1", () => {
  expect(reverseNum(1000)).toBe(1);
});

test("add -67 and expect -76", () => {
  expect(reverseNum(-67)).toBe(-76);
});
