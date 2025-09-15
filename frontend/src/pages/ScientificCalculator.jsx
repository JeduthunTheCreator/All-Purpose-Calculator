import React, { useState } from 'react';
import { calculateScientific } from '../services/api';
import '../styles/ScientificCalculator.css';
import PillNav from '../components/Navbar.jsx';
import { FaTimes } from 'react-icons/fa';
import { FaArrowRightArrowLeft, FaPlusMinus, FaPlus, FaEquals, FaDivide, FaMinus } from 'react-icons/fa6';
import { IoArrowUndoSharp } from 'react-icons/io5';
import logo from '../assets/logo(1).webp';


const ScientificCalculator = () => {
    const [display, setDisplay] = useState('0');
    const [previousValue, setPreviousValue] = useState(null);
    const [operation, setOperation] = useState(null);
    const [waitingForNewValue, setWaitingForNewValue] = useState(false);

    // Operator Styling used to update general shared class and each operator class
    const sharedOperatorStyles = "backdrop-blur-[5.5px] [-webkit-backdrop-filter:blur(5.5px)] border border-white/85 rounded-lg shadow-[0_4px_30px_rgba(35,35,35,0.1)] text-white bg-[#3a4a5c] hover:text-[#232323]";
    const operatorButtonClass = `calc-button ${sharedOperatorStyles}`;
    const tripleButtonClass = `calc-button-triple ${sharedOperatorStyles}`;

    const numberButtonClass = ``;

    const performOperation = async (nextOperation) => {
        const inputValue = parseFloat(display);

        if (previousValue === null) {
            setPreviousValue(inputValue);
        } else if (operation) {
            const currentValue = previousValue || 0;
            try {
                const result = await calculateScientific(operation, currentValue, inputValue);
                setDisplay(String(result));
                setPreviousValue(result);
            } catch (error) {
                setDisplay('Error');
                setPreviousValue(null);
                console.error('Calculation error:', error);
            }
        }

        setWaitingForNewValue(true);
        setOperation(nextOperation);
    };

    const performUnaryOperation = async (op) => {
        const inputValue = parseFloat(display);
        try {
            const result = await calculateScientific(op, inputValue);
            setDisplay(String(result));
            setWaitingForNewValue(true);
        } catch (error) {
            setDisplay('Error');
            console.error('Calculation error:', error);
        }
    };

    return (
        <div className="relative flex flex-col min-h-screen overflow-hidden bg-[rgb(6,0,16)]">
            {/* Header Section */}
            <header className="grid grid-cols-2 items-center p-8 border border-red/85 bg-[rgb(26,15,61)]">
                <h1 className="col-start-1 mt-[20px] page-title">Scientific Calculator</h1>

                <nav className="col-start-2 scientific-navbar">
                    <PillNav
                        logo={logo}
                        logoAlt="Company Logo"
                        items={[
                            { label: 'Home', href: '/' },
                            { label: 'Binary Calculator', href: '/binary' },

                        ]}
                        activeHref="/scientific"
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
            <main className="flex items-center justify-center pt-[80px]">
                <div className="wrapper">
                    <section className="screen">
                        {display}
                    </section>

                    <section className="calc-buttons">
                        <div className="calc-button-row">
                            <button className="calc-button"> 2nd </button>
                            <button className="calc-button"> π </button>
                            <button className="calc-button gap-right"> e </button>
                            <button className="calc-button"> [::] </button>
                            <button className="calc-button gap-right"> x </button>
                            <button className="calc-button"> ( </button>
                            <button className="calc-button"> , </button>
                            <button className="calc-button gap-right"> ) </button>
                            <button className={`${operatorButtonClass} icon-style`} > <FaArrowRightArrowLeft /> </button>
                            <button className={operatorButtonClass}> <IoArrowUndoSharp /> </button>
                        </div>

                        <div className="calc-button-row">
                            <button className="calc-button"> sin </button>
                            <button className="calc-button"> sinh </button>
                            <button className="calc-button gap-right"> cot </button>
                            <button className="calc-button">
                                <span className="root-expression">
                                    <span className="root-index">y</span>
                                    <span className="radical">√</span>
                                    <span className="radicand">x</span>
                                </span>
                            </button>
                            <button className="calc-button gap-right">
                                <span className="square-expression">
                                    <span className="base">x</span>
                                    <span className="exponent">y</span> 
                                </span>
                            </button>
                            <button className="calc-button"> 7 </button>
                            <button className="calc-button"> 8 </button>
                            <button className="calc-button gap-right"> 9 </button>
                            <button className={`${operatorButtonClass} icon-style`} > <FaDivide /> </button>
                            <button className={operatorButtonClass}> C </button>
                        </div>

                        <div className="calc-button-row">
                            <button className="calc-button"> cos </button>
                            <button className="calc-button"> cosh </button>
                            <button className="calc-button gap-right"> sec </button>
                            <button className="calc-button">
                                <span className="root-expression">
                                    <span className="root-index">3</span>
                                    <span className="radical">√</span>
                                    <span className="radicand">x</span>
                                </span>
                            </button>
                            <button className="calc-button gap-right">
                                <span className="square-expression">
                                    <span className="base">x</span>
                                    <span className="exponent">3</span>
                                </span>
                            </button>
                            <button className="calc-button"> 4 </button>
                            <button className="calc-button"> 5 </button>
                            <button className="calc-button gap-right" > 6 </button>
                            <button className={operatorButtonClass}> <FaTimes /> </button>
                        </div>

                        <div className="calc-button-row">
                            <button className="calc-button"> tan </button>
                            <button className="calc-button"> tanh </button>
                            <button className="calc-button gap-right"> csc </button>
                            <button className="calc-button">
                                <span className="root-expression">
                                    <span className="radical">√</span>
                                    <span className="radicand">x</span>
                                </span>
                            </button>
                            <button className="calc-button gap-right">
                                <span className="square-expression">
                                    <span className="base">x</span>
                                    <span className="exponent">2</span>
                                </span>
                            </button>
                            <button className="calc-button"> 1 </button>
                            <button className="calc-button"> 2 </button>
                            <button className="calc-button gap-right"> 3 </button>
                            <button className={operatorButtonClass}> <FaMinus /> </button>
                        </div>

                        <div className="calc-button-row">
                            <button className="calc-button"> ncr </button>
                            <button className="calc-button"> npr </button>
                            <button className="calc-button gap-right"> % </button>
                            <button className="calc-button"> log </button>
                            <button className="calc-button gap-right">
                                <span className="square-expression">
                                    <span className="base-10">10</span>
                                    <span className="exponent">x</span>
                                </span>
                            </button>
                            <button className="calc-button"> 0 </button>
                            <button className="calc-button"> <FaPlusMinus /> </button>
                            <button className="calc-button gap-right"> . </button>
                            <button className={`${operatorButtonClass} icon-style`}> <FaPlus/> </button>
                            <button className={`${tripleButtonClass} icon-style`}> <FaEquals /> </button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
};

export default ScientificCalculator;