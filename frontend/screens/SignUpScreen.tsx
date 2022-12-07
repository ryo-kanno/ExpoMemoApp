import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../App';
import Button from '../components/Button';

const SignUpScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>会員登録</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => { setEmail(text) }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder='Email Address'
          textContentType='emailAddress'
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text) }}
          autoCapitalize="none"
          placeholder='Password'
          secureTextEntry
          textContentType='password'
        />
        <Button
          label="Submit"
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'MemoList' }]
            });
          }}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>登録済の方はこちら</Text>
          <TouchableOpacity onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'LogIn' }]
            });
          }}>
            <Text style={styles.footerLink}>ログイン</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3'
  },
  footer: {
    flexDirection: 'row',
  }
});

export default SignUpScreen;