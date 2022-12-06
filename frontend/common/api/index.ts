import axios from "axios";
import { API_KEY } from "../constants/api";

const webApiClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  }
});

export default webApiClient;

export const getApiKey = (): string => {
  // 外部設定値とかにする
  return API_KEY;
}