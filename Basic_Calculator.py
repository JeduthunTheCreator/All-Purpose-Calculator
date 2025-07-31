import math
import sys



def open_file(file_name, mode):
    """Open a file."""
    try:
        text_file = open(file_name, mode)
        the_file = text_file.read()
    except IOError as e:
        print("Unable to open the file", file_name, "Ending program.\n", e)
        input("\n\nPress the enter key to exit.")
        sys.exit()
    else:
        print(the_file)
        text_file.close()


def ask_yes_no(question):
    """Ask a yes or no question."""
    response = None
    while response not in ("y", "n"):
        response = input(question).lower()
    return response


open_file("basic.txt", "r")

Choice = int(input("Enter your choice: "))
# The Calculation Loop
if Choice == 0:
    print("Thank you for using my calculator")
    print("Hope i was helpful")
if Choice == 1:
    try:
        num1 = int(input("Enter first number: "))
        num2 = int(input("Enter second number: "))
    except ValueError:
        print("That is not an integer, try again.")
    else:
        print("Output: ", num1 + num2)
        print()
elif Choice == 2:
    try:
        num1 = int(input("Enter first number: "))
        num2 = int(input("Enter second number: "))
    except ValueError:
        print("That is not an integer, try again.")
    else:
        print("Output: ", num1 - num2)
        print()
elif Choice == 3:
    try:
        num1 = int(input("Enter first number: "))
        num2 = int(input("Enter second number: "))
    except ValueError:
        print("That is not an integer, try again.")
    else:
        print("Output: ", num1 * num2)
        print()
elif Choice == 4:
    try:
        num1 = int(input("Enter first number: "))
        num2 = int(input("Enter second number: "))
    except ValueError:
        print("That is not an integer, try again.")
    else:
        print("Output: ", num1 / num2)
        print()
elif Choice == 5:
    try:
        num1 = int(input("Enter the number: "))
    except ValueError:
        print("That is not an integer, try again.")
    else:
        print("Output:", math.tan(num1))
        print()
elif Choice == 6:
    try:
        num1 = int(input("Enter the number:"))
    except ValueError:
        print("That is not an integer, try again.")
    else:
        print("Output:", math.sin(num1))
        print()
elif Choice == 7:
    try:
        num1 = int(input("Enter the number:"))
    except ValueError:
        print("That is not an integer, try again.")
    else:
        print("Output:", math.cos(num1))
        print()
elif Choice == 8:
    try:
        num1 = int(input("Enter the number:"))
    except ValueError:
        print("That is not an integer, try again.")
    else:
        print("Output:", math.factorial(num1))
        print()
elif Choice == 9:
    try:
        num1 = int(input("Enter the number:"))
    except ValueError:
        print("That is not an integer, try again.")
    else:
        print("Output:", math.log(num1))
        print()
elif Choice == 10:
    try:
        num1 = int(input("Enter the number:"))
    except ValueError:
        print("That is not an integer, try again.")
    else:
        print("Output:", math.sqrt(num1))
        print()
