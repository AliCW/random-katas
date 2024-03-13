const { reverseMiddle } = require('../reverseMiddle');

describe("Return the middle two or three elements of the given array in reverse order", () => {
  test("Confirm the input argument is not mutated", () => {
    const arr = [1, 2, 3, 4];
    reverseMiddle(arr);
    expect(arr).toEqual([1, 2, 3, 4]);
  });
  test("Given [1, 2, 3, 4], return [3, 2]", () => {
    const arr = [1, 2, 3, 4];
    expect(reverseMiddle(arr)).toEqual([3, 2]);
  });
  test("Given [1, 2, 3, 4, 5], return [4, 3, 2]", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(reverseMiddle(arr)).toEqual([4, 3, 2]);
  });
  test("Given [1, 2, 3, 4, 5, 6], return [4, 3]", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(reverseMiddle(arr)).toEqual([4, 3]);
  });
  test("Given [1, 2, 3, 4, 5, 6, 7], return [5, 4, 3]", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    expect(reverseMiddle(arr)).toEqual([5, 4, 3]);
  });
  test(`Given [85, -34, 28, -33, 25, -52,  78, -59,
        54, -47,  2,  18,  9,   7,  81, -31,
        83, -23,  6,  -9, 68,  32, -42,  34,
        66,  90, 22], return [ 81, 7, 9 ]`, () => {
    const arr = [
      85, -34, 28, -33, 25, -52, 78, -59, 54, -47, 2, 18, 9, 7, 81, -31, 83,
      -23, 6, -9, 68, 32, -42, 34, 66, 90, 22,
    ];
    expect(reverseMiddle(arr)).toEqual([81, 7, 9]);
  });
  test(`Given [
    -88,  15, -26, -81,  93,
    -46, -93,  50, -47, -87,
     66, -76,  74, -60, -59,
    -87], return [-47, 50]`, () => {
    const arr = [
      -88, 15, -26, -81, 93, -46, -93, 50, -47, -87, 66, -76, 74, -60, -59, -87,
    ];
    expect(reverseMiddle(arr)).toEqual([-47, 50]);
  });
});

//https://www.codewars.com/kata/5a043724ffe75fbab000009f/train/javascript