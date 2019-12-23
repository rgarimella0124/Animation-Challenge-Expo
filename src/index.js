import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import App from "./components/App";
import Ripple from "./components/Ripple";
import Scale from "./components/Scale";
import Press from "./components/Press";
import Drag from "./components/Drag";
import FlatList from "./components/FlatList";
import Drawer from "./components/Drawer";

const BasicApp = createStackNavigator({
  App: { screen: App },
  Ripple: { screen: Ripple },
  Scale: { screen: Scale },
  Press: { screen: Press },
  Drag: { screen: Drag },
  FlatList: { screen: FlatList },
  Drawer: { screen: Drawer }
});
const AppContainer = createAppContainer(BasicApp);
export default AppContainer;
