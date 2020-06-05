import React, { Component } from 'react';
import { Table } from 'react-bootstrap';


const DataTable  = ({stats}) => {
  if(!stats) {
    return 'loading'
  }

  return(
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
  )
}
export default DataTable;