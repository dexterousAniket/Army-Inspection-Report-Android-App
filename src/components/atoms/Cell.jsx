import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import React, { useRef } from "react";

const { width } = Dimensions.get("window");

// PROPS
//  - title
//  - value
//  - inputType = {"numeric", "text"}
//  - inputValueHandler
//  - index
export default function Cell(props) {

  const editHandler = (event) => {
    props.inputValueHandler(props.index, event.nativeEvent.text)
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.inputType ? (
        <TextInput
          style={styles.input}
          placeholder={"Enter " + props.title}
          inputMode={props.inputType}
          // onEndEditing={editHandler}
          onChangeText={(text) => props.inputValueHandler(props.index, text)}
          defaultValue={props.value}
        />
      ) : (
        <Text style={styles.value}>{props.value}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#e9ecef",
  },

  title: {
    padding: 10,
    width: width / 3,
  },

  value: {
    flex: 1,
    flexWrap: "wrap",
    padding: 10,
  },

  input: {
    flex: 1,
    flexWrap: "wrap",
    padding: 10,
    borderWidth: 1,
    borderColor: "#e1e1e1",
    borderRadius: 5,
  },
});
