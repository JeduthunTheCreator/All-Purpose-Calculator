import React, { useState } from 'react';
import { calculateScientific } from '../services/api';
import '../styles/ScientificCalculator.css';
import { FaArrowRightArrowLeft, FaPlusMinus, FaPlus, FaEquals } from 'react-icons/fa6';
import { IoArrowUndoSharp } from 'react-icons/io5';


const ScientificCalculator = () => {
    const [display, setDisplay] = useState('0');
    const [previousValue, setPreviousValue] = useState(null);
    const [operation, setOperation] = useState(null);
    const [waitingForNewValue, setWaitingForNewValue] = useState(false);


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
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-[rgb(6,0,16)] ">

            <div className="wrapper">
                <section className="screen">
                    0
                </section>

                <section className="calc-buttons">
                    <div className="calc-button-row">
                        <button className="calc-button">
                            2nd
                        </button>
                        <button className="calc-button">
                            π
                        </button>
                        <button className="calc-button gap-right">
                            e
                        </button>
                        <button className="calc-button">
                            [::]
                        </button>
                        <button className="calc-button gap-right">
                            x
                        </button>
                        <button className="calc-button">
                            (
                        </button>
                        <button className="calc-button">
                            ,
                        </button>
                        <button className="calc-button gap-right">
                            )
                        </button>
                        <button className="calc-button">
                            <FaArrowRightArrowLeft/>
                        </button>
                        <button className="calc-button">
                            <IoArrowUndoSharp/>
                        </button>
                    </div>

                    <div className="calc-button-row">
                        <button className="calc-button">
                            sin
                        </button>
                        <button className="calc-button">
                            sinh
                        </button>
                        <button className="calc-button gap-right">
                            cot
                        </button>
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
                        <button className="calc-button">
                            7
                        </button>
                        <button className="calc-button">
                            8
                        </button>
                        <button className="calc-button gap-right">
                            9
                        </button>
                        <button className="calc-button">
                            &divide;
                        </button>
                        <button className="calc-button">
                            C
                        </button>
                    </div>

                    <div className="calc-button-row">
                        <button className="calc-button">
                            cos
                        </button>
                        <button className="calc-button">
                            cosh
                        </button>
                        <button className="calc-button gap-right">
                            sec
                        </button>
                        <button className="calc-butto">
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
                        <button className="calc-button">
                            4
                        </button>
                        <button className="calc-button">
                            5
                        </button>
                        <button className="calc-button gap-right">
                            6
                        </button>
                        <button className="calc-button">
                            &times;
                        </button>
                    </div>

                    <div className="calc-button-row">
                        <button className="calc-button">
                            tan
                        </button>
                        <button className="calc-button">
                            tanh
                        </button>
                        <button className="calc-button gap-right">
                            csc
                        </button>
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
                        <button className="calc-button">
                            1
                        </button>
                        <button className="calc-button">
                            2
                        </button>
                        <button className="calc-button gap-right">
                            3
                        </button>
                        <button className="calc-button">
                            &minus;
                        </button>
                    </div>

                    <div className="calc-button-row">
                        <button className="calc-button">
                            ncr
                        </button>
                        <button className="calc-button">
                            npr
                        </button>
                        <button className="calc-button gap-right">
                            %
                        </button>
                        <button className="calc-button">
                            log
                        </button>
                        <button className="calc-button gap-right">
                            <span className="square-expression">
                                <span className="base-10">10</span>
                                <span className="exponent">x</span>
                            </span>
                        </button>
                        <button className="calc-button">
                            0
                        </button>
                        <button className="calc-button ">
                            <FaPlusMinus />
                        </button>
                        <button className="calc-button gap-right">
                            .
                        </button>
                        <button className="calc-button">
                            <FaPlus />
                        </button>
                        <button className="calc-button-triple">
                            <FaEquals />
                        </button>
                    </div>
                </section>
            </div>
        </div>
    )
};

export default ScientificCalculator;