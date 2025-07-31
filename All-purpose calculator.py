import os
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


open_file("All-purpose calculator.txt", "r")
while True:
    try:
        user_input = int(input("What is your choice ?"))
        if user_input == 0:
            break
        if user_input == 1:
            os.system('\nBasic_Calculator.py')
            break
        elif user_input == 2:
            os.system('\nBinary_Calculator.py')
            break
    except ValueError:
        print("You have to pick an action ")
        continue


print("\nGoodbye :)...")
