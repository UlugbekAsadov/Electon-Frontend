import jwt_decode from "jwt-decode";
import { IUser } from "../interfaces";

export const decodeToken = (token: string | null): IUser | null => {
  if (!token) return null;

  try {
    return jwt_decode(token) as any;
  } catch (_) {
    return null;
  }
};
