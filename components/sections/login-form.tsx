"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../common/button";
import { ILoginForm } from "@/shared/interfaces";
import { Input } from "../common/input";

const LoginForm = () => {
  const [credintials, setCredintials] = useState<ILoginForm>({
    phoneNumber: "+998",
    password: "",
  });

  const handlerChangeCredintials = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredintials({ ...credintials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full md:max-w-[370px]">
      <h2 className="hidden md:block md:text-3xl font-medium mb-7">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-9">
          <Input
            value={credintials.phoneNumber}
            name="phoneNumber"
            type="text"
            onChange={handlerChangeCredintials}
            placeholder="Phonenumber"
            maxLength={16}
          />
        </div>
        <div className="mb-4">
          <Input
            name="password"
            type="password"
            onChange={handlerChangeCredintials}
            placeholder="Password"
          />
        </div>

        <Link
          className="block text-gray-500 text-sm text-right mb-11 md:mb-16"
          href="/"
        >
          Forgot password?
        </Link>

        <Button
          className="w-full rounded-full"
          variant="PRIMARY"
          title="Login"
        />
      </form>
    </div>
  );
};

export default LoginForm;
