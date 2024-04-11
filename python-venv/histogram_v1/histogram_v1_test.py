from histogram_v1 import histogram

def test_1():
    array = [1, 2, 3, 4, 5, 6]
    histogram(array)
    assert array == [1, 2, 3, 4, 5, 6]

def test_2():
    array = [7, 3, 10, 1, 0, 5]
    assert histogram(array) == "6|##### 5\n5|\n4|# 1\n3|########## 10\n2|### 3\n1|####### 7\n"

def test_3():
    array = [0, 0, 0, 0, 0, 0]
    assert histogram(array) == "6|\n5|\n4|\n3|\n2|\n1|\n"

def test_4():
    array = [16, 0, 7, 11, 4, 9]
    assert histogram(array) == "6|######### 9\n5|#### 4\n4|########### 11\n3|####### 7\n2|\n1|################ 16\n"

def test_5():
    array = [23, 13, 5, 11, 9, 5]
    assert histogram(array) == "6|##### 5\n5|######### 9\n4|########### 11\n3|##### 5\n2|############# 13\n1|####################### 23\n"

def test_6():
    array = [18, 15, 8, 2, 7, 3]
    assert histogram(array) == "6|### 3\n5|####### 7\n4|## 2\n3|######## 8\n2|############### 15\n1|################## 18\n"

def test_7():
    array = [9, 11, 1, 14, 8, 14]
    assert histogram(array) == "6|############## 14\n5|######## 8\n4|############## 14\n3|# 1\n2|########### 11\n1|######### 9\n"

def test_8():
    array = [19, 12, 2, 10, 8, 7]
    assert histogram(array) == "6|####### 7\n5|######## 8\n4|########## 10\n3|## 2\n2|############ 12\n1|################### 19\n"

#https://www.codewars.com/kata/57d532d2164a67cded0001c7/train/python