import { UserInfo } from "./../types/user.type";
import { RegisterInPutType } from "../components/ModalSignUp";
import { ResponseSuccess } from "../types/utils.type";
import http from "../utils/Http";

const URL = "users";

const userService = {
  getInfo() {
    return http.get<ResponseSuccess<UserInfo>>(URL + "/get-info");
  },
};

export default userService;
