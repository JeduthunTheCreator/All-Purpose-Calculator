from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import os

# Add the current directory to the path to import existing modules
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# Import existing classes
from All_purpose_calculator import ScientificCalculator, BinaryCalculator
from Binary_Class import Binary

app = Flask(__name__)
CORS(app)

# Initialize calculators
scientific_calc = ScientificCalculator()
binary_calc = BinaryCalculator()


@app.route('/api/scientific/calculate', methods=['POST'])
def calculate_scientific():
    try:
        data = request.get_json()
        operation = data.get('operation')
        operand1 = float(data.get('operand1'))
        operand2 = data.get('operand2')

        if operand2 is not None:
            operand2 = float(operand2)

        result = None

        # Basic operations
        if operation == 'add':
            result = scientific_calc.add(operand1, operand2)
        elif operation == 'subtract':
            result = scientific_calc.subtract(operand1, operand2)
        elif operation == 'multiply':
            result = scientific_calc.multiply(operand1, operand2)
        elif operation == 'divide':
            result = scientific_calc.divide(operand1, operand2)

        # Trigonometric functions
        elif operation['sin', 'cos', 'tan']:
            result = scientific_calc.trigonometric(operand1, operation)

        # Advanced functions
        elif operation == 'factorial':
            if operand1 != int(operand1) or operand1 < 0:
                return jsonify({'error': 'Factorial requires non-negative integer'}), 400
            result = scientific_calc.factorial(int(operand1))
        elif operation == 'log':
            result = scientific_calc.log(operand1)
        elif operation == 'sqrt':
            result = scientific_calc.sqrt(operand1)
        else:
            return jsonify({'error': 'Invalid operation'}), 400

        return jsonify({'result': result})
    except ValueError as e:
        return jsonify({'error': str(e)}), 400
    except Exception as e:
        return jsonify({'error': f'Calculation error: {str(e)}'}), 500


@app.route('/api/binary/calculate', methods=['POST'])
def calculate_binary():
    try:
        data = request.get_json()
        operation = data.get('operation')
        operand1 = int(data.get('operand1'))
        operand2 = int(data.get('operand2'))

        result = None

        if operation == 'add':
            result = binary_calc.add(operand1, operand2)
        elif operation == 'subtract':
            result = binary_calc.subtract(operand1, operand2)
        elif operation == 'multiply':
            result = binary_calc.multiply(operand1, operand2)
        else:
            return jsonify({'error': 'Invalid operation'}), 400

        return jsonify({
            'binary_result': str(result),
            'decimal_result': result.denary()
        })

    except ValueError as e:
        return jsonify({'error': str(e)}), 400
    except Exception as e:
        return jsonify({'error': f'Calculation error: {str(e)}'}), 500


@app.route('/api/binary/info', methods=['GET'])
def get_binary_info():
    return jsonify({
        'bits': binary_calc.bits,
        'max_bound': binary_calc.max_bound,
        'min_bound': binary_calc.min_bound
    })


if __name__ == "__main__":
    app.run(debug=True, port=5000)
