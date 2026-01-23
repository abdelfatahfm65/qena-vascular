// src/data/questions/exams/exam1.js

const exam1 = {
    id: "EXAM_1",
    title: "Comprehensive Exam 1",
  
    quiz: {
      title: "Comprehensive Exam 1 • Quiz",
      questions: [
        {
          id: "E1-Q01",
          question: "Vascular pathology is best explained by:",
          options: [
            "Infection + fever + rash",
            "Altered flow + vessel wall change + tissue consequence",
            "BP + HR + RR",
            "Genetics + allergy + edema",
          ],
          answer: "Altered flow + vessel wall change + tissue consequence",
        },
        {
          id: "E1-Q02",
          question: "The tunica intima injury predisposes to:",
          options: [
            "Valve reflux",
            "Platelet adhesion and thrombosis",
            "Lymphatic obstruction",
            "Aneurysm rupture directly",
          ],
          answer: "Platelet adhesion and thrombosis",
        },
        {
          id: "E1-Q03",
          question: "Most common cause of ALI is:",
          options: ["Venous reflux", "Arterial embolism", "Cellulitis", "Lymphedema"],
          answer: "Arterial embolism",
        },
        {
          id: "E1-Q04",
          question: "Grade IIb ALI requires:",
          options: ["Observation", "Immediate revascularization", "Compression therapy", "Primary amputation"],
          answer: "Immediate revascularization",
        },
        {
          id: "E1-Q05",
          question: "CLTI definition includes symptoms lasting typically:",
          options: ["< 6 hours", "> 2 weeks", "1–2 days", "1 hour"],
          answer: "> 2 weeks",
        },
        {
          id: "E1-Q06",
          question: "ABI in diabetics may be falsely elevated due to:",
          options: ["Anemia", "Calcification", "Infection only", "Dehydration"],
          answer: "Calcification",
        },
        {
          id: "E1-Q07",
          question: "A true aneurysm involves:",
          options: ["Only intima", "All 3 layers", "A contained hematoma outside wall", "Veins only"],
          answer: "All 3 layers",
        },
        {
          id: "E1-Q08",
          question: "Popliteal artery aneurysm is most often the:",
          options: [
            "Most common overall aneurysm",
            "Most common peripheral aneurysm",
            "Always traumatic",
            "Always ruptures first",
          ],
          answer: "Most common peripheral aneurysm",
        },
        {
          id: "E1-Q09",
          question: "Continuous machinery bruit is most suggestive of:",
          options: ["DVT", "AVF", "CLTI", "AAA"],
          answer: "AVF",
        },
        {
          id: "E1-Q10",
          question: "In vascular trauma, any hard sign mandates:",
          options: ["CTA first", "Immediate OR without imaging", "Duplex only", "Discharge"],
          answer: "Immediate OR without imaging",
        },
        {
          id: "E1-Q11",
          question: "ABI < 0.9 after extremity trauma suggests:",
          options: ["Normal", "Vascular injury", "Venous reflux", "Heart failure"],
          answer: "Vascular injury",
        },
        {
          id: "E1-Q12",
          question: "Varicose veins result primarily from:",
          options: [
            "Increased arterial inflow",
            "Valvular incompetence → ↑ superficial pressure",
            "Capillary rupture",
            "Hyperkalemia",
          ],
          answer: "Valvular incompetence → ↑ superficial pressure",
        },
        {
          id: "E1-Q13",
          question: "Duplex ultrasound is gold standard mapping for:",
          options: ["Varicose veins", "Cataract", "Asthma", "Migraine"],
          answer: "Varicose veins",
        },
        {
          id: "E1-Q14",
          question: "Virchow triad includes all EXCEPT:",
          options: ["Stasis", "Hypercoagulability", "Vascular injury", "Hypoglycemia"],
          answer: "Hypoglycemia",
        },
        {
          id: "E1-Q15",
          question: "D-dimer is most useful to:",
          options: [
            "Confirm DVT always",
            "Help rule out DVT when suspicion is low",
            "Replace all imaging always",
            "Diagnose AAA",
          ],
          answer: "Help rule out DVT when suspicion is low",
        },
      ],
    },
  
    cases: [
        {
          id: "E1-CASE-1",
          title: "Case 1",
          vignette:
            "A 67-year-old man with atrial fibrillation presents with sudden severe left leg pain for 2 hours. The limb is pale and cold with absent dorsalis pedis and posterior tibial pulses. He reports numbness in the foot and has mild weakness of toe movement.",
          questions: [
            {
              id: "E1-C1-Q1",
              question: "What is the most appropriate immediate management step?",
              options: [
                "IV unfractionated heparin",
                "Compression stockings",
                "Aspirin only and observe",
                "Schedule elective duplex next week",
              ],
              answer: "IV unfractionated heparin",
            },
            {
              id: "E1-C1-Q2",
              question: "This presentation most closely corresponds to which Rutherford grade?",
              options: ["Grade I (Viable)", "Grade IIa (Marginally threatened)", "Grade IIb (Immediately threatened)", "Grade III (Irreversible)"],
              answer: "Grade IIb (Immediately threatened)",
            },
            {
              id: "E1-C1-Q3",
              question: "Most likely definitive treatment given the etiology and limb status?",
              options: [
                "Surgical embolectomy using a Fogarty catheter",
                "Primary amputation",
                "Sclerotherapy",
                "Trendelenburg procedure",
              ],
              answer: "Surgical embolectomy using a Fogarty catheter",
            },
          ],
        },
      
        {
          id: "E1-CASE-2",
          title: "Case 2",
          vignette:
            "A 58-year-old man with long-standing diabetes and chronic kidney disease has ischemic rest pain in the forefoot worse at night, relieved by dangling the leg. He has a non-healing toe ulcer for 3 weeks. ABI is 1.2.",
          questions: [
            {
              id: "E1-C2-Q1",
              question: "Which bedside test is most reliable to assess perfusion in this patient?",
              options: ["ABI", "Toe pressure / TBI", "Homans’ sign", "Tap test"],
              answer: "Toe pressure / TBI",
            },
            {
              id: "E1-C2-Q2",
              question: "Best overall management framework for this condition?",
              options: [
                "Best medical therapy + revascularization (when feasible) + wound/infection care",
                "Antibiotics only",
                "Compression stockings only",
                "Observation only with repeat ABI",
              ],
              answer: "Best medical therapy + revascularization (when feasible) + wound/infection care",
            },
            {
              id: "E1-C2-Q3",
              question: "If the ulcer becomes wet gangrene with spreading infection, what is the correct urgency?",
              options: [
                "Outpatient follow-up",
                "Emergency (infection + ischemia is limb-threatening)",
                "No vascular input needed",
                "Compression therapy first",
              ],
              answer: "Emergency (infection + ischemia is limb-threatening)",
            },
          ],
        },
      
        {
          id: "E1-CASE-3",
          title: "Case 3",
          vignette:
            "A 70-year-old man with a heavy smoking history is found incidentally to have an infrarenal abdominal aortic aneurysm measuring 5.7 cm on ultrasound. He is hemodynamically stable and asymptomatic.",
          questions: [
            {
              id: "E1-C3-Q1",
              question: "What is the most appropriate management?",
              options: ["Reassurance only with no follow-up", "Repair is indicated", "Compression therapy", "IV heparin infusion"],
              answer: "Repair is indicated",
            },
            {
              id: "E1-C3-Q2",
              question: "Best imaging study for operative planning?",
              options: ["D-dimer", "CT angiography (CTA)", "Plain X-ray", "ECG only"],
              answer: "CT angiography (CTA)",
            },
            {
              id: "E1-C3-Q3",
              question: "A complication specifically associated with endovascular AAA repair (EVAR) is:",
              options: ["Endoleak", "Pulmonary embolism from DVT", "Varicose vein reflux", "Steal syndrome"],
              answer: "Endoleak",
            },
          ],
        },
      
        {
          id: "E1-CASE-4",
          title: "Case 4",
          vignette:
            "A 24-year-old man sustains a posterior knee dislocation after a motor vehicle collision. The leg is swollen and painful. Distal pulses are present but asymmetric compared to the other side. There is no active pulsatile bleeding and no expanding hematoma. He is hemodynamically stable.",
          questions: [
            {
              id: "E1-C4-Q1",
              question: "Which statement is most accurate about popliteal artery injury in knee dislocation?",
              options: [
                "It is impossible if pulses are present",
                "It can be occult and requires mandatory vascular assessment",
                "It is always a venous injury only",
                "It is always immediately obvious with massive bleeding",
              ],
              answer: "It can be occult and requires mandatory vascular assessment",
            },
            {
              id: "E1-C4-Q2",
              question: "Best next investigation in a stable patient without hard signs?",
              options: ["Immediate OR exploration", "CT angiography (CTA)", "D-dimer", "Trendelenburg test"],
              answer: "CT angiography (CTA)",
            },
            {
              id: "E1-C4-Q3",
              question: "After successful revascularization, fasciotomy should be strongly considered when ischemia time is:",
              options: ["< 1 hour", "> 6 hours", "Exactly 30 minutes", "Only in varicose veins"],
              answer: "> 6 hours",
            },
          ],
        },
      
        {
          id: "E1-CASE-5",
          title: "Case 5",
          vignette:
            "A 52-year-old woman is 5 days post major pelvic surgery and presents with painful swelling of the entire left leg up to the groin. The leg is warm with pitting edema. She has no chest pain or shortness of breath.",
          questions: [
            {
              id: "E1-C5-Q1",
              question: "Most likely diagnosis?",
              options: ["Distal DVT", "Proximal DVT", "Chronic limb-threatening ischemia", "Varicose veins only"],
              answer: "Proximal DVT",
            },
            {
              id: "E1-C5-Q2",
              question: "Most serious complication of this condition?",
              options: ["Pulmonary embolism (PE)", "Eczema", "Endoleak", "Steal syndrome"],
              answer: "Pulmonary embolism (PE)",
            },
            {
              id: "E1-C5-Q3",
              question: "Duplex ultrasound for DVT is less reliable for:",
              options: ["Proximal DVT", "Distal DVT", "All DVT equally", "None"],
              answer: "Distal DVT",
            },
          ],
        },
      ],      
  };
  
  export default exam1;
  