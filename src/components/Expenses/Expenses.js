import {useState} from 'react';
import Card from '../UI/Card';
import ExpenseItem  from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props){
      const [filteredYear, setFilteredYear] = useState('2020');

      const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
      };

      const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
      });

      {/* changes what to display based on a conditional and keeps the logic out of the jsx snippet that we return */}
      let expensesContent = <p>No expenses found.</p>;
      
      if(filteredExpenses.length > 0){
        {/* dynamically adding our expense item elements based on the amount of data in our array */}
        {/* we use the map operator for this as seen below, which allows us to perform some action on each piece of data in our array */}
        {/* always include a key prop that holds a unique identifier when mapping out lists of items so that React can differentiate items in the array */}
        expensesContent = filteredExpenses.map(expense => (
          <ExpenseItem
          key = {expense.id}
          title = {expense.title}
          amount = {expense.amount}
          date = {expense.date}
          >
          </ExpenseItem>
        ));
      }

      return(
        <div>
          <Card className='expenses'>
              <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler}/>
              {expensesContent}

              {/* if we wanted to put the conditional content inside the div */}
              {/* this would be the cleanest way to write */}
              {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
              {filteredExpenses.length > 0 &&
                filteredExpenses.map(expense => (
                  <ExpenseItem
                  key = {expense.id}
                  title = {expense.title}
                  amount = {expense.amount}
                  date = {expense.date}
                  >
                  </ExpenseItem>
                ))
              } */}

              {/* could also write the conditional like this with a normal ternary operator, just a little harder to read */}
              {/* {filteredExpenses.length === 0 ? 
              (<p>No expenses found.</p>) 
              : 
              (filteredExpenses.map(expense => (
                  <ExpenseItem
                  key = {expense.id}
                  title = {expense.title}
                  amount = {expense.amount}
                  date = {expense.date}
                  >
                  </ExpenseItem>
                ))
              )
              } */}

              {/* this code below was the old static way which couldn't update on it's own if we added something to the items array */}
              {/* <ExpenseItem 
              title={props.items[0].title}
              amount={props.items[0].amount}
              date={props.items[0].date}
              >
              </ExpenseItem>
              <ExpenseItem 
              title={props.items[1].title}
              amount={props.items[1].amount}
              date={props.items[1].date}
              >
              </ExpenseItem>
              <ExpenseItem 
              title={props.items[2].title}
              amount={props.items[2].amount}
              date={props.items[2].date}
              >
              </ExpenseItem>
              <ExpenseItem 
              title={props.items[3].title}
              amount={props.items[3].amount}
              date={props.items[3].date}
              >
              </ExpenseItem> */}
          </Card>
        </div>
      );
}

export default Expenses;