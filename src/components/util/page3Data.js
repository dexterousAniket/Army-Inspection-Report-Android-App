export default page3Data = {
    tables: [
      {
        tableTitle: "Engine",
        table: [
          {
            rowTitle: "Running",
            row: [
              { title: "Ser", value: "1" },
              { title: "Item", value: "Running" },
              { title: "Specifiaction", value: "Idling RPM 600+/- 50" },
              {
                title: "Reqd Tool",
                value: "Digital Tachometer",
              },
              { title: "Value Obtained", value: "", inputType: "text" },
              { title: "Time duration (Min)", value: "02 Min" },
              {
                title: "Actual Time Taken (Min)",
                value: "",
                inputType: "numeric",
              },
            ],
          },
  
          {
            rowTitle: "Oil Pump Pressure",
            row: [
              { title: "Ser", value: "2" },
              { title: "Item", value: "Oil Pump Pressure" },
              {
                title: "Specifiaction",
                value: "2.07 bar at max RPM (2800)",
              },
              {
                title: "Reqd Tool",
                value: "Oil pressure gauge",
              },
              { title: "Value Obtained", value: "", inputType: "text" },
              { title: "Time duration (Min)", value: "02 Min" },
              {
                title: "Actual Time Taken (Min)",
                value: "",
                inputType: "numeric",
              },
            ],
          },
        ],
      },
  
      {
        tableTitle: "COOLING SYSTEM",
        table: [
          {
            rowTitle: "Radiator cap & PVRV",
            row: [
              { title: "Ser", value: "3" },
              { title: "Item", value: "Radiator cap & PVRV" },
              {
                title: "Specifiaction",
                value:
                  "Activation at 0.5 kg/cm2\n(0.5 kg/cm2 to be maint in the cooling sys)",
              },
              {
                title: "Reqd Tool",
                value: "1.Check pr using cooling system pr kit",
              },
              { title: "Value Obtained", value: "", inputType: "text" },
              { title: "Time duration (Min)", value: "04 Min" },
              {
                title: "Actual Time Taken (Min)",
                value: "",
                inputType: "numeric",
              },
            ],
          },
  
          {
            rowTitle: "Temp gauge/Warning",
            row: [
              { title: "Ser", value: "4" },
              { title: "Item", value: "Temp gauge/Warning" },
              {
                title: "Specifiaction",
                value: "Maximum Eng temperature - 120° at 2500 RPM (Red/Green)",
              },
              {
                title: "Reqd Tool",
                value: "Temp gauge",
              },
              { title: "Value Obtained", value: "", inputType: "text" },
              { title: "Time duration (Min)", value: "04 Min" },
              {
                title: "Actual Time Taken (Min)",
                value: "",
                inputType: "numeric",
              },
            ],
          },
        ],
      },
  
      {
        tableTitle: "IGNITION/ELECT",
        table: [
          {
            rowTitle: "Battery",
            row: [
              { title: "Ser", value: "5" },
              { title: "Item", value: "Battery" },
              {
                title: "Specifiaction",
                value: "Bty Voltage 12V 180 AH Specific gravity-1.21to 1.28",
              },
              {
                title: "Reqd Tool",
                value: "Multi meter Hydrometer/ Refractometer",
              },
              { title: "Value Obtained", value: "", inputType: "text" },
              { title: "Time duration (Min)", value: "05 Min" },
              {
                title: "Actual Time Taken (Min)",
                value: "",
                inputType: "numeric",
              },
            ],
          },
  
          {
            rowTitle: "Dynamo/ Alternator",
            row: [
              { title: "Ser", value: "6" },
              { title: "Item", value: "Dynamo/ Alternator" },
              {
                title: "Specifiaction",
                value: "Regulator voltage - 13 to 14.5 V",
              },
              {
                title: "Reqd Tool",
                value: "Digital multi meter",
              },
              { title: "Value Obtained", value: "", inputType: "text" },
              { title: "Time duration (Min)", value: "02 Min" },
              {
                title: "Actual Time Taken (Min)",
                value: "",
                inputType: "numeric",
              },
            ],
          },
  
          {
            rowTitle: "Head Light",
            row: [
              { title: "Ser", value: "7" },
              { title: "Item", value: "Head Light" },
              {
                title: "Specifiaction",
                value:
                  "Marking line should be dark and 5 mm thick with sharp feature",
              },
              {
                title: "Reqd Tool",
                value: "Head light Beam Aligner",
              },
              { title: "Value Obtained", value: "", inputType: "text" },
              { title: "Time duration (Min)", value: "02 Min" },
              {
                title: "Actual Time Taken (Min)",
                value: "",
                inputType: "numeric",
              },
            ],
          },
        ],
      },
  
      {
        tableTitle: "WHEELS/TYRE",
        table: [
          {
            rowTitle: "Tyre tread depth",
            row: [
              { title: "Ser", value: "8" },
              { title: "Item", value: "Tyre tread depth" },
              { title: "Specifiaction", value: "Max 1.6 mm" },
              {
                title: "Reqd Tool",
                value: "Vernier caliper",
              },
              { title: "Value Obtained", value: "", inputType: "text" },
              { title: "Time duration (Min)", value: "01 Min" },
              {
                title: "Actual Time Taken (Min)",
                value: "",
                inputType: "numeric",
              },
            ],
          },
  
          {
            rowTitle: "Tyre  Pressure Front/ Rear",
            row: [
              { title: "Ser", value: "9" },
              { title: "Item", value: "Tyre  Pressure Front/ Rear" },
              {
                title: "Specifiaction",
                value: "65 PSI",
              },
              {
                title: "Reqd Tool",
                value: "Tyre pressure Gauge",
              },
              { title: "Value Obtained", value: "", inputType: "text" },
              { title: "Time duration (Min)", value: "02 Min" },
              {
                title: "Actual Time Taken (Min)",
                value: "",
                inputType: "numeric",
              },
            ],
          },
        ],
      },
  
      {
        tableTitle: "EXHAUST SYSTEM",
        table: [
          {
            rowTitle: "Emission",
            row: [
              { title: "Ser", value: "10" },
              { title: "Item", value: "Emission" },
              {
                title: "Specifiaction",
                value:
                  "Pre BS-IV Norms Light Absorption Coefficient(1/Meter): 2.45 \nHSU: 65 \nAs Per BS-IV Norms Light Absorption Coefficient(1/Meter):1.62 \nHSU: 50",
              },
              {
                title: "Reqd Tool",
                value: "Diesel smoke meter",
              },
              { title: "Value Obtained", value: "", inputType: "text" },
              { title: "Time duration (Min)", value: "30 Min" },
              {
                title: "Actual Time Taken (Min)",
                value: "",
                inputType: "numeric",
              },
            ],
          },
        ],
      },
  
      {
        tableTitle: "STEERING GEOMETRY",
        table: [
          {
            rowTitle: "Caster, camber, Toe in",
            row: [
              { title: "Ser", value: "11" },
              { title: "Item", value: "Caster, camber, Toe in" },
              {
                title: "Specifiaction",
                value:
                  "Caster - 1°±30' + ve \nCamber - 1° + ve \nToe In - 0 to 3 mm \nKPI - 90 -30'",
              },
              {
                title: "Reqd Tool",
                value: "Computerized wheel aligner",
              },
              { title: "Value Obtained", value: "", inputType: "text" },
              { title: "Time duration (Min)", value: "10 Min" },
              {
                title: "Actual Time Taken (Min)",
                value: "",
                inputType: "numeric",
              },
            ],
          },
  
          {
            rowTitle: "Tie rod ball joint",
            row: [
              { title: "Ser", value: "12" },
              { title: "Item", value: "Tie rod ball joint" },
              {
                title: "Specifiaction",
                value: "Tightening torque \n14-18  mkg",
              },
              {
                title: "Reqd Tool",
                value: " ",
              },
              { title: "Value Obtained", value: "", inputType: "text" },
              { title: "Time duration (Min)", value: "02 Min" },
              {
                title: "Actual Time Taken (Min)",
                value: "",
                inputType: "numeric",
              },
            ],
          },
        ],
      },
  
      {
        tableTitle: "GEAR BOX",
        table: [
          {
            rowTitle: "Mounting",
            row: [
              { title: "Ser", value: "13" },
              { title: "Item", value: "Mounting" },
              { title: "Specifiaction", value: "Tightening torque \n9 Kgm" },
              {
                title: "Reqd Tool",
                value: " ",
              },
              { title: "Value Obtained", value: "", inputType: "text" },
              { title: "Time duration (Min)", value: " " },
              {
                title: "Actual Time Taken (Min)",
                value: "",
                inputType: "numeric",
              },
            ],
          },
  
          {
            rowTitle: "Gear shifting link",
            row: [
              { title: "Ser", value: "14" },
              { title: "Item", value: "Gear shifting link" },
              {
                title: "Specifiaction",
                value: "Tightening torque \n9 Kgm",
              },
              {
                title: "Reqd Tool",
                value: " ",
              },
              { title: "Value Obtained", value: "", inputType: "text" },
              { title: "Time duration (Min)", value: " " },
              {
                title: "Actual Time Taken (Min)",
                value: "",
                inputType: "numeric",
              },
            ],
          },
        ],
      },
  
      {
        tableTitle: "BRAKES",
        table: [
          {
            rowTitle: "Brake fluid level",
            row: [
              { title: "Ser", value: "15" },
              { title: "Item", value: "Brake fluid level" },
              {
                title: "Specifiaction",
                value: "Brake fluid - DOT 3 \nCapacity – 1.5 Ltr",
              },
              {
                title: "Reqd Tool",
                value:
                  "Brake oil quality tester to check quality and moisture content",
              },
              { title: "Value Obtained", value: "", inputType: "text" },
              { title: "Time duration (Min)", value: "02 Min" },
              {
                title: "Actual Time Taken (Min)",
                value: "",
                inputType: "numeric",
              },
            ],
          },
  
          {
            rowTitle: "Brake performance",
            row: [
              { title: "Ser", value: "16" },
              { title: "Item", value: "Brake performance" },
              {
                title: "Specifiaction",
                value:
                  "Perfect - 90% \nExcellent - 77% \nGood - 70% \nFair - 60% \nPoor - 50% \nBad - 37% \nVery bad - 30%",
              },
              {
                title: "Reqd Tool",
                value: "Brake efficiency tester",
              },
              { title: "Value Obtained", value: "", inputType: "text" },
              { title: "Time duration (Min)", value: "05 Min" },
              {
                title: "Actual Time Taken (Min)",
                value: "",
                inputType: "numeric",
              },
            ],
          },
        ],
      },
    ],
    totalTime: "83 Min",
    actualTime: "",
  };