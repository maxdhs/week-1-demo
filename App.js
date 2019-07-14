import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import Movies from "./Movies";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MovieDescription from "./MovieDescription";

const MovieNavigator = createAppContainer(
  createStackNavigator({
    Movies,
    MovieDescription
  })
);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MovieNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight
  }
});
