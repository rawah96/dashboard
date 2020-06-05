import React, { Component } from 'react';
import {Bar, Line, HorizontalBar} from 'react-chartjs-2'
import {fetchDailyData} from '../../data'


class LineChart extends Component {
  state = {
    dailyData: {}
}

async componentDidMount() {
    const fetchApi = await fetchDailyData();
    this.setState({dailyData:fetchApi})
}


  render() {
    const lineChart = (
      this.state.dailyData[0] ? 
      //this.state.dailyData.length != 0 ?
      <Line 
        data={{ 
            // loop through dailyData
            labels:this.state.dailyData.map(({date}) => date), 
            datasets: [{
                data: this.state.dailyData.map(({confirmed}) => confirmed),
                label: 'infected',
                fill:false, // fills space below the chart
                backgroundColor: 'light grey',
                borderJoinStyle: 'miter',
                borderWidth: 1
            },{
              data: this.state.dailyData.map(({deaths}) => deaths),
              label: 'Deaths',
              borderColor: 'pink',
              backgroundColor: 'grey',
              fill:false
            }]
        }} 
      /> : null
  );
    return <> {lineChart} </>
  } 

}

export default LineChart