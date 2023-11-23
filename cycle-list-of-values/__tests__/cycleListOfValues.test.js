const { cycle } = require('../cycleListOfValues');

describe("Given a list of arguments: direction, array and current value, return the value next to the current value in the given position, return null if the value is not in the list", () => {
  test("Given the follwing arguments: 1, [1, 2, 3], 1 - make sure the array is not mutated", () => {
    const dir = 1;
    const arr = [
        880, 249, 396, 246, 805, 332, 448, 234, 408, 893, 876, 340, 928, 204, 303,
        288, 236, 884, 219, 506, 755, 963, 259, 411, 810, 860, 486, 642, 383, 882,
        908, 360, 968, 250, 720, 883, 161, 306, 854, 895, 733, 514, 946, 762, 144,
        277, 134, 267, 811, 674, 475, 613, 559, 519, 431, 920, 798, 247, 919, 942,
        888, 136, 817, 587, 953, 343, 371, 294, 654, 300, 310, 426, 399, 806, 410,
        991, 872, 663, 474, 669, 773, 159, 842, 104, 796, 794, 218, 627, 133, 581,
        456, 974, 904, 634, 413, 392, 957, 591, 707, 629,
      ];
    const cur = 1;
    cycle(dir, arr, cur);
    expect(arr).toEqual([
        880, 249, 396, 246, 805, 332, 448, 234, 408, 893, 876, 340, 928, 204, 303,
        288, 236, 884, 219, 506, 755, 963, 259, 411, 810, 860, 486, 642, 383, 882,
        908, 360, 968, 250, 720, 883, 161, 306, 854, 895, 733, 514, 946, 762, 144,
        277, 134, 267, 811, 674, 475, 613, 559, 519, 431, 920, 798, 247, 919, 942,
        888, 136, 817, 587, 953, 343, 371, 294, 654, 300, 310, 426, 399, 806, 410,
        991, 872, 663, 474, 669, 773, 159, 842, 104, 796, 794, 218, 627, 133, 581,
        456, 974, 904, 634, 413, 392, 957, 591, 707, 629]);
  });
  test("Given the follwing arguments: 1, [1, 2, 3], 1, return 2", () => {
    const dir = 1;
    const arr = [1, 2, 3];
    const cur = 1;
    expect(cycle(dir, arr, cur)).toBe(2);
  });
  test("Given the follwing arguments: 1, [1, 2, 3], 0, return null", () => {
    const dir = 1;
    const arr = [1, 2, 3];
    const cur = 0;
    expect(cycle(dir, arr, cur)).toBe(null);
  });
  test("Given the following arguments: -1, [1, 2, 3], 1, return 3", () => {
    const dir = -1;
    const arr = [1, 2, 3];
    const cur = 1;
    expect(cycle(dir, arr, cur)).toBe(3);
  });
  test("Given the following arguments: -2, [1, 2, 3, 4, 5, 6], 1, return 5", () => {
    const dir = -1;
    const arr = [1, 2, 3, 4, 5, 6];
    const cur = 1;
    expect(cycle(dir, arr, cur)).toBe(6);
  });
  test("Given the following arguments: 1 [1, 2, 2, 3], 2, return 2", () => {
    const dir = 1;
    const arr = [1, 2, 2, 3];
    const cur = 2;
    expect(cycle(dir, arr, cur)).toBe(2);
  });
  test("Given the following arguments: 2, [1, 6, 4, 5, 3, 2], 2, return 6", () => {
    const dir = 1;
    const arr = [1, 6, 5, 4, 5, 2];
    const cur = 1;
    expect(cycle(dir, arr, cur)).toBe(6);
  });
  test(`Given the following arguments: 1, [
    880, 249, 396, 246, 805, 332, 448, 234, 408, 893, 876, 340,
    928, 204, 303, 288, 236, 884, 219, 506, 755, 963, 259, 411, 
    810, 860, 486, 642, 383, 882, 908, 360, 968, 250, 720, 883,
    161, 306, 854, 895, 733, 514, 946, 762, 144, 277, 134, 267,
    811, 674, 475, 613, 559, 519, 431, 920, 798, 247, 919, 942,
    888, 136, 817, 587, 953, 343, 371, 294, 654, 300, 310, 426,
    399, 806, 410, 991, 872, 663, 474, 669, 773, 159, 842, 104,
    796, 794, 218, 627, 133, 581, 456, 974, 904, 634, 413, 392,
    957, 591, 707, 629], 506, return 884 (2nd line, 3rd number)`, () => {
    const dir = 1;
    const arr = [
      880, 249, 396, 246, 805, 332, 448, 234, 408, 893, 876, 340, 928, 204, 303,
      288, 236, 884, 219, 506, 755, 963, 259, 411, 810, 860, 486, 642, 383, 882,
      908, 360, 968, 250, 720, 883, 161, 306, 854, 895, 733, 514, 946, 762, 144,
      277, 134, 267, 811, 674, 475, 613, 559, 519, 431, 920, 798, 247, 919, 942,
      888, 136, 817, 587, 953, 343, 371, 294, 654, 300, 310, 426, 399, 806, 410,
      991, 872, 663, 474, 669, 773, 159, 842, 104, 796, 794, 218, 627, 133, 581,
      456, 974, 904, 634, 413, 392, 957, 591, 707, 629,
    ];
    const cur = 506;
    expect(cycle(dir, arr, cur)).toBe(755);
  });
});

//https://www.codewars.com/kata/5456812629ccbf311b000078/train/javascript