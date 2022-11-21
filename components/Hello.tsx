import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export type HelloProps = React.ComponentProps<typeof Text> & {
    bang?: boolean;
};

const Hello: React.FC<HelloProps> = (props) => {
    const { children, bang, style } = props;
    return (
        <View>
            <Text style={[styles.text, style]}>{`Hello ${children}${bang ? '!' : ''}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        backgroundColor: 'blue',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 16,
    },
});

export default Hello;