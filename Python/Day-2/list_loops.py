flowers = ["💐", "🌷", "🌼", "🌷", "🌺"]

# Task 1.1 - Print all the flower using for loop
# Hint - range, len

# Expected output
# Flower 1 - 💐
# Flower 2 - 🌷
# Flower 3 - 🌼
# Flower 4 - 🌷
# Flower 5 - 🌺

for i in range (len (flowers)):
    print("Flower -",i+1,(flowers)[i])


# Task 1.2: Double all the numbers
marks = [80, 90, 100, 60, 85]


for i in range(len(marks)):
    marks[i]  =  marks[i]*2

print(marks)

for mark in marks:
    print(mark)


# Output
# print(marks) -> [160, 180, 200, 120, 170]


# Task 1.3: Double the power
powers = [2000, 3000, 4000, 1500]


doubled_power = []
for power in powers:
    doubled_power.append(power *2)
print(power)
print(doubled_power)



# Output
# doubled_powers -> [4000, 6000, 8000, 3000]
# powers -> [2000, 3000, 4000, 1500]


# ## Task 1.4
# Find longer names (>= 6 letter)

characters = ["Hello kitty", "Goku", "Pikachu", "Luffy", "Yuji Itadori", "Levi"]

big_names = []
for character in characters:
    if(len(character)>=6):
        big_names.append(character)
print(big_names)  
    

# ### Expected Output
# ['Hello kitty', 'Pikachu', 'Yuji Itadori']