import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Contents = () => {
  const iconSize = 45;
  return (
    <View style={styles.content}>
      <View style={styles.row}>
        <MaterialIcons name="home-filled" size={iconSize} color="black" />
        <Text
          style={{
            fontWeight: "bold",
            paddingLeft: 15,
            paddingTop: 12,
            fontSize: 20,
          }}
        >
          Home
        </Text>
      </View>
      <View style={styles.row}>
        <MaterialCommunityIcons
          name="star-box-outline"
          size={iconSize}
          color="black"
        />
        <Text
          style={{
            fontWeight: "bold",
            paddingLeft: 15,
            paddingTop: 12,
            fontSize: 20,
          }}
        >
          My Request
        </Text>
      </View>

      <View style={styles.row}>
        <MaterialCommunityIcons
          name="bag-personal-outline"
          size={iconSize}
          color="black"
        />
        <Text
          style={{
            fontWeight: "bold",
            paddingLeft: 15,
            paddingTop: 12,
            fontSize: 20,
          }}
        >
          Partners
        </Text>
      </View>
      <View style={styles.row}>
        <MaterialCommunityIcons name="gift" size={iconSize} color="black" />
        <Text
          style={{
            fontWeight: "bold",
            paddingLeft: 15,
            paddingTop: 12,
            fontSize: 20,
          }}
        >
          Offers
        </Text>
      </View>
      <View style={styles.row}>
        <MaterialIcons name="menu-book" size={iconSize} color="black" />
        <Text
          style={{
            fontWeight: "bold",
            paddingLeft: 15,
            paddingTop: 12,
            fontSize: 20,
          }}
        >
          know the Law
        </Text>
      </View>
      <View style={styles.row}>
        <MaterialIcons name="people-alt" size={iconSize} color="black" />
        <Text
          style={{
            fontWeight: "bold",
            paddingLeft: 15,
            paddingTop: 12,
            fontSize: 20,
          }}
        >
          Refer and Earn
        </Text>
      </View>
      <View style={styles.row}>
        <MaterialIcons name="shopping-bag" size={iconSize} color="black" />
        <Text
          style={{
            fontWeight: "bold",
            paddingLeft: 15,
            paddingTop: 12,
            fontSize: 20,
          }}
        >
          My Rewards
        </Text>
      </View>
      <Text style={{ marginTop: 95, marginLeft: 20 }}>App version V.1.4.1</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  content: {
    flexDirection: "coloumn",

    alignItems: "flex-start",
    textAlign: "center",
    // padding: 3,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 15,
    padding: 5,
  },
});

export default Contents;
