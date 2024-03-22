import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import Body from "../Body";
import Table from "../organisms/Table";
import TimeBox from "../molecules/TimeBox";
import Accordion from "../molecules/Accordion";


// PROPS
//  - pageData
//  - inputValueHandler
export default function Page_3(props) {
  
  const pageDataValues = useRef(props.pageData)
  const timeBoxSetterRef = useRef("")

  const inputValueHandler = (index, tableValues) => {

    pageDataValues.current.tables[index].table = tableValues;

    const sum = pageDataValues.current.tables.reduce( (acc, table) => {
      return acc + table.table.reduce((inneracc, row) => {
        if( !isNaN(parseInt(row.row[6].value)) )
          return inneracc + parseInt(row.row[6].value)
        else
          return inneracc
      }, 0)
    }, 0)

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
      {
        props.pageData.tables.map( (table, index) => (
          <Accordion title={table.tableTitle} bgcolor="#d8e2dc" isOpen={ index<1 } key={index}>
            <Table table={table.table} inputValueHandler={inputValueHandler} index={index} />
          </Accordion>
        ) )
      }
    </Body>
  );
}

const styles = StyleSheet.create({});
