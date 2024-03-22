import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef } from 'react'
import RadioList from '../atoms/RadioList'

// PROPS
//  - fields
//  - inputValueHandler
//  - index
export default function HorizontalCell(props) {

  const fieldsDataValues = useRef(props.fields)

  const inputValueHandler = (index, value) => {
    fieldsDataValues.current[index].value = value
    props.inputValueHandler(props.index, fieldsDataValues.current)
  }

  return (
    <View>
      {fieldsDataValues.current.map( (field, index) => (
          <View style={styles.inputGroup} key={index}>
              <Text style={styles.label}>{field.title}</Text>
              {
                field.radio !== undefined ? 
                  (<RadioList items={field.radio} value={field.value} index={index} inputValueHandler={inputValueHandler} />) 
                  :
                  (<TextInput style={styles.input} placeholder={"Enter "+field.value} defaultValue={field.value} 
                      // onEndEditing={(event)=>{inputValueHandler(index, event.nativeEvent.text)}} 
                      onChangeText={(text) => inputValueHandler(index, text)}
                  />)
              } 
              
          </View>
      ) )}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  
  inputGroup: {
    marginBottom: 15,
  },

  label: {
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingTop: 10,
    fontWeight: "500",
  },

  input: {
    borderWidth: 1,
    borderColor: "#e1e1e1",
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
  },
})