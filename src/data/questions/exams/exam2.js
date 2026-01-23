// src/data/questions/exams/exam2.js

const exam2 = {
    id: "EXAM_2",
    title: "Comprehensive Exam 2",
  
    quiz: {
      title: "Comprehensive Exam 2 • Quiz",
      questions: [
        {
          id: "E2-Q01",
          question: "Aorto-iliac disease commonly causes:",
          options: [
            "Foot drop only",
            "Buttock/thigh claudication + weak femoral pulses",
            "Hand ischemia",
            "Venous eczema only",
          ],
          answer: "Buttock/thigh claudication + weak femoral pulses",
        },
        {
          id: "E2-Q02",
          question: "Anterior tibial artery continues as:",
          options: ["Posterior tibial", "Dorsalis pedis", "Peroneal", "Profunda femoris"],
          answer: "Dorsalis pedis",
        },
        {
          id: "E2-Q03",
          question: "Posterior tibial pulse is palpated:",
          options: [
            "Deep in the popliteal fossa",
            "Behind the medial malleolus",
            "Dorsum of the foot lateral to EHL tendon",
            "Femoral triangle",
          ],
          answer: "Behind the medial malleolus",
        },
        {
          id: "E2-Q04",
          question: "Dorsalis pedis pulse is palpated:",
          options: [
            "Behind the medial malleolus",
            "Dorsum of the foot, lateral to the EHL tendon",
            "Deep in the popliteal fossa",
            "Medial thigh near the SFJ",
          ],
          answer: "Dorsum of the foot, lateral to the EHL tendon",
        },
        {
          id: "E2-Q05",
          question: "Paralysis in acute limb ischemia (ALI) is:",
          options: ["An early reassuring sign", "A late ominous sign", "Unrelated to ALI", "A sign of venous reflux"],
          answer: "A late ominous sign",
        },
        {
          id: "E2-Q06",
          question: "If the limb is threatened in ALI, you should:",
          options: [
            "Delay treatment for imaging",
            "Not delay treatment for imaging",
            "Do duplex next week",
            "Treat with compression first",
          ],
          answer: "Not delay treatment for imaging",
        },
        {
          id: "E2-Q07",
          question: "CT angiography (CTA) in ALI is first-line if:",
          options: [
            "The limb is viable",
            "The limb is immediately threatened (IIb)",
            "The limb is irreversible (III)",
            "Only venous disease is suspected",
          ],
          answer: "The limb is viable",
        },
        {
          id: "E2-Q08",
          question: "In diabetics, ABI may be falsely elevated due to:",
          options: ["Anemia", "Arterial calcification", "Infection only", "Dehydration"],
          answer: "Arterial calcification",
        },
        {
          id: "E2-Q09",
          question: "More reliable bedside test for ischemia in diabetics is:",
          options: ["ABI only", "Toe pressure / TBI", "Tap test", "Homans’ sign"],
          answer: "Toe pressure / TBI",
        },
        {
          id: "E2-Q10",
          question: "A pseudoaneurysm is best described as:",
          options: [
            "All vessel wall layers dilated",
            "Breach in the arterial wall with a contained hematoma",
            "Valve failure causing reflux",
            "A condition limited to veins",
          ],
          answer: "Breach in the arterial wall with a contained hematoma",
        },
        {
          id: "E2-Q11",
          question: "Screening for abdominal aortic aneurysm (AAA) is recommended for:",
          options: ["Men >65 with smoking history", "All children", "Women <30", "Anyone with headache"],
          answer: "Men >65 with smoking history",
        },
        {
          id: "E2-Q12",
          question: "A continuous machinery bruit is most suggestive of:",
          options: ["DVT", "AVF", "CLTI", "AAA"],
          answer: "AVF",
        },
        {
          id: "E2-Q13",
          question: "Dialysis AVF “radiocephalic” is typically created at the:",
          options: ["Wrist", "Elbow", "Upper arm", "Groin"],
          answer: "Wrist",
        },
        {
          id: "E2-Q14",
          question: "Hard signs of vascular injury include:",
          options: ["Stable hematoma", "Proximity wound", "Expanding/pulsatile hematoma", "Mild bruising"],
          answer: "Expanding/pulsatile hematoma",
        },
        {
          id: "E2-Q15",
          question: "The most serious complication of DVT is:",
          options: ["Pulmonary embolism (PE)", "Eczema", "AAA rupture", "Steal syndrome"],
          answer: "Pulmonary embolism (PE)",
        },
      ],
    },
  
    cases: [
      {
        id: "E2-CASE-1",
        title: "Case 1",
        vignette:
          "A 63-year-old man with hypertension and hyperlipidemia reports exertional buttock and thigh pain after walking 1 block that resolves with rest. On exam, femoral pulses are diminished bilaterally. Distal pulses are also reduced.",
        questions: [
          {
            id: "E2-C1-Q1",
            question: "The most likely anatomic level of disease is:",
            options: [
              "Aorto-iliac segment",
              "Femoropopliteal segment",
              "Infrapopliteal/tibial segment",
              "Upper-limb arterial tree",
            ],
            answer: "Aorto-iliac segment",
          },
          {
            id: "E2-C1-Q2",
            question: "The key exam finding that best supports reduced limb inflow is:",
            options: [
              "Weak femoral pulses",
              "Auscultatory wheeze",
              "Positive Homans’ sign",
              "Hyperpigmentation around the ankle",
            ],
            answer: "Weak femoral pulses",
          },
          {
            id: "E2-C1-Q3",
            question: "Best initial imaging study for mapping inflow/outflow disease in a stable patient is:",
            options: ["Duplex ultrasound", "Chest X-ray", "D-dimer", "ECG only"],
            answer: "Duplex ultrasound",
          },
        ],
      },
  
      {
        id: "E2-CASE-2",
        title: "Case 2",
        vignette:
          "A 59-year-old diabetic man with a plantar foot ulcer has an ABI of 1.3. The foot is cool with poor capillary refill. Dorsalis pedis pulse is difficult to palpate.",
        questions: [
          {
            id: "E2-C2-Q1",
            question: "The most likely reason the ABI is falsely reassuring is:",
            options: [
              "Medial arterial calcification causing non-compressible vessels",
              "Acute arterial embolism",
              "Severe anemia",
              "Venous reflux at the saphenofemoral junction",
            ],
            answer: "Medial arterial calcification causing non-compressible vessels",
          },
          {
            id: "E2-C2-Q2",
            question: "Which bedside test is preferred to assess perfusion in this setting?",
            options: ["Toe pressure / TBI", "Homans’ sign", "Tap test", "Perthes test"],
            answer: "Toe pressure / TBI",
          },
          {
            id: "E2-C2-Q3",
            question: "The primary limb-salvage goal of revascularization in CLTI is to:",
            options: [
              "Restore straight-line flow to the foot when possible",
              "Treat venous reflux only",
              "Lower blood pressure only",
              "Avoid wound care until the ulcer heals spontaneously",
            ],
            answer: "Restore straight-line flow to the foot when possible",
          },
        ],
      },
  
      {
        id: "E2-CASE-3",
        title: "Case 3",
        vignette:
          "A 46-year-old woman develops a pulsatile groin mass 1 week after femoral artery catheterization. On exam there is a palpable thrill and a continuous machinery bruit over the mass. The leg is swollen with prominent superficial veins.",
        questions: [
          {
            id: "E2-C3-Q1",
            question: "Most likely diagnosis?",
            options: [
              "Arteriovenous fistula (AVF)",
              "Deep vein thrombosis",
              "Chronic venous insufficiency",
              "Acute limb ischemia",
            ],
            answer: "Arteriovenous fistula (AVF)",
          },
          {
            id: "E2-C3-Q2",
            question: "First-line investigation to confirm and assess this condition is:",
            options: ["Duplex ultrasound", "D-dimer", "Plain X-ray", "ABG analysis"],
            answer: "Duplex ultrasound",
          },
          {
            id: "E2-C3-Q3",
            question: "A major systemic complication of a large untreated AVF is:",
            options: [
              "High-output cardiac failure",
              "Low-output cardiac failure due to dehydration",
              "Pulmonary fibrosis",
              "Hypertrophic pyloric stenosis",
            ],
            answer: "High-output cardiac failure",
          },
        ],
      },
  
      {
        id: "E2-CASE-4",
        title: "Case 4",
        vignette:
          "A 28-year-old man sustains a stab wound to the upper arm. He is hemodynamically stable. The wound is near the brachial artery. There is a stable hematoma and diminished radial pulse compared to the other side. No active pulsatile bleeding is seen.",
        questions: [
          {
            id: "E2-C4-Q1",
            question: "This scenario represents which category of vascular injury signs?",
            options: ["Hard signs", "Soft signs", "No concerning signs", "Venous reflux signs"],
            answer: "Soft signs",
          },
          {
            id: "E2-C4-Q2",
            question: "Best next step in evaluation in a stable patient without hard signs is:",
            options: [
              "CT angiography (CTA)",
              "Immediate operative exploration without imaging",
              "Trendelenburg test",
              "Sclerotherapy",
            ],
            answer: "CT angiography (CTA)",
          },
          {
            id: "E2-C4-Q3",
            question: "A finding that would instead mandate immediate surgery without imaging is:",
            options: [
              "Expanding/pulsatile hematoma",
              "Proximity to a major vessel",
              "History of bleeding now controlled",
              "Mild bruising only",
            ],
            answer: "Expanding/pulsatile hematoma",
          },
        ],
      },
  
      {
        id: "E2-CASE-5",
        title: "Case 5",
        vignette:
          "A 36-year-old postpartum woman presents with unilateral calf swelling and tenderness. She has no dyspnea. Clinical suspicion for DVT is low after assessment. A D-dimer test is negative.",
        questions: [
          {
            id: "E2-C5-Q1",
            question: "Best interpretation of a negative D-dimer in this setting is:",
            options: [
              "It helps rule out DVT when suspicion is low",
              "It confirms DVT",
              "It mandates thrombolysis",
              "It indicates acute limb ischemia",
            ],
            answer: "It helps rule out DVT when suspicion is low",
          },
          {
            id: "E2-C5-Q2",
            question: "Virchow triad includes all of the following EXCEPT:",
            options: ["Stasis", "Hypercoagulability", "Vascular injury", "Hypoglycemia"],
            answer: "Hypoglycemia",
          },
          {
            id: "E2-C5-Q3",
            question: "Which clinical feature most strongly suggests proximal rather than distal DVT?",
            options: [
              "Swelling up to the groin",
              "Swelling limited below the knee",
              "Normal skin temperature",
              "Ankle claudication on exertion",
            ],
            answer: "Swelling up to the groin",
          },
        ],
      },
    ],
  };
  
  export default exam2;
  