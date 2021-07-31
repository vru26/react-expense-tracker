import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import React, { useState } from 'react';
import ExpenseChart from './ExpenseChart';

// Presentational vs Statefull/Stateless vs Stateful/Dumb vs Smart Components
// Presentational/Stateless/Dumb components - which do not manage any state (state variables). Just there to output some data.
// Stateful/Smart Components - which manage the state (state variables).
// This is a STATEFUL Component because it manages the state of 'year' state variable.
function Expenses(props) {
    const [year, setYear] = useState('2021');
    const filterUpdateHandler = (filterData) => {
        setYear(filterData);
        console.log('filter update', filterData)
    }

    let filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === year);
    let expensesList = <p>No Expenses found.</p>;
    let chartData = [];

    if (filteredExpenses.length > 0) {
        expensesList = filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>);
        // chartData = filteredExpenses.reduce((acc, curr) => {
        //     console.log('acc', acc)
        //     const currMonth = curr.date.getMonth();
        //     if (currMonth in acc) {
        //         acc[currMonth] += curr.amount;
        //     } else {
        //         acc[currMonth] = 0;
        //     }
        // });
        console.log('data', chartData)
    }

    return(
        <div>
            <Card className="expenses">
                {/* ExpensesFilter is a CONTROLLED Component because it does not manages the state and it just displays data sent by Expenses Component. The (year) value is not handled by the ExpensesFilter component. It either receives the value from Expenses Component and/or sends the value to the Expenses Component */}
                <ExpenseChart filteredList={filteredExpenses}></ExpenseChart>
                <ExpenseFilter selected={year} onFilterUpdate={filterUpdateHandler}></ExpenseFilter>
                {expensesList}
                {/* {props.items.filter(expense => expense.date.getFullYear().toString() === year).map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>)} */}
                {/* A unique 'key' is needed so that React can diffferentiate between the list of items and can make the updation accordingly. If that 'key' is not provided, React won't be able to differentiate and hence it might need to update all the items in the list which can create performance, state management (state changes might be lost), etc issues. */}
            </Card>
        </div>
    );
}

export default Expenses;