import React, { useState } from 'react';

const BinaryCalculator = () => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('');

  const isBinary = (str) => /^[01]+$/.test(str);

  const calculate = () => {
    if (!isBinary(first) || !isBinary(second)) {
      setResult('Invalid binary input');
      return;
    }
    const a = parseInt(first, 2);
    const b = parseInt(second, 2);
    let res;
    switch (operation) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      case '/':
        if (b === 0) {
          setResult('Division by zero');
          return;
        }
        res = Math.floor(a / b);
        break;
      default:
        setResult('Unknown operation');
        return;
    }
    setResult(res.toString(2));
  };

  return (
    <div>
      <h2>Binary Calculator</h2>
      <input
        type="text"
        value={first}
        onChange={e => setFirst(e.target.value)}
        placeholder="First binary number"
      />
      <select value={operation} onChange={e => setOperation(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="text"
        value={second}
        onChange={e => setSecond(e.target.value)}
        placeholder="Second binary number"
      />
      <button onClick={calculate}>Calculate</button>
      <div>
        <strong>Result:</strong> {result}
      </div>
    </div>
  );
};

export default BinaryCalculator;