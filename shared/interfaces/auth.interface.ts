export interface IRegisterForm {
  firstName: string;
  lastName: string;
  email?: string;
  password: string;
  phoneNumber: number;
}

export interface ILoginForm {
  phoneNumber: number;
  password: string;
}
