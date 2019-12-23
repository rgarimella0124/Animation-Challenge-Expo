import React, { Component } from 'react';
import {
	View, Text, Button
} from 'react-native';

const Btn = ({ navigate, title, color }) => (
	<View style={styles.btnBg}>
		<Button
			style={styles.btn}
			title={title}
			color={color}
			onPress={() =>
				navigate(title, { })
			}
		/>
	</View>
)

const styles = {
	btn: {
		fontSize: 20,
	},
	btnBg: {
		padding: 10
	}
};

export default Btn;