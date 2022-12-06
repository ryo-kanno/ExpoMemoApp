import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './frontend/screens/LoginScreen';
import MemoCreateScreen from './frontend/screens/MemoCreateScreen';
import MemoDetailScreen from './frontend/screens/MemoDetailScreen';
import MemoEditScreen from './frontend/screens/MemoEditScreen';
import MemoListScreen from './frontend/screens/MemoListScreeen';
import SignUpScreen from './frontend/screens/SignUpScreen';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  MemoList: undefined,
  MemoDetail: undefined,
  MemoEdit: undefined,
  MemoCreate: undefined,
  LogIn: undefined,
  SignUp: undefined,
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}