import React, { Component } from "react";
import { View, Text } from "react-native";
import InfiniteFlatList from "./InfiniteFlatList";

class FlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      called: 0
    };
  }

  componentWillMount() {
    this.onLoadMore();
  }

  renderItem = () =>
    this.state.data.map((item, i) =>
      <View key={i} style={styles.item}>
        <Text style={styles.text}>
          {item.text}
        </Text>
      </View>
    );

  onLoadMore = () => {
    const called = this.state.called + 1;
    console.log(called);
    let data = this.state.data;
    const end = data.length ? data[data.length - 1] : 1;
    for (let i = end; i < end + 10; i++) data.push({ text: `${i}`, key: i });
    console.log({ data });
    this.setState({ data, called });
  };

  render() {
    return (
      <InfiniteFlatList
        horizontal={"right"} // true,false,left,right ? default - false
        vertical={false} // true,false,top,bottom ? default - bottom
        data={this.state.data} // required
        renderItem={this.renderItem} // required
        onLoadMore={this.onLoadMore} // required
        distanceFromEnd={200} // default - 10
      />
    );
  }
}

const styles = {
  item: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 20,
    borderBottomWidth: 2,
    borderColor: "#ccc"
  },
  text: {
    fontSize: 32,
    color: "#777"
  }
};

export default FlatList;
