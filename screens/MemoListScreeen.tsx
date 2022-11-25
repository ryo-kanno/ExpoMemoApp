import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, StyleSheet, Alert } from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
import MemoList from '../components/MemoList';


const MemoListScreen = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <CircleButton onPress={() => { Alert.alert('追加しますか？') }}>
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