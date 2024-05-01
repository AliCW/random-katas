def stone_pick(array):
    
    if len(array) <= 3:
        return 0
    
    wood = 0
    sticks = 0
    cobble = 0

    for i in range(len(array)):
        if array[i] == 'Wood':
            wood += 1
        elif array[i] == 'Sticks':
            sticks += 1
        elif array[i] == 'Cobblestone':
            cobble += 1

    if wood > 1:
        sticks += wood * 4

    if sticks <= 1 or cobble <= 2:
        return 0

    output = 0
    for j in range(len(array)):
        if sticks <= 1 or cobble <= 2:
            return output
        output += 1
        sticks -= 2
        cobble -= 3

#https://www.codewars.com/kata/65c0161a2380ae78052e5731/train/python