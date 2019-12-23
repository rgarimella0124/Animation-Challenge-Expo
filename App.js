import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import App from "./src/components/App";
import Ripple from "./src/components/Ripple";
import Scale from "./src/components/Scale";
import Press from "./src/components/Press";
import Drag from "./src/components/Drag";
import FlatList from "./src/components/FlatList";
import Drawer from "./src/components/Drawer";

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
