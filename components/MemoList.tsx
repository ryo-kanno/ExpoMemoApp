import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MemoList = () => {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2022年1月1日</Text>
        </View>
        <TouchableOpacity>
          <AntDesign name="delete" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2022年12月31日</Text>
        </View>
        <TouchableOpacity>
          <AntDesign name="delete" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2023年1月31日</Text>
        </View>
        <TouchableOpacity>
          <AntDesign name="delete" size={24} color="black" />
        </TouchableOpacity>
      </View>
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
});


export default MemoList;