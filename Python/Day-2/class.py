# Blueprint
# self, this - context word

# this is my book - context (book)
# this is my pen - context (pen)
class Car:
    # function =  method (class function)
    def __init__(self, wheels, engine, model, doors):
        # instance variables
        self.wheels = wheels
        self.engine = engine
        self.model = model
        self.doors = doors

    # instance methods - objects share them
    def horn(self):
        return "Vroom Vroom!!!"


# Share

# Object
# self -> Object
hindustan = Car(4, "v4", "Ambassador", 4)
jeep = Car(4, "v6", "Wrangler", 4)
polo = Car(4,"V8","GT",4)

print(hindustan)  # Car object
print(jeep)
print(polo)

# Dot syntax - Class objects
print(jeep.model)
print(jeep.doors)

print(jeep.horn())
print(hindustan.horn())
print(polo.horn())

# ## Tata
# - Wheels - 4
# - Engine - v4
# - Model - Harrier
# - Doors - 4

print(polo.engine)




class Ophthal:
    def __init__(self,model,color):
        self.model = model
        self.color = color

HeineOphthal = Ophthal("v1","white")

print(HeineOphthal.color)
print(HeineOphthal.model)


# ## Task 1.1
# Create blueprint

# ### Account
# 1. acc_no
# 2. name
# 3. balance


## Task 1.2
# Create 3 account
# 1. nk - 50_000
# 2. rishi - 3_00_000
# 3. puspha - 10_00_000


class Account:
    def __init__(self,acc_no,name,balance):
        self.acc_no = acc_no
        self.name = name
        self.balance = balance

nk = Account(101,"nanthakumar",50_000)
rk = Account(102,"Rishi",3_00_000)
pk = Account(103,"Pushpendar",10_00_000)

print(nk.acc_no)
print(pk.acc_no)
print(rk.acc_no)

print(nk.name)
print(rk.name)
print(pk.name)

print(pk.balance)
print(rk.balance)
print(nk.balance)


