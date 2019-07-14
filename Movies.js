import React from "react";
import { Text, View, FlatList } from "react-native";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          id: 0,
          name: "Mulan",
          description: "Chinese woman joins army to save father"
        },
        {
          id: 1,
          name: "Kill Bill",
          description: "Awakened comotose woman on revenge killing spree"
        },
        { id: 2, name: "Charlie's Angels", description: "Woman fighting crime" }
      ]
    };
  }

  handlePress = item => {
    this.props.navigation.navigate("MovieDescription", { movie: item });
  };

  handleRender = ({ item }) => {
    return <Text onPress={() => this.handlePress(item)}>{item.name}</Text>;
  };

  render() {
    return (
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={this.state.movies}
        renderItem={this.handleRender}
      />
    );
  }
}

export default Movies;
