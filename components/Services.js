import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import ImageCard from "./ImageCard";

const Services = () => {
  const size = 40;
  return (
    <View style={styles.services}>
      <Text
        style={{
          alignSelf: "flex-start",
          fontSize: 23,
          fontStyle: "normal",
          fontWeight: "bold",
          margin: 10,
        }}
      >
        Our popular services
      </Text>
      <View style={styles.row}>
        <ImageCard
          title="Trademark"
          secword="Application"
          image={require("../assets/TradeMark.png")}
        />

        <ImageCard
          title="Patent Filing"
          image={require("../assets/patent.png")}
        />

        <ImageCard
          title="GST Registration"
          image={require("../assets/gst.png")}
        />
      </View>

      <View style={styles.row}>
        <ImageCard
          title="Company"
          secword=" Registration"
          image={require("../assets/company.jfif")}
        />
        <ImageCard
          title="Mandatory"
          secword="Compliace"
          image={require("../assets/mandatory.png")}
        />
        <ImageCard
          title="GST filing"
          image={require("../assets/gstfiling.png")}
        />
      </View>

      {/* <Card
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <Card.Content>
            <Image
              source={require("../assets/TradeMark.png")}
              style={{
                width: size,
                height: size,
                borderRadius: size,
                margin: 15,
              }}
            />
            <Paragraph style={{ textAlign: "center" }}>
              {" "}
              Trademark <br />
              Application
            </Paragraph>
          </Card.Content>
        </Card> */}

      {/* <Card
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <Card.Content>
            <Image
              source={require("../assets/patent.png")}
              style={{
                width: size,
                height: size,
                //   borderRadius: size,
                margin: 15,
              }}
            />
            <Paragraph style={{ textAlign: "center" }}>Patent Filing</Paragraph>
          </Card.Content>
        </Card> */}
      {/* <Card
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <Card.Content>
            <Image
              source={require("../assets/gst.png")}
              style={{
                width: size,
                height: size,
                //   borderRadius: size,
                margin: 15,
              }}
            />
            <Paragraph style={{ textAlign: "center" }}>
              GST Registration
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
      <View style={styles.row}>
        <Card
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <Card.Content>
            <Image
              source={require("../assets/company.jfif")}
              style={{
                width: size,
                height: size,
                //   borderRadius: size,
                margin: 15,
              }}
            />
            <Paragraph style={{ textAlign: "center" }}>
              {" "}
              Company
              <br /> Registration
            </Paragraph>
          </Card.Content>
        </Card>
        <Card
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <Card.Content>
            <Image
              source={require("../assets/mandatory.png")}
              style={{
                width: size,
                height: size,
                //   borderRadius: size,
                margin: 15,
              }}
            />
            <Paragraph style={{ textAlign: "center" }}>
              {" "}
              Mandatory <br />
              Compliance
            </Paragraph>
          </Card.Content>
        </Card>
        <Card
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <Card.Content>
            <Image
              source={require("../assets/gstfiling.png")}
              style={{
                width: size,
                height: size,
                //   borderRadius: size,
                margin: 15,
              }}
            />
            <Paragraph style={{ textAlign: "center" }}> GST Filing</Paragraph>
          </Card.Content>
        </Card> */}
    </View>
  );
};

const styles = StyleSheet.create({
  services: {
    // flexDirection: "row",
    justifyContent: "space-between",
    //alignItems: "flex-end",
    padding: 0,
    margin: 5,
    backgroundColor: "#fff",

    // <shadow>

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 0,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    //padding: 200,
    margin: 8,
    backgroundColor: "#fff",
  },
});

export default Services;
