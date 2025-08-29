from abc import ABC, abstractmethod
import math
from typing import Union
from Binary_Class import Binary


class Calculator(ABC):
    @abstractmethod
    def add(self, x, y):
        pass

    @abstractmethod
    def subtract(self, x, y):
        pass

    @abstractmethod
    def multiply(self, x, y):
        pass


class ScientificCalculator(Calculator):
    def add(self, x: float, y: float) -> float:
        return x + y

    def subtract(self, x: float, y: float) -> float:
        return x - y

    def multiply(self, x: float, y: float) -> float:
        return x * y

    def divide(self, x: float, y: float) -> float :
        if y == 0:
            print("Cannot divide by zero")
        return x / y

    def trigonometric(self, value: float, operation: str) -> float:
        operations = {
            'sin': math.sin,
            'cos': math.cos,
            'tan': math.tan
        }
        return operations[operation](value)

    def factorial(self, n: int) -> int:
        return math.factorial(n)

    def log(self, x: float) -> float:
        return math.log(x)

    def sqrt(self, x:float) -> float:
        return math.sqrt(x)


class BinaryCalculator(Calculator):
    def __init__(self, bits: int = 8):
        self.binary_class = Binary
        self.bits = bits
        self.max_bound = (2 **(self.bits - 1)) - 1
        self.min_bound = self.max_bound * -1

    def add(self, x: int, y: int) -> Binary:
        first = self.binary_class(self, x)
        second = self.binary_class(self, y)
        return first + second

    def subtract(self, x: int, y: int) -> Binary:
        first = self.binary_class(self, x)
        second = self.binary_class(self, y)
        return first - second

    def multiply(self, x: int, y: int) -> Binary:
        first = self.binary_class(self, x)
        second = self.binary_class(self, y)
        return first * second


class AllPurposeCalculator:
    def __init__(self):
        self.scientific = ScientificCalculator()
        self.binary = BinaryCalculator()

    def display_main_menu(self):
        print("\n=== All-Purpose Calculator ===")
        print("1. Scientific Calculator")
        print("2. Binary Calculator")
        print("0. Exit")

    def get_validated_input(self, prompt: str, input_type: type = int) -> Union[int, float]:
        while True:
            try:
                value = input_type(input(prompt))
                return value
            except ValueError:
                print(f"Please enter a valid {input_type.__name__}")

    def run(self):
        while True:
            self.display_main_menu()
            choice = self.get_validated_input("Select calculator type: ")

            if choice == 0:
                print("Thank you for using the calculator!")
                break
            elif choice == 1:
                self.run_scientific_calculator()
            elif choice == 2:
                self.run_binary_calculator()
            else:
                print("Invalid choice. Please try again.")

    def handle_basic_operations(self):
        print("\n Basic Operations:")
        print("1. Addition")
        print("2. Subtraction")
        print("3. Multiplication")
        print("4. Division")

        basic_choice = self.get_validated_input("Enter choice (1-4): ")
        x = self.get_validated_input("Enter first number: ", float)
        y = self.get_validated_input("Enter second number: ", float)

        if basic_choice == 1:
            result = self.scientific.add(x, y)
            print(f"\nResult: {x} + {y} = {result}")
        elif basic_choice == 2:
            result = self.scientific.subtract(x, y)
            print(f"Result: {x} - {y} = {result}")
        elif basic_choice == 3:
            result = self.scientific.multiply(x, y)
            print(f"Result: {x} * {y} = {result}")
        elif basic_choice == 4:
            result = self.scientific.divide(x, y)
            print(f"Result: {x} / {y} = {result}")
        else:
            print("Invalid choice")

    def handle_trigonometric(self):
        print("\nTrigonometric Functions:")
        print("1. Sine")
        print("2. Cosine")
        print("3. Tangent")

        trig_choice = self.get_validated_input("Enter choice (1-3): ")
        value = self.get_validated_input("Enter angle (in radians): ", float)

        if trig_choice == 1:
            result = self.scientific.trigonometric(value, 'sin')
            print(f"Sin({value}) = {result}")
        elif trig_choice == 2:
            result = self.scientific.trigonometric(value, 'cos')
            print(f"Cos({value}) = {result}")
        elif trig_choice == 3:
            result = self.scientific.trigonometric(value, 'tan')
            print(f"Tan({value}) = {result}")
        else:
            print("Invalid choice")

    def handle_advanced(self):
        print("\nAdvanced Functions:")
        print("1. Factorial")
        print("2. Natural Logarithm")
        print("3. Square Root")

        adv_choice = self.get_validated_input("Enter choice (1-3): ")

        if adv_choice == 1:
            n = self.get_validated_input("Enter integer for factorial: ", int)
            result = self.scientific.factorial(n)
            print(f"{n}! = {result}")
        elif adv_choice == 2:
            x = self.get_validated_input("Enter number for logarithm: ", float)
            result = self.scientific.log(x)
            print(f"ln({x}) = {result}")
        elif adv_choice == 3:
            x = self.get_validated_input("Enter number for square root: ", float)
            result = self.scientific.sqrt(x)
            print(f"√{x} = {result}")
        else:
            print("Invalid choice")

    def run_scientific_calculator(self):
        while True:
            print("\n=== Scientific Calculator ===")
            print("1. Basic Operations (+,-,*,/)")
            print("2. Trigonometric Functions")
            print("3. Advanced Functions (factorial, log, sqrt)")
            print("0. Return to Main Menu")

            choice = self.get_validated_input("Select operation: ")
            if choice == 0:
                break
            elif choice == 1:
                self.handle_basic_operations()
            elif choice == 2:
                self.handle_trigonometric()
            elif choice == 3:
                self.handle_advanced()
            else:
                print("Invalid choice")

    def binary_add(self):
        x = self.get_validated_input("Enter first number: ")
        y = self.get_validated_input("Enter second number: ")
        result = self.binary.add(x, y)
        print(f"\nBinary Result: {result}")
        print(f"Decimal Result: {result.denary()}")

    def binary_subtract(self):
        x = self.get_validated_input("Enter first number: ")
        y = self.get_validated_input("Enter second number: ")
        result = self.binary.subtract(x, y)
        print(f"\nBinary Result: {result}")
        print(f"Decimal Result: {result.denary()}")

    def binary_multiply(self):
        x = self.get_validated_input("Enter first number: ")
        y = self.get_validated_input("Enter second number: ")
        result = self.binary.multiply(x, y)
        print(f"\nBinary Result: {result}")
        print(f"Decimal Result: {result.denary()}")

    def run_binary_calculator(self):
        while True:
            print("\n=== Binary Calculator ===")
            print("1. Addition")
            print("2. Subtraction")
            print("3. Multiplication")
            print("0. Return to Main Menu")

            choice = self.get_validated_input("Select operation: ")

            if choice == 0:
                break
            elif choice == 1:
                self.binary_add()
            elif choice == 2:
                self.binary_subtract()
            elif choice == 3:
                self.binary_multiply()
            else:
                print("Invalid choice")


if __name__ == "__main__":
    calculator = AllPurposeCalculator()
    calculator.run()
