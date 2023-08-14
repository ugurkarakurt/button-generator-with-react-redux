import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  text: 'Button Text',
  className: 'class-name',
  textProps: {
    fontWeight: 'lighter',
    fontSize: 16,
    textDecoration: 'none',
    textTransform: 'lowercase',
    fontStyle: 'normal',
  },

  sizeProps: {
    minWidth: 100,
    minHeight: 50,
    padding: 10,
  },

  colorProps: {
    color: '#000000',
    backgroundColor: '#eeeeee',
    borderColor: '#000000',
  },

  borderProps: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
  },

  boxShadowState: {
    boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
  },

  boxShadowProps: {
    inset: '',
    horizontalLenght: 10,
    verticalLength: 10,
    blurRadius: 5,
    spreadRadius: 0,
    color: 'rgb(0, 0, 0)',
    opacity: .75
  }
}

export const buttonGeneratorSlice = createSlice({
  name: "buttonGenerator",
  initialState,
  reducers: {
    buttonText: (state, action) => {
      state.text = action.payload
    },
    buttonClassName: (state, action) => {
      state.className = action.payload
    },
    buttonTextProps: (state, action) => {
      state.textProps = action.payload
    },
    buttonSizeProps: (state, action) => {
      state.sizeProps = action.payload
    },
    buttonColorProps: (state, action) => {
      state.colorProps = action.payload
    },
    buttonBorderProps: (state, action) => {
      state.borderProps = action.payload
    },
    buttonBoxShadowProps: (state, action) => {
      state.boxShadowProps = action.payload
    },
    buttonBoxShadowState: (state, action) => {
      state.boxShadowState = action.payload
    }
  }
})

export const { buttonText, buttonClassName, buttonTextProps, buttonSizeProps, buttonColorProps, buttonBorderProps, buttonBoxShadowProps, buttonBoxShadowState } = buttonGeneratorSlice.actions;
export default buttonGeneratorSlice.reducer
