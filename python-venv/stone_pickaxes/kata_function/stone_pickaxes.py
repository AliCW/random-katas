def stone_pick(array):
    
    if len(array) <= 3:
        return 0
    
    wood = array.count('Wood')
    sticks = array.count('Sticks')
    cobble = array.count('Cobblestone')

    if wood > 1:
        sticks += wood * 4

    output = 0
    for i in range(len(array)):
        if sticks <= 1 or cobble <= 2:
            return output
        output += 1
        sticks -= 2
        cobble -= 3

#https://www.codewars.com/kata/65c0161a2380ae78052e5731/train/python