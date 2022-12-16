import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import {
	StyleSheet, TextInput, View, KeyboardAvoidingView, Keyboard, Platform, TouchableWithoutFeedback, Alert
} from 'react-native';
import CircleButton from '../components/CircleButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { createMemo } from '../common/api/memoList';

const MemoCreateScreen = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
	const [memo, setMemo] = useState('');

	const handlePress = () => {
		createMemo("title", memo)
			.then((res: any) => {
				Alert.alert('メモを作成しました');
				navigation.goBack();
			})
			.catch((e) => {
				console.log('aa');
				Alert.alert('エラーが発生しました');
			});
	};

	return (
		// キーボード表示時、表示部分が押し上げられる
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.inner}>
					<View style={styles.inputContainer}>
						<TextInput
							value={memo}
							multiline
							style={styles.input}
							onChangeText={(text) => { setMemo(text) }}
						/>
					</View>
					<CircleButton onPress={handlePress}>
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
		maxHeight: '50%',
	}
});

export default MemoCreateScreen;