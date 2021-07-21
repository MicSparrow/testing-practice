const reverseString = require("../code/reverse");

test("REVERSE STRING TEST 1", () => {
  expect(reverseString("mic")).toBe("cim");
});

test("REVERSE STRING TEST 2", () => {
  expect(reverseString("Hi There")).toBe("erehT iH");
});

test("REVERSE STRING TEST 3", () => {
  expect(reverseString("Michal Wrobel")).toBe("leborW lahciM");
});

test("REVERSE STRING TEST 4", () => {
  expect(reverseString("Adka Koper")).toBe(
    "repoK akdA"
  );
});