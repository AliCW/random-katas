def spot(string1, string2):
    out = []
    split = list(string1)

    for i in range(len(split)):
        if(split[i] != string2[i]):
            out.append(i)

    return out

#https://www.codewars.com/kata/5881460c780e0dd207000084/train/python