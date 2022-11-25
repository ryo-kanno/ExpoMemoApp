import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import {
	StyleSheet, TextInput, View, KeyboardAvoidingView, Keyboard, Platform, TouchableWithoutFeedback
} from 'react-native';
import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

const MemoCreateScreen = () => {
	return (
		// キーボード表示時、表示部分が押し上げられる
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.inner}>
					<AppBar />
					<View style={styles.inputContainer}>
						<TextInput value="" multiline style={styles.input} />
					</View>
					<CircleButton>
						<AntDesign name="check" size={24} color="white" />
					</CircleButton>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView >
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	inner: {
		flex: 1,
		justifyContent: 'space-around',
	},
	inputContainer: {
		paddingHorizontal: 27,
		paddingVertical: 32,
		flex: 1,
	},
	input: {
		flex: 1,
		textAlignVertical: 'top',
		fontSize: 16,
		lineHeight: 24,
	}
});

export default MemoCreateScreen;