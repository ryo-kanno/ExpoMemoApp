import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, View, ViewProps, ViewStyle } from 'react-native';

const CircleButton: React.FC<PropsWithChildren & { style?: object }> = ({ children, style }) => {
	return (
		<View style={[styles.circleButton, style]}>
			<Text style={styles.circleButtonLabel}>{children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	circleButton: {
		backgroundColor: '#467FD3',
		width: 64,
		height: 64,
		borderRadius: 32,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		right: 40,
		bottom: 40,

		// iosのみに対応
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 8 },
		shadowOpacity: 0.25,
		shadowRadius: 8,

		// Androidのみに対応
		elevation: 8,
	},
	circleButtonLabel: {
		color: '#ffffff',
		fontSize: 40,
		lineHeight: 40,
	},
});

export default CircleButton;