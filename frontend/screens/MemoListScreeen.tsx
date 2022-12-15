import React, { useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';
import { View, StyleSheet, Alert, Text } from 'react-native';
import { RootStackParamList } from '../App';
import CircleButton from '../components/CircleButton';
import MemoList from '../components/MemoList';
import LogoutButton from '../components/LogoutButton';
import { getMemoList } from '../common/api/memoList';
import Button from '../components/Button';
import Loading from '../components/Loading';


const MemoListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [memos, setMemos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const isFocused = useIsFocused();

  // 初回のみ実施
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />,
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    getMemoList()
      .then((res: any) => {
        // 取得したメモの表示
        setMemos(res.Data)
        setLoading(false);
        console.log(res.Data)
      })
      .catch((e) => {
        setLoading(false);
        Alert.alert(e);
      });
  }, [isFocused]);

  if (memos.length === 0) {
    return (
      <View style={emptyStyles.container}>
        <Loading isLoading={isLoading} />
        <View style={emptyStyles.inner}>
          <Text style={emptyStyles.title}>メモがありません！</Text>
          <Button
            style={emptyStyles.button}
            label="作成する"
            onPress={() => { navigation.navigate('MemoCreate') }} />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <MemoList memos={memos} />
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

const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 24,
  },
  button: {
    alignSelf: 'center',
  }
});

export default MemoListScreen;