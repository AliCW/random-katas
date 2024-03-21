from goodVsEvil import goodVsEvil

def test_1():
    good = "1 1 1 1 1 1"
    evil = "1 1 1 1 1 1 1"
    assert goodVsEvil(good, evil) == "Battle Result: Evil eradicates all trace of Good"

def test_2():
    good = "0 0 0 0 0 10"
    evil = "0 1 1 1 1 0 0"
    assert goodVsEvil(good, evil) == "Battle Result: Good triumphs over Evil"

def test_3():
    good = "1 0 0 0 0 0"
    evil = "1 0 0 0 0 0 0"
    assert goodVsEvil(good, evil) == "Battle Result: No victor on this battle field"

def test_4():
    good = "1 0 0 0 1 0"
    evil = "0 0 0 0 0 1 0"
    assert goodVsEvil(good, evil) == "Battle Result: No victor on this battle field"

def test_5():
    good = "0 1 0 0 0 0"
    evil = "1 0 0 0 0 0 0"
    assert goodVsEvil(good, evil) == "Battle Result: Good triumphs over Evil"

def test_6():
    good = "1 1 1 1 1 1"
    evil = "0 1 1 1 1 1 1"
    assert goodVsEvil(good, evil) == "Battle Result: Evil eradicates all trace of Good"

def test_7():
    good = "0 0 0 0 0 1"
    evil = "0 1 1 1 1 0 0"
    assert goodVsEvil(good, evil) == "Battle Result: Good triumphs over Evil"

def test_8():
    good = "0 1 0 0 0 0"
    evil = "0 0 0 1 0 0 0"
    assert goodVsEvil(good, evil) == "Battle Result: No victor on this battle field"
    
 # Quality Index: 
    # Hobbits: 1
    # Men: 2
    # Elves: 3
    # Dwarves: 3
    # Eagles: 4
    # Wizards: 10
    
    # Orcs: 1
    # Men: 2
    # Wargs: 2
    # Goblins: 2
    # Uruk Hai: 3
    # Trolls: 5
    # Wizards: 10`,