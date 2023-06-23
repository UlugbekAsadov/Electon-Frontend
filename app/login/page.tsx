import React from "react";
import LoginForm from "@/components/sections/login-form";
import AuthContent from "@/components/sections/auth-content";
import { AuthTypes } from "@/shared/enum";

const LoginPage = () => {
  return (
    <div className="container flex flex-col md:flex-row justify-center md:justify-between md:items-center h-screen">
      <AuthContent variant={AuthTypes.Login} />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
