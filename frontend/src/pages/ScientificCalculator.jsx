import React, { useState } from 'react';

const scientificFunctions = [
  { label: 'sin', fn: Math.sin },
  { label: 'cos', fn: Math.cos },
  { label: 'tan', fn: Math.tan },
  { label: 'log', fn: Math.log10 },
  { label: 'ln', fn: Math.log },
  { label: '√', fn: Math.sqrt },
  { label: 'x²', fn: (x) => x * x },
  { label: 'x³', fn: (x) => x * x * x },
  { label: 'exp', fn: Math.exp },
  { label: 'π', fn: () => Math.PI },
  { label: 'e', fn: () => Math.E }
];

function ScientificCalc() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleFunctionClick = (fn, label) => {
    try {
      let val = input === '' ? 0 : parseFloat(input);
      let res = fn(val);
      setResult(res);
    } catch {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleEquals = () => {
    try {
      // eslint-disable-next-line no-eval
      const evalResult = eval(input);
      setResult(evalResult);
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="scientific-calc">
      <h2>Scientific Calculator</h2>
      <div className="display">
        <input
          type="text"
          value={input}
          readOnly
          placeholder="0"
        />
        <div className="result">{result !== '' ? `= ${result}` : ''}</div>
      </div>
      <div className="buttons">
        <div className="row">
          {[7, 8, 9, '/'].map((v) => (
            <button key={v} onClick={() => handleButtonClick(v.toString())}>{v}</button>
          ))}
        </div>
        <div className="row">
          {[4, 5, 6, '*'].map((v) => (
            <button key={v} onClick={() => handleButtonClick(v.toString())}>{v}</button>
          ))}
        </div>
        <div className="row">
          {[1, 2, 3, '-'].map((v) => (
            <button key={v} onClick={() => handleButtonClick(v.toString())}>{v}</button>
          ))}
        </div>
        <div className="row">
          {[0, '.', '+'].map((v) => (
            <button key={v} onClick={() => handleButtonClick(v.toString())}>{v}</button>
          ))}
          <button onClick={handleEquals}>=</button>
        </div>
        <div className="row">
          <button onClick={handleClear}>C</button>
        </div>
        <div className="row scientific">
          {scientificFunctions.map(({ label, fn }) => (
            <button key={label} onClick={() => handleFunctionClick(fn, label)}>{label}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScientificCalc;