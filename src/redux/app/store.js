import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import buttonGeneratorReducer from "../features/buttonGenerator/buttonGeneratorSlice";

export const store = configureStore({
  reducer: {
    buttonGenerator: buttonGeneratorReducer,
  },
  middleware: [thunk, logger]
})