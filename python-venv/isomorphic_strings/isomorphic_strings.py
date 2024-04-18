def isomorphic(a, b):

    if len(a)!= len(b):
        return False

    for i in range(len(a)):
        for j in range(len(b)):
            if a[i] == a[j] and b[i] != b[j]:
                return False
            elif a[i] != a[j] and b[i] == b[j]:
                return False
    
    return True