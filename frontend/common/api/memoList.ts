import { AxiosError, AxiosResponse } from "axios";
import webApiClient from ".";
import { DefaultNetworkErrorMessage } from "../constants/api";
import { BaseRequest } from "../types/api";


/**
 * メモリストの取得
 */
export const getMemoList = async (): Promise<any> => {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem('auth_token');
    webApiClient.get(`/api/memo`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
      .then((res: AxiosResponse<any>) => {
        const responseData = res.data;
        resolve({
          ErrNo: responseData.ErrNo,
          Msg: responseData.Msg,
          Data: responseData,
        })
      })
      .catch((err: Error | AxiosError) => {
        err instanceof AxiosError
          ? reject({ ErrNo: -1, Msg: DefaultNetworkErrorMessage })
          : reject({ ErrNo: -1, Msg: err.message })
      });
  })
};

export const createMemo = (title: string, bodyText: string) => {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      "title": title,
      "bodyText": bodyText
    });

    const token = localStorage.getItem('auth_token');
    console.log(token)
    webApiClient.post(`/api/create`, body, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    },
    )
      .then((res: AxiosResponse<any>) => {
        const responseData = res.data;
        console.log(responseData);
        resolve({
          ErrNo: responseData.ErrNo,
          Msg: responseData.Msg,
          Data: responseData,
        })
        console.log('create memo')
      })
      .catch((err: Error | AxiosError) => {
        err instanceof AxiosError
          ? reject({ ErrNo: -1, Msg: DefaultNetworkErrorMessage })
          : reject({ ErrNo: -1, Msg: err.message })
      });
  })
}

export const deleteMemo = (id: number) => {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      "id": id,
    });

    const token = localStorage.getItem('auth_token');
    console.log(token)
    webApiClient.post(`/api/delete`, body, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    },
    )
      .then((res: AxiosResponse<any>) => {
        const responseData = res.data;
        console.log(responseData);
        resolve({
          ErrNo: responseData.ErrNo,
          Msg: responseData.Msg,
          Data: responseData,
        })
        console.log('delete memo')
      })
      .catch((err: Error | AxiosError) => {
        err instanceof AxiosError
          ? reject({ ErrNo: -1, Msg: DefaultNetworkErrorMessage })
          : reject({ ErrNo: -1, Msg: err.message })
      });
  })
}