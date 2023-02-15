import './ChartBar.css';

const ChartBar = props => {
    let barFillHeight = '0%';

    if(props.max > 0){
        barFillHeight = Math.round((props.value / propsMaxValue) * 100) + '%';
    }

    return(
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="char-bar__fill" style={{height: barFillHeight}}></div> {/** setting the style prop on an element dynamically */}
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
};

export default ChartBar;