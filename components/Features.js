import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import ImageCard from "./ImageCard";

const Features = () => {
  const size = 40;
  return (
    <View style={styles.features}>
      <ImageCard
        title="New Request"
        image={require("../assets/help.png")}
        circular={true}
      />
      <ImageCard
        title="Expert help"
        image={require("../assets/expert.png")}
        circular={true}
      />
      <ImageCard
        title="Know the law"
        image={require("../assets/law.png")}
        circular={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  features: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    // padding: 20,
    margin: 8,
    backgroundColor: "#fff",

    // <shadow>

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

export default Features;
