import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { id: "1", content: "Drink Milk" },
    { id: "2", content: "Eat Dinner" },
    { id: "3", content: "Play Game" },
    { id: "4", content: "Learn React Native" },
    { id: "5", content: "Sleep" },
  ]);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const addTodo = (content) => {
    const todo = { id: Math.random().toString(), content };
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo addTodo={addTodo} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              keyExtractor={(item, index) => item.id}
              renderItem={({ item }) => {
                return <TodoItem item={item} deleteTodo={deleteTodo} />;
              }}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    backgroundColor: "pink",
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
