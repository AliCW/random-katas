def the_latest_clock(a, b, c, d):
    countOverSix = 0
    argList = [a, b, c, d]

    for element in argList:
        if element <= 5:
            countOverSix += 1

    def findFirst(array):
        if array.count(2) > 0 and countOverSix >= 3:
            argList.remove(2)
            return "2"
        else:
            if array.count(1) > 0:
                argList.remove(1)
                return "1"
            else:
                if array.count(0) > 0:
                    argList.remove(0)
                    return "0"

    first = findFirst(argList)

    def findSecond(array):
        if first == "2":
            if array.count(3) > 0:
                argList.remove(3)
                return "3"
            else :
                if array.count(2) > 0:
                    argList.remove(2)
                    return "2"
                else:
                    if array.count(1) > 0:
                        argList.remove(1)
                        return "1"
                    else:
                        argList.remove(0)
                        return "0"
        if first == "1" or first == "0":
            if array.count(9) > 0:
                argList.remove(9)
                return "9"
            else:
                if array.count(8) > 0:
                    argList.remove(8)
                    return "8"
                else:
                    if array.count(7) > 0:
                        argList.remove(7)
                        return "7"
                    else:
                        if array.count(6) > 0:
                            argList.remove(6)
                            return "6"
                        else:
                            if array.count(5) > 0:
                                argList.remove(5)
                                return "5"
                            else:
                                if array.count(4) > 0:
                                    argList.remove(4)
                                    return "4"
                                else:
                                    if array.count(3) > 0:
                                        argList.remove(3)
                                        return "3"
                                    else:
                                        if array.count(2) > 0:
                                            argList.remove(2)
                                            return "2"
                                        else:
                                            if array.count(1) > 0:
                                                argList.remove(1)
                                                return "1"
                                            else:
                                                argList.remove(0)
                                                return "0"

    second = findSecond(argList)

    def findThird(array):
        if array.count(5) > 0:
            argList.remove(5)
            return "5"
        else:
            if array.count(4) > 0:
                argList.remove(4)
                return "4"
            else:
                if array.count(3) > 0:
                    argList.remove(3)
                    return "3"
                else:
                    if array.count(2) > 0:
                        argList.remove(2)
                        return "2"
                    else:
                        if array.count(1) > 0:
                            argList.remove(1)
                            return "1"
                        else:
                            argList.remove(0)
                            return "0"

    third = findThird(argList)

    def findFourth(array):
        return array[0]
    
    fourth = str(findFourth(argList))

    return first + second + ":" + third + fourth



#https://www.codewars.com/kata/58925dcb71f43f30cd00005f/train/python