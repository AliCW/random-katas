def high(string):
    alpha = ' abcdefghijklmnopqrstuvwxyz'
    values = string.split(' ')

    def calc(array):
        val = 0
        for i in range(len(array)):
            val += alpha.index(array[i])
        return val

    vals = list(map(lambda word: calc(list(word)), values))

    return values[vals.index(max(vals))]