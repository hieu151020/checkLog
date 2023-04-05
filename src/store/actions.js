import { LOG_OUT, SIGN_IN } from "./contant";

export const setIsLogged = () => ({
  type: SIGN_IN,
});

export const setIsLogout = () => ({
  type: LOG_OUT,
});
