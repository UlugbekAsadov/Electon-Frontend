import React from "react";
import RegisterForm from "@/components/sections/register-form";
import AuthContent from "@/components/sections/auth-content";
import { Button } from "@/components/common/button";
import { AuthTypes } from "@/shared/enum";

const RegisterPage = () => {
  return (
    <div className="container flex flex-col md:flex-row justify-center md:justify-between md:items-center h-screen">
      <AuthContent variant={AuthTypes.Register} />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
