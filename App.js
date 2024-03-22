// LIBRARY IMPORTS
import { StatusBar } from "expo-status-bar";
import { BackHandler, StyleSheet, Text, View, Modal, Dimensions } from "react-native";
import { useRef, useState } from "react";
import RNFS from "react-native-fs";
import RNHTMLtoPDF from "react-native-html-to-pdf";
import { TextInput } from "react-native-paper";


// IMPORTING CUSTOM COMPONENTS
import Button from "./src/components/atoms/Button";
import PdfRead from "./src/components/PdfRead";
import Navigation from "./src/components/molecules/Navigation";
import Header from "./src/components/Header";



//// IMPORTING PAGES FOR RENDERS
import Page_1 from "./src/components/Pages/Page_1";
import Page_2 from "./src/components/Pages/Page_2";
import Page_3 from "./src/components/Pages/Page_3";
import Page_4 from "./src/components/Pages/Page_4";


/// IMPORTING PAGE DATA FROM UTIL
import makeHtml from "./src/components/util/makeHtml";
import page1Data from "./src/components/util/page1Data";
import page2Data from "./src/components/util/page2Data";
import page3Data from "./src/components/util/page3Data";
import page4Data from "./src/components/util/page4Data";


const {width} = Dimensions.get("window");


export default function App() {


  // USESTATES
  const [pageState, setPageState] = useState([true, false, false, false]);
  const [showPdfState, setshowPdfState] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // USEREFS
  const page1DataRef = useRef(page1Data);
  const page2DataRef = useRef(page2Data);
  const page3DataRef = useRef(page3Data);
  const page4DataRef = useRef(page4Data);

  const downloadPathRef = useRef("") // contains full temp download path (preview pdf path)
  const filenameRef = useRef("");   // filename to be saved

  

  // HANDLERS

  const page1InputValueHandler = (pageDataValues) => page1DataRef.current = pageDataValues
  const page2InputValueHandler = (pageDataValues) => page2DataRef.current = pageDataValues
  const page3InputValueHandler = (pageDataValues) => page3DataRef.current = pageDataValues
  const page4InputValueHandler = (pageDataValues) => page4DataRef.current = pageDataValues

  const handlePageStateChange = (pressed) => {
    if (pressed === 0 && !pageState[0]) {
      setPageState([true, false, false, false]);
    } else if (pressed === 1 && !pageState[1]) {
      setPageState([false, true, false, false]);
    } else if (pressed === 2 && !pageState[2]) {
      setPageState([false, false, true, false]);
    } else if (pressed === 3 && !pageState[3]) {
      setPageState([false, false, false, true]);
    }
  };

  const handleBackPress = () => {
    console.log("back button pressed");
    setModalVisible(false)
    setshowPdfState(false)
    setPageState([true, false, false, false])
    return true;
  };

  BackHandler.addEventListener("hardwareBackPress", handleBackPress);
  // BackHandler.removeEventListener('hardwareBackPress', handleBackPress)

  const filenameClickHandler = () => {
    savePdf()
    setModalVisible(false)
    setshowPdfState(false)
    setPageState([true, false, false, false])
  };


  // PDF FUNCTIONS
  const createPDF = async () => {
    
    const html = makeHtml(page1DataRef.current, page2DataRef.current, page3DataRef.current, page4DataRef.current);

    let options = {
      html: html,
      fileName: "report",
      directory: "Documents",
    };

    let file = await RNHTMLtoPDF.convert(options);

    downloadPathRef.current = file.filePath
  };

  const savePdf = () => {
    const destinationPath = RNFS.DownloadDirectoryPath + "/" +filenameRef.current + ".pdf"
    RNFS.copyFile(downloadPathRef.current, destinationPath)
      .then(() => alert("PDF saved to :- \n\" "+destinationPath +" \""))
      .catch((error) => alert("error in saving pdf : "+error));
  };


  // GENERIC FUNCTIONS
  const getDateString = () => {
        var now     = new Date(); 
        var year    = now.getFullYear();
        var month   = now.getMonth()+1; 
        var day     = now.getDate();
        var hour    = now.getHours();
        var minute  = now.getMinutes();
        var second  = now.getSeconds(); 

        if(month.toString().length == 1) {
             month = '0'+month;
        }
        if(day.toString().length == 1) {
             day = '0'+day;
        }   
        if(hour.toString().length == 1) {
             hour = '0'+hour;
        }
        if(minute.toString().length == 1) {
             minute = '0'+minute;
        }
        if(second.toString().length == 1) {
             second = '0'+second;
        }   
        var dateTime = year+'-'+month+'-'+day+'_'+hour+'.'+minute+'.'+second;   
         return dateTime;
  }

  const initiateDefaultValue = () => {
    const pdfname = "report_" + getDateString();
    filenameRef.current = pdfname
    return pdfname
  }



  
  // JSX
  return (
    <View style={styles.container}>

      {/* PDF FILENAME INPUT MODAL */}
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View
          style={{
            zIndex: 1,
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            backgroundColor: "rgba(52,58,64,0.9)",
          }}
        >
          <View style={{ elevation: 5, width: width*0.8 }}>
            <Text style={{backgroundColor:"#264653", color:"white", padding: 10, borderRadius: 10, }}>
              Enter PDF filename to be saved
            </Text>
            <TextInput
              placeholder="Enter PDF filename (example - report)"
              onChangeText={(text) => filenameRef.current = text }
              defaultValue={initiateDefaultValue()}
              style={{ backgroundColor: "white" }}
            />
            <Button text="Submit" clickHandler={filenameClickHandler} />
          </View>
        </View>
      </Modal>

      {/* MAIN PAGE VISIBILITY SWITCH */}
      {!showPdfState ? 
      (

        // MAIN PAGE VIEW
        <View style={styles.container}>

          <StatusBar style="auto" />

          <Header 
            header1={"IAF (EME) E-03 (Version 2.0 Aug 2022)"} 
            header2={"TECHNICAL INSPECTION REPORT ('B' VEHICLES) :TATA 2.5 TON 713C & 715 TC"}
            header3={'Nature of Inspection (Sec SAO 01/S/98) : ANNUAL TECH INSPECTION{" "}'}
          />

          <Navigation
            navList={[
              "DETAILS",
              "OIL LEVEL INSPECTION",
              "DIAGNOSTIC INSPECTION",
              "VISUAL INSPECTION",
            ]}
            handlePageStateChange={handlePageStateChange}
            activeButtonIndex={pageState.indexOf(true)}
          />

          {/* PAGE RENDERS */}
          { pageState[0] && ( <Page_1 pageData={page1DataRef.current} inputValueHandler={page1InputValueHandler} />)}
          { pageState[1] && ( <Page_2 pageData={page2DataRef.current} inputValueHandler={page2InputValueHandler} />)}
          { pageState[2] && ( <Page_3 pageData={page3DataRef.current} inputValueHandler={page3InputValueHandler} />)}
          { pageState[3] && ( <Page_4 pageData={page4DataRef.current} inputValueHandler={page4InputValueHandler} />)}

          {/* MAIN PAGE PDF PREVIEW BUTTON */}
          <Button
            text="Preview PDF Report"
            clickHandler={(index) => { 
              createPDF()
              setTimeout(() => setshowPdfState(true), 1000)
            }}
          />

        </View>
      ) 
      : 
      (
        // PDF PREVIEW
        <View style={styles.container}>
          <PdfRead path={downloadPathRef.current} />
          <Button
            text="Download PDF Report"
            clickHandler={() => setModalVisible(true) }
          />
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
