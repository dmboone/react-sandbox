import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) =>{
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return(
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>} {/* quick way to write conditional so that this button only shows if we are in the editing state */}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}></ExpenseForm>} {/* creating our own prop here (onSaveExpenseData) 
                                                                                    and passing in a function that we wrote(saveExpenseDataHandler) 
                                                                                    so that the child componet (ExpenseForm) can send this parent
                                                                                    component (NewExpense) information */}
        </div>
    );
}

export default NewExpense;