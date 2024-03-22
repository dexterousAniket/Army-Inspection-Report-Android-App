import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import Body from "../Body";
import Table from "../organisms/Table";
import TimeBox from "../molecules/TimeBox";


// PROPS
//  - pageData
//  - inputValueHandler
export default function Page_2(props) {
  
  const pageDataValues = useRef(props.pageData)
  const timeBoxSetterRef = useRef("")

  const inputValueHandler = (index, tableValues) => {
    const sum = tableValues.reduce((acc, row) => {
      if( !isNaN(parseInt(row.row[5].value)) )
        return acc + parseInt(row.row[5].value)
      else
        return acc
    }, 0);
    pageDataValues.current.actualTime = sum
    timeBoxSetterRef.current(sum)
    props.inputValueHandler(pageDataValues.current)
  };

  const setTimeBoxSetterRef = (setActualTime) => {
    timeBoxSetterRef.current = setActualTime
  }

  return (
    <Body>
      <TimeBox totalTime={pageDataValues.current.totalTime} actualTime={pageDataValues.current.actualTime} setTimeBoxSetterRef={setTimeBoxSetterRef} />
      <Table table={pageDataValues.current.table} inputValueHandler={inputValueHandler} />
    </Body>
  );
}

const styles = StyleSheet.create({});
