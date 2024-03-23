from calculateString import calculateString

def test_1():
    string = ";$%§fsdfsd235??df/sdfgf5gh.000kk0000"
    assert calculateString(string) == "47"

def test_2():
    string = "sdfsd23454sdf*2342"
    assert calculateString(string) == "54929268"

def test_3():
    string = "fsdfsd235???34.4554s4234df-sdfgf2g3h4j442"
    assert calculateString(string) == "-210908"

def test_4():
    string = "fsdfsd234.4554s4234df+sf234442"
    assert calculateString(string) == "234676"

def test_5():
    string = "a1a2b3c.c0c/a1a0b.cc00c"
    assert calculateString(string) == "12"

def test_6():
    string = "2cy06d.13m4t4-234x6nl.wf18"
    assert calculateString(string) == "-2140"

def test_7():
    string = "7m95jc.w85331/3a97i0b.k4r2y55j5w"
    assert calculateString(string) == "0"

def test_8():
    string = "4f06172u.e5ijl5v/4yj94mlfe.2z0"
    assert calculateString(string) == "822"

def test_9():  
    string = "57g6m7r9j.yl86h321*930z5m51on.112"
    assert calculateString(string) == "53674060850"

def test_10():  
    string = "41!t6pa71.085js9u*3zc0kv4r1.l70qb"
    assert calculateString(string) == "126750942"

def test_11():  
    string = "989869.0fc7l/84y3mr2.262a0pi9."
    assert calculateString(string) == "117"

#https://www.codewars.com/kata/56b5dc75d362eac53d000bc8/train/python