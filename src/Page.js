import React from 'react';

const Page = ({ children }) => (
  <div style={{
    width: '96%',
    margin: 'auto',
    maxWidth: '960px',
    }}
  >
    { children }
  </div>
);

export default Page
