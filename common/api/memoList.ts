import { AxiosError, AxiosResponse } from "axios";
import webApiClient from ".";
import { DefaultNetworkErrorMessage } from "../constants/api";
import { BaseRequest } from "../types/api";


/**
 * メモリストの取得
 */
export const getMemoList = async (): Promise<any> => {
  return new Promise((resolve, reject) => {
    let data: BaseRequest = {
      Key: "",
      ID: "",
      Data: "{}",
    };

    webApiClient.post(
      ``,
      JSON.stringify(data),
      {
        headers: {
          Authorization: `Beare test`
        },
      },
    )
      .then((res: AxiosResponse<any>) => {
        const responseData = res.data;
        resolve({
          ErrNo: responseData.ErrNo,
          Msg: responseData.Msg,
          Data: responseData.Data,
        })
      })
      .catch((err: Error | AxiosError) => {
        err instanceof AxiosError
          ? reject({ ErrNo: -1, Msg: DefaultNetworkErrorMessage })
          : reject({ ErrNo: -1, Msg: err.message })
      });
  })
};