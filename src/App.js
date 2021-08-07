// import ExpenseItem from "./components/ExpenseItem";
import Expense from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';
import React, { useState } from 'react';
// This import was required earlier but not in the modern react apps this can be omitted.

const EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expenses, setExpenses] = useState(EXPENSES)

  const saveExpensehandler = expense => {
    console.log('save expense handler', expense);
    setExpenses(prevData => {
      return [expense, ...prevData];
    });
  }

  return (
    <div>
      {/* In order to receive the expense value (Child-to-Parent i.e Lifting the State Up meaning pass the data up in the component hierarchy tree) here from ExpenseForm->NewExpense->App component, we pass functions as props to child components. NOTE: Intermediate components can't be skipped either while pass the data from Parent-to-Child or from Child-to-Parent. */}
      <NewExpense onExpenseSave={saveExpensehandler}></NewExpense>
      <Expense items={expenses}></Expense>
      {/* <Expense title="Insurance" amount="5000" date={new Date(2021, 7, 29)}></Expense> */}
      {/* User defined element must start with UPPER CASE CHAR so as to differentiate between builtin and user defined elements. */}
      {/* <ExpenseItem title="Insurance" amount="5000" date={new Date(2021, 7, 29)}></ExpenseItem> */}
      {/* title, amount & date will be passed to the ExpenseItem component function as an object. title, amount & date are userdefined and can be anything. */}
    </div>
  );

  // The following piece of code is same as the above return statement. The JSX code is somewhat converted to the following lines internally and due to this reason we need to have a wrapping element like div in this case. The below transformation won't be possible without a parent/wrapper element. Also in JS we can return only a single element and hence we cannot use return (React.createElement(A); React.createElement(B)). That's the reason why we cannot return 2 JSX elements and hence we must have only 1 root element. We can ofcourse have nested JSX elements. 
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, 'Let\'s get started'),
  //   React.createElement(Expense, {items: expenses}),
  // );
}

export default App;
