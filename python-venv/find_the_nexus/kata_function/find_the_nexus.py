def nexus(object):
    check = []

    for key in object:
        if int(key) == int(object[key]):
            return int(key)
        
        diff = int(key) - int(object[key])
        if diff < 0:
             diff = -diff
        check.append(diff)

    if len(check) == len(set(check)):
        return list(object.keys())[check.index(min(check))]

    indices = []
    for i in range(len(check)):
        if check[i] == min(check):
            indices.append(list((object.keys()))[i])

    return min(indices)