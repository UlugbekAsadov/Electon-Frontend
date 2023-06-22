import React from "react";
import RegisterForm from "@/components/sections/register-form";
import RegisterContent from "@/components/sections/register-content";

const RegisterPage = () => {
  return (
    <div className="container flex flex-col md:flex-row justify-center md:justify-between md:items-center h-screen">
      <RegisterContent />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
