import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2'
import './Donut.css'

const Donut = ({stats}) => {
if(!stats || !stats[0]) {
    return 'loading'
}
const data = stats[0];
console.log(data)
const Donut =(
    <Doughnut
       data={{
           labels: ['Total confirmed cases', 'Critical Cases', 'deaths', 'recovered'],
           datasets: [{
             label: 'People',
             backgroundColor: ['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
             data: [data.cases, data.critical, data.deaths, data.recovered]
        }]

       }}
       options = {{
          legends : {display:false},  
       }}
    />
);

    return (<div className="doughnut">
        <h2> Global totals </h2>
        {Donut}
        </div>
        )
}

export default Donut;