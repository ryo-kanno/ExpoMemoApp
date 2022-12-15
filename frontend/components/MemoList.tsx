import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList, ListRenderItem } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { deleteMemo } from '../common/api/memoList';

type MemoTypes = {
  id: number,
  body_text: string,
  created_at: Date,
  updated_at: Date,
}

export type MemoListProps = {
  memos: Array<MemoTypes>,
}

const MemoList = ({ memos }: MemoListProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleDelete = (id: number) => {
    // modal 表示
    Alert.alert('メモを削除します', 'よろしいですか？', [
      {
        text: 'キャンセル',
        onPress: () => { }
      },
      {
        text: '削除',
        onPress: () => {
          deleteMemo(id)
            .then((res: any) => {
            })
            .catch((e) => {
              Alert.alert(e);
            });
        }
      }
    ]);
  };

  const renderItem: ListRenderItem<MemoTypes> = ({ item }) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail', { id: item.id }) }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>{item.body_text}</Text>
          <Text style={styles.memoListItemDate}>{item.updated_at.toString()}</Text>
        </View>
        <TouchableOpacity
          onPress={() => { handleDelete(item.id) }}
          style={styles.memoDelete}
        >
          <AntDesign name="delete" size={24} color="black" />
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <FlatList
        data={memos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '$848484',
  },
  memoDelete: {
    padding: 8
  }
});


export default MemoList;