def expanded_form(integer):
    if len(str(integer)) < 2:
        return str(integer)
    output = ''

    for i in range(len(str(integer)) - 1):
        if str(integer)[i] != '0':
            length = len(str(integer)) - 1 - i
            if length > 1:
                zeros = '0' * length
                output += str(integer)[i] + zeros + ' + '
            else:
                output += str(integer)[i] + '0' + ' + '

    if str(integer)[len(str(integer)) - 1] == '0':
        return output[0:len(output) - 3]
    else:
        return output + str(integer)[len(str(integer)) - 1]
    
#https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/python