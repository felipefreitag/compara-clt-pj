import React from 'react';
import { Table, TableBody, TableHeader, TableFooter } from 'material-ui/Table';
import { TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import TextInput from './TextInput';
import RaisedButton from 'material-ui/RaisedButton';

const DataEntry = props => {
  const { showResult } = props
  return (
    <Table id='inputs' selectable={false}>
      <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}
      >
        <TableRow>
          <TableHeaderColumn style={{textAlign:'center'}}>
            CLT
          </TableHeaderColumn>
          <TableHeaderColumn style={{textAlign:'center'}}>
            PJ
          </TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        <TableRow>
          <TableRowColumn>
            <TextInput onChange={props.handleEmployeeChange} />
          </TableRowColumn>
          <TableRowColumn>
            <TextInput onChange={props.handleCompanyChange} />
          </TableRowColumn>
        </TableRow>
      </TableBody>
      <TableFooter adjustForCheckbox={false}>
        <TableRow style={{borderTop: '0px'}}>
          <TableRowColumn style={{ textAlign: 'center' }}>
              <RaisedButton
                label={showResult ?
                  "Ocultar resultados" : "Calcular"}
                primary={true}
                onClick={props.calculate}
              />
          </TableRowColumn>
        </TableRow>
      </TableFooter>
    </Table>

  );
}
export default DataEntry
