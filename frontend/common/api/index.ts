import axios from "axios";
import { API_KEY } from "../constants/api";

const webApiClient = axios.create({
  baseURL: "http://localhost",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default webApiClient;

export const getApiKey = (): string => {
  // 外部設定値とかにする
  return API_KEY;
}