import { ScrollView, StyleSheet, View, Dimensions } from "react-native";
import React, { useState } from "react";
import Button from "../atoms/Button";

const { width } = Dimensions.get("window");
const height = 50;

// PROPS
//  - navList
//  - activeButtonIndex
export default function Navigation(props) {

  const minWidth = width/props.navList.length

  const navClickHandler = (index) => {
    props.handlePageStateChange(index)
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.navList.map((nav, index) => (
          <View style={{...styles.navView, minWidth: minWidth}} key={index}>
            {props.activeButtonIndex == index ? (
              <Button
                text={nav}
                key={index}
                index={index}
                clickHandler={navClickHandler}
                height={height}
                bgcolor={"white"}
                color={"black"}
                rippleColor={"white"}
              />
            ) : (
              <Button
                text={nav}
                key={index}
                index={index}
                clickHandler={navClickHandler}
                height={50}
              />
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: height,
  },

  navView: {
  },
});
