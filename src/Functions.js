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

function employeeYearlyEarnings(employeeMonthly) {
  return employeeMonthly * 0.7 * 13.3;
}

function companyYearlyEarnings(companyMonthly) {
  return companyMonthly * 12 - (12 * 50);
}

export { handleChange, handleEmployeeChange, handleCompanyChange }
export { employeeYearlyEarnings, companyYearlyEarnings }
