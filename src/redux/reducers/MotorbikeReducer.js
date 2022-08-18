import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const MotorbikeReducer = createSlice({
  name: "Motorbike",
  initialState,
  reducers: {
    defaultAction: (state, { payload }) => {
      console.log("MotorbikeReducer state and payload", state, payload);
    }
  }
});

const { reducer, actions } = MotorbikeReducer;
export const { defaultAction } = actions;
export default reducer;
