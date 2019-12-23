import React, { Component } from "react";
import { View, Text, Animated, Easing, PanResponder } from "react-native";

class Drag extends Component {
  componentWillMount() {
    this.ripple = new Animated.Value(0);
    this.opacity = new Animated.Value(1);
  }

  componentDidMount() {
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      }
    });

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
        <Animated.View style={[styles.box, animated]} />
      </View>
    );
  }
}

const styles = {
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  box: {
    backgroundColor: "#456",
    width: 300,
    height: 300,
    borderRadius: 300
  }
};

export default Drag;
