import React from 'react';
import TextField from 'material-ui/TextField';

const TextInput = ({ onChange }) => (
  <TextField
    floatingLabelText="Salário mensal bruto CLT"
    fullWidth={true}
    onChange={onChange}
  />
);

export default TextInput
