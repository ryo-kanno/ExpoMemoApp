import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Button from '../components/Button';
import { RootStackParamList } from '../App';
import { login } from '../common/api/login';

const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // メールとパスワードの値を保持する
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = async () => {
    await login()
      .then((res: any) => {
        Alert.alert(res.Msg);
      })
      .catch((e) => {
        Alert.alert(e);
      });

    navigation.reset({
      index: 0,
      routes: [{ name: 'MemoList' }]
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>ログイン</Text>
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
          onPress={handlePress}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>未登録の方はこちら</Text>
          <TouchableOpacity onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'SignUp' }]
            });
          }}>
            <Text style={styles.footerLink}>会員登録</Text>
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

export default LoginScreen;