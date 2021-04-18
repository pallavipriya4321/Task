import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Person = () => {
  return (
    <View style={styles.person}>
      <View
        style={{ marginLeft: 5, borderRadius: 65, backgroundColor: "white" }}
      >
        <MaterialIcons name="person" size={65} color="grey" />
      </View>
      <View style={{ marginBottom: 40 }}>
        <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  person: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FCED49",
    //alignItems: "flex-end",
    padding: 10,
    marginBottom: 20,
    //shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});

export default Person;
