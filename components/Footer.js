import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Footer = () => {
  const size = 40;
  const iconSize = 28;
  return (
    <View style={styles.footer}>
      <View style={{ marginLeft: 15 }}>
        <MaterialIcons name="home-filled" size={24} color="black" />
      </View>
      <View>
        <MaterialCommunityIcons
          name="star-box-outline"
          size={24}
          color="black"
        />
      </View>
      <View>
        <MaterialCommunityIcons
          name="brightness-percent"
          size={24}
          color="black"
        />
      </View>
      <View style={{ marginRight: 15 }}>
        <MaterialCommunityIcons
          name="bag-personal-outline"
          size={24}
          color="black"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: 8,
    backgroundColor: "#fff",
    shadowOffset: { width: 500 },
    bottom: 0,
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});

export default Footer;
