is_raining = True

if is_raining:
    print("Wear raincoat 🥼")
    print("Inside If")
else:
    print("Wear shorts 🩳 & Glasses 🕶️")
    print("Inside Else")

print("Completed")


no_of_persons = 1

if no_of_persons <= 2:
    print("Lets go to party in bike 🛵")
else:
    print("Lets go to party in Car 🚘")


is_raining = True
is_sunny = False

if is_raining:
    print("Wear raincoat 🥼")
elif is_sunny:
    print("Wear shorts 🩳 & Glasses 🕶️")
else:
    print("Normal outfit 👚")


# Task 1.1
# Compare Two People’s Heights (Taller / Same Height)
# Hint - input
# Better - abs()
# Expected Output -
# Case 1:
# Please tell me the captain name?: Luffy
# Please tell me the vice captain name?: Zoro
# Please tell me the height of Luffy?: 173
# Please tell me the height of Zoro?: 163
# Luffy is taller than Zoro by 10cm

# Case 2:
# Please tell me the captain name?: Luffy
# Please tell me the vice captain name?: Zoro
# Please tell me the height of Luffy?: 173
# Please tell me the height of Zoro?: 185
# Zoro is taller than Luffy by 12cm


# Case 3
# Please tell me the captain name?: Luffy
# Please tell me the vice captain name?: Zoro
# Please tell me the height of Luffy?: 173
# Please tell me the height of Zoro?: 173
# Luffy and Zoro are of same height


captain_name = input("Please tell me the captain name?")
vice_captain_name = input("please tell me the  vice captain name?")
captain_height = float(input("please tell me the height of luffy?"))
vice_captain_height = float((input("please tell me the height of zoro?")))

difference = abs(captain_height - vice_captain_height)

if captain_height > vice_captain_height:
    print(f"{captain_name} is taller than {vice_captain_name} by {difference}")
elif captain_height < vice_captain_height:
    print(f"{captain_name} is lesser than {vice_captain_name} by {difference}")
else:
    print(f"{captain_name} is equal as {vice_captain_name}")




captain = input("Please tell me the captain name?: ")
vice_captain = input("Please tell me the vice captain name?: ")
captain_height = float(input(f"Please tell me the height of {captain}?: "))
vice_captain_height = float(input(f"Please tell me the height of {vice_captain}?: "))

diff = abs(captain_height - vice_captain_height)  # positive value

if captain_height > vice_captain_height:
    print(f"{captain} is taller than {vice_captain} by {diff}cm")
elif captain_height < vice_captain_height:
    print(f"{vice_captain} is taller than {captain} by {diff}cm")
else:
    print(f"{captain} and {vice_captain} are of same height")



