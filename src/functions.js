function handleChange(event, employee) {
  const { value } = event.target;
  (employee ? this.setState({ employeeMonthly: value })
    : this.setState({ companyMonthly: value })
  )
}

function handleEmployeeChange(event) {
  this.handleChange(event, true)
}

function handleCompanyChange(event) {
  this.handleChange(event, false)
}

function inssCalc(salary) {
  let result = 0;
  if (salary <= 1659.38 ) {
    result= salary * 0.08
  } else if (salary <= 2765.66) {
    result= salary * 0.09
  } else if (salary <= 5531.31) {
    result= salary * 0.11
  } else result= (5531.31 * 0.11);
  return result;
}

function irrfCalc(salary) {
  let result = 0;
  if (salary <= 1903.98) {
    result = 0
  } else if (salary <= 2826.65) {
    result = (salary * 0.075 - 142.80)
  } else if (salary <= 3751.05) {
    result = (salary * 0.15 - 354.80)
  } else if (salary <= 4664.68) {
    result = (salary * 0.225 - 636.13)
  } else result = (salary * 0.275 - 869.36);
  return result;
}

function transport(salary) {
  const pass = 4.05
  const monthTransport = 4.05 * 2 * 22
  const percent = salary * 0.06
  return monthTransport > percent ? percent : monthTransport
}

function netSalary(salary) {
  const inss = inssCalc(salary);
  const irrf = irrfCalc(salary - inss);
  const netValue = salary - inss - irrf;
  return netValue;
}

function employeeYearlyEarnings(employeeMonthly) {
  const grossEarning = parseFloat(employeeMonthly);
  const netMonthly = netSalary(grossEarning);
  const vacations = netSalary(grossEarning * 1.3);
  // Total: 11 monthly payments + 1 with vacations + 13º
  const yearTotal = 12 * netMonthly + vacations;
  return yearTotal.toLocaleString('de-DE', { maximumFractionDigits: '2'});
}

function employeeResults(employeeMonthly) {
  const grossEarning = parseFloat(employeeMonthly);
  const fgts = grossEarning * 13.3 * 0.08;
  return {
    name: "employee",
    yearly: employeeYearlyEarnings(employeeMonthly),
    fgts: fgts.toLocaleString('de-DE', { maximumFractionDigits: '2'}),
  }
}

function companyYearlyEarnings(companyMonthly) {
  const grossEarning = parseFloat(companyMonthly);
  const netMonthly = grossEarning - 60;
  const yearTotal = 12 * netMonthly;
  return yearTotal.toLocaleString('de-DE', { maximumFractionDigits: '2'});
}

function companyResults(companyMonthly) {
  return {
    name: "company",
    yearly: companyYearlyEarnings(companyMonthly),
  }
}

export { handleChange, handleEmployeeChange, handleCompanyChange }
export { employeeResults, companyResults }
export { inssCalc }
