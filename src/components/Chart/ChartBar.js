import './ChartBar.css';

const ChartBar = props => { // props here is grabbing all the info from Chart.js
    let barFillHeight = '0%';

    if(props.maxValue > 0){
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return(
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div> {/** setting the style prop on an element dynamically */}
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
};

export default ChartBar;