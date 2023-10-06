import { LoginInPutType } from "../components/ModalSignIn";
import { RegisterInPutType } from "../components/ModalSignUp";
import { ResponseSuccess } from "../types/utils.type";
import http from "../utils/Http";
import { ForgotPasswordType } from './../components/ModalForgotPassword';

const URL = "auth";
type ResetPasswordType = {
  password: string,
  email: string,
  password_code: string
}
const authService = {
  register(data: RegisterInPutType) {
    return http.post<ResponseSuccess>(URL + "/register", data);
  },
  login(data: LoginInPutType) {
    return http.post<ResponseSuccess>(URL + "/login", data);
  },
  forgot(data: ForgotPasswordType) {
    return http.post<ResponseSuccess>(URL + "/forgot-password", data);
  },
  reset(data: ResetPasswordType) {
    return http.post<ResponseSuccess>(URL + "/reset-password", data);
  },
};

export default authService;
