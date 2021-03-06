import React from "react";
import { View, StyleSheet, Image, Button, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Menu from "./HamMenu/Menu";

import { render } from "react-dom";

const Header = () => {
  const size = 50;
  const iconSize = 28;
  return (
    <View style={styles.header}>
      <View style={{ marginLeft: 15 }}>
        <MaterialCommunityIcons name="menu" size={iconSize} color="black" />
        {/* <Button
          onPress={() => {
            <SafeAreaView>
              <Menu />
            </SafeAreaView>;
          }}
        /> */}
      </View>

      <View>
        <Image
          source={require("../assets/comp.jpg")}
          style={{ width: size, height: size, borderRadius: size }}
        />
      </View>
      <View style={{ marginRight: 15 }}>
        <MaterialCommunityIcons
          name="bell-outline"
          size={iconSize}
          color="black"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: 6,
    backgroundColor: "#fff",
  },
});

export default Header;
