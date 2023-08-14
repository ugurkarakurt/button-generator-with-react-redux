import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';

export default function SwitchInput({ id, label, formLabel, onChangeHandler }) {
  return (
    <FormControl component="fieldset" variant="standard">
      <FormGroup>
        <FormControlLabel
          control={
            <Switch onChange={onChangeHandler} name="bold" id={id} />
          }
          label={label}
        />
      </FormGroup>
      <FormHelperText>{formLabel}</FormHelperText>
    </FormControl>
  )
}
