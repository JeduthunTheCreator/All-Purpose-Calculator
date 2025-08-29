import React, { useState } from 'react';
import { calculateScientific } from '../services/api';
import '../styles/ScientificCalculator.css';
import { LuPi } from 'react-icons/lu';
import { FaArrowRightArrowLeft, FaSquareRootVariable } from 'react-icons/fa6';
import { IoArrowUndoSharp } from 'react-icons/io5';
import { TbSquareRoot } from "react-icons/tb";


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
        <div className="wrapper">
            <section className="screen">
                0
            </section>

            <section className="calc-buttons">
                <div classname="calc-button-row">
                    <button className="calc-button double">
                        2nd
                    </button>
                    <button className="calc-button">
                        π
                    </button>
                    <button className="calc-button">
                        e
                    </button>
                    <button className="calc-button">
                        [::]
                    </button>
                    <button className="calc-button">
                        x
                    </button>
                    <button className="calc-button">
                        (
                    </button>
                    <button className="calc-button">
                        ,
                    </button>
                    <button className="calc-button">
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
                    <button className="calc-button">
                        cot
                    </button>
                    <button className="calc-button">
                        <span className="root-expression">
                            <span className="root-index">y</span>
                            <span className="radical">√</span>
                            <span className="radicand">x</span>
                        </span>
                    </button>
                    <button className="calc-button double">
                        C
                    </button>
                    <button className="calc-button double">
                        C
                    </button>
                    <button className="calc-button double">
                        C
                    </button>
                    <button className="calc-button double">
                        C
                    </button>
                    <button className="calc-button double">
                        C
                    </button>
                    <button className="calc-button double">
                        C
                    </button>
                </div>

                <div className="calc-button-row">
                    <button className="calc-button">
                        4
                    </button>
                    <button className="calc-button">
                        5
                    </button>
                    <button className="calc-button">
                        6
                    </button>
                    <button className="calc-button">
                        &minus;
                    </button>
                    <button className="calc-button double">
                        C
                    </button>
                    <button className="calc-button double">
                        C
                    </button>
                    <button className="calc-button double">
                        C
                    </button>
                    <button className="calc-button double">
                        C
                    </button>
                    <button className="calc-button double">
                        C
                    </button>
                    <button className="calc-button double">
                        C
                    </button>
                </div>

                <div classname="calc-button-row">
                    <button className="calc-button">
                        1
                    </button>
                    <button className="calc-button">
                        2
                    </button>
                    <button className="calc-button">
                        3
                    </button>
                    <button className="calc-button">
                        0
                    </button>
                    <button className="calc-button">
                        C
                    </button>
                    <button className="calc-button">
                        C
                    </button>
                    <button className="calc-button">
                        0
                    </button>
                    <button className="calc-button">
                        0
                    </button>
                    <button className="calc-button">
                        0
                    </button>
                    <button className="calc-button">
                        0
                    </button>
                </div>

                <div className="calc-button-row">
                    <button className="calc-button triple">
                        0
                    </button>
                    <button className="calc-button">
                        &
                    </button>
                    <button className="calc-button">
                        &
                    </button>
                    <button className="calc-button">
                        &
                    </button>
                    <button className="calc-button">
                        &
                    </button>
                    <button className="calc-button">
                        0
                    </button>
                    <button className="calc-button">
                        &
                    </button>
                    <button className="calc-button">
                        &
                    </button>
                    <button className="calc-button">
                        &
                    </button>
                    <button className="calc-button">
                        &
                    </button>
                </div>

            </section>
        </div>
    )
};

export default ScientificCalculator;