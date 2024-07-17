def difference_of_squares(number):
    count = 0
    countSquares = 0

    for i in range(1, number + 1, 1):
        count += i
        countSquares += i * i

    return count * count - countSquares