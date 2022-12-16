import axios from "axios";
import { API_KEY } from "../constants/api";
import * as SecureStore from 'expo-secure-store';

const webApiClient = axios.create({
  // Android Emulator の localhost
  // https://araramistudio.jimdo.com/2018/01/11/android%E3%81%AE%E3%82%A8%E3%83%9F%E3%83%A5%E3%83%AC%E3%83%BC%E3%82%BF%E3%83%BC%E3%81%8B%E3%82%89%E8%87%AA%E8%BA%AB%E3%81%AEpc-localhost-%E3%81%B8%E6%8E%A5%E7%B6%9A/
  baseURL: "http://10.0.2.2",

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

// https://docs.expo.dev/versions/latest/sdk/securestore/#securestoregetitemasynckey-options
export const save = async (key: string, value: any) => {
  await SecureStore.setItemAsync(key, value);
}

export const getValue = async (key: string) => {
  return await SecureStore.getItemAsync(key);
}