from kata_function.grabscrab import grabscrab

def test_1():
    string = "trisf"
    array = ["first"]
    grabscrab(string, array)
    assert array == ["first"]

def test_2():
    string = "trisf"
    array = ["first"]
    assert grabscrab(string, array) == ["first"]

def test_3():
    string = "oob"
    array = ["bob", "baobab"]
    assert grabscrab(string, array) == []

def test_4():
    string = "ainstuomn"
    array = ["mountains", "hills", "mesa"]
    assert grabscrab(string, array) == ["mountains"]

def test_5():
    string = "ortsp"
    array = ["sport", "parrot", "ports", "matey"]
    assert grabscrab(string, array) == ["sport", "ports"]

def test_6():
    string = "ourf"
    array = ["one","two","three"]
    assert grabscrab(string, array) == []

def test_7():
    string = "ltfni"
    array = ["ntifl", "xvqhklst", "xrewurva", "bzhn", "ntfli", "ntlif", "lseysoi", "lftni", "kaiszf", "ifntl", "dv", "iftln", "nlitf", "lftin","gsmny", "wvexjd"];
    assert grabscrab(string, array) == ["ntifl", "ntfli", "ntlif", "lftni", "ifntl", "iftln", "nlitf", "lftin"]

#https://www.codewars.com/kata/52b305bec65ea40fe90007a7/train/python

