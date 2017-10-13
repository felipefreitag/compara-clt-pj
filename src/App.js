import React, { Component } from 'react';
import './App.css';
// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// local components
import Page from './Page'
import DataEntry from './DataEntry'
import ShowResults from './ShowResults'
import Disclaimer from './Disclaimer'
// functions
import { handleChange, handleEmployeeChange, handleCompanyChange } from './functions'
import { employeeResults, companyResults } from './functions'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showResult: false,
      employeeMonthly: 0,
      companyMonthly:  0,
      employeeYearly: 0,
      companyYearly: 0,
      employeeResults: {},
      companyResults: {},
    };

    this.handleChange = handleChange
    this.handleEmployeeChange = handleEmployeeChange
    this.handleCompanyChange = handleCompanyChange
  }

  calculate() {
    this.setState({
      showResult: true,
      employeeResults: employeeResults(this.state.employeeMonthly),
      companyResults: companyResults(this.state.companyMonthly),
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Page>
            <AppBar
              title="Melhor oferta de trabalho"
              showMenuIconButton={false}
            />
            <h3 style={{width: '100%', textAlign: 'center'}}>
              Compare qual seria seu rendimento anual com CLT x PJ
            </h3>
            <DataEntry
              showResult={this.state.showResult}
              handleEmployeeChange={this.handleEmployeeChange.bind(this)}
              handleCompanyChange={this.handleCompanyChange.bind(this)}
              calculate={this.calculate.bind(this)}
            />
            { this.state.showResult ?
              <div>
                <ShowResults
                  employee={this.state.employeeResults}
                  company={this.state.companyResults}
                />
                <Disclaimer />
              </div>
              :
              <h5>Use apenas números. Clique no botão para ver os resultados.</h5>
            }
          </Page>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
