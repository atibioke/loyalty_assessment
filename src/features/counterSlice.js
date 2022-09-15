import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  textState: true,
};

const counterLogic = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.counter += 1;
    },
    decrease: (state) => {
      if (state.counter === 0) {
        state.counter = 0;
      } else {
        state.counter -= 1;
      }
    },
  },
});

export const { increase, decrease } = counterLogic.actions;

export default counterLogic.reducer;
