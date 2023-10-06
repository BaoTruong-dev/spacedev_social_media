import axios, { AxiosError, AxiosInstance } from "axios";
import { ResponseError } from "../types/utils.type";

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_BE_URL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error: AxiosError<ResponseError>) => {
        console.log(error, "2");
        return Promise.reject(error.response?.data.errors.message);
      }
    );
  }
}

const http = new Http().instance;

export default http;
