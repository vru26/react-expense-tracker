import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// props is the object which contains the data passed from App.js.
// props helps to share data between the components and makes the component reusable.
function ExpenseItem(props) {
    // const expenseDate = new Date(2021, 7, 29);
    // const expenseDesc = 'Insurance';
    // const expenseAmount = 5000;
    // NOTE: Each component should return only one root element. Example: <div>some stuff</div><div<some more stuff</div> is not allowed. But <div><div>some stuff</div><div>some more stuff</div></div> is allowed. Note that all the stuff is wrapped insided a single parent/root div.
    return (
        // Here instead of "class" attribute we use "className" because this looks like HTML but its actually JSX (which actually under the hood is JS and "class" is a reserved keyword in JS) so there are minor changes to some attributes.
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">Rs. {props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;