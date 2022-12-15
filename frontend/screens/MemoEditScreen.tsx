import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import {
	StyleSheet, TextInput, View, KeyboardAvoidingView, Keyboard, Platform, TouchableWithoutFeedback, Alert
} from 'react-native';
import CircleButton from '../components/CircleButton';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { updateMemo } from '../common/api/memoList';

const MemoEditScreen = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'MemoEdit'>>();
	const route = useRoute<RouteProp<RootStackParamList, 'MemoEdit'>>();
	const [memo, setMemo] = useState(route.params.memo);

	const handlePress = () => {
		updateMemo("title", memo, route.params.id)
			.then((res: any) => {
				Alert.alert('更新しました');
				navigation.goBack()
			})
			.catch((e) => {
				Alert.alert(e);
			});
	}

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

		</KeyboardAvoidingView>
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
		maxHeight: '50%'
	}
});

export default MemoEditScreen;