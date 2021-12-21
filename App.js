import React from "react";
import { Text, TextInput, View } from "react-native";

const classes = useStyle;

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        marginTop: "10vh",
      }}
      onPress={() => console.log("clicked")}
    >
      <Text>Hello, Mr. John!</Text>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" type="password" />
    </View>
  );
};
export default HelloWorldApp;
