import React from "react";
import { Text, Image } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const ImageCard = (props) => {
  const size = 45;
  return (
    <Card
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        margin: 6,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
    >
      <Card.Content>
        <Image
          source={props.image}
          style={{
            width: size,
            height: size,
            borderRadius: props.circular ? size : 0,
            margin: 5,
            alignSelf: "center",
          }}
        />
        <Paragraph
          style={{ textAlign: "center", fontSize: 10, fontWeight: "bold" }}
        >
          {props.title}
          <br />
          {props.secword}
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

export default ImageCard;
