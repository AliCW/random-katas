def cuckoo_clock(time, chimes):

    mins = time[3:5]
    hours = time[0:2]

    if mins == "00":
        chimes = chimes - int(hours)
    if mins == "15" or mins == "30" or mins == "45":
        chimes = chimes - 1
    if chimes <= 0:
        return time
    
    while chimes > 0:
        if int(mins) + 15 >= 60:
            if int(hours) + 1 > 12:
                hours = 1
            else:
                hours = int(hours) + 1
            chimes = chimes - int(hours)
            mins = int(mins) + 15
            mins = str(mins)
            mins = int(str(mins[0])) - 6 + int(str(mins[1]))
        else:
            chimes -= 1
            mins = int(mins) + 15
  
    if int(mins) >= 0 and int(mins) <= 14:
        mins = "00"
    if int(mins) >= 15 and int(mins) <= 29:
        mins = "15"
    if int(mins) >= 30 and int(mins) <= 44:
        mins = "30"
    if int(mins) >= 45 and int(mins) <= 59:
        mins = "45"
    
    if type(hours) is str:
        return hours + ":" + mins
    elif int(hours) < 10:
        hours = "0" + str(hours)
    
    return str(hours) + ":" + mins
    
#https://www.codewars.com/kata/656e4602ee72af0017e37e82/train/python