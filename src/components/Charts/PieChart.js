/* This component is for displaying the infected/recovered/death cases
   globally and nationally


   TODO: make a table instead of options, where I can pick the country and display
   the results.. 
*/
import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../../data';
import {Pie, Line, Bar, HorizontalBar, Doughnut} from 'react-chartjs-2'; 
import { TableContainer, TableHead, TableRow, TableCell, Paper, TableBody} from '@material-ui/core';
import Cards from '../../components/Cards/Cards'
import {Table} from 'react-bootstrap';


// merging data w countries 
// {data: {confirmed, recovered, deaths, lastUpdate}}
const PieChart = (props) => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
      const fetchAPI = async () => {
        setCountries(await fetchCountries());
      };  
      fetchAPI();
    }, []);

    const data = props.data;
    const confirmed = data.confirmed;
    if(!data || !confirmed) {
      return 'loading'
    }

    const BarChart =(
          <HorizontalBar
             data={{
                 labels: ['confirmed', 'recovered', 'deaths'],
                 datasets: [{
                   label: 'People',
                   backgroundColor: ['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
                   data : [data.confirmed.value, data.recovered.value, data.deaths.value]
                 }]
      
             }}
             options = {{
                legends : {display:false},  
             }}
          />
      );


    const PieChart =(
        <Pie
           data={{
               labels: ['confirmed', 'recovered', 'deaths'],
               datasets: [{
                 label: 'People',
                 backgroundColor: ['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
                 data : [data.confirmed.value, data.recovered.value, data.deaths.value]
               }]
    
           }}
           options = {{
              legends : {display:false},  
           }}
        />
    );


    /*const countryMap= countries.confirmed.map((e) => e)
    console.log(countryMap)*/

    return(
        <div>
            <h1>confirmed: {confirmed.value}</h1>
            {PieChart}

            <select defaultValue="" onChange={(e) => (props.handleChange(e.target.value))}>
                <option value=""> globally </option>
                {countries.map((country,i) => <option key={i} value={country}>{country}
                </option>)}
            </select>

            {/*
            <TableContainer component={Paper}>
              <TableHead>
                <TableRow>
                <TableCell>Countries</TableCell>
                <TableCell>Value</TableCell>               </TableRow>
              </TableHead>
              <TableBody>
                  countries.map((country, i) => (
                    <TableRow key={i} value={country}>
                      <TableCell component="th" scope="row">
                        {country} 
                      </TableCell>
                  </TableRow>))

              </TableBody>
                  </TableContainer>*/}


          {/* <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>country</th>
                  <th>confirmed</th>
                </tr>
              </thead>

              <tbody>
                {
                  countries.map((country, i) => (
                    <tr>
                      <td key={i} value={country}>
                        <td>{country}</td>
                      </td>
                    </tr>
                  ))
                }
                {
                  countries.map((country, i) => (
                    <tr>
                      <td key={i} value={country}>
                        <td>{country}</td>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
              </Table>*/}
        </div>
    )
}
export default PieChart;