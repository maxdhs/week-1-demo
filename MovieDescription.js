import React from "react";
import { Text, View } from "react-native";

const MovieDescription = props => {
  const movie = props.navigation.getParam("movie");
  return <Text>{movie.description}</Text>;
};

export default MovieDescription;
