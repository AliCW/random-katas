def numbers_of_letters(number):
    if number == 4:
        return ['four']
    dictionary = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        0: 'zero',
    }

    def word(string):
        return dictionary[int(string)]

    splitNum = list(str(number))
    out = [''.join(map(word, splitNum))]
    count = 0

    while True:
        if(len(out[count]) < 10):
            out.append(dictionary[len(out[count])])
            count += 1
            if dictionary[len(out[count])] == out[count]:
                return out

        else:
            append = ''
            for j in range(len(str(len(out[count])))):
                append += dictionary[int(str(len(out[count]))[j])]
            out.append(append)
            count += 1

#https://www.codewars.com/kata/599febdc3f64cd21d8000117/train/python