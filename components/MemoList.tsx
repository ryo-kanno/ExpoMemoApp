import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MemoList = () => {
	return (
		<View>
			<View style={styles.memoListItem}>
				<View>
					<Text style={styles.memoListItemTitle}>買い物リスト</Text>
					<Text style={styles.memoListItemDate}>2022年1月1日</Text>
				</View>
				<View>
					<Text>X</Text>
				</View>
			</View>
			<View style={styles.memoListItem}>
				<View>
					<Text style={styles.memoListItemTitle}>買い物リスト</Text>
					<Text style={styles.memoListItemDate}>2022年12月31日</Text>
				</View>
				<View>
					<Text>X</Text>
				</View>
			</View>
			<View style={styles.memoListItem}>
				<View>
					<Text style={styles.memoListItemTitle}>買い物リスト</Text>
					<Text style={styles.memoListItemDate}>2023年1月31日</Text>
				</View>
				<View>
					<Text>X</Text>
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