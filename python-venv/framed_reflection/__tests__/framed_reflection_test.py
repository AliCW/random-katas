from kata_function.framed_reflection import mirror

def test_1():
    string = 'Hello World'
    assert mirror(string) == '*********\n* olleH *\n* dlroW *\n*********'

def test_2():
    string = 'Codewars'
    assert mirror(string) == '************\n* srawedoC *\n************'

def test_3():
    string = 'ijt ygearp skvahnz rtbcmw nasvd'
    assert mirror(string) == '***********\n* tji     *\n* praegy  *\n* znhavks *\n* wmcbtr  *\n* dvsan   *\n***********'

#https://www.codewars.com/kata/581331293788bc1702001fa6/train/python