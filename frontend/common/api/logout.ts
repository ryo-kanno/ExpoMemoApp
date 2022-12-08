import { AxiosError, AxiosResponse } from "axios";
import webApiClient from ".";
import { DefaultNetworkErrorMessage } from "../constants/api";

export const logout = async (): Promise<any> => {
  return new Promise((resolve, reject) => {
    // resolve({ ErrNo: 0, Msg: "ログアウト完了" })

    webApiClient
      .post(`/api/logout`, null)
      .then((res: AxiosResponse) => {
        localStorage.removeItem('auth_token')
        resolve({ ErrNo: 0, Msg: "ログアウト完了" })
        console.log('logout')
      })
      .catch((err: Error | AxiosError) => {
        err instanceof AxiosError
          ? reject({ ErrNo: -1, Msg: DefaultNetworkErrorMessage })
          : reject({ ErrNo: -1, Msg: err.message });
      })
  });
}