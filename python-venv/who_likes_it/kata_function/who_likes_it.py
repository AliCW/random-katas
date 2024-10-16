def who_likes_it(array):
    if len(array) == 0:
        return 'no one likes this'
    if len(array) == 1:
        return array[0] + ' likes this'
    if len(array) == 2:
        return array[0] + ' and ' + array[1] + ' like this'
    if len(array) == 3:
        return array[0] + ', ' + array[1] + ' and ' + array[2] + ' like this'
    if len(array) >= 4:
        return array[0] + ', ' + array[1] + ' and ' + str(len(array) - 2) + ' others' + ' like this'


#https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/python