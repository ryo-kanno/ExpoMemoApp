import React from "react";
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export interface ButtonProps {
	label: string,
	onPress: () => void,
	style?: {},
}

const Button = ({ label, onPress, style }: ButtonProps) => {
	return (
		<TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
			<Text style={styles.buttonLabel}>{label}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		backgroundColor: '#467FD3',
		borderRadius: 4,
		alignSelf: 'flex-start',
		marginBottom: 24,
	},
	buttonLabel: {
		fontSize: 16,
		lineHeight: 32,
		paddingVertical: 8,
		paddingHorizontal: 32,
		color: '#ffffff',
	},
});

export default Button;