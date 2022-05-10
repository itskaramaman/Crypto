import React from 'react';
import Chart from 'react-google-charts';
import {Col, Row, Typography} from 'antd';

const {Title} = Typography;

const LineChart = ({coinHistory, currentPrice, coinName}) => {
    const chartData = [['x', 'price']]; 

    for(let i=0; i<coinHistory?.data?.history?.length; i++){
      chartData.push([new Date(coinHistory.data.history[i].timestamp).toLocaleDateString(), parseFloat(coinHistory.data.history[i].price)])
    }

  return (
    <>
        <Row className='chart-header'>
            <Title level={2} className="chart-title">{coinName} Price Chart</Title>
            <Col className='price-container'>
                <Title level={5} className="price-change">{coinHistory?.data?.change}%</Title>
                <Title level={5} className="current-price">Current {coinName} Price: ${currentPrice}</Title>
            </Col>
        </Row>
        <Chart width={'700px'} height={'410px'} chartType="LineChart" loader={<div>Loading Chart...</div>} data={chartData} />
    </>
  )
}

export default LineChart;