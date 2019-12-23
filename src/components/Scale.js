import React, { Component } from 'react';
import {
	View, Text, Animated, Easing
} from 'react-native';

class Scale extends Component {
    componentWillMount() {
        this.animatedValue = new Animated.Value(100);
    }

    componentDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: 300,
            duration: 1000,
            easing: Easing.bounce
        }).start();
    }

	render() {
        const animated = { width: this.animatedValue, height: this.animatedValue };
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
        backgroundColor: '#123',
        width: 100,
        height: 100,
    }
};

export default Scale;