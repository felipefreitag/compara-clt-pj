import React, { Component } from 'react';
import './App.css';
// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Table, TableBody, TableHeader, TableFooter } from 'material-ui/Table';
import { TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cltMes: 0,
      pjMes:  0,
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div
            className="container"
            style={{
              width: '96%',
              margin: 'auto',
            }}
          >
            <AppBar
              title="Melhor oferta de trabalho"
              showMenuIconButton={false}
            />
            <h3 style={{width: '100%', textAlign: 'center'}}>
              Compare qual seria seu rendimento anual com CLT x PJ
            </h3>
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
                    <TextField
                      floatingLabelText="Salário mensal bruto CLT"
                      fullWidth={true}
                      onChange={(event) => {                        
                        this.setState({
                          cltMes: event.target.value,
                        })
                      }}
                    />
                  </TableRowColumn>
                  <TableRowColumn>
                    <TextField
                      floatingLabelText="Faturamento mensal bruto PJ"
                      fullWidth={true}
                      onChange={(event) => {
                        this.setState({
                          pjMes: event.target.value,
                        })
                      }}
                    />
                  </TableRowColumn>
                </TableRow>
              </TableBody>
              <TableFooter adjustForCheckbox={false}>
                <TableRow>
                  <TableRowColumn style={{ textAlign: 'center' }}>
                      <RaisedButton
                        label="Calcular"
                        primary={true}
                      />
                  </TableRowColumn>
                </TableRow>
              </TableFooter>
            </Table>

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
                    {this.state.cltMes * 12}
                  </TableRowColumn>
                  <TableRowColumn>
                    {this.state.pjMes * 12}
                  </TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
