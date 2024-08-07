from kata_function.find_parity_outlier import find_outlier

def test_1():
    arr = [1, 2, 3, 4, 5]
    find_outlier(arr)
    assert arr == [1, 2, 3, 4, 5]

def test_2():
    arr = [0, 1, 2]
    assert find_outlier(arr) == 1

def test_3():
    arr = [1, 2, 3]
    assert find_outlier(arr) == 2

def test_4():
    arr = [2, 6, 8, 10, 3]
    assert find_outlier(arr) == 3

def test_5():
    arr = [1, 1, 0, 1, 1]
    assert find_outlier(arr) == 0

def test_6():
    arr = [ -138336302, -98979988, 91910166, 65105120, -58140311 ]
    assert find_outlier(arr) == -58140311

def test_7():
    arr = [-83365639, 131731611, -102428405, -10202379, -58420794, -73741653]
    assert find_outlier(arr) == -58420794

def test_8():
    arr = [-11892765, 24102889, 4005265, -114719188, -136752051, -154712629, -178809393, 161281585, 164596703, -129070705]
    assert find_outlier(arr) == -114719188

def test_9():
    arr = [-49874391, 150926088,  155487605, -104830921, 133488373, 79141635,
            -159351849, 169648661, -129632241, 130880647,  12669891, 122502757,
            -69076199, 137780585,  -22048425, 100094197, -18671999, -39016493,
            -148959245, -33074941, -174127705, -154468565,  98098027, 52121831,
            689871,  19276223,  -72717743, -196790701, 151609741, 189545447,
            81319891, -76348065, -101760589, 184736995,  91595529, -7348193, 92384125]
    assert find_outlier(arr) == 150926088

def test_10():
    arr = [-183336130,   20176452, -128697698, -123310588,
                -98441632,   52148000,  125134144,   81187380,
                -64264478,  -19153280,  -78919868,  -96237446,
                -59298596, -128161612,  -76777734,  181445390,
                 40584762, -166614606,   80238212, -187337796,
                112795470,   -2236664,   83155442,  173822792,
               -148759772, -117497588,   68215358, -131179920,
                 86658010,   -7614524, -158699522,   72316972,
                114246488, -138869370, -145958100,   11785722,
                -47145616, -111464554,  -14962570,  -21956955,
                 53593620,  -90733290, -150125942,  -95593830,
                167693268]
    assert find_outlier(arr) == -21956955