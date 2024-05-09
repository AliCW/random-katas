import math

def ip_to_int32(addressString):

    addressArray = list(map(int, addressString.split('.')))

    addressArray[0] *= math.pow(256, 3)
    addressArray[1] *= math.pow(256, 2)
    addressArray[2] *= 256

    return sum(addressArray)

#https://www.codewars.com/kata/52ea928a1ef5cfec800003ee/train/python