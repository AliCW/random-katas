def vector_affinity(xs, ys):
    if len(xs) == 0 and len(ys) == 0:
        return 1
    differences = 0
    shortest = 0
    longest = 0

    if len(xs) < len(ys):
        shortest = len(xs)
        longest = len(ys)
    else:
        shortest = len(ys)
        longest = len(xs)
    
    for i in range(shortest):
        if xs[i] != ys[i]:
            differences += 1

    differences += longest - shortest

    return 1 - differences / longest

#https://www.codewars.com/kata/5498505a43e0fd83620010a9/train/python