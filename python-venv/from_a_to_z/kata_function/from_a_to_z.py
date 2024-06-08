def gimmie_the_letters(string):
    
    alpha = 'abcdefghijklmnopqrstuvwxyz'
    start = alpha.index(string[0].lower())
    end = alpha.index(string[2].lower()) + 1

    if string[0].upper() == string[0]:
        return alpha[start:end].upper()
    
    return alpha[start:end]

#https://www.codewars.com/kata/6512b3775bf8500baea77663/train/python