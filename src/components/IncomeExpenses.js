import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const income = transactions
        .map(transaction => transaction.amount)
        .filter(amount => amount > 0)
        .reduce((acc, amount) => (acc += amount), 0)
        .toFixed(2);

    const expense = transactions
        .map(transaction => transaction.amount)
        .filter(amount => amount <= 0)
        .reduce((acc, amount) => (acc += amount), 0)
        .toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${Math.abs(parseInt(expense))}</p>
            </div>
        </div>
    );
};