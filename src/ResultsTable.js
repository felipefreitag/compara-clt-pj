import React from 'react';
import { Table, TableBody, TableHeader } from 'material-ui/Table';
import { TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

function translate(str) {
  let translated = ';'
  switch (str) {
    case 'employee':
      translated = 'CLT';
      break;
    case 'company':
      translated = 'PJ';
      break;
    case 'yearly':
      translated = 'Em um ano, você recebe:';
      break;
    case 'fgts':
      translated = 'FTGS acumulado:';
      break;
    default: translated = str;
  }
  return translated;
}

function omit(obj, omitKey) {
  return Object.keys(obj).reduce((result, key) => {
    if(key !== omitKey) {
       result[key] = obj[key];
    }
    return result;
  }, {});
}

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
            Resultados {translate(toShow.name)}
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
