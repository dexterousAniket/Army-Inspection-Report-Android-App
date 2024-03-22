import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import Cell from '../atoms/Cell';

// PROPS
//  - index
//  - row   [ {title: "", value: "", inputType: ""}, {} ]
//  - inputValueHandler
export default function Row(props) {

  const rowValues = useRef(props.row)

  const inputValueHandler = (index, cellValues) => {
    rowValues.current[index].value = cellValues
    props.inputValueHandler(props.index, rowValues.current)
  }
  
  return (
    <View>
        {
            rowValues.current.map( (cell, index) => ( 
                <Cell
                    key={index}
                    index={index} 
                    title={cell.title} 
                    value={cell.value} 
                    inputType={cell.inputType} 
                    inputValueHandler={inputValueHandler}
                />
            ) )
        }
    </View>
  )
}

const styles = StyleSheet.create({})