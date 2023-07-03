"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../common/button";
import { ILogin, ILoginForm, IUser } from "@/shared/interfaces";
import { Input } from "../common/input";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { instance } from "@/api/axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { ErrorCodes, getErrorMessage } from "@/shared/enum";
import { useAuthContext } from "@/context";

type LoginMutationResponse = {
  data: {
    data: {
      user: IUser;
      accessToken: string;
    };
  };
};

const DEFAULT_VALUES: ILoginForm = {
  phoneNumber: "+998",
  password: "",
};

const LoginForm = () => {
  const { setIsAuthenticated, setUser } = useAuthContext();
  const router = useRouter();
  const {
    handleSubmit,
    control,
    setValue,
    setError,
    formState: { errors, isValid },
  } = useForm<ILoginForm>({
    defaultValues: DEFAULT_VALUES,
  });

  const { mutateAsync, isLoading } = useMutation<
    LoginMutationResponse,
    any,
    ILogin
  >(["login"], (values) => instance.post(`/sign-in`, values), {
    onSuccess: (res) => {
      Cookies.set("m_at", res?.data.data.accessToken as string);
      setIsAuthenticated(true);
      setUser(res?.data.data.user);
      router.push("/");
    },
    onError: (err) => {
      if (err.response.data.message === ErrorCodes.UserNotFound) {
        setValue("password", "");
        setError("phoneNumber", {
          message: getErrorMessage(err.response.data.message),
        });
      }

      if (err.response.data.message === ErrorCodes.InvalidCredintials) {
        setValue("password", "");
        setError("password", {
          message: getErrorMessage(err.response.data.message),
        });
      }
    },
  });

  const onSubmitForm = (values: ILoginForm) => {
    const formatNumber = parseInt(
      values.phoneNumber.substring(1, values.phoneNumber.length)
    );
    const data: ILogin = {
      ...values,
      phoneNumber: formatNumber,
    };

    mutateAsync(data);
  };

  return (
    <div className="w-full md:max-w-[370px]">
      <h2 className="hidden md:block md:text-3xl font-medium mb-7">Sign In</h2>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex flex-col gap-2"
      >
        <Controller
          name="phoneNumber"
          control={control}
          rules={{ required: true, minLength: 13, maxLength: 13 }}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              placeholder="Phonenumber"
              maxLength={13}
              errorText={errors.phoneNumber?.message || ""}
              isError={Boolean(errors.phoneNumber?.message)}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: true, minLength: 8 }}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              placeholder="Password"
              errorText={errors.password?.message || ""}
              isError={Boolean(errors.password?.message)}
            />
          )}
        />
        <Link
          className="block text-gray-500 text-sm text-right mb-2 md:mb-4"
          href="/"
        >
          Forgot password?
        </Link>
        <Button
          disabled={!isValid}
          isLoading={isLoading}
          className="w-full"
          variant="PRIMARY"
          title="Login"
        />
      </form>
    </div>
  );
};

export default LoginForm;
