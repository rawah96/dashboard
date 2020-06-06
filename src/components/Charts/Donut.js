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
           labels: ['Confirmed cases', 'Critical cases', 'Deaths', 'Recovered'],
           datasets: [{
             label: 'number of people infected',
             backgroundColor: ['#D0E7FE','#A2D0FD','#73B8FD','#2E97FC' ],
             data: [data.cases, data.critical, data.deaths, data.recovered]
        }]

       }}
       options = {{
          legends : {display:false},  
       }}
    />
);

    return (<div className="doughnut">
        <h2> Global totals 
            <br/>
            <br/>

        </h2>
        {Donut}
        </div>
        )
}

export default Donut;