import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const handleOnClick = (event) => {
        event.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000000),
            text,
            amount
        };
        addTransaction(newTransaction);
    };

    return (
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" onChange={(e) => setText(e.target.value)} value={text} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" onChange={(e => setAmount(parseInt(e.target.value)))} value={amount} placeholder="Enter amount..." />
                </div>
                <button onClick={handleOnClick} className="btn">Add transaction</button>
            </form>
        </>
    );
};