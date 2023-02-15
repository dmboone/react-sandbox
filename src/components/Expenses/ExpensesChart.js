import Chart from '../Chart/Chart';

const ExpensesChart = props => {
    const chartDataPoints = [ // creating our datapoints aka total expenses for each month
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0}
    ];

    for(const expense of props.expenses){ // for each expense from our data which is in Expenses.js, add it to the value for the corresponding month
        const expenseMonth = expense.date.getMonth(); // getMonth provides numbers index that conveniently corresponds with our array index!
        chartDataPoints[expenseMonth].value += expense.amount;
    };

    return(
        <Chart dataPoints = {chartDataPoints}></Chart> // this will display our chart; we pass on our chartDataPoints object as a prop to Chart.js for more manipulation
    );
}

export default ExpensesChart;