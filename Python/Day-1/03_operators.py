# * -> Multiplication
print(4 * 7)  # 28

# * -> Repetition operator
print("Ha" * 3)
print("🎊" * 11)

print(["a", "bc", "super"] * 4)  # New List
print(("a", "bc", "super") * 4)  # New Tuple


# Task 1.1
# Output (Assume PI - 3.14)
# Provide the radius of the circle: 4.2
# Area of circle is 55.3896

# pi = 3.14
# radius = float(input("Provide the radius of the circle: "))
# area = pi * radius**2
# print(f"Area of circle is {area}")


# Task 1.2
# Clue: // Floor division, repetition * operator
# Task: Build a loader
# Case: 1
# Input: 70
# Output: [=======   ] 70%

percentage = int(input("Input: "))  # 78
loaded = percentage // 10  # 7
not_loaded = 10 - loaded  # 3
print(f"[{'=' * loaded}{' ' * not_loaded}] {percentage}%")


# Case: 2
# Input: 23
# Output: [==        ] 23%