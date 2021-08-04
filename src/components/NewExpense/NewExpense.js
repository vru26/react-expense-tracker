import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import React, { useState } from 'react';

const NewExpense = (props) => {
    const [showFormBool, setShowFormBool] = useState(false);
console.log('New Expense')
    const hideExpenseForm = () => {
        setShowFormBool(false);
    }

    const saveExpenseDataHandler = (expenseData) => {
        props.onExpenseSave({...expenseData, id: Math.random()});
        hideExpenseForm();
    };

    const addExpenseBtnHandler = (event) => {
        setShowFormBool(true);
    }


    return (
        <div className="new-expense">
            {showFormBool ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHideForm={hideExpenseForm}></ExpenseForm> : <button onClick={addExpenseBtnHandler}>Add Expense</button>}
        </div>
    );
}

export default NewExpense;