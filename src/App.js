import Expenses from './components/./Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => { // can also use arrow function like this instead of function App(){}
  
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense></NewExpense>
      <Expenses></Expenses>
    </div>
  );
}

export default App;
