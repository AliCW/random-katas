from count_IPv4_addresses import count_IPv4

def test_1(): #single address, fourth octet test
    start = "150.0.0.0"
    end = "150.0.0.1"
    assert count_IPv4(start, end) == 1

def test_2(): #multiple addresses, fourth octet
    start = "10.0.0.0"
    end = "10.0.0.50"
    assert count_IPv4(start, end) == 50

def test_3(): #multiple addresses, second & third octets
    start = "20.0.0.10"
    end = "20.0.1.0"
    assert count_IPv4(start, end) == 246

def test_4(): #multiple addresses, second & third octets
    start = "10.11.12.13"
    end = "10.11.13.0"
    assert count_IPv4(start, end) == 243

def test_5(): #multiple addresses, third octet
    start = "160.0.0.0"
    end = "160.0.1.0"
    assert count_IPv4(start, end) == 256

def test_6(): #multiple addresses, second octet
    start = "170.0.0.0"
    end = "170.1.0.0"
    assert count_IPv4(start, end) == 65536

def test_7():
    start = "50.0.0.0" #multiple addresses, second, third & fourth octets
    end = "50.1.1.1"
    assert count_IPv4(start, end) == 65793

def test_8(): #multiple addresses, first octet
    start = "180.0.0.0"
    end = "181.0.0.0"
    assert count_IPv4(start, end) == 16777216

def test_9(): #multiple addresses, all octets
    start = "1.2.3.4"
    end = "5.6.7.8"
    assert count_IPv4(start, end) == 67372036

def test_10(): #multiple addresses, all octets
    start = "22.11.81.172"
    end = "230.248.212.106"
    assert count_IPv4(start, end) == 3505226430

def test_11(): #multiple addresses, all octets
    start = "3.5.194.170"
    end = "142.194.110.92"
    assert count_IPv4(start, end) == 2344397746

#https://www.codewars.com/kata/526989a41034285187000de4/train/python