#Array plus array - 8 kyu
def array_plus_array(arr1,arr2):
    return sum(arr1)+sum(arr2)


#Vexing Vanishing Values - 8 kyu
def mul_by_n(lst: list, n: int) -> list:
    return [i * n for i in lst]


#FIXME: Replace all dots - 8 kyu
def replace_dots(str):
    return str.replace(".", "-")


#Grasshopper - If/else syntax debug - 8 kyu
def check_alive(health):
    if(health <= 0):
        return False
    else:
        return True


#Fix your code before the garden dies! - 8 kyu
def rain_amount(mm):
    if mm >= 40:
         return "Your plant has had more than enough water for today!"
    else:
         return "You need to give your plant " + str(40-mm) + "mm of water"


#Disemvowel Trolls - 8 kyu
def disemvowel(string_):
    vow = ['a','e','i','o','u','A','E','I','O','U']
    for x in vow:
        string_=string_.replace(x,"")
    return string_


#Noob Debug 1: Fix the string sum! - 8 kyu
def add(s1, s2):
    s1 = s1.encode()
    s2 = s2.encode()
    s1 = sum(s1)
    s2 = sum(s2)
    return s1+s2


#Square Every Digit - 8 kyu
import math
def square_digits(n): #1st Solution
    f = ""
    for x in str(n):
        f += str(math.floor(math.pow(int(x),2)))
    return int(f)

def square_digits(n): #2nd Solution
    f = ""
    for x in str(n): f += str(int(x)**2)
    return int(f)


#Breaking chocolate problem
def break_chocolate(n, m):
    return (n*m)-1 if (n*m>0) else 0


#Multiply the number
def multiply(n):
    return n*pow(5,len(str(abs(n))))