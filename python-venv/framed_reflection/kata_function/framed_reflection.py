def mirror(string):

    split = string.split(' ')
    longestIndex = len(max(split, key=len))
    
    output = ['\n']
    for i in range(0, len(split), 1):
        reverse = split[i][::-1]
        if(len(reverse) < longestIndex):
            numberOfSpaces = longestIndex - len(reverse)
            spaces = ' ' * numberOfSpaces
            reverse = reverse + spaces
        output.append('* ' + reverse + ' *\n')

    frame = '*' * longestIndex + '****'
    output.insert(0, frame)
    output.append(frame)

    return ''.join(output)

#https://www.codewars.com/kata/581331293788bc1702001fa6/train/python