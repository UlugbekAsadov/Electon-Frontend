"use client";
import Link from "next/link";
import React, { useState } from "react";

const LoginForm = () => {
  const [credintials, setCredintials] = useState({ email: "", password: "" });

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
          <input
            className="login__input"
            name="email"
            id="email"
            type="email"
            onChange={handlerChangeCredintials}
            placeholder="Enter email or user name"
          />
        </div>
        <div className="mb-4">
          <input
            className="login__input"
            name="password"
            id="password"
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

        <div className="flex items-center justify-between">
          <button
            className="bg-orange-500 hover:opacity-80 w-full text-white py-5 leading-6 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
