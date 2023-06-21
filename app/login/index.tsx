import React from "react";
import LoginForm from "@/components/sections/login-form";
import LoginContent from "@/components/sections/login-content";

const index = () => {
  return (
    <div className="container flex flex-col md:flex-row justify-center md:justify-between md:items-center h-[600px]">
      <LoginContent />
      <LoginForm />
    </div>
  );
};

export default index;
