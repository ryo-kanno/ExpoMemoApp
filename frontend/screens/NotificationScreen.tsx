import * as Notifications from 'expo-notifications'
import { Subscription } from 'expo-modules-core';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from '../components/Button';
import { RootStackParamList } from "../App";
import { getExpoPushTokenAsync, sendNotification } from "../common/api/notification";

// 参考サイト
// https://kaminashi-developer.hatenablog.jp/entry/expo-notifications
const NotificationScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [expoPushToken, setToken] = useState('');
  const [notification, setNotification] = useState<Notifications.Notification>()
  const notificationListener = useRef<Subscription>();
  const responseListener = useRef<Subscription>();

  useEffect(() => {
    console.log('navigate notification')
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false
      })
    })

    getExpoPushTokenAsync().then(token => token && setToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    // アンマウント時にリスナーを削除
    return () => {
      const notification = notificationListener.current
      notification && Notifications.removeNotificationSubscription(notification)
      const response = responseListener.current
      response && Notifications.removeNotificationSubscription(response)
    }
  }, [])

  return (
    <View>
      <TextInput
        value={title}
        onChangeText={(text) => { setTitle(text) }}
        placeholder='Title'
      />
      <TextInput
        value={message}
        onChangeText={(text) => { setMessage(text) }}
        placeholder='Message'
      />

      <Button
        label="Push通知"
        onPress={async () => {
          console.log('push notification')
          await sendNotification(expoPushToken, title, message)
        }}
      />

      <TouchableOpacity onPress={() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'LogIn' }]
        });
      }}>
        <Text>戻る</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NotificationScreen