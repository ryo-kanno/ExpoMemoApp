import React, { useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';
import { View, StyleSheet, Alert } from 'react-native';
import { RootStackParamList } from '../App';
import CircleButton from '../components/CircleButton';
import MemoList from '../components/MemoList';
import LogoutButton from '../components/LogoutButton';


const MemoListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />,
    });
  }, []);
  return (
    <View style={styles.container}>
      <MemoList />
      <CircleButton onPress={() => { navigation.navigate('MemoCreate') }}>
        <AntDesign name="plus" size={24} color="white" />
      </CircleButton>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});

export default MemoListScreen;