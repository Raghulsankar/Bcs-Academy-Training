print("Hello, 🌏 ")

print(type(42))  # <class 'int'>
print(type("Abc"))
print(type(True))
print(type(4.5))
print(type([40, 60, 70]))  # <class 'list'>

print(type((40, 60, 70)))  # <class 'tuple'>

full_name = "Tara Chand"

print(full_name)
print(type(full_name))

# + Concatenation
print("Welcome, " + full_name + "!🎉")

# Task 1.1 with f-string

# print(`Welcome, ${full_name} !🎉`)
print(f"Welcome, {full_name} !🎉")

# Task 1.2.1 with Concatenation
age = 20

# My age is: 20

print("My age is: " + str(age))

# Task 1.2.2  with f-string

# {} -> convert to str()
print(f"My age is: {age}")

print(int(9.8))  # 9
print(4 + 5.5)  # 9.5

# numeric separator # DX ⬆️
followers = 2_000_000

# My age is 20 and my followers are 4000000

# {} -> expression
print(f"My age is {age} and my followers are {followers * 2}")