from math import nan

def pairWise(arr, n):
    count = 0
    array = arr.copy()

    for i in range(len(arr)):
        for j in range(len(arr)):
            if i == j:
                break
            if array[i] + array[j] == n:
                array[i] = nan
                array[j] = nan
                count += i + j
    
    return count


##<---------------------------------------------------------------

#more elegant solution below: loop is more efficient

# def pairwise(arr, n):
#     s=[]
#     for i in range(len(arr)-1):
#         for j in range(i+1,len(arr)):
#             if j in s or i in s: continue
#             if arr[i]+arr[j] ==n:
#                 s.append(i)
#                 s.append(j)
#     return sum(s)