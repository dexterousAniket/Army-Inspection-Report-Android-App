import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import Accordion from "../molecules/Accordion";
import Row from "../molecules/Row";

// PROPS
//  - table [ { rowTitle: "", row= [{title: "", value: "", inputType: ""}] ]
//  - inputValueHandler
//  - index
export default function Table(props) {

  const tableValues = useRef(props.table);

  const inputValueHandler = (index, rowValues) => {
    tableValues.current[index].row = rowValues;
    props.inputValueHandler(props.index, tableValues.current)
  };

  return (
    <View>
      {  tableValues.current.map((row, index) => (
          <Accordion title={row.rowTitle} key={index}>
              <Row
                  key={index}
                  index={index}
                  row={row.row}
                  inputValueHandler={inputValueHandler}
              />     
          </Accordion>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
});
