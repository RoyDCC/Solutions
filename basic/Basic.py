# Array plus array - 8 kyu
def array_plus_array(arr1,arr2):
    return sum(arr1)+sum(arr2)


# Vexing Vanishing Values - 8 kyu
def mul_by_n(lst: list, n: int) -> list:
    return [i * n for i in lst]


# FIXME: Replace all dots - 8 kyu
def replace_dots(str):
    return str.replace(".", "-")


# Grasshopper - If/else syntax debug - 8 kyu
def check_alive(health):
    if(health <= 0):
        return False
    else:
        return True


# Fix your code before the garden dies! - 8 kyu
def rain_amount(mm):
    if mm >= 40:
         return "Your plant has had more than enough water for today!"
    else:
         return "You need to give your plant " + str(40-mm) + "mm of water"


# Disemvowel Trolls - 8 kyu
def disemvowel(string_):
    vow = ['a','e','i','o','u','A','E','I','O','U']
    for x in vow:
        string_=string_.replace(x,"")
    return string_


# Noob Debug 1: Fix the string sum! - 8 kyu
def add(s1, s2):
    s1 = s1.encode()
    s2 = s2.encode()
    s1 = sum(s1)
    s2 = sum(s2)
    return s1+s2


# Square Every Digit - 8 kyu
import math
def square_digits(n): # 1st Solution
    f = ""
    for x in str(n):
        f += str(math.floor(math.pow(int(x),2)))
    return int(f)

def square_digits(n): # 2nd Solution
    f = ""
    for x in str(n): f += str(int(x)**2)
    return int(f)


# Breaking chocolate problem - 7 kyu
def break_chocolate(n, m):
    return (n*m)-1 if (n*m>0) else 0


# Multiply the number - 8 kyu
def multiply(n):
    return n*pow(5,len(str(abs(n))))


# Stringy Strings - 8 kyu
def stringy(size):
    return "10" * int(size/2) + "1" * int(size%2)


# Name on billboard - 8 kyu
def billboard(name, price=30):
    cost = 0
    for x in range(len(name)): cost += price
    return cost


# Lost number in number sequence - 7 kyu
def find_deleted_number(arr, mixed_arr):
    for x in range(len(mixed_arr)):
            arr.remove(mixed_arr[x])
    return arr[0] if len(arr)>0 else 0


# Find the smallest integer in the array - 8 kyu
def find_smallest_int(arr): # 1st Solution
    return sorted(arr)[0]

def find_smallest_int(arr): # 2nd Solution
    return min(arr)


# Vowel Count - 7 kyu
def get_count(sentence):
    vows = 'aeiou'
    count = 0
    for x in sentence: 
        if x in vows: count+=1
    return count


# Selective fear of numbers - 7 kyu
def am_I_afraid(day,num):
    fear = {'Monday':num==12,
            'Tuesday':num>95,
            'Wednesday':num==34,
            'Thursday':num==0,
            'Friday':num%2==0,
            'Saturday':num==56,
            'Sunday':num==666 or num ==-666
           }
    return fear[day]

# Multiply
def multiply(a, b):
    return a * b


# These are not my grades! (Revamped !) - 7 kyu
class Student:

    def __init__(self, first_name, last_name, grades=None):
        self.first_name = first_name
        self.last_name = last_name
        if grades:
            self.grades = grades
        else:
            self.grades = []
    
    def add_grade(self, grade):
        self.grades.append(grade)
    
    def get_average(self):
        return sum(self.grades) / len(self.grades)
    

# Person Class Bug - 7 kyu
class Person():
    def __init__(self, first_name, last_name, age):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.full_name = first_name+" "+last_name


# Two numbers are positive - 7 kyu
def two_are_positive(a, b, c):
    return sum([a>0, b>0, c>0])==2


# Even or Odd - 8 kyu
def even_or_odd(number):
    return 'Even' if number%2==0 else 'Odd'


# Double Char - 8 kyu
def double_char(s):
    doubled = ""
    for x in s:
        for y in range(2):
            doubled += x
    
    return doubled


# Jenny's secret message - 8 kyu
def greet(name):
    if name == "Johnny":
        return "Hello, my love!"
    return "Hello, {name}!".format(name=name)


# Thinkful - String Drills: Quotable - 7 kyu
def quotable(name, quote):
    return name + ' said: "' + quote + '"'


# Counting sheep... - 8 kyu
def count_sheeps(sheep):
    return sheep.count(True)