import { useEffect, useState } from 'react'
import Chart from 'react-google-charts'
import PropTypes from 'prop-types'

const LineChart = ({historicalData}) => {

    const [data,setData] = useState([["Date","Prices"]])

    useEffect(()=>{
    let dataCopy = [["Date","Prices"]];
    if(historicalData.prices){
        historicalData.prices.map((item)=>{
            dataCopy.push([`${new Date(item [0]).toLocaleDateString().slice(0,-5)}`,item[1]])
        })
        setData(dataCopy);
    }
    },[historicalData])
  return (
    <Chart
    chartType='LineChart'
    data={data}
    height="100%"
    legendToggle
    />

  )
}
LineChart.propTypes = {
    historicalData: PropTypes.shape({
        prices: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.oneOfType([
                    PropTypes.number,
                    PropTypes.string
                ])
            )
        )
    }).isRequired
};

export default LineChart
