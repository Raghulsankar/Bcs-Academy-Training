secret_message = "         Programming in Python is not only powerful but also fun!   ".strip().upper()

print(secret_message[15:21])
print(secret_message[34:42])

print(f"{secret_message[15:21]}-{secret_message[34:42]}")
# Task 1.1
# Expected Output
# "PYTHON-POWERFUL"


# Task 1.2
flipped_message = "!nuf sseldnE dna seitinutroppo lufrewop htiw nohtyP".lower()
correct_message = flipped_message[::-1]
# print(correct_message)

print(f"{correct_message[0:6]} 🗡️  {correct_message[12:20]} 🌸")
print(f"{correct_message[:6]} 🗡️  {correct_message[12:20]} 🌸")

# Expected Output
# "python 🗡️ powerful 🌸"


# Task 1.3 (Home Assignment)

# After the 🔑
message = "    🚨🔍📱🔑secret_code✌️"
# Clue: find
clear_message = message.strip(" ")
print(clear_message[3:16].upper())

# Output
# SECRET_CODE✌️


message = "    🚨🔍📱🔑secret_code✌️".strip()
idx = message.find("🔑")
print(message[idx + 1 :].upper())