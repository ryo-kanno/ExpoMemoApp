import { AxiosError, AxiosResponse } from "axios";
import webApiClient, { save } from ".";
import { DefaultNetworkErrorMessage } from "../constants/api";

export const login = async (): Promise<any> => {
  return new Promise((resolve, reject) => {

    let body = JSON.stringify({
      email: "test@persol.co.jp",
      password: "12341234",
    });

    webApiClient.get("/sanctum/csrf-cookie").then((res: AxiosResponse) => {
      webApiClient.post(`/api/login`, body)
        .then((res: AxiosResponse) => {
          save('auth_token', res.data.access_token)
          resolve({ ErrNo: 0, Msg: "ログイン完了" })
        })
        .catch((err: Error | AxiosError) => {
          err instanceof AxiosError
            ? reject({ ErrNo: -1, Msg: DefaultNetworkErrorMessage })
            : reject({ ErrNo: -1, Msg: err.message });
        })
    })
      .catch((err: Error | AxiosError) => {
        err instanceof AxiosError
          ? reject({ ErrNo: -1, Msg: DefaultNetworkErrorMessage })
          : reject({ ErrNo: -1, Msg: err.message });
      })
  });
}