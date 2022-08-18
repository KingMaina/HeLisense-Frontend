import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const DetectionReducer = createSlice({
  name: "Detection",
  initialState,
  reducers: {
    defaultAction: (state, { payload }) => {
      console.log("DetectionReducer state and payload", state, payload);
    }
  }
});

const { reducer, actions } = DetectionReducer;
export const { defaultAction } = actions;
export default reducer;
