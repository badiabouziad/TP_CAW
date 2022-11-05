/*const toArray = require("./toarray");

describe("toArray tests", () => {
  test("1 to 10 should show all the numbers in between", () => {
    expect(toArray(1, 5)).toStrictEqual([1, 2, 3, 4, 5]);
  });
});*/

const toArray = require("./toarray");

describe("toArray tests", () => {
  test("1 to 10 should show all the numbers in between", () => {
    expect(toArray(5, 9, 2)).toStrictEqual([5, 7, 9]);
  });
});
