def delete_nth(arr, int):
    output = []
    dict = {}

    for i in range(len(arr)):
        if arr[i] in dict:
            dict[arr[i]] += 1
        else:
            dict[arr[i]] = 1

        if dict[arr[i]] > int:
            continue
        else:
            output.append(arr[i])

    return output


#https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/python