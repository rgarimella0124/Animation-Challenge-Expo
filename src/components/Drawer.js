import React, { Component } from "react";
import { Button, StyleSheet, Image, View, Text } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";

class MyHomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={{
          uri: "https://d30y9cdsu7xlg0.cloudfront.net/png/32396-200.png"
        }}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>I'm on Home Screen</Text>
        <Button
          onPress={() => navigation.navigate("DrawerOpen")}
          title="Toggle Drawer"
        />
      </View>
    );
  }
}

class MyNotificationsScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Notifications",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={{
          uri: "https://d30y9cdsu7xlg0.cloudfront.net/png/194977-200.png"
        }}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>I'm on Nav Screen</Text>
        <Button
          onPress={() => navigation.navigate("DrawerOpen")}
          title="Toggle Drawer"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
});

const MyApp = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen
  },
  Notifications: {
    screen: MyNotificationsScreen
  }
});

export default MyApp;
