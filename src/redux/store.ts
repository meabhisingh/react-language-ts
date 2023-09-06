import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices";

export const store = configureStore({
  reducer: {
    root: rootReducer,
  },
});
