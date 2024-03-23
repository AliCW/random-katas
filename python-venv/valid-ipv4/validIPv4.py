import re

def validIPv4(str):

    array = str.split(".")

    if(len(array)!= 4):
        return False
    
    for i in range(len(array)):
        if re.search("[0-9]", array[i]) == None:
            return False
        if bool(re.search("[^0-9]", array[i])) == True:
            return False

        if len(array[i]) > 1:
            if re.search("[1-9]", array[i][0]) == None:
                return False 
            if re.search(" +", array[i]) != None:
                return False
            
        if(int(array[i]) < 0 or int(array[i]) > 255):
            return False

    return True
