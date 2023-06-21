import React from "react";
import LoginForm from "@/components/sections/login-form";
import LoginContent from "@/components/sections/login-content";

const LoginPage = () => {
  return (
    <div className="container flex flex-col md:flex-row justify-center md:justify-between md:items-center h-screen">
      <LoginContent />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
