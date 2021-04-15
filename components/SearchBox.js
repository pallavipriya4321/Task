import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const SearchBox = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="search" size={24} color="black" />
      <TextInput
        style={styles.input}
        placeholder="Search for any legal services"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 7,
    flexDirection: "row",
    elevation: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    marginLeft: 5,
    elevation: 40,
    shadowOffset: { width: 4, width: 7 },
    shadowOpacity: 2,
  },
});
export default SearchBox;
