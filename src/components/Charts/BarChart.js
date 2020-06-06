/* This component contains horizontal bar for the data */
import React, { Component } from 'react';
import {Bar, Line, Doughnut, Pie, HorizontalBar} from 'react-chartjs-2';
import './BarChart.css'
/*const LineChart = ({data: {confirmed, recovered, deaths, lastUpdate, country}}) => {

const LineChart =(
    confirmed?
      <Line
         data={{
             labels: ['Infected','Recovered','Deaths'],
             labels: [],
             datasets: [{
               label: 'People',
               backgroundColor: ['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
               data : [confirmed.value,recovered.value,deaths.value]
             }]
  
         }}
         options = {{
            legends : {display:false},  
         }}
      />
     : null
  );

  return(
    <div>
    {confirmed ? LineChart : null}
    </div>
  )
  }*/

  // make it one pie for males and other for females?
  const BarChart = ({gender}) => {
    var firstRow = gender[0]
    var result = parseFloat(firstRow)

    var secondRow = gender[1]
    var result2 = parseFloat(secondRow)


    const BarChart =(
      gender[0]?
          <HorizontalBar
             data={{
                 labels: ['Male','Female'],
                 datasets: [{
                   label: 'percentage of males and females with confirmed cases',
                   backgroundColor: ['#A2D0FD','#73B8FD'],
                   //data : [confirmed.value,recovered.value,deaths.value]
                   data:[result ,result2]
                 }]
      
             }}
             options = {{
                legends : {display:false},  
             }}
          />
         : null
      );
    
      return(
        <div className="bar">
        {/*confirmed ? LineChart : null*/}
        {BarChart}
        </div>
      )
      }

export default BarChart;