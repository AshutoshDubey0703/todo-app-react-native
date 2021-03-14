import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleTextChange = (val) => {
    setTodo(val);
  };

  const handlePress = () => {
    if (todo.length > 3) {
      addTodo(todo);
    } else {
      Alert.alert("Oops!", "Todo must be atleast 4 characters long.", [
        {
          text: "Understood",
          onPress: () => console.log("Alert closed"),
        },
      ]);
    }
    setTodo("");
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter new todo"
        onChangeText={handleTextChange}
        value={todo}
      />
      <Button title="Add Todo" onPress={handlePress} color="black"></Button>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1.5,
    borderStyle: "solid",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
});
