"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../common/button";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Bu yerdagi kodlar login ma'lumotlarini tekshirish va qaytuvchi
    // serverga so'rov yuborish uchun ishlatilishi kerak
  };

  return (
    <div className="w-[90%] lg:w-[370px]">
      <h2 className="hidden md:block md:text-3xl font-medium mb-7">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-9">
          <input
            className="bg-orange-500 bg-opacity-5 placeholder:text-blue-700 placeholder:opacity-30 rounded-lg w-full p-5 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter email or user name"
          />
        </div>
        <div className="mb-4">
          <input
            className="bg-orange-500 bg-opacity-5 placeholder:text-blue-700 placeholder:opacity-30 rounded-lg w-full p-5 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
        </div>

        <Link
          className="block text-gray text-sm text-right mb-11 md:mb-16"
          href="/"
        >
          Forgot password?
        </Link>

        <div className="flex items-center justify-between">
          <button
            className="bg-orange-500 hover:opacity-80 w-full text-white py-5 leading-6 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>

        {/* <Button title="Login" variant="PRIMARY" /> */}
      </form>
    </div>
  );
};

export default LoginForm;
