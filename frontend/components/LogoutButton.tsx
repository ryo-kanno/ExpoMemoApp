import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../App";
import { logout } from "../common/api/logout";

const LogoutButton = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLogout = () => {
    fetch();
    navigation.reset({
      index: 0,
      routes: [{ name: 'LogIn' }],
    });
  }

  const fetch = async () => {
    await logout()
      .then((res: any) => {
        if (res.ErrNo == 0) {
          Alert.alert(res.Msg);
        }
      })
      .catch((e) => {
        Alert.alert(e);
      });
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleLogout}>
      <Text style={styles.label}>ログアウト</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: 'rgba(225,225,225, 0.7)'
  },
});

export default LogoutButton;