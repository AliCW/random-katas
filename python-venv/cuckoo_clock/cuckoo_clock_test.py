from cuckoo_clock import cuckoo_clock

def test_1():
    time = "07:22"
    chimes = 1
    assert cuckoo_clock(time, chimes) == "07:30"

def test_2():
    time = "12:22"
    chimes = 2
    assert cuckoo_clock(time, chimes) == "12:45"

def test_3():
    time = "10:00"
    chimes = 10
    assert cuckoo_clock(time, chimes) == "10:00"

def test_4():
    time = "01:30"
    chimes = 2
    assert cuckoo_clock(time, chimes) == "01:45"

def test_5():
    time = "12:30"
    chimes = 4
    assert cuckoo_clock(time, chimes) == "01:15"

def test_6():
    time = "09:53"
    chimes = 50
    assert cuckoo_clock(time, chimes) == "02:30"

def test_7():
    time = "03:38"
    chimes = 19
    assert cuckoo_clock(time, chimes) == "06:00"

def test_8():
    time = "08:17"
    chimes = 113
    assert cuckoo_clock(time, chimes) == "08:00"

def test_9():
    time = "08:17"
    chimes = 150
    assert cuckoo_clock(time, chimes) == "11:00"

def test_10():
    time = "08:17"
    chimes = 114
    assert cuckoo_clock(time, chimes) == "08:15"


#https://www.codewars.com/kata/656e4602ee72af0017e37e82/train/python