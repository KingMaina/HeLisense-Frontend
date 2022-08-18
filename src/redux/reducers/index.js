import { combineReducers } from "@reduxjs/toolkit";
import User from "./UserReducer";
import Motorbike from "./MotorbikeReducer";
import Detection from "./DetectionReducer";
export default combineReducers({
  Detection,
  Motorbike,
  User
});
