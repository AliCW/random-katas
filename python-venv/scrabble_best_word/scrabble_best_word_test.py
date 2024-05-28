from scrabble_best_word import Scrabble

def test_1():
    pointsArray = [1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10]
    wordsArray = ["WHO","IS","THE","BEST","OF","US"]
    Scrabble.scrabble_best_world(pointsArray, wordsArray)
    assert pointsArray == [1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10]
    assert wordsArray == ["WHO","IS","THE","BEST","OF","US"]

def test_2():
    pointsArray = [1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10]
    wordsArray = ["WHO","IS","THE","BEST","OF","US"]
    assert Scrabble.scrabble_best_world(pointsArray, wordsArray) == 0

def test_3():
    pointsArray = [1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10]
    wordsArray = ["AAA", "B", "A", "E", "I"]
    assert Scrabble.scrabble_best_world(pointsArray, wordsArray) == 1

def test_4():
    pointsArray = [1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10]
    wordsArray = ["AABCDEF", "WHO","IS","THE","BEST","OF","US"]
    assert Scrabble.scrabble_best_world(pointsArray, wordsArray) == 1

def test_5():
    pointsArray = [1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10]
    wordsArray = ["NOQ","TXAY","S","OM","ESFT","CJUKQ","QL","QO","ASTK","Y"]
    assert Scrabble.scrabble_best_world(pointsArray, wordsArray) == 5

def test_6():
    pointsArray = [1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10]
    wordsArray = ["SVWLIDP","FCPKTHW","EREMN","NFEF","PQ","FSC","ZYPOSXJ","BOR","YCGG","RC","DVPE","VAOE","OIGK","OTQE","REJFUFD","FVBCSSB","VHJ","BEC","MWZQ","WX","L","ZPCB","JKLHE","RYFTY","NKP","ID","O","KA","VRXX","NTDB","OERKPC","YFLUI","SKQCJ","PXDSW","ITYWD","TC","LOIDQEJ","NE","YND","VJHOCEC","RPRANZ","BQ","STM","RGVBFW","SMWUYLW","KT","SXHY","XCE","T","SC","UDJU","CHDR","UGXNQ","CQOOBA","O","NWW","V","L","BAQ","AZN","LBTR","N","QSURR","KADPH","M","LCBEAKM","ZHEVXS","F","TVAIQCY","MF","KCI","YQ","RCG","AKYPCP","WJXG","RQXOI","SJI","TWXZ","J","HIKCGHV","EAAXGG","AETSH","EO","BUET","TDIQCO","TKL","FJCRY","ZHAJLK","OLMCVA","F"]
    assert Scrabble.scrabble_best_world(pointsArray, wordsArray) == 6

def test_7():
    pointsArray = [1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10]
    wordsArray = ["RBBL","ZJ","ZOFXE","LMBFCFX","O","JG","SYRYE","VXG","EU","DAIFZR","BQUNZHH","WKO","TFPHPLX","SWLG","CY","JYQNDSM","ITPS","B","UVSDMWR","LCPS"]
    assert Scrabble.scrabble_best_world(pointsArray, wordsArray) == 15

def test_8():
    pointArray = [8, 3, 5, 10, 5, 7,  6,  1, 1, 7, 4,  4, 5, 8, 10, 10, 1, 1, 6,  2, 1, 2,  9,  4, 5, 3]
    wordArray = ['FR', 'DJ', 'BNBHDYJRF', 'GGWUZ', 'BGCDRVFK', 'CHT', 'HHWZHER', 'NNT', 'CKMBIQEQP', 'OWA', 'XLBREBYUV', 'J', 'VDZLLJY', 'BRO', 'ELZQAB', 
        'QAQHCVO', 'D', 'JPQXPEC', 'KD', 'SOVEBWSI', 'KN', 'X', 'AYQFI', 'HJ', 'IPAXEEYHG', 'VTA', 'TPWK']
    assert Scrabble.scrabble_best_world(pointArray, wordArray) == 2

#https://www.codewars.com/kata/563f960e3c73813942000015/train/python
