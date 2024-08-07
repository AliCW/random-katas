const { histogram } = require('../histogramV1');

describe('Plot the histogram string with the given array integers', () => {
    test('Confirm the input array is not mutated', () => {
        const array = [7,3,10,1,0,5];
        histogram(array);
        expect(array).toEqual([7,3,10,1,0,5]);
    });
    test(`Given [7,3,10,1,0,5], return 
    6|##### 5
    5|
    4|# 1
    3|########## 10
    2|### 3
    1|####### 7
    `, () => {
        const array = [7,3,10,1,0,5];
        expect(histogram(array)).toBe(`6|##### 5
5|
4|# 1
3|########## 10
2|### 3
1|####### 7
`)
    });
    test(`Given [ 0, 0, 0, 0, 0, 0 ], return 
    6|
    5|
    4|
    3|
    2|
    1|`, () => {
        const array = [ 0, 0, 0, 0, 0, 0 ];
        expect(histogram(array)).toBe(`6|
5|
4|
3|
2|
1|
`)
    });
    test(`Given [ 16, 0, 7, 11, 4, 9 ], return
    6|######### 9
    5|#### 4
    4|########### 11
    3|####### 7
    2|
    1|################ 16`, () => {
        const array = [ 16, 0, 7, 11, 4, 9 ];
        expect(histogram(array)).toBe(`6|######### 9
5|#### 4
4|########### 11
3|####### 7
2|
1|################ 16
`)
    });
    test(`Given [ 23, 13, 5, 11, 9, 5 ], return
    6|##### 5
    5|######### 9
    4|########### 11
    3|##### 5
    2|############# 13
    1|####################### 23`, () => {
        const array = [ 23, 13, 5, 11, 9, 5 ];
        expect(histogram(array)).toBe(`6|##### 5
5|######### 9
4|########### 11
3|##### 5
2|############# 13
1|####################### 23
`)
    });
    test(`Given [ 18, 15, 8, 2, 7, 3 ], return 
    6|### 3
    5|####### 7
    4|## 2
    3|######## 8
    2|############### 15
    1|################## 18`, () => {
        const array = [ 18, 15, 8, 2, 7, 3 ];
        expect(histogram(array)).toBe(`6|### 3
5|####### 7
4|## 2
3|######## 8
2|############### 15
1|################## 18
`)
    });
    test(`Given [ 9, 11, 1, 14, 8, 14 ], return
    6|############## 14
    5|######## 8
    4|############## 14
    3|# 1
    2|########### 11
    1|######### 9`, () => {
        const array = [ 9, 11, 1, 14, 8, 14 ];
        expect(histogram(array)).toBe(`6|############## 14
5|######## 8
4|############## 14
3|# 1
2|########### 11
1|######### 9
`)
    });
    test(`Given [ 19, 12, 2, 10, 8, 7 ], return
    6|####### 7
    5|######## 8
    4|########## 10
    3|## 2
    2|############ 12
    1|################### 19`, () => {
        const array = [ 19, 12, 2, 10, 8, 7 ];
        expect(histogram(array)).toBe(`6|####### 7
5|######## 8
4|########## 10
3|## 2
2|############ 12
1|################### 19
`)
    })
});

//https://www.codewars.com/kata/57d532d2164a67cded0001c7/train/javascript
