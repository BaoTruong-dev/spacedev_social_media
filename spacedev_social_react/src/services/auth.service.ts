import { RegisterInPutType } from "../components/ModalSignUp";
import { ResponseSuccess } from "../types/utils.type";
import http from "../utils/Http";

const URL = "auth";

const authService = {
  register(data: RegisterInPutType) {
    return http.post<ResponseSuccess>(URL + "/register", data);
  },
};

export default authService;
