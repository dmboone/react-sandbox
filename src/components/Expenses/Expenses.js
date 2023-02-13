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

      return(
        <div>
          <Card className='expenses'>
              <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler}/>

              {/* dynamically adding our expense item elements based on the amount of data in our array */}
              {/* we use the map operator for this, which allows us to perform some action on each piece of data in our array */}
              {/* always include a key prop that holds a unique identifier when mapping out lists of items so that React can differentiate items in the array */}
              {props.items.map(expense => (
                <ExpenseItem
                key = {expense.id}
                title = {expense.title}
                amount = {expense.amount}
                date = {expense.date}
                >
                </ExpenseItem>
              ))}

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