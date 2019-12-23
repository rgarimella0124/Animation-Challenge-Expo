import React, { Component } from "react";
import { FlatList, VirtualizedList } from "react-native";
import PropTypes from "prop-types";

class InfiniteFlatList extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    horizontal: PropTypes.oneOf(["left", "right", true, false]),
    vertical: PropTypes.oneOf(["top", "bottom", true, false]),
    data: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired,
    onLoadMore: PropTypes.func.isRequired,
    distanceFromEnd: PropTypes.number
  };

  static defaultProps = {
    horizontal: false,
    vertical: "bottom",
    distanceFromEnd: 10
  };

  render() {
    console.log("Infin", this.props, VirtualizedList);
    return (
      <FlatList
        data={this.props.data}
        renderItem={() => this.props.renderItem()}
        onEndReachedThreshold={this.props.distanceFromEnd}
      />
    );
  }
}

export default InfiniteFlatList;
