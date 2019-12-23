import React, { Component } from 'react';
import {
	View, Text, Animated, Easing, TouchableWithoutFeedback
} from 'react-native';

class Press extends Component {
	constructor(props) {
		super(props);
		this._handlePressIn = this._handlePressIn.bind(this);
		this._handlePressOut = this._handlePressOut.bind(this);
	}

	componentWillMount() {
		this.animatedValue = new Animated.Value(1);
	}

	_handlePressIn() {
		Animated.timing(this.animatedValue, {
			toValue: 0.3,
			duration: 300,
			easing: Easing.linear
		}).start();
	}

	_handlePressOut() {
		Animated.timing(this.animatedValue, {
			toValue: 1,
			duration: 300,
			easing: Easing.linear
		}).start();
	}

	render() {
		const animated = { transform: [{scale: this.animatedValue}] };
		return (
			<View style={styles.container}>
				<TouchableWithoutFeedback 
					onPressIn={this._handlePressIn}
					onPressOut={this._handlePressOut} 
				>
					<Animated.View 
						style={[styles.box, animated]}
					>
					</Animated.View>
				</TouchableWithoutFeedback>
			</View>
		);
	}
}

const styles = {
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	box: {
		backgroundColor: '#456',
		width: 300,
		height: 300
	}
};

export default Press;