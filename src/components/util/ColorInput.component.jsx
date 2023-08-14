import React from 'react'
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { MuiColorInput } from 'mui-color-input'

export default function ColorInput({ id, label, value, onChangeHandler }) {
  return (
    <FormControl component="fieldset" variant="standard">
      <FormGroup>
        <FormControlLabel
          className='color-input'
          control={
            <MuiColorInput onChange={onChangeHandler} id={id} value={value} aria-label="Default" valueLabelDisplay="auto" />
          }
        />
      </FormGroup>
      <FormHelperText>{label + ': ' + value}</FormHelperText>
    </FormControl>
  )
}
