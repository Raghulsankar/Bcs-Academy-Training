# prompt = input
# Task 1.1
# Tell me your name?: Latha
# Hello, Latha 🎉

# name = input("Tell me your name?: ")
# print(f"Hello, {name} 🎉")


# Task 1.2 (use type conversion)
# Tell me your name?: Latha
# Tell me your birth year?: 2000
# Hi, Latha you are 26 years old

# input always returns str
name = input("Tell me your name?: ")
birth_year = int(input("Tell me your birth year?: "))
age = 2026 - birth_year  # readable

print(f"Hi, {name} you are {age} years old")

# Clue: Type conversions
# Task 1.3
# Output
# Please provide your Fahrenheit: 98.6
# The 98.6°F is 37°C
# (32°F − 32) × 5/9

# BODMAS
fahrenheit = float(input("Please provide your Fahrenheit: "))
celsius = (fahrenheit - 32) * 5 / 9
print(f"The {fahrenheit}°F is {celsius}°C")