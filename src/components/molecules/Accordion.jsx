import { LayoutAnimation, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Card from '../atoms/Card';

// PROPS
//  - title
//  - children
//  - bgcolor
//  - isOpen
export default function Accordion(props) {

    const bgcolor = props.bgcolor ? props.bgcolor : "#edede9";
    
    const [isOpen, setIsOpen] = useState(props.isOpen ? props.isOpen : false);

    const toggleAccordion = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsOpen(!isOpen);
    };

  return (
    <Card>
        <TouchableOpacity style={{...styles.title, backgroundColor: bgcolor, borderBottomColor: bgcolor}} onPress={() => toggleAccordion()}>
            <Text style={{...styles.title, backgroundColor: bgcolor, borderBottomColor: bgcolor}}>{props.title}</Text>
        </TouchableOpacity>

        { isOpen && props.children}
    </Card>
  )
}

const styles = StyleSheet.create({
    title:{
        borderBottomWidth: 2,
        padding: 5,
        borderRadius: 8,
        overflow: "hidden",

    }
})