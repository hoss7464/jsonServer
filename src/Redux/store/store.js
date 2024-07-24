import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../actions/toggleSlice";
import simpleFormReducer from "../actions/simpleFormSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    simpleForm: simpleFormReducer,
  },
});
