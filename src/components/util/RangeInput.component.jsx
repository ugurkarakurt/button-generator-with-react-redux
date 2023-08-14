import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function RangeInput({ id, label, value, max, onChangeHandler }) {
  return (
    <FormControl component="fieldset" variant="standard">
      <FormGroup>
        <FormControlLabel
          className='range-input'
          control={
            <Slider onChange={onChangeHandler} id={id} value={value} max={max ? max : 100} aria-label="Default" valueLabelDisplay="auto" />
          }
        />
      </FormGroup>
      <FormHelperText>{label + ': ' + value + 'px'}</FormHelperText>
    </FormControl>
  )
}
