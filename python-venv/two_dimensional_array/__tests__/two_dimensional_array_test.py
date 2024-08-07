from kata_solution.two_dimensional_array import matrix

def test_1():
    array = [[0, 0, 0],[0, 0, 0],[0, 0, 0]]
    matrix(array)
    assert array == [[0, 0, 0],[0, 0, 0],[0, 0, 0]]

def test_2():
    array = [[-1, 4, -5, -9, 3], [6, -4, -7, 4, -5], [3, 5, 4, -9, -1], [1, 5, -7, -8, -9], [-3, 2, 1, -5, 6]]
    assert matrix(array) == [[0, 4, -5, -9, 3], [6, 0, -7, 4, -5], [3, 5, 1, -9, -1], [1, 5, -7, 0, -9], [-3, 2, 1, -5, 1]]

def test_3():
    array = [[-1, 4, -5, -9, 3],[6, 8, -7, 4, -5],[3, 5, 1, -9, -1],[1, 5, -7, 15, -9],[-3, 2, 1, -5, -6]];
    assert matrix(array) == [[0, 4, -5, -9, 3],[6, 1, -7, 4, -5],[3, 5, 1, -9, -1],[1, 5, -7, 1, -9],[-3, 2, 1, -5, 0]]

def test_4():
    array = [[-1, 4, -5, -9, 3, 8],[6, 8, -7, 4, -5, -1],[3, 5, 1, -9, -1, 6],[1, 5, -7, 15, -9, 3],[-3, 2, 1, -5, -6, 0],[8, 2, 0, -2, 4, -5]];
    assert matrix(array) == ([[0, 4, -5, -9, 3, 8],[6, 1, -7, 4, -5, -1],[3, 5, 1, -9, -1, 6],[1, 5, -7, 1, -9, 3],[-3, 2, 1, -5, 0, 0],[8, 2, 0, -2, 4, 0]]);

def test_5():
    array = [[1, 1, -5, 5],[2, -4, 11, 2],[3, 1, -1, 4],[2, -6, 8, 10]]
    assert matrix(array) == [[1, 1, -5, 5],[2, 0, 11, 2],[3, 1, 0, 4],[2, -6, 8, 1]]

def test_6():
    array = [[ 0, 4, -5, -9, 3 ],[ 6, 0, -7, 4, -5 ],[ 3, 5, 1, -9, -1 ],[ 1, 5, -7, 0, -9 ],[ -3, 2, 1, -5, 0 ]]
    assert matrix(array) == [[ 1, 4, -5, -9, 3 ], [ 6, 1, -7, 4, -5 ], [ 3, 5, 1, -9, -1 ], [ 1, 5, -7, 1, -9 ], [ -3, 2, 1, -5, 1 ]]

def test_7():
    array = [[ 6, 21, 2, -19 ],[ 81, 35, -10, 49 ],[ -2, 50, -86, 53 ],[ -88, -54, -53, 43 ]]
    assert matrix(array) == [[ 1, 21, 2, -19 ],[ 81, 1, -10, 49 ],[ -2, 50, 0, 53 ],[ -88, -54, -53, 1 ]]


#https://www.codewars.com/kata/581214d54624a8232100005f/train/python