import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import Body from '../Body'
import Accordion from '../molecules/Accordion'
import HorizontalCell from '../molecules/HorizontalCell'

// PROPS
//  - pageData
//  - inputValueHandler
export default function Page_1(props) {

  const pageDataValues = useRef(props.pageData)

  const inputValueHandler = (index, fieldsDataValues) => {
    pageDataValues.current.pages[index].fields = fieldsDataValues
    props.inputValueHandler(pageDataValues.current);
  }


  return (
    <Body>
      {
        pageDataValues.current.pages.map( (page, index) => (
          <Accordion title={page.heading} key={index}>
              <HorizontalCell fields={page.fields} inputValueHandler={inputValueHandler} index={index}/>
          </Accordion>
        ) )
      }
    </Body>
  )
}

const styles = StyleSheet.create({})