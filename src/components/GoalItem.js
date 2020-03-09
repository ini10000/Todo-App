import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = ({ item, onDelete }) => {
  return (
    <TouchableOpacity onPress={() => onDelete(item)}>
      <View style={styles.goalList}>
        <Text>{item}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goalList: {
    padding: 10,
    marginTop: 10,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#ccc"
  }
});

export default GoalItem;
