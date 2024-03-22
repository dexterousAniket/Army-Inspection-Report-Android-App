import { ScrollView, StyleSheet, Dimensions, View } from "react-native";
import React from "react";

const {width} = Dimensions.get("window");

export default function Body(props) {
  return (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>{props.children}</ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
  scrollView: {
    
  }
});
