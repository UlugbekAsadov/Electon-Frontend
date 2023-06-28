"use client";
import { IRegisterForm } from "@/shared/interfaces";
import { Button, Input } from "../common";
import React, { useState } from "react";

const RegisterForm = () => {
  const [credintials, setCredintials] = useState<IRegisterForm>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "+998",
  });

  const handlerChangeCredintials = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredintials({ ...credintials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full md:max-w-[370px]">
      <h2 className="hidden md:block md:text-3xl font-medium mb-7">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2 flex gap-4 justify-between items-center">
          <Input
            name="firstName"
            value={credintials.firstName}
            type="text"
            onChange={handlerChangeCredintials}
            placeholder="First name"
          />
          <Input
            value={credintials.lastName}
            name="lastName"
            type="text"
            onChange={handlerChangeCredintials}
            placeholder="Last name"
          />
        </div>

        <div className="mb-2">
          <Input
            value={credintials.phoneNumber}
            name="phoneNumber"
            maxLength={13}
            type="text"
            onChange={handlerChangeCredintials}
            placeholder="Phonenumber"
          />
        </div>

        <div className="mb-2">
          <Input
            value={credintials.email}
            name="email"
            type="email"
            onChange={handlerChangeCredintials}
            placeholder="Enter email"
          />
        </div>

        <div className="mb-2">
          <Input
            name="password"
            type="password"
            onChange={handlerChangeCredintials}
            placeholder="Password"
          />
        </div>

        <Button className="w-full" variant="PRIMARY" title={"Register"} />
      </form>
    </div>
  );
};

export default RegisterForm;
