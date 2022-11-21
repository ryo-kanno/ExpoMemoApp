import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppBar = () => {
	return (
		<View style={styles.appbar}>
			<View style={styles.appbarInner}>
				<Text style={styles.appbarTitle}>メモアプリ</Text>
				<Text style={styles.appbarRight}>ログアウト</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	appbar: {
		width: '100%',
		height: 104,
		backgroundColor: '#467FD3',
		justifyContent: 'flex-end'
	},
	appbarInner: {
		alignItems: 'center',
	},
	appbarRight: {
		position: 'absolute',
		right: 19,
		bottom: 16,
		color: 'rgba(255,255,255, 0.1)'
	},
	appbarTitle: {
		marginBottom: 8,
		fontSize: 24,
		lineHeight: 32,
		color: '#ffffff'
	},
});

export default AppBar;