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
