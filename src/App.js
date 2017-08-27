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
      employeeMonthly: 0,
      companyMonthly:  0,
      showResult: false,
      employeeYearly: 0,
      companyYearly: 0,
    };
  }

  employeeYearlyEarnings(employeeMonthly) {
    console.log(employeeMonthly * 0.7 * 13.3);
    return employeeMonthly * 0.7 * 13.3;
  }

  companyYearlyEarnings(companyMonthly) {
    return companyMonthly * 12 - (12 * 50);
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
                          employeeMonthly: event.target.value,
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
                          companyMonthly: event.target.value,
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
                        label={this.state.showResult ?
                          "Ocultar resultados" : "Calcular"}
                        primary={true}
                        onClick={() => {
                          this.setState({
                            showResult: !this.state.showResult,
                            employeeYearly: this.employeeYearlyEarnings(
                              this.state.employeeMonthly),
                            companyYearly: this.companyYearlyEarnings(
                              this.state.companyMonthly),
                          })
                        }}
                      />
                  </TableRowColumn>
                </TableRow>
              </TableFooter>
            </Table>

            { this.state.showResult ?
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
                      {this.state.employeeYearly}
                    </TableRowColumn>
                    <TableRowColumn>
                      {this.state.companyYearly}
                    </TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
              :
              <h5>Use apenas números. Clique no botão para ver os resultados.</h5>
            }

          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
