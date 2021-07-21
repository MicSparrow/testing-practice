const capitalize = require("../code/capitalize");

test("CAPITALIZE TEST 1", () => {
  expect(capitalize("hi")).toBe("Hi");
});

test("CAPITALIZE TEST 2", () => {
  expect(capitalize("how is it going?")).toBe("How is it going?");
});

test("CAPITALIZE TEST 3", () => {
  expect(capitalize("michal")).toBe(
    "Michal"
  );
});

test("CAPITALIZE TEST 4", () => {
  expect(capitalize("aDKA")).toBe("ADKA");
});