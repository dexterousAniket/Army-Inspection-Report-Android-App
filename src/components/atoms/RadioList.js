import * as React from "react";
import { RadioButton } from "react-native-paper";
import { StyleSheet, View } from "react-native";

// PROPS
//  - inputValueHandler
//  - index
//  - value
export default function RadioList(props){

  const [value, setValue] = React.useState(props.value);

  return (
    <View style={styles.container}>
      <RadioButton.Group onValueChange={(value) => {setValue(value); props.inputValueHandler(props.index, value) }} value={value} >
        {props.items.map((item, index) => (
          <RadioButton.Item label={item} value={item} key={index} />
        ))}
      </RadioButton.Group>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dee2e6",
    width: "auto"
  },
});
