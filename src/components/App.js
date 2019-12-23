import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import Btn from "./Btn";

class App extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Animations"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Btn navigate={navigate} color="#123" title="Scale" />
          <Btn navigate={navigate} color="#456" title="Ripple" />
          <Btn navigate={navigate} color="#123456" title="Press" />
          <Btn navigate={navigate} color="#123456" title="Drag" />
          <Btn navigate={navigate} color="#123456" title="FlatList" />
          <Btn navigate={navigate} color="#124" title="Drawer" />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};

export default App;