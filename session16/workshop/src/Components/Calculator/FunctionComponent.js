
import './style.css';
import { useState, useEffect } from "react";

let FunctionComponent = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let [input, setInput] = useState('');
    let [firstNumber, setFirstNumber] = useState('');
    let [operator, setOperator] = useState('');
    let [secondNumber, setSecondNumber] = useState('');
    let [result, setResult] = useState('');

    useEffect(() => {
        generateInput();
    });

    const inputNumber = (number) => {
        if (result !== ''){
            clearInput();
            setFirstNumber(number);
        } else {
            if (operator === ''){
                setFirstNumber(firstNumber += number.toString());
            } else {
                setSecondNumber(secondNumber += number.toString());
            }
        }
    }

    const addDot = () => {
        if (result !== ''){
            clearInput();
            return;
        }
        if (firstNumber !== '' && !firstNumber.toString().includes('.') && secondNumber === ''){
            setFirstNumber(firstNumber += '.');
        }
        if (secondNumber !== '' && !secondNumber.toString().includes('.')){
            setSecondNumber(secondNumber += '.');
        }
    }

    const inputOperator = (op) => {
        if (firstNumber.length === 0){
            return;
        }
        setOperator(op);
    }

    const generateInput = () => {
        let input = firstNumber + ' ' + operator + ' ' + secondNumber;
        if (result !== ''){
            input = result;
        }
        setInput(input);
    }

    const calculateResult = () => {
        try {
            let final = '';
            if (firstNumber !== '' && operator !== '' && secondNumber !== ''){
                // eslint-disable-next-line default-case
                switch (operator) {
                    case '+':
                        final = parseFloat(firstNumber) + parseFloat(secondNumber);
                        break;
                    case '-':
                        final = parseFloat(firstNumber) - parseFloat(secondNumber);
                        break;
                    case '*':
                        final = parseFloat(firstNumber) * parseFloat(secondNumber);
                        break;
                    case '/':
                        final = parseFloat(firstNumber) / parseFloat(secondNumber);
                        break;
                }
                setResult(final);
            }
        } catch(error) {
            alert(error.message);
        }
    }

    const clearInput = () => {
        setInput('');
        setFirstNumber('');
        setOperator('');
        setSecondNumber('');
        setResult('');
    }

    return (
        <>
            <div className={'container'}>
                <div className={'row my-5'}>
                    <input className={'form-control d-inline-block mr-5'} type="text" disabled value={input} />
                </div>
                <div className={'row my-5 d-flex'}>
                    <div className="col-3">
                        <button className={'btn cursor-pointer w-100 font-20'} onClick={() => inputOperator('+')}>+</button>
                    </div>
                    <div className="col-3">
                        <button className={'btn cursor-pointer w-100 font-20'} onClick={() => inputOperator('-')}>-</button>
                    </div>
                    <div className="col-3">
                        <button className={'btn cursor-pointer w-100 font-20'} onClick={() => inputOperator('*')}>*</button>
                    </div>
                    <div className="col-3">
                        <button className={'btn cursor-pointer w-100 font-20'} onClick={() => inputOperator('/')}>/</button>
                    </div>
                </div>
                <div className={'row my-5 d-flex'}>
                    <div className="col-9">
                        <div className="row d-flex px-0">
                            <div className="col-4">
                                <button className={'btn cursor-pointer w-100 font-20'} onClick={() => inputNumber(7)}>7</button>
                            </div>
                            <div className="col-4">
                                <button className={'btn cursor-pointer w-100 font-20'} onClick={() => inputNumber(8)}>8</button>
                            </div>
                            <div className="col-4">
                                <button className={'btn cursor-pointer w-100 font-20'} onClick={() => inputNumber(9)}>9</button>
                            </div>
                        </div>
                        <div className="row d-flex px-0">
                            <div className="col-4">
                                <button className={'btn cursor-pointer w-100 font-20'} onClick={() => inputNumber(4)}>4</button>
                            </div>
                            <div className="col-4">
                                <button className={'btn cursor-pointer w-100 font-20'} onClick={() => inputNumber(5)}>5</button>
                            </div>
                            <div className="col-4">
                                <button className={'btn cursor-pointer w-100 font-20'} onClick={() => inputNumber(6)}>6</button>
                            </div>
                        </div>
                        <div className="row d-flex px-0">
                            <div className="col-4">
                                <button className={'btn cursor-pointer w-100 font-20'} onClick={() => inputNumber(1)}>1</button>
                            </div>
                            <div className="col-4">
                                <button className={'btn cursor-pointer w-100 font-20'} onClick={() => inputNumber(2)}>2</button>
                            </div>
                            <div className="col-4">
                                <button className={'btn cursor-pointer w-100 font-20'} onClick={() => inputNumber(3)}>3</button>
                            </div>
                        </div>
                        <div className="row d-flex px-0">
                            <div className="col-4">
                                <button className={'btn cursor-pointer w-100 font-20'} onClick={() => inputNumber(0)}>0</button>
                            </div>
                            <div className="col-4">
                                <button className={'btn cursor-pointer w-100 font-20'} onClick={() => addDot()}>.</button>
                            </div>
                            <div className="col-4">
                                <button className={'btn cursor-pointer w-100 font-20'} onClick={() => clearInput()}>Clear</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <button className={'btn cursor-pointer w-100 h-100 font-20'} onClick={() => calculateResult()}>=</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FunctionComponent;
