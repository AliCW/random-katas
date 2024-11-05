from kata_function.find_the_nexus import nexus

def test_1():
    object = {1: 3, 3: 3, 5: 3}
    assert nexus(object) == 3

def test_2():
    object = {1: 12540, 2:12000, 6:7000, 20:4000, 100:1000, 273:750, 500:500}
    assert nexus(object) == 500

def test_3():
    object = {1: 12540, 2:12000, 6:8000, 20:6000, 100:5000, 273:4570, 500:800, 600:600, 800:450, 3193:278}
    assert nexus(object) == 600

def test_4():
    object = {1: 12540, 2:12000, 6:7000, 20:4000, 100:1000, 273:750, 500:501}
    assert nexus(object) == 500

def test_5():
    object = {1: 12540, 2:12000,6:8000, 20: 6000, 100: 5000, 273: 4570, 500:800, 600:490, 800:450, 3193:278}
    assert nexus(object) == 600

def test_6():
    object = {1:12540, 2:12000, 6:8000, 20:6000, 100:5000, 273:4570, 500:800, 600:490, 800:450, 3193:278}
    assert nexus(object) == 600

def test_7():
    object = {5:30, 10:25, 15:20, 20:15, 25:10, 30:5}
    assert nexus(object) == 15
    
def test_8():
    object = {30:5, 25:10, 20:15, 15:20, 10:25, 5:30}
    assert nexus(object) == 15