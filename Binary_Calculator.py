from builtins import Exception
import sys
from Binary_Class import Binary


class MaximumValueException(Exception):
    pass


class MinimumValueException(Exception):
    pass


def open_file(file_name, mode):  # The welcome text
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



class Application:
    def __init__(self, bits=8):
        self.bits = bits
        self.max_bound = (2 ** (self.bits - 1)) - 1
        self.min_bound = self.max_bound * -1

    def input_number(self, message):  # The Exception Function
        while True:
            try:
                user_input = int(input(message))
                if user_input > self.max_bound:
                    raise MaximumValueException()
                if user_input < self.min_bound:
                    raise MinimumValueException()
            except ValueError:
                print("Not an integer! Try again.")
                continue
            except MaximumValueException:
                print('Value above maximum bound of ' + str(self.max_bound))
            except MinimumValueException:
                print('Value below minimum bound of ' + str(self.min_bound))

            else:
                return user_input

    @staticmethod
    def input_sum_type():
        return str(input("What do you want to do (add, take, divide, multiply)? "))



    def input_integer(self, message):
        denary = self.input_number(message)
        binary = Binary(self, denary)
        print(binary)
        return binary

    @staticmethod
    def output_spacer():
        print("--------")

    @staticmethod
    def calculate(sum_type, first_binary, second_binary):
        if sum_type in ["a", "+", "add"]:
            return first_binary + second_binary
        elif sum_type in ['t', '-', "take"]:
            return first_binary - second_binary
        elif sum_type in ['m', 'times', 'x', '*', "multiply"]:
            return first_binary * second_binary
        else:
            return None

    def output_calculated(self, calculated):
        print(calculated)
        self.output_spacer()
        print(calculated.denary())

    def retry(self):
        try_again = str(input("Do you want to try again? "))
        if try_again.lower() in ["yes", "y", "yea"]:
            self.main()
        else:
            print("Thanks.")

    def test(self):
        print("Passed" if (Binary(self, 5) + Binary(self, 10)).denary() == 15 else "Failed")
        print("Passed" if (Binary(self, 125) + Binary(self, 125)).denary() == 250 else "Failed")
        print("Passed" if (Binary(self, 5) - Binary(self, 10)).denary() == -5 else "Failed")
        print("Passed" if (Binary(self, 255) - Binary(self, 120)).denary() == 135 else "Failed")
        print("Passed" if (Binary(self, 4) * Binary(self, 5)).denary() == 20 else "Failed")
        print("Passed" if (Binary(self, 125) * Binary(self, 1000)).denary() == 125000 else "Failed")

    def start(self):
        self.main()

    def main(self):
        open_file("binary.txt", "r")
        sum_type = self.input_sum_type()
        first_binary = self.input_integer("Enter your first Integer: ")
        second_binary = self.input_integer("Enter your Second Integer: ")
        self.output_spacer()
        calculated = self.calculate(sum_type, first_binary, second_binary)
        if calculated is not None:
            self.output_calculated(calculated)
        self.retry()


Application(64).start()
