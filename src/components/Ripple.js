import React, { Component } from 'react';
import {
	View, Text, Animated, Easing
} from 'react-native';

class Ripple extends Component {
	componentWillMount() {
		this.ripple = new Animated.Value(0);
		this.opacity = new Animated.Value(1);
	}

	componentDidMount() {
		Animated.loop(
			Animated.parallel([
				Animated.timing(this.ripple, {
					toValue: 3,
					duration: 1000,
					easing: Easing.circle
				}),
				Animated.timing(this.opacity, {
					toValue: 0,
					duration: 1000,
					easing: Easing.ease
				})
			])
		).start();
	}

	render() {
		const animated = { 
			transform: [{ scale: this.ripple }],
			opacity: this.opacity 
		};
		return (
			<View style={styles.container}>
				<Animated.View style={[styles.box, animated]}></Animated.View>
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
		height: 300,
		borderRadius: 300
	}
};

export default Ripple;