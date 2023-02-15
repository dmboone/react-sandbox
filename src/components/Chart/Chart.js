import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => { // props here is grabbing dataPoints from ExpensesChart.js
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); // grabbing the values (aka expenses from each month/data point object and putting into an array)

    const totalMaximum = Math.max(...dataPointValues); // finds the max amount of monthly expenses from all the amounts provided so we know what to use as our maxValue and as a result bar height

    return(
        <div className="chart">
            {props.dataPoints.map(dataPoint => 
            <ChartBar 
                key={dataPoint.label} 
                value={dataPoint.value} 
                maxValue={totalMaximum} 
                label={dataPoint.label}
            />)}
        </div>
    );
};

export default Chart;