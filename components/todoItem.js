import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({ item, deleteTodo }) => {
  const handlePress = (id) => {
    deleteTodo(id);
  };

  return (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.text}>{item.content}</Text>
      <MaterialIcons
        style={styles.deleteIcon}
        name="delete"
        size={25}
        color="#222"
        onPress={() => handlePress(item.id)}
      />
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginTop: 20,
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: "solid",
    backgroundColor: "#278",
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
    color: "#fff",
    flex: 9,
  },
  deleteIcon: {
    flex: 1,
  },
});
