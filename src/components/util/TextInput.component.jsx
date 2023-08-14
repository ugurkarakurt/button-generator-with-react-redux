import React from 'react'
import TextField from '@mui/material/TextField'
export default function TextInput({ id, label, placeHolder, onChangeHandler }) {
  return (
    <TextField onChange={onChangeHandler} id={id} label={label} variant="outlined" />
  )
}
