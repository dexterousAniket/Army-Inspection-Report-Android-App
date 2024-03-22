import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

// PROPS
//   - text
//   - bgcolor
//   - color
//   - clickHandler
//   - rippleColor
//   - index
//   - height
export default Button = (props) => {
  const bgColor = props.bgcolor ? props.bgcolor : "#354f52";
  const clickHandler = props.clickHandler
    ? () => props.clickHandler(props.index)
    : () => {};
  const rippleColor = props.rippleColor ? props.rippleColor : "#ddb892";
  const color = props.color ? props.color : "white";
  const btnHeight = props.height ? props.height : 50;

  return (
    <Pressable
      style={{
        ...styles.container,
        ...styles.shadow,
        backgroundColor: bgColor,
        height: btnHeight,
      }}
      onPress={clickHandler}
      android_ripple={{ color: rippleColor }}
    >
      <Text style={{ color: color, ...styles.text }}>{props.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
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

  text: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
