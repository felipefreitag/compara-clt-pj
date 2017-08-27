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
  const formatNum = yearTotal.toLocaleString('de-DE',
    { maximumFractionDigits: '2'});
  return formatNum;
}

function companyYearlyEarnings(companyMonthly) {
  const grossEarning = parseFloat(companyMonthly);
  const netMonthly = grossEarning - 60;
  const yearTotal = 12 * netMonthly;
  const formatNum = yearTotal.toLocaleString('de-DE',
    { maximumFractionDigits: '2'});
  return formatNum;
}

export { handleChange, handleEmployeeChange, handleCompanyChange }
export { employeeYearlyEarnings, companyYearlyEarnings }
