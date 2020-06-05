import React, { Component } from 'react';
import { TableContainer, Table,TableHead, TableRow, TableCell, Paper, TableBody, SelectField, MenuItem} from '@material-ui/core';
import { MDBDataTable } from 'mdbreact';

const DataTable  = ({stats}) => {
  if(!stats) {
    return 'loading'
  }
/*
    <div> Table:
    <Table striped bordered hover variant="dark">
      <thead>
        <tr> 
          <th></th>
        </tr>
      </thead>
      <tbody>
        { (stats.length > 0)? 
        stats.map((item, i) => {
          return (
            <tr key={i}>
              <td> {item.country} {item.cases}</td>
            </tr>
          )
        }) : <tr><td colSpan="5">Loading..</td></tr> }
        
      </tbody>
      </Table>
      </div>
  */

  /* TODO: styles + search */
  //const row = stats.map(item => <>{console.log(item.cases)}</>) 
  /* 
  const data = {
    colomns: [
      {
        label:'Country',
        field: 'country',
        sort: 'asc',
        width: 150
      },{
        label:'Confirmed cases',
        field: 'confirmed',
        sort: 'asc',
        width:150
      }
    ],
    rows: [
      {
        country: stats.map((item) => (<>{item.country}</>)),
        //confirmed: this.stats.map(item) => {item.cases}
      }

    ]
  }*/

  return(<div>
    <div>
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableCell> Country </TableCell>
          <TableCell> Confirmed</TableCell>
          <TableCell> Deaths </TableCell>
          <TableCell> Recovered </TableCell>

        </TableHead>
        <TableBody>
          { (stats.length > 0)? 
            stats.map((item, i) => (
              <TableRow key= {item.country}>
                <TableCell component="th" scope="row">
                  {item.country}
                </TableCell>
                <TableCell>{item.cases}</TableCell>
                <TableCell>{item.deaths}</TableCell>
                <TableCell>{item.recovered}</TableCell>
            </TableRow>)) : null}
        </TableBody>
      </Table>
      </TableContainer>
    </div>
  </div>)
}
export default DataTable;
