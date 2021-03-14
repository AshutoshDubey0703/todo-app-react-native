import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todo's</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: 40,
    backgroundColor: "coral",
  },
  title: {
    fontSize: 20,
    paddingTop: 20,
    textAlign: "center",
    color: "#fff",
  },
});

export default Header;
