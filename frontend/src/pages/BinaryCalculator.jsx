import React, { useState } from 'react';
import '../styles/BinaryCalculator.css';
import PillNav from '../components/Navbar.jsx';
import logo from '../assets/logo(1).webp';

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
        <div className="relative flex flex-col min-h-screen overflow-hidden">
            {/* Header Section*/}
            <header className="grid grid-cols-2 items-center p-8 border border-red/85 bg-[rgb(26,15,61)]">
                <h1 className="col-start-1 mt-[20px] page-title">Binary Calculator</h1>

                <nav className="col-start-2 binary-navbar">
                    <PillNav
                        logo={logo}
                        logoAlt="Company Logo"
                        items={[
                            { label: 'Home', href: '/' },
                            { label: 'Scientific Calculator', href: '/scientific' },

                        ]}
                        activeHref="/binary"
                        className="custom-nav"
                        ease="power2.easeOut"
                        baseColor="#999999"
                        pillColor="#ffffff"
                        hoveredPillTextColor="#ffffff"
                        pillTextColor="#000000"
                    />
                </nav>
            </header>

            {/* Main Calculator */}
            <main className="flex-1 flex items-center justify-center pt-[40px]">
                <div>
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
                </div>

                <button onClick={calculate}>Calculate</button>

                <div>
                    <strong>Result:</strong> {result}
                </div>
            </main>
        </div>
    );
};

export default BinaryCalculator;