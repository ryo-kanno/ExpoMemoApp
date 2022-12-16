import React, { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import CircleButton from '../components/CircleButton';
import { RootStackParamList } from '../App';
import { getMemoDetail } from '../common/api/memoList';


const MemoDetailScreen = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'MemoDetail'>>();
	const route = useRoute<RouteProp<RootStackParamList, 'MemoDetail'>>();
	const [memo, setMemo] = useState('');
	const [date, setDate] = useState('');

	useEffect(() => {
		getMemoDetail(route.params.id)
			.then((res: any) => {
				setMemo(res.Data.body_text);
				setDate(res.Data.updated_at);
			})
			.catch((e) => {
				Alert.alert('エラーが発生しました');
			});
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.memoHeader}>
				<Text style={styles.memoTitle}>買い物リスト</Text>
				<Text style={styles.memoDate}>{date}</Text>
			</View>
			<ScrollView>
				<Text>{memo}</Text>
			</ScrollView>
			<CircleButton
				style={{ top: 60, bottom: 'auto' }}
				onPress={() => { navigation.navigate('MemoEdit', { id: route.params.id, memo: memo }) }}>
				<AntDesign name="edit" size={24} color="white" />
			</CircleButton>
		</View >
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
	memoHeader: {
		backgroundColor: '#467FD3',
		height: 96,
		justifyContent: 'center',
		paddingVertical: 24,
		paddingHorizontal: 19,
	},
	memoTitle: {
		color: '#ffffff',
		fontSize: 20,
		lineHeight: 32,
		fontWeight: 'bold',
	},
	memoDate: {
		color: '#ffffff',
		fontSize: 12,
		lineHeight: 16,
	},
	memoBody: {

	},
});

export default MemoDetailScreen;