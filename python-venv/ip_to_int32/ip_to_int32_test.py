from ip_to_int32 import ip_to_int32

def test_1(): #(simple IP address test)
    addressString = "128.32.10.1"
    assert ip_to_int32(addressString) == 2149583361

def test_2(): #(simple IP address test)
    addressString = "128.114.17.104"
    assert ip_to_int32(addressString) == 2154959208

def test_3(): #(simple IP address test)
    addressString = "240.55.15.68"
    assert ip_to_int32(addressString) == 4030140228

def test_4(): #(simple IP address test)
    addressString = "40.164.200.192"
    assert ip_to_int32(addressString) == 681887936

def test_5(): #(simple IP address test)
    addressString = "244.91.92.246"
    assert ip_to_int32(addressString) == 4099628278

def test_6(): #(minimal valued IP address test))
    addressString = "0.0.0.0"
    assert ip_to_int32(addressString) == 0

def test_7(): #(maximum valued IP address test)
    addressString = "255.255.255.255"
    assert ip_to_int32(addressString) == 4294967295

#https://www.codewars.com/kata/52ea928a1ef5cfec800003ee/train/python