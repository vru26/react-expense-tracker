import './ExpenseForm.css';
import React, { useState } from 'react';

/* Instead of using STATE variables we could have used GLOBAL vars but on doing so we would have been able to only persist/store the values received via UI(user). By not using GLOBAL vars, we can achieve 2-way data binding which simply means when the values are updated via the UI(user), the changes are passed on to the model(code) and when values are updated via program(code), the UI is updated to reflect the new values. Example: Here, 'enteredTitle, enteredDate, enteredAmount' STATE vars are updated via the User(event handler functions) as well as the code(submitHandler function) */
const ExpenseForm = (props) => {
    // Multiple State Approach.
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // Single State Approach.
    // const [userInput, setUserInput] = useState({
    //     enteredAmount: '',
    //     enteredDate: '',
    //     enteredTitle: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // The following single state update approach works but it is risky since React schedules state updates instead of doing it right away so the previous state values may or may not be correct. We might be depending on an outdated state snapshot.
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        // In case of single state update use the following solution in which React takes care to provide latest correct previous state values/snapshot to the passed funstion keeping all state updates in mind.
        // Use function approach when the state approach depends on previous state.
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value,
        //     };
        // })
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault(); // Prevents the default browser behaviour on clicking Submit btn so that we can handle it ourselves. (By default, the browser sends a request and reload the page so this behaviour is prevented.)

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <button type="button" onClick={props.onHideForm}>Cancel</button>
            </div>
        </form>
    );
}

export default ExpenseForm;