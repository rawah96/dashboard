import React, { Component } from 'react';
import { TableContainer, Table,TableHead, TableRow, TableCell, Paper, TableBody} from '@material-ui/core';
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


  // this one worked better
  /*<TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableCell> Country </TableCell>
          <TableCell> Confirmed</TableCell>
        </TableHead>

        <TableBody>
          { (stats.length > 0)? 
            stats.map((item, i) => (
              <TableRow key= {item.country}>
                <TableCell component="th" scope="row">
                  {item.country}
                </TableCell>
                <TableCell>{item.cases}</TableCell>
            </TableRow>)) : null}

          
        </TableBody>
      </Table>
            </TableContainer>*/

  /*const row = stats.map(item => <>{item.country}</>) 
  console.log(row)
  const data = {
    colomns: [
      {
        label:'Country',
        field: 'country',
        width: 150
      },{
        label:'Confirmed cases',
        field: 'confirmed',
        width:150
      }
    ],
    rows: [
    ]
  }*/

  /* TODO: styles + search */
  return(     
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
    



  )
}
export default DataTable;