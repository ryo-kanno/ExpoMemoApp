import { AxiosError, AxiosResponse } from "axios";
import webApiClient, { getValue } from ".";
import { DefaultNetworkErrorMessage } from "../constants/api";

/**
 * メモリストの取得
 */
export const getMemoList = async (): Promise<any> => {
  return new Promise((resolve, reject) => {
    const result = getValue('auth_token');

    result.then((token) => {
      console.log('token: ' + token);

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
          console.log(JSON.stringify(err))
          err instanceof AxiosError
            ? reject({ ErrNo: -1, Msg: DefaultNetworkErrorMessage })
            : reject({ ErrNo: -1, Msg: err.message })
        });
    })
  })
};

export const getMemoDetail = async (id: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    const result = getValue('auth_token');

    result.then((token) => {
      webApiClient.get(`/api/memo/${id}`, {
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
    });
  })
};

export const createMemo = (title: string, bodyText: string) => {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      "title": title,
      "bodyText": bodyText
    });

    const result = getValue('auth_token');

    result.then((token) => {
      webApiClient.post(`/api/memo/create`, body, {
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
          console.log(err)
          err instanceof AxiosError
            ? reject({ ErrNo: -1, Msg: DefaultNetworkErrorMessage })
            : reject({ ErrNo: -1, Msg: err.message })
        });
    });
  })
}

export const updateMemo = (title: string, bodyText: string, id: number) => {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      "title": title,
      "bodyText": bodyText,
      "id": id,
    });

    const result = getValue('auth_token');

    result.then((token) => {
      console.log(token)
      webApiClient.post(`/api/memo/update`, body, {
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
          console.log('update memo')
        })
        .catch((err: Error | AxiosError) => {
          err instanceof AxiosError
            ? reject({ ErrNo: -1, Msg: DefaultNetworkErrorMessage })
            : reject({ ErrNo: -1, Msg: err.message })
        });
    });
  })
}

export const deleteMemo = (id: number) => {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      "id": id,
    });

    const result = getValue('auth_token');

    result.then((token) => {
      console.log(token)
      webApiClient.post(`/api/memo/delete`, body, {
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
    });
  })
}