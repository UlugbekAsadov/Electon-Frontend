"use client";

import { IUser } from "@/shared/interfaces";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { instance } from "@/api/axios";
import Cookies from "js-cookie";
import { decodeToken } from "@/shared/utils";
import { ErrorCodes } from "@/shared/enum";

interface IContext {
  user: IUser | null;
  isAuthenticated: boolean;
  logout: () => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IProps {
  children: React.ReactNode;
}

const AuthContext = createContext<IContext>({} as IContext);

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getUserData = async (userId: string) => {
    try {
      const response = await instance.get(`/get-user/${userId}`);

      const user = response.data.data;

      setUser(user);

      setIsAuthenticated(true);
    } catch (error: any) {
      const errorCode = error.response?.message;
      if (errorCode === ErrorCodes.NotAuthorized) {
        setIsAuthenticated(false);
      }
    }
  };

  const getCurrentUser = async () => {
    setIsLoading(true);
    const token = Cookies.get("m_at") as string;
    const decodedToken = decodeToken(token);

    if (token && decodedToken) {
      await getUserData(decodedToken._id);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  const logout = async () => {};

  const value = useMemo(
    () => ({
      user,
      isAuthenticated,
      logout,
      isLoading,
      getUserData,
      setUser,
      setIsAuthenticated,
    }),
    [user, isAuthenticated, isLoading, setUser, setIsAuthenticated]
  );

  return (
    <AuthContext.Provider value={value}>
      {isLoading ? <h1>Loading</h1> : children}
    </AuthContext.Provider>
  );
};
