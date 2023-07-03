import { ErrorCodes } from "./error-codes.enum";

type TErrorMessage = {
  [errorCode in ErrorCodes]: string;
};

export const ErrorMessage: TErrorMessage = {
  [ErrorCodes.ServerError]: "Server muammosi",
  [ErrorCodes.Timeout]: "Timeout tugadi",
  [ErrorCodes.TooManyRequests]: "Juda ko'p urunishlar",
  [ErrorCodes.InvalidCredintials]: "Parol noto'g'ri",
  [ErrorCodes.UserNotFound]: "Foydalanuvchi Topilmadi",
  [ErrorCodes.NotAuthorized]: "Foydalanuvchi tark etgan",
};

export const getErrorMessage = (code: any) => {
  const errorCode = code as ErrorCodes;

  return code in ErrorMessage ? ErrorMessage[errorCode] : code;
};
