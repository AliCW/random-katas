def almost_even(total, parts):
    
    if parts == 1:
        return [total]
    if parts == total:
        return [1, 1]
    
    output = []
    if (total / parts).is_integer():
        for i in range(parts):
            output.append(int(total / parts))
        return output
    
    remainder = total % parts
    for j in range(parts):
        if remainder > 0:
            output.append(int(total / parts) + 1)
            remainder -= 1
        else:
            output.append(int(total / parts))

    return list(reversed(output))

#https://www.codewars.com/kata/529e2e1f16cb0fcccb000a6b/python