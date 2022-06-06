import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LoginUI from "./login.presenter";

const Login = () => {
  const [login, setLogin] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return <LoginUI />;
};

export default Login;
