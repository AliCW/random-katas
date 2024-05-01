from stone_pickaxes import stone_pick

def test_1():
    array = ['Wood', 'Wood', 'Cobblestone', 'Cobblestone']
    stone_pick(array)
    assert array == ['Wood', 'Wood', 'Cobblestone', 'Cobblestone']

def test_2():
    array = ['Sticks', 'Sticks', 'Sticks', 'Sticks', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone']
    assert stone_pick(array) == 2

def test_3():
    array = ['Sticks', 'Sticks', 'Sticks', 'Sticks', 'Wool',   'Wool', 'Wool', 'Dirt', 'Dirt', 'Dirt', 'Dirt', 'Dirt', 'Dirt']
    assert stone_pick(array) == 0

def test_4():
    array = ['Wood', 'Wood', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone', 'Cobblestone']
    assert stone_pick(array) == 4

def test_5():
    array = ['Sticks', 'Sticks', 'Sticks', 'Sticks', 'Cobblestone', 'Cobblestone', 'Cobblestone']
    assert stone_pick(array) == 1

def test_6():
    array = ['Sticks']
    for i in range(51):
        array.append('Dirt')
    for j in range(21):
        array.append('Cobblestone')
    for k in range(41):
        array.append('Wool')
    for l in range(12):
        array.append('Diamond')
    assert stone_pick(array) == 0

def test_7():
    array = []
    for i in range(21):
        array.append('Wool')
    for j in range(11):
        array.append('Sticks')
    for k in range(31):
        array.append('Stone')
    for l in range(41):
        array.append('Cobblestone')
    for m in range(8):
        array.append('Diamond')
    assert stone_pick(array) == 5

def test_8():
    array = []
    for i in range(21):
        array.append('Wood')
    for j in range(91):
        array.append('Cobblestone')
    assert stone_pick(array) == 30

def test_9():
    array = []
    for i in range(12):
        array.append('Wood')
    for j in range(120):
        array.append('Cobblestone')
    assert stone_pick(array) == 24

#https://www.codewars.com/kata/65c0161a2380ae78052e5731/train/python