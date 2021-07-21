const calculator = require("../code/calculator");

test("CALCULATOR TEST 1", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("CALCULATOR TEST 2", () => {
  expect(calculator.sub(20, 21)).toBe(-1);
});

test("CALCULATOR TEST 3", () => {
  expect(calculator.div(2, 4)).toBe(0.5);
});

test("CALCULATOR TEST 4", () => {
  expect(calculator.mul(2, 3)).toBe(6);
});