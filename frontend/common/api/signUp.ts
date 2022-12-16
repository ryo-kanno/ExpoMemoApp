import { AxiosError, AxiosResponse } from "axios";
import webApiClient, { save } from ".";
import { DefaultNetworkErrorMessage } from "../constants/api";

export const singUp = async (email: string, password: string): Promise<any> => {
  return new Promise((resolve, reject) => {

    let body = JSON.stringify({
      email: email,
      password: password,
    });

    webApiClient
      .post(`/api/register`, body)
      .then((res: AxiosResponse) => {
        save('auth_token', res.data.access_token)
        resolve({ ErrNo: 0, Msg: "会員登録完了" })
      })
      .catch((err: Error | AxiosError) => {
        err instanceof AxiosError
          ? reject({ ErrNo: -1, Msg: DefaultNetworkErrorMessage })
          : reject({ ErrNo: -1, Msg: err.message });
      })
  });
}