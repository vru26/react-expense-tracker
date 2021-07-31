import './ChartBar.css';

const ChartBar = props => {
    let barHeight = '0%';
    if (props.maxValue > 0) {
        barHeight = Math.round((props.value / props.maxValue) * 100);
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                {/* NOTE: The 'style' prop accepts an JS object with CSS property names as the key. In case of '-' containing properties, we can use camelCase of quotes. Eg: To set background color, we can use either {'background-color': 'red'} or {backgroundColor: 'red'}. */}
                <div className="chart-bar__fill" style={{height: barHeight}}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
}

export default ChartBar;