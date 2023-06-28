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
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <Input
          value={credintials.phoneNumber}
          name="phoneNumber"
          type="text"
          onChange={handlerChangeCredintials}
          placeholder="Phonenumber"
          maxLength={13}
        />
        <Input
          name="password"
          type="password"
          onChange={handlerChangeCredintials}
          placeholder="Password"
          value={credintials.password}
          isError={Boolean(credintials.password.length) && credintials.password.length < 8}
          errorText="Minimum 8"
        />

        <Link
          className="block text-gray-500 text-sm text-right mb-2 md:mb-4"
          href="/"
        >
          Forgot password?
        </Link>

        <Button
          className="w-full"
          variant="PRIMARY"
          title="Login"
        />
      </form>
    </div>
  );
};

export default LoginForm;
