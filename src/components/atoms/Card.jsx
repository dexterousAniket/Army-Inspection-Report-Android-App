import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// PROPS
//  - child component
export default function Card(props) {
  return (
    <View style={styles.container}>
        {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        borderRadius: 8,
        backgroundColor: "white",
        marginHorizontal: 10,
        marginVertical: 5,
    },
})