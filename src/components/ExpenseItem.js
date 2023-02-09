import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

// a component in React is just a special kind of javascript function
function ExpenseItem(props) {
    return (
        <div className='expense-item'>
        <ExpenseDate date={props.date}/> {/* since no text between the tags you can also write components like this! */}
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        </div>
    );
}

export default ExpenseItem; // must always export your component!
