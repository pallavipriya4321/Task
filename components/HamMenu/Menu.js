import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Menu = () => {
  const size = 55;
  const iconSize = 28;
  return (
    <View style={styles.menu}>
      <View style={{ marginLeft: 15, justifyContent: "flex-start" }}>
        <MaterialIcons name="clear" size={24} color="black" />
      </View>
      <View>
        <Image
          source={require("C:/Users/palla/Desktop/Co360/Project/assets/comp.jpg")}
          style={{
            width: size,
            height: size,
            borderRadius: size,
          }}
        />
      </View>
      <View style={{ marginLeft: 30 }}></View>
      {/* <View style={{ marginRight: 15 }}>
        <MaterialCommunityIcons
          name="bell-outline"
          size={iconSize}
          color="black"
        />
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FCED49",

    padding: 6,
    margin: 0.5,
    //shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
});

export default Menu;
