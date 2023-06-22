"use client";
import Link from "next/link";
import React, { useState } from "react";

const RegisterForm = () => {
  const [credintials, setCredintials] = useState({
    email: "",
    username: "",
    password: "",
    contact: "",
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
        <div className="mb-4">
          <input
            className="login__input"
            name="email"
            id="email"
            type="email"
            onChange={handlerChangeCredintials}
            placeholder="Enter email"
          />
        </div>

        <div className="mb-4">
          <input
            className="login__input"
            name="username"
            id="username"
            type="text"
            onChange={handlerChangeCredintials}
            placeholder="Create User name"
          />
        </div>

        <div className="mb-4">
          <input
            className="login__input"
            name="contact"
            id="contact"
            type="number"
            onChange={handlerChangeCredintials}
            placeholder="Contact number"
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

        <div className="mb-7">
          <input
            className="login__input"
            name="password"
            id="password"
            type="password"
            onChange={handlerChangeCredintials}
            placeholder="Confirm Password"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-orange-500 hover:opacity-80 w-full text-white py-5 leading-6 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
