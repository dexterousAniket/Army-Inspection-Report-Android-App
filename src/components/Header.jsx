import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

const { width } = Dimensions.get("window");

//  PROPS
//  - header1
//  - header2
//  - header3
//  - bgColor
export default function Header(props) {
  const bgColor = props.bgColor ? props.bgColor : "#344e41";

  return (
    <View style={{ ...styles.container, backgroundColor: bgColor }}>
      <Text style={styles.header1}>{props.header1}</Text>
      <Text style={{...styles.header2, ...styles.shadow}}>{props.header2}</Text>
      <Text style={styles.header3}>{props.header3}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignContent: "center",
    width: width,
    paddingTop: 50,
  },

  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.89,
    shadowRadius: 2,
    elevation: 4,
  },

  header1: {
    flexGrow: 1,
    width: "100%",
    textAlign: "right",
    textAlignVertical: "bottom",
    fontSize: 11,
    color: "white",
  },

  header2: {
    width: "100%",
    height: 65,
    textAlign: "center",
    textAlignVertical: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
    fontWeight: "500",
  },

  header3: {
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    padding: 10,
    fontSize: 12,
    color: "white",
  },
});
