
import React from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function SelectInput({ id, label, value, onChangeHandler }) {
  return (
    <FormControl fullWidth>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        value={value}
        label={label}
        onChange={onChangeHandler}
      >
        <MenuItem value={'solid'}>Solid</MenuItem>
        <MenuItem value={'dotted'}>Dotted</MenuItem>
        <MenuItem value={'dashed'}>Dashed</MenuItem>
        <MenuItem value={'double'}>Double</MenuItem>
        <MenuItem value={'groove'}>Groove</MenuItem>
        <MenuItem value={'ridge'}>Ridge</MenuItem>
        <MenuItem value={'inset'}>Inset</MenuItem>
        <MenuItem value={'outset'}>Outset</MenuItem>
        <MenuItem value={'none'}>None</MenuItem>
        <MenuItem value={'hidden'}>Hidden</MenuItem>
      </Select>
    </FormControl>


  )
}
