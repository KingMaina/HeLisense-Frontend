import React from "react";
import UserSchema from "./pages/User/User.schema.json";
import UserDetails from "./pages/User/UserDetails";
import UserContainer from "./pages/User/UserContainer";
import MotorbikeSchema from "./pages/Motorbike/Motorbike.schema.json";
import MotorbikeDetails from "./pages/Motorbike/MotorbikeDetails";
import MotorbikeContainer from "./pages/Motorbike/MotorbikeContainer";
import DetectionSchema from "./pages/Detection/Detection.schema.json";
import DetectionDetails from "./pages/Detection/DetectionDetails";
import DetectionContainer from "./pages/Detection/DetectionContainer";
import VerifyOtp from "./pages/auth/VerifyOtp";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Error400 from "./pages/errors/error400";
import Dashboard from "./pages/Dashboard";
import UpdateProfile from "./pages/auth/UpdateProfile";
import ChangePassword from "./pages/auth/ChangePassword";
import App from "./components/app";

const Router = () => {
  return (
    <BrowserRouter basename={`/`}>
      <Switch>
        <Route path={`/signup`} component={Signup} />
        <Route path={`/login`} component={Login} />
        <Route path={`/forgot-password`} component={ForgotPassword} />
        <Route path={`/reset-password/:tokenId`} component={ResetPassword} />
        <App>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path={`/dashboard`} component={Dashboard} />
            <Route path={`/update-profile`} component={UpdateProfile} />
            <Route path={`/change-password`} component={ChangePassword} />
            <Route exact path="/detection" component={DetectionContainer} />
            <Route
              path="/detection/:id"
              render={props => (
                <DetectionDetails {...props} modelName={"detection"} />
              )}
            />
            <Route exact path="/motorbike" component={MotorbikeContainer} />
            <Route
              path="/motorbike/:id"
              render={props => (
                <MotorbikeDetails {...props} modelName={"motorbike"} />
              )}
            />
            <Route exact path="/user" component={UserContainer} />
            <Route
              path="/user/:id"
              render={props => <UserDetails {...props} modelName={"user"} />}
            />
            <Route exact path="/*" component={Error400} />
          </Switch>
        </App>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
