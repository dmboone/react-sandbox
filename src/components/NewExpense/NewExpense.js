import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }
    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm> {/* creating our own prop here (onSaveExpenseData) 
                                                                                    and passing in a function that we wrote(saveExpenseDataHandler) 
                                                                                    so that the child componet (ExpenseForm) can send this parent
                                                                                    component (NewExpense) information */}
        </div>
    );
}

export default NewExpense;