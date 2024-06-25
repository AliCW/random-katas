def length_of_seq(array, integer):
    if len(array) <= 1 or integer not in array or array.count(integer) != 2:
        return 0
    
    seq = []
    for i in range(len(array)):
        if array[i] == integer:
            seq.append(i)

    return seq[1] - seq[0] + 1

#https://www.codewars.com/kata/5566b0dd450172dfc4000005/train/python