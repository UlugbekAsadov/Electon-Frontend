import { UserRoles, UserStatus } from "../enum";

export interface IRegisterForm {
  firstName: string;
  lastName: string;
  email?: string;
  password: string;
  phoneNumber: string;
}

export interface ILoginForm {
  phoneNumber: string;
  password: string;
}

export interface ILogin {
  phoneNumber: number;
  password: string;
}

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  age: number;
  status: UserStatus;
  role: UserRoles;
  phoneNumber: number;
}
