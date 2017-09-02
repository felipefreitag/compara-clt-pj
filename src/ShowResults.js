import React from 'react';
import ResultsTable from './ResultsTable';

const ShowResults = ({ employee, company }) => (
  <div style={{ display: 'flex' }}>
    <ResultsTable toShow ={employee} />
    <ResultsTable toShow ={company} />
  </div>
);

export default ShowResults
