# Moving Zeros To The End - 5 kyu

def move_zeros(arr): # 1st Solution
    zero = True
    count = 0
    
    while zero:
        if 0 in arr:
            count += 1
            arr.remove(0)
        else:
            zero = False
    
    for x in range(count):
        arr.append(0)
        
    return arr


def move_zeros(lst): # 2nd Solution
    for i in range(lst.count(0)):
        lst.remove(0)
        lst.append(0)
    return lst