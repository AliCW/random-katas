def goodVsEvil(good, evil):

    goodArr = good.split(' ')
    evilArr = evil.split(' ')

    for i in range(len(goodArr)):
        if i == 0:
            goodArr[i] = int(goodArr[i])
        if i == 1:
            goodArr[i] = int(goodArr[i]) * 2
        if i == 2:
            goodArr[i] = int(goodArr[i]) * 3
        if i == 3:
            goodArr[i] = int(goodArr[i]) * 3
        if i == 4:
            goodArr[i] = int(goodArr[i]) * 4
        if i == 5:
            goodArr[i] = int(goodArr[i]) * 10

    for i in range(len(evilArr)):
        if i == 0:
            evilArr[i] = int(evilArr[i])
        if i == 1:
            evilArr[i] = int(evilArr[i]) * 2
        if i == 2:
            evilArr[i] = int(evilArr[i]) * 2
        if i == 3:
            evilArr[i] = int(evilArr[i]) * 2
        if i == 4:
            evilArr[i] = int(evilArr[i]) * 3
        if i == 5:
            evilArr[i] = int(evilArr[i]) * 5
        if i == 6:
            evilArr[i] = int(evilArr[i]) * 10

    if sum(goodArr) > sum(evilArr):
        return "Battle Result: Good triumphs over Evil"
    elif sum(goodArr) < sum(evilArr):
        return "Battle Result: Evil eradicates all trace of Good"
    else:
        return "Battle Result: No victor on this battle field"