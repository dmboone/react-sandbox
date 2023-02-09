import {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

// a component in React is just a special kind of javascript function
function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title); // useState will return the current state value and the function to update the value

    const clickHandler = () => {
        setTitle('Updated!'); // assigns new value but also reexcutes the component function to update with the change
        console.log(title);
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/> {/* since no text between the tags you can also write components like this! */}
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem; // must always export your component!
