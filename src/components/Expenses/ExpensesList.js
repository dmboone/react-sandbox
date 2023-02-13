import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => {
    {/* changes what to display based on a conditional and keeps the logic out of the jsx snippet that we return */}
    if(props.items.length === 0){
      return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    return(
        <ul className="expenses-list">
            {/* dynamically adding our expense item elements based on the amount of data in our array */}
            {/* we use the map operator for this as seen below, which allows us to perform some action on each piece of data in our array */}
            {/* always include a key prop that holds a unique identifier when mapping out lists of items so that React can differentiate items in the array */}
            {
                props.items.map(expense => (
                    <ExpenseItem
                    key = {expense.id}
                    title = {expense.title}
                    amount = {expense.amount}
                    date = {expense.date}
                    >
                    </ExpenseItem>
                ))
            }
        </ul>
    );
};

export default ExpensesList;