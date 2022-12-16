import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications'
import axios, { AxiosError, AxiosResponse } from "axios";
import webApiClient from ".";
import { DefaultNetworkErrorMessage } from "../constants/api";
import { Platform } from 'react-native';

export const getExpoPushTokenAsync = async () => {
  let token: string = '';

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync()
      finalStatus = status
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!')
      return
    }
    token = (await Notifications.getExpoPushTokenAsync()).data
  } else {
    alert('エミュレータはpush通知に対応していません')
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C'
    })
  }

  return token
}

export const sendNotification = async (expoPushToken: string, title: string, message: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      // Push通知のトークン
      to: expoPushToken,
      // Push通知の音を設定
      sound: 'default',
      // Push通知のタイトル
      title: title,
      // Push通知の内容
      body: message,
      // dataは実際にPush通知には表示されないがアプリケーション側で参照することが出来るので、アプリケーション側になにかさせる場合は設定すると良さそう
      data: { addData: null, sample: 'test' }
    });

    console.log(body);

    axios.post(`https://exp.host/--/api/v2/push/send`, body, {
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json'
      }
    })
      .then((res: AxiosResponse) => {
        resolve({ ErrNo: 0, Msg: "push通知完了" })
      })
      .catch((err: Error | AxiosError) => {
        err instanceof AxiosError
          ? reject({ ErrNo: -1, Msg: DefaultNetworkErrorMessage })
          : reject({ ErrNo: -1, Msg: err.message });
      })
  });
}