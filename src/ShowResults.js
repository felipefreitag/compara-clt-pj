import React from 'react';
import { Table, TableBody, TableHeader } from 'material-ui/Table';
import { TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

const ShowResults = props => (
  <Table id='results' selectable={false}>
    <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}
    >
      <TableRow>
        <TableHeaderColumn style={{textAlign:'center'}}>
          Rendimento anual CLT
        </TableHeaderColumn>
        <TableHeaderColumn style={{textAlign:'center'}}>
          Rendimento anual PJ
        </TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      <TableRow>
        <TableRowColumn>
          <h3>R$ {props.employeeYearly}</h3>
        </TableRowColumn>
        <TableRowColumn>
          <h3>R$ {props.companyYearly}</h3>
        </TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);


export default ShowResults
