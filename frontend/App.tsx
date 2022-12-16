import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import MemoCreateScreen from './screens/MemoCreateScreen';
import MemoDetailScreen from './screens/MemoDetailScreen';
import MemoEditScreen from './screens/MemoEditScreen';
import MemoListScreen from './screens/MemoListScreeen';
import SignUpScreen from './screens/SignUpScreen';
import NotificationScreen from './screens/NotificationScreen';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  MemoList: undefined,
  MemoDetail: { id: number; },
  MemoEdit: {
    id: number;
    memo: string;
  },
  MemoCreate: undefined,
  LogIn: undefined,
  SignUp: undefined,
  Notification: undefined,
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUp"
        screenOptions={{
          headerStyle: { backgroundColor: '#467FD3' },
          headerTitleStyle: { color: '#ffffff' },
          headerTitle: 'メモアプリ',
          headerTintColor: '#ffffff',
          headerBackTitle: 'Back',
        }}
      >
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen name="LogIn" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}