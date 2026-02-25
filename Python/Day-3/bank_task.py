class Account:
    interest = 0.03
    total_accounts = 0
    def __init__(self, account_number, name, balance):
        self.acc_no = account_number
        self.name = name
        self.balance = balance
        Account.total_accounts += 1   # important for account count

    # Task 
    def display_balance(self):
        return (f"Your balance is: ₹ {self.balance:,.2f}")
    
    def withdraw(self,amount):
        self.amount = amount
        if amount <= 0:
            return "Invalid amount"
        if amount > self.balance:
            return f"Insufficient funds. {self.display_balance()}"
        self.balance = self.balance - amount
        return f"Success. {self.display_balance()}"
    
    def deposit(self, amount):
        if amount <= 0:
            return "invalid amount"
        self.balance = self.balance + amount
        return f"Success. {self.display_balance()}"
    
    def apply_interest(self):
        self.balance += (self.balance * Account.interest) 
        return f"Success. Applied interest rate of {Account.interest:.2%} {self.display_balance()}"
    
    
    @classmethod
    def update_interest_rate(cls, new_rate):
        cls.interest = new_rate/100
        return f"Success. Interest rate updated => {cls.interest:.2%}"

    @classmethod
    def get_total_no_accounts(cls):
        return f"In total we have {cls.total_accounts} accounts"
    

        

nk = Account(101, "Nandha Kumar", 50_000)
rishi = Account(102, "Rishi", 30_00_000)
puspha = Account(103, "Pushpendar", 10_00_000)

print(rishi.balance)
print(rishi)

print(rishi.display_balance())
# Your balance is: ₹3,00,000.00


## Task 1.2

print(puspha.withdraw(1_00_000))  # Success. Your balance is: ₹900,000.00
print(puspha.display_balance())  # Your balance is: ₹900,000.00
print(puspha.withdraw(10_00_000))  # Insufficient funds. Your balance is: ₹900,000.00
print(puspha.withdraw(-100))  # Invalid amount



## Task 1.3


print(rishi.deposit(1_00_000))  # Success. Your balance is: ₹400,000.00
print(rishi.display_balance())  # Your balance is: ₹400,000.00








gopi = Account(101, "Gopika Hariharan", 1_00_00_000)
vikki = Account(102, "Vignesh M", 10_00_000)
bala = Account(103, "Bala Kumar", 50_00_000)



    

# Task 1.5
# Interest rate 2%
# 100 + 2 = 102
print(gopi.apply_interest())
print(vikki.apply_interest())
print(bala.apply_interest())

# Success. Applied interest rate of 2.00%. Your balance is: ₹10,200,000.00
# Success. Applied interest rate of 2.00%. Your balance is: ₹1,020,000.00
# Success. Applied interest rate of 2.00%. Your balance is: ₹5,100,000.00

print(gopi.display_balance())
print(vikki.display_balance())
print(bala.display_balance())


# Your balance is: ₹10,200,000.00
# Your balance is: ₹1,020,000.00
# Your balance is: ₹5,100,000.00

# Task 1.6
# Account.update_interest_rate(4)
# Clue: classmethod


gopi = Account(101, "Gopika Hariharan", 1_00_00_000)
vikki = Account(102, "Vignesh M", 10_00_000)
bala = Account(103, "Bala Kumar", 50_00_000)

print(Account.update_interest_rate(4))

print(gopi.apply_interest())
print(vikki.apply_interest())
print(bala.apply_interest())

print(gopi.display_balance())
print(vikki.display_balance())
print(bala.display_balance())

# Success. Interest rate updated => 4.00%
# Success. Applied interest rate of 4.00%. Your balance is: ₹10,400,000.00
# Success. Applied interest rate of 4.00%. Your balance is: ₹1,040,000.00
# Success. Applied interest rate of 4.00%. Your balance is: ₹5,200,000.00
# Your balance is: ₹10,400,000.00
# Your balance is: ₹1,040,000.00
# Your balance is: ₹5,200,000.00

# Task 1.7


gopi = Account(101, "Gopika Hariharan", 1_00_00_000)
vikki = Account(102, "Vignesh M", 10_00_000)
bala = Account(103, "Bala Kumar", 50_00_000)
bala2 = Account(104, "Bala Kumar", 50_00_000)

print(Account.get_total_no_accounts())
# In total we have 4 accounts

