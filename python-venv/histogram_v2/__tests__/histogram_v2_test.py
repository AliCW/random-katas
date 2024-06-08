from kata_function.histogram_v2 import histogram_v2

    # There are no trailing spaces on the lines
    # All lines (including the last) end with a newline \n
    # The percentage is displayed beside each bar except where it is 0%
    # The total number of rolls varies, but won't exceed 10,000
    # The bar lengths are scaled so that 100% = 50 x bar characters
    # The bar character is █, which is the Unicode U+2588 char
    # When calculating percentages and bar lengths always floor/truncate to the nearest integer

def test_1():
    array = [1, 2, 3, 4, 5, 6]
    histogram_v2(array)
    assert array == [1, 2, 3, 4, 5, 6]

def test_2():
    array = [7, 3, 70, 15, 0, 5]
    answer = "6|██ 5%\n" + \
            "5|\n" + \
            "4|███████ 15%\n" + \
            "3|███████████████████████████████████ 70%\n" + \
            "2|█ 3%\n" + \
            "1|███ 7%\n"
    assert histogram_v2(array) == answer

def test_3():
    array = [0, 0, 0, 0, 0, 0]
    answer = "6|\n" + \
        "5|\n" + \
        "4|\n" + \
        "3|\n" + \
        "2|\n" + \
        "1|\n"
    assert histogram_v2(array) == answer

def test_4():
    array = [0, 0, 11, 0, 0, 0]

    answer = "6|\n" + \
        "5|\n" + \
        "4|\n" + \
        "3|██████████████████████████████████████████████████ 100%\n" + \
        "2|\n" + \
        "1|\n"
    assert histogram_v2(array) == answer

def test_5():
    array = [2, 3, 1, 2, 1, 1]
    answer = '6|█████ 10%\n5|█████ 10%\n4|██████████ 20%\n3|█████ 10%\n2|███████████████ 30%\n1|██████████ 20%\n'
    assert histogram_v2(array) == answer

def test_6():
    array = [180, 161, 165, 190, 156, 148]
    answer = '6|███████ 14%\n5|███████ 15%\n4|█████████ 19%\n3|████████ 16%\n2|████████ 16%\n1|█████████ 18%\n'
    assert histogram_v2(array) == answer

def test_7():
    array = [168, 171, 158, 171, 159, 173]
    answer = '6|████████ 17%\n5|███████ 15%\n4|████████ 17%\n3|███████ 15%\n2|████████ 17%\n1|████████ 16%\n'
    assert histogram_v2(array) == answer

def test_8():
    array = [190, 179, 141, 150, 170, 170]
    answer = '6|████████ 17%\n5|████████ 17%\n4|███████ 15%\n3|███████ 14%\n2|████████ 17%\n1|█████████ 19%\n'
    assert histogram_v2(array) == answer

#https://www.codewars.com/kata/5d5f5ea8e3d37b001dfd630a/train/python