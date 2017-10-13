import React from 'react';
import TextField from 'material-ui/TextField';

const TextInput = ({ onChange, label }) => (
  <TextField
    floatingLabelText={label}
    fullWidth={true}
    onChange={onChange}
    id={label}
  />
);

export default TextInput
