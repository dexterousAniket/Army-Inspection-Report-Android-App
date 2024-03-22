export default makeHtml = (page1Data, page2Data, page3Data, page4Data) => {
  let html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vehicle Maintenance Checklist</title>
    <style>
      body{
        font-family: Arial, Helvetica, sans-serif;
      }
      @page {
        size: A4;
        margin: 0;
      }
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th,
      td {
        border: 1px solid black;
        padding: 3px 5px 3px 5px;
        margin: 0;
      }
    </style>
  </head>
  <body>

    <table>
      <tr>
        <th colspan="6">
          <p style="text-align: right; font-size: small">
            IAF (EME) E-03 (Version 2.0 Aug 2022)
          </p>
          <h4 style="text-decoration: underline; font-weight: bold">
            TECHNICAL INSPECTION REPORT ('B' VEHICLES) :TATA 2.5 TON 713C & 715 TC
          </h4>
          <p style="text-align: left; font-weight: 300">
            Nature of Inspection (Sec SAO 01/S/98) : ANNUAL TECH INSPECTION
          </p>
        </th>
      </tr>
      <tr style="text-align: left">
        <td colspan="3">
          <p>
            Make, Model and type :
          </p>
          <p>
            B. A. Number : <span style="color: blue">${page1Data.pages[0].fields[0].value}</span>
          </p>
          <p>
            Distance/hours run:
            <span style="color: blue">${page1Data.pages[0].fields[1].value}</span>
          </p>
          <p>
            (a) Since entry into service :
            <span style="color: blue">${page1Data.pages[0].fields[2].value}</span>
          </p>
          <p>
            (b) Last base overhaul :
            <span style="color: blue">${page1Data.pages[0].fields[3].value}</span>
          </p>
          <p>
            (c) On the present engine :<span style="color: blue"
              >${page1Data.pages[0].fields[4].value}</span
            >
          </p>
        </td>
        <td colspan="3">
          <p>
            Holding unit : <span style="color: blue">${page1Data.pages[0].fields[5].value}</span>
          </p>
          <p>
            Maint Wksp : <span style="color: blue">${page1Data.pages[0].fields[6].value}</span>
          </p>
          <p>
            Date of inspection : <span style="color: blue">${page1Data.pages[0].fields[7].value}</span>
          </p>
          <p>
            Date veh taken into service : <span style="color: blue">${page1Data.pages[0].fields[8].value}</span>
          </p>
          <p>
            Date of overhaul : <span style="color: blue">${page1Data.pages[0].fields[9].value}</span>
          </p>
          <p>
            Date of last engine change : <span style="color: blue">${page1Data.pages[0].fields[10].value}</span>
          </p>
        </td>
      </tr>
      <tr>
        <td colspan="3">
          <p>Tools and equipment:</p>
          <p>
            (a) As per VKL: Yes/ No <span style="color: blue">${page1Data.pages[1].fields[0].value}</span>
          </p>
          <p>
            If no, demand no :
            <span style="color: blue">${page1Data.pages[1].fields[1].value}</span>
          </p>
          <p>(b) Serviceability: S/ UNSV <span style="color: blue">${page1Data.pages[1].fields[2].value}</span></p>
        </td>
        <td colspan="3">
          <p>Documentation :</p>
          <p>(a) Log book : Yes/ No <span style="color: blue">${page1Data.pages[2].fields[0].value}</span></p>
          <p>(b) Previous CEME Form: Yes/ No <span style="color: blue">${page1Data.pages[2].fields[1].value}</span></p>
          <p>(c)
          <p>(d) Cannibalization certi for main assy, if any : Yes/ No <span style="color: blue">${page1Data.pages[2].fields[3].value}</span></p>
        </td>
      </tr>
      <tr>
        <td colspan="3">(a) Maintenance :Adequate/ Inadequate
        <span style="color: blue">${page1Data.pages[3].fields[0].value}</span>
        </td>
        <td rowspan="4" colspan="3">
            <p> Engine No	: <span style="color: blue">${page1Data.pages[9].fields[0].value}</span> </p>
            <p> Chassis No	: <span style="color: blue">${page1Data.pages[10].fields[0].value}</span> </p>
            <p> Rotary Pump No: <span style="color: blue">${page1Data.pages[11].fields[0].value}</span> </p>
            <p> Battery No	: <span style="color: blue">${page1Data.pages[12].fields[0].value}</span> </p>
        </td>
      </tr>
      <tr>
        <td colspan="3">(b) Lubrication :Adequate/ Inadequate 
        <span style="color: blue">${page1Data.pages[4].fields[0].value}</span>
        </td>
      </tr>
      <tr>
        <td colspan="3">(c) Cleanliness :Adequate/ Inadequate
        <span style="color: blue">${page1Data.pages[5].fields[0].value}</span>
        </td>
      </tr>
      <tr>
        <td colspan="3">(d) Adjustment/free play: Correct/ Incorrect
        <span style="color: blue">${page1Data.pages[6].fields[0].value}</span>
      </td>
      </tr>
      <tr>
        <td colspan="3">(e) KPL : 
        <span style="color: blue">${page1Data.pages[7].fields[0].value}</span>
        </td>
        <td colspan="3">Tyre rotation carried out: Yes/No
        <span style="color: blue">${page1Data.pages[13].fields[0].value}</span>
        </td>
      </tr>
      <tr>
        <td colspan="3">(f) Mod done, if any with auth:
        <span style="color: blue">${page1Data.pages[8].fields[0].value}</span>
        </td>
        <td colspan="3"></td>
      </tr>
      <tr>
        <th style="text-align: center;" colspan="6"> ROAD TEST:</th>
      </tr>
      <tr>
        <td colspan="3">
            Engine : S/ UNSV 
        <span style="color: blue">${page1Data.pages[14].fields[0].value}</span>
        </td>
        <td colspan="3">
            Steering : S/ UNSV
        <span style="color: blue">${page1Data.pages[14].fields[4].value}</span>
        </td>
      </tr>
      <tr>
        <td colspan="3">
            Governor  : S/ UNSV
        <span style="color: blue">${page1Data.pages[14].fields[1].value}</span>
        </td>
        <td colspan="3">
            Brakes  : Efficient/ Inefficient
        <span style="color: blue">${page1Data.pages[14].fields[5].value}</span>
        </td>
      </tr>
      <tr>
        <td colspan="3">
            Gear changing : Easy/ Difficult
        <span style="color: blue">${page1Data.pages[14].fields[2].value}</span>
        </td>
        <td colspan="3">
            Transmission  : S/ UNSV
        <span style="color: blue">${page1Data.pages[14].fields[6].value}</span>
        </td>
      </tr>
      <tr>
        <td colspan="3">
            Synchronization  : S/ UNSV
        <span style="color: blue">${page1Data.pages[14].fields[3].value}</span>
        </td>
        <td colspan="3">
            Noises/Squeaks/leaks: Yes/ No
        <span style="color: blue">${page1Data.pages[14].fields[7].value}</span>
        </td>
      </tr>
      <tr>
        <td style="text-decoration: underline; text-align: left;" colspan="6">Inspectors Remarks : <br> &nbsp; <br> &nbsp;</td>
      </tr>
      <tr>
        <td colspan="2">
            <p>Classification:</p>
            <br>
            <br>
            <p>Date: </p>
        </td>
        <td colspan="2">
            <p>Signature:_______________________:</p>
            <br>
            <p>Name of inspector :________________</p>
            <p>Name of inspector :________________</p>
            <p>Designation : _____________________</p> 
        </td>
        <td colspan="2">
            <p>Countersigned: _______________________:</p>
            <br>
            <p>Name :________________</p>
            <p>Designation : _____________________</p> 
        </td>
      </tr>
      <tr>
        <td  colspan="6">
            <p style="text-align: left;">Action by Unit / LRW</p>
            <p style="text-align: right;">Date : <span style="">_________</span>  OC Unit      </p>
        </td>
      </tr>
      <tr>
        <td  colspan="6">
            <p style="text-align: left;">Action by Wksp</p>
            <div style="display: flex; justify-content: space-between;">
                <p>Classification After Repair</p>
                <p style="text-align: right;">Date : <span style="">_________</span>  OC Unit      </p>
            </div>
        </td>
      </tr>
    </table>

  





    <h2 style="text-decoration: underline; font-size: large; text-align: center;">PART 'A' (TATA 2.5 TON 713C & 715 TC): INITIAL INSP AND CHECKING WITH DIAGNOSTIC 
      TOOLS AND EQPT
      </h2>
    <table>
      <tr>
        <th style="text-decoration: underline; font-weight: bold;" colspan="6">Oil Level</th>
      </tr>
      <tr>
        <th>Ser</th>
        <th>Item</th>
        <th>Specification</th>
        <th>Reqd Tool</th>
        <th>Value Obtained</th>
        <th>Time duration (Min)</th>
      </tr>
`;
  page2Data.table.map((table, index) => {
    html += `
            <tr>
              <td>${table.row[0].value}</td>
              <td>${table.row[1].value}</td>
              <td>${table.row[2].value}</td>
              <td>${table.row[3].value}</td>
              <td style="color: blue">${table.row[4].value}</td>   
      `;
    if (index == 0)
      html += `<td rowspan="7" class="text-align:center">10 Min</td>`;
    html += `</tr>`;
  });

  html += `
      <tr>
        <th colspan="6">
          Note- Refer preventive maint of B Veh VW/A 029 No 8 Issue I, Apr
          2006,Table-XVI, Pages -37 to 41
        </th>
      </tr>
    </table>
    <table>
      <tr style="text-align: center">
        <th colspan="6" style="text-decoration: underline;">CHECKING WITH DIAGNOSTIC TOOLS AND TEST EQPT</th>
      </tr>
      <tr>
        <th colspan="6"></th>
      </tr>
      <tr>
        <th>Ser</th>
        <th>Item</th>
        <th>Specification</th>
        <th>Reqd Tool</th>
        <th>Value Obtained</th>
        <th>Time duration (Min)</th>
      </tr>
      `;

  page3Data.tables.forEach((table) => {
    html += `
            <tr style="text-align: center">
              <th colspan="6" style="text-align: left">${table.tableTitle}</th>
            </tr>
          `;

    table.table.map((table, index) => {
      if (index != 0) html += `<tr><th colspan="6"></th></tr>`;
      html += `
                      <tr>
                        <td>${table.row[0].value}</td>
                        <td>${table.row[1].value}</td>
                        <td>${table.row[2].value}</td>
                        <td>${table.row[3].value}</td>
                        <td style="color: blue">${table.row[4].value}</td>
                        <td>${table.row[5].value}</td>
                      </tr>  
                `;
    });
  });

  html += `
              <tr style=" text-align:center;  font-weight: bold;">
                <td colspan="5">TOTAL TIME</td>
                <td colspan="1" >01:23 Hrs</td>
              </tr>
            
            </table>
      `;



  html += `
    
    <h2
      style="text-decoration: underline; font-size: large; text-align: center"
    >
      PART 'B' (TATA 2.5 TON 713C/715TC): CHECKING BY VISUAL INSP
    </h2>
    <table>
      <tr>
        <th style="text-align: left" colspan="6">ENGINE</th>
      </tr>
      <tr>
        <th>Ser</th>
        <th>Item</th>
        <th>Visual Insp</th>
        <th>Time</th>
        <th>Satisfactory/ Unsatisfactory</th>
        <th>Remarks</th>
      </tr>


`

page4Data.tables.forEach((table) => {
    html += `
            <tr style="text-align: center">
              <th colspan="6" style="text-align: left">${table.tableTitle}</th>
            </tr>
          `;

    table.table.map((table, index) => {
      if (index != 0) html += `<tr><th colspan="6"></th></tr>`;
      html += `
                      <tr>
                        <td>${table.row[0].value}</td>
                        <td>${table.row[1].value}</td>
                        <td>${table.row[2].value}</td>
                        <td>${table.row[3].value}</td>
                        <td style="color: blue">${table.row[4].value}</td>
                        <td>${table.row[5].value}</td>
                      </tr>  
                `;
    });
  });

  html += `
              <tr style=" text-align:center;  font-weight: bold;">
                <td colspan="5">TOTAL TIME</td>
                <td colspan="1" >01:27 Hrs</td>
              </tr>
            
            </table>
      `;

  return html;
};
