import { AxiosError, AxiosResponse } from "axios";
import webApiClient from ".";
import { DefaultNetworkErrorMessage } from "../constants/api";

export const singUp = async (): Promise<any> => {
  return new Promise((resolve, reject) => {
    // resolve({ ErrNo: 0, Msg: "ログアウト完了" })

    let body = JSON.stringify({
      email: "test@persol.co.jp",
      password: "12341234",
    });

    webApiClient
      .post(`/api/register`, body)
      .then((res: AxiosResponse) => {
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