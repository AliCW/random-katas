import math

class Scrabble:
    def scrabble_best_world(pointsArray, wordsArray):
        alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        pointsDict = {}
        for i in range(len(pointsArray)):
            pointsDict[alpha[i]] = pointsArray[i]

        def find_value(word):
            value = 0
            for j in range(len(word)):
                value += pointsDict[word[j]]
            decimalValue = str(value) + "." + str(len(word))
            return float(decimalValue)

        def filter_value(number):
            if math.floor(number) == math.floor(max(values)):
                return number

        values = list(map(find_value, wordsArray))
        equals = list(filter(filter_value, values))

        return values.index((min(equals)))

#https://www.codewars.com/kata/563f960e3c73813942000015/train/python