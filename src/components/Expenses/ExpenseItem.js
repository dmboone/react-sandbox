import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

// a component in React is just a special kind of javascript function
function ExpenseItem(props) {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/> {/* since no text between the tags you can also write components like this! */}
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem; // must always export your component!
