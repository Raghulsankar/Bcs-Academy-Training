
# instance = object
# Class variable (PI) -> for all the instance value remains same
# Instance variable (self.radius) -> for each instance value is different

class Circle:
    # Class variable
    PI = 3.14

    def __init__(self, radius):
        # Instance variable
        self.radius = radius
        print("Radius", self.radius)
        print("PI", self.PI, Circle.PI)

    def calculate_area(self):
        return Circle.PI * self.radius**2


c1 = Circle(2)
c2 = Circle(4)

# print(c1.radius)
# print(c2.radius)

# # ClassName.ClassVariable
# print(Circle.PI)

print(c1.calculate_area())
print(c2.calculate_area())


# ## Decorators - HOF
# - @staticmethod - no access to self ❌
# - @classmethod


# def perimeter(radius):
#     return 2 * Circle.PI * radius


# perimeter(2)


class Circle:
    # Class variable
    PI = 3.14

    def __init__(self, radius):
        # Instance variable
        self.radius = radius
        print("Radius", self.radius)
        print("PI", self.PI, Circle.PI)

    def calculate_area(self):
        return Circle.PI * self.radius**2

    @staticmethod  # Decorators
    def perimeter(radius):
        return 2 * Circle.PI * radius

    # Class method - cls -> cls access class variables
    @classmethod
    def from_diameter(cls, diameter):
        # print(cls.PI)  # ✅
        # print(cls.radius)  # ❌
        radius = diameter / 2
        return Circle(radius)


c1 = Circle(2)
c2 = Circle(4)

c3 = Circle.from_diameter(10)  # Circle(5)

print(c3.calculate_area())
print(Circle.perimeter(2))
