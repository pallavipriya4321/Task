import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Footer = () => {
  // const size = 40;
  const iconSize = 25;
  return (
    <View style={styles.footer}>
      <View style={{ marginLeft: 15 }}>
        <MaterialIcons name="home-filled" size={iconSize} color="black" />
        <Text>Home</Text>
      </View>
      <View>
        <MaterialCommunityIcons
          name="star-box-outline"
          size={iconSize}
          color="black"
        />
        <Text>My Request</Text>
      </View>
      <View>
        <MaterialCommunityIcons
          name="brightness-percent"
          size={iconSize}
          color="black"
        />
        <Text>Discount</Text>
      </View>
      <View style={{ marginRight: 15 }}>
        <MaterialCommunityIcons
          name="bag-personal-outline"
          size={iconSize}
          color="black"
        />
        <Text>Partners</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    textAlign: "center",
    padding: 3,
    backgroundColor: "#fff",
    //shadow
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
