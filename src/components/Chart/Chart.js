import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxValue = Math.max(...dataValues);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} label={dataPoint.label} maxValue={maxValue}></ChartBar>)}
        </div>
    );
}

export default Chart;