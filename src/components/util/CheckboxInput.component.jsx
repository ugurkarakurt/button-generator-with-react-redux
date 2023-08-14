import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function RangeInput({ id, label, value, onChangeHandler }) {
  return (
    <FormControl component="fieldset" variant="standard">
      <FormGroup>
        <FormControlLabel
          className='checkbox-input'
          control={
            <Checkbox onChange={onChangeHandler} id={id} value={value} aria-label="Default" valueLabelDisplay="auto" />
          }
          label={label}
        />
      </FormGroup>
    </FormControl>
  )
}
