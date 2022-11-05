const reverseArr = require("./inverttab");
let a = [1, 2, 3, 5, 7, 8, 9, 10];

describe("reverseArray test", () => {
  test("table should be reversed", () => {
    expect(reverseArr(a)).toStrictEqual([10, 9, 8, 7, 5, 3, 2, 1]);
  });
});
