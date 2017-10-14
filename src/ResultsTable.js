import React from 'react';
import { Table, TableBody, TableHeader } from 'material-ui/Table';
import { TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { translate, omit } from './functions'

const ResultsTable = ({ toShow }) => {
  const noName = omit(toShow, 'name');

  return (
    <Table style={{ margin: '0 1rem', width: '90%' }}>
      <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}
      >
        <TableRow>
          <TableHeaderColumn>
            Resultados { toShow && translate(toShow.name) }
          </TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {Object.keys(noName).map((key, index) => {
            return (
              <TableRow key={index}>
                <TableRowColumn>
                  {translate(key)}
                </TableRowColumn>
                <TableRowColumn style={{ textAlign: 'right' }}>
                  R$ {toShow[key]}
                </TableRowColumn>
              </TableRow>
            )
          }
        )}
      </TableBody>
    </Table>
  );
}

export default ResultsTable
