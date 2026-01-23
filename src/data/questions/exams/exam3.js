// src/data/questions/exams/exam3.js

const exam3 = {
    id: "EXAM_3",
    title: "Comprehensive Exam 3",
  
    quiz: {
      title: "Comprehensive Exam 3 • Quiz",
      questions: [
        {
          id: "E3-Q01",
          question: "The profunda femoris artery is most important clinically because it:",
          options: [
            "Supplies the plantar foot",
            "Provides major collateral supply to the thigh",
            "Becomes the dorsalis pedis artery",
            "Drains into the femoral vein at the SFJ",
          ],
          answer: "Provides major collateral supply to the thigh",
        },
        {
          id: "E3-Q02",
          question: "The small saphenous vein (SSV) usually drains into the:",
          options: ["Femoral vein", "Popliteal vein", "External iliac vein", "Inferior vena cava"],
          answer: "Popliteal vein",
        },
        {
          id: "E3-Q03",
          question: "The great saphenous vein (GSV) drains into the femoral vein at the:",
          options: ["Saphenofemoral junction (SFJ)", "Popliteal fossa", "Medial malleolus", "Dorsum of the foot"],
          answer: "Saphenofemoral junction (SFJ)",
        },
        {
          id: "E3-Q04",
          question: "Normally, perforator vein flow is directed from:",
          options: ["Deep to superficial", "Superficial to deep", "Artery to vein", "Vein to artery"],
          answer: "Superficial to deep",
        },
        {
          id: "E3-Q05",
          question: "In acute limb ischemia, nerve injury may occur within approximately:",
          options: ["30 minutes", "6 hours", "24 hours", "7 days"],
          answer: "6 hours",
        },
        {
          id: "E3-Q06",
          question: "A key immediate supportive measure in acute limb ischemia is to keep the limb:",
          options: ["Elevated above the heart", "Dependent (down)", "Tightly compressed", "Immobilized in a cast"],
          answer: "Dependent (down)",
        },
        {
          id: "E3-Q07",
          question: "Myoglobinuria after revascularization is most concerning for:",
          options: ["Acute renal failure", "Asthma exacerbation", "Migraine", "Aortic rupture"],
          answer: "Acute renal failure",
        },
        {
          id: "E3-Q08",
          question: "The strongest modifiable risk factor for aneurysmal disease in this content is:",
          options: ["Smoking", "Vitamin D deficiency", "Hypothyroidism", "Seasonal allergies"],
          answer: "Smoking",
        },
        {
          id: "E3-Q09",
          question: "A popliteal artery aneurysm repair threshold (per content) is approximately:",
          options: ["≥ 1 cm", "≥ 2 cm", "≥ 4 cm", "≥ 6 cm"],
          answer: "≥ 2 cm",
        },
        {
          id: "E3-Q10",
          question: "A pseudoaneurysm is best defined as:",
          options: [
            "Dilatation involving all three vessel wall layers",
            "A breach in the arterial wall with a contained hematoma",
            "A dilated superficial vein due to reflux",
            "An abnormal artery-to-vein connection",
          ],
          answer: "A breach in the arterial wall with a contained hematoma",
        },
        {
          id: "E3-Q11",
          question: "A brachiocephalic dialysis AVF is typically created at the:",
          options: ["Wrist", "Elbow", "Upper arm only", "Groin"],
          answer: "Elbow",
        },
        {
          id: "E3-Q12",
          question: "A brachiobasilic dialysis AVF is typically created in the:",
          options: ["Wrist", "Elbow", "Upper arm", "Ankle"],
          answer: "Upper arm",
        },
        {
          id: "E3-Q13",
          question: "SFJ location (per content) is approximately:",
          options: [
            "4 cm lateral and 4 cm below the pubic tubercle",
            "Behind the medial malleolus",
            "Deep in the popliteal fossa",
            "Dorsum of foot lateral to EHL tendon",
          ],
          answer: "4 cm lateral and 4 cm below the pubic tubercle",
        },
        {
          id: "E3-Q14",
          question: "In suspected DVT, Homans’ sign is best described as:",
          options: ["Highly reliable", "Not reliable", "Diagnostic without imaging", "Specific for AAA"],
          answer: "Not reliable",
        },
        {
          id: "E3-Q15",
          question: "A classic indication for thrombophilia testing includes:",
          options: ["Any provoked DVT after surgery", "Idiopathic VTE at age < 50", "Any varicose veins", "Any AAA"],
          answer: "Idiopathic VTE at age < 50",
        },
      ],
    },
  
    cases: [
      {
        id: "E3-CASE-1",
        title: "Case 1",
        vignette:
          "A 69-year-old smoker has a pulsatile mass in the popliteal fossa. He reports intermittent foot numbness and brief episodes of toe discoloration. Distal pulses are reduced on the affected side.",
        questions: [
          {
            id: "E3-C1-Q1",
            question: "Most likely diagnosis?",
            options: ["Popliteal artery aneurysm", "Varicose veins", "DVT", "CLTI due to infection only"],
            answer: "Popliteal artery aneurysm",
          },
          {
            id: "E3-C1-Q2",
            question: "This condition commonly presents with:",
            options: ["Rupture most commonly", "Ischemia from thrombosis/embolization", "Hemoptysis", "Eczema only"],
            answer: "Ischemia from thrombosis/embolization",
          },
          {
            id: "E3-C1-Q3",
            question: "Recommended additional screening after diagnosing a popliteal aneurysm is:",
            options: ["Screen for AAA", "D-dimer", "Perthes test", "Trendelenburg test"],
            answer: "Screen for AAA",
          },
        ],
      },
  
      {
        id: "E3-CASE-2",
        title: "Case 2",
        vignette:
          "A patient undergoes revascularization after prolonged lower-limb ischemia. Several hours later, the leg becomes increasingly painful and tense with pain on passive stretch. Urine becomes dark.",
        questions: [
          {
            id: "E3-C2-Q1",
            question: "Most likely complication in the limb?",
            options: ["Compartment syndrome", "Cellulitis", "Varicose vein reflux", "Superficial thrombophlebitis"],
            answer: "Compartment syndrome",
          },
          {
            id: "E3-C2-Q2",
            question: "Most appropriate immediate management for the limb?",
            options: ["Urgent fasciotomy", "Compression stockings", "Sclerotherapy", "Observation only"],
            answer: "Urgent fasciotomy",
          },
          {
            id: "E3-C2-Q3",
            question: "Dark urine in this context is most concerning for:",
            options: ["Myoglobinuria leading to acute renal failure", "Hematuria from kidney stones", "UTI only", "AAA rupture"],
            answer: "Myoglobinuria leading to acute renal failure",
          },
        ],
      },
  
      {
        id: "E3-CASE-3",
        title: "Case 3",
        vignette:
          "A 45-year-old woman has long-standing aching heavy legs worse after standing. Tortuous veins are visible along the medial leg. She has ankle eczema and mild edema.",
        questions: [
          {
            id: "E3-C3-Q1",
            question: "Most likely underlying mechanism?",
            options: [
              "Valvular incompetence causing reflux and venous hypertension",
              "Acute arterial embolism",
              "Primary lymphatic obstruction",
              "Aneurysm rupture",
            ],
            answer: "Valvular incompetence causing reflux and venous hypertension",
          },
          {
            id: "E3-C3-Q2",
            question: "Best investigation for mapping disease before intervention is:",
            options: ["Duplex ultrasonography", "D-dimer", "CT head", "Chest X-ray"],
            answer: "Duplex ultrasonography",
          },
          {
            id: "E3-C3-Q3",
            question: "The main hemodynamic problem in varicose veins is most often:",
            options: ["Reflux at junctions/perforators", "Weak bone support", "Lymphatic failure only", "Arterial spasm"],
            answer: "Reflux at junctions/perforators",
          },
        ],
      },
  
      {
        id: "E3-CASE-4",
        title: "Case 4",
        vignette:
          "A 42-year-old man has recurrent unprovoked venous thromboembolism. He is otherwise healthy and is currently not on anticoagulation. Family history suggests similar events in a first-degree relative.",
        questions: [
          {
            id: "E3-C4-Q1",
            question: "Most appropriate next evaluation consideration is:",
            options: ["Thrombophilia testing", "AAA screening only", "Sclerotherapy", "Trendelenburg procedure"],
            answer: "Thrombophilia testing",
          },
          {
            id: "E3-C4-Q2",
            question: "An example of thrombophilia testing includes:",
            options: [
              "Protein C/S and antithrombin III",
              "Serum amylase",
              "HbA1c only",
              "Troponin",
            ],
            answer: "Protein C/S and antithrombin III",
          },
          {
            id: "E3-C4-Q3",
            question: "Best timing principle for thrombophilia testing (per content) is:",
            options: [
              "Do before anticoagulation if possible",
              "Only after 12 months of anticoagulation",
              "Only after surgery",
              "Only when D-dimer is negative",
            ],
            answer: "Do before anticoagulation if possible",
          },
        ],
      },
  
      {
        id: "E3-CASE-5",
        title: "Case 5",
        vignette:
          "A patient with a hemodialysis AVF develops cold hand pain and paresthesia during dialysis sessions. The hand is cool and capillary refill is delayed. Symptoms improve when the AVF is manually compressed.",
        questions: [
          {
            id: "E3-C5-Q1",
            question: "Most likely diagnosis?",
            options: ["Steal syndrome", "DVT", "CLTI", "AAA"],
            answer: "Steal syndrome",
          },
          {
            id: "E3-C5-Q2",
            question: "A flow-reduction management option for dialysis AVF steal is:",
            options: ["Banding", "Compression stockings", "Sclerotherapy", "Trendelenburg test"],
            answer: "Banding",
          },
          {
            id: "E3-C5-Q3",
            question: "Steal syndrome with tissue loss requires:",
            options: ["Urgent intervention", "Outpatient reassurance only", "No vascular input", "Observation for 6 months"],
            answer: "Urgent intervention",
          },
        ],
      },
    ],
  };
  
  export default exam3;
  