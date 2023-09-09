# Multiples of 3 or 5 - 6 kyu
def solution(number):
    if number<0: return 0
    sum = 0
    number-=1
    while number>0:
        if number%3==0 or number%5==0: sum+=number
        number-=1
    
    return sum