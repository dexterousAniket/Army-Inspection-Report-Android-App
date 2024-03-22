import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../atoms/Card'
import Cell from '../atoms/Cell'

export default function TimeBox(props) {

  const [actualTime, setActualTime] = useState(props.actualTime)

  useEffect(() => {
    props.setTimeBoxSetterRef(setActualTime)
  }, [])
  

  return (
    <Card>
        <Cell title={"Total Time (Min)"} value={props.totalTime} />
        <Cell title={"Actual Time (Min)"} value={actualTime+" Min"} />
    </Card>
  )
}

const styles = StyleSheet.create({})