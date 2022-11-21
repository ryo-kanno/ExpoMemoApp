import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';


const MemoDetailScreen = () => {
	return (
		<View style={styles.container}>
			<AppBar />
			<View style={styles.memoHeader}>
				<Text style={styles.memoTitle}>買い物リスト</Text>
				<Text style={styles.memoDate}>2022年1月1日</Text>
			</View>
			<ScrollView>
				<Text>
					aaaaa
					テスト文言
				</Text>
			</ScrollView>
			<CircleButton style={{ top: 160, bottom: 'auto' }}>
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