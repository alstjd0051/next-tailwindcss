import React, { useState } from "react";
import LoginUI from "./login.presenter";

export interface Inputs {
  email: string;
  password: string;
}

const Login = () => {
  return <LoginUI />;
};

export default Login;
