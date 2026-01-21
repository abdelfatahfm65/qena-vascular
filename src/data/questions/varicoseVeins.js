const varicoseVeinsQuestions = [
    // -------------------------
    // BASICS / DEFINITION
    // -------------------------
    {
      question: "Varicose veins are best defined as:",
      options: [
        "Dilated arteries in the legs due to atherosclerosis",
        "Long, tortuous, dilated veins of the superficial venous system",
        "Deep venous thrombosis in the calf veins",
        "Inflammation of lymphatic channels",
      ],
      answer: 1,
    },
    {
      question: "Normal venous flow in the leg is mainly from:",
      options: [
        "Deep → superficial",
        "Superficial → deep through perforators",
        "Superficial → superficial only",
        "Deep → arteries",
      ],
      answer: 1,
    },
    {
      question: "The main mechanism leading to varicose veins is:",
      options: [
        "Arterial vasospasm",
        "Valve incompetence causing increased superficial venous pressure",
        "Increased capillary permeability only",
        "Lymph node obstruction",
      ],
      answer: 1,
    },
  
    // -------------------------
    // CAUSES / RISK FACTORS
    // -------------------------
    {
      question: "The most common cause of varicose veins is:",
      options: ["Secondary (post-DVT)", "Primary (idiopathic/familial)", "Pelvic mass", "AV fistula"],
      answer: 1,
    },
    {
      question: "Which of the following is a secondary cause of varicose veins?",
      options: ["Familial predisposition", "Pregnancy", "Idiopathic", "Congenital absence of valves (always)"],
      answer: 1,
    },
    {
      question: "Which factor increases the risk/symptoms of varicose veins?",
      options: ["Prolonged standing occupation", "Young age < 10", "Regular leg elevation", "Low BMI always"],
      answer: 0,
    },
  
    // -------------------------
    // ANATOMY
    // -------------------------
    {
      question: "Which vein typically runs along the medial leg and drains into the SFJ?",
      options: ["Short saphenous vein (SSV)", "Long saphenous vein (LSV)", "Popliteal vein", "Femoral artery"],
      answer: 1,
    },
    {
      question: "Short saphenous vein (SSV) typically drains into the:",
      options: ["Sapheno-femoral junction", "Popliteal fossa (SPJ region)", "External iliac vein", "Inferior vena cava"],
      answer: 1,
    },
    {
      question: "The sapheno-femoral junction (SFJ) is approximately located:",
      options: [
        "4 cm lateral and 4 cm below the pubic tubercle",
        "At the popliteal crease",
        "At the medial malleolus",
        "2 cm medial and 2 cm above the ASIS",
      ],
      answer: 0,
    },
  
    // -------------------------
    // HISTORY / SYMPTOMS
    // -------------------------
    {
      question: "A typical symptom of varicose veins is:",
      options: [
        "Aching/heaviness worse after standing and at end of day",
        "Severe chest pain on exertion",
        "Sudden blindness",
        "Pain only during running with no swelling",
      ],
      answer: 0,
    },
    {
      question: "Which symptom suggests skin involvement/chronic venous disease?",
      options: ["Itching/eczema", "Hematemesis", "Hematuria", "Seizures"],
      answer: 0,
    },
  
    // -------------------------
    // EXAMINATION (VVVLAPS + TESTS)
    // -------------------------
    {
      question: "Varicose veins should ideally be inspected while the patient is:",
      options: ["Sitting", "Standing", "Supine with legs elevated", "Prone only"],
      answer: 1,
    },
    {
      question: "Which of the following is part of the classic 'VVVLAPS' assessment?",
      options: ["Lipodermatosclerosis", "Jaundice", "Splenomegaly", "Wheezing"],
      answer: 0,
    },
    {
      question: "A 'saphena varix' at the SFJ is best described as:",
      options: [
        "A pulsatile arterial aneurysm",
        "A dilated saphenous vein pouch that can mimic a hernia",
        "A deep vein clot",
        "A lymph node swelling",
      ],
      answer: 1,
    },
    {
      question: "A positive cough test at the SFJ (thrill) suggests:",
      options: ["Deep system patency", "SFJ incompetence/reflux", "Arterial occlusion", "Normal valve function"],
      answer: 1,
    },
    {
      question: "Perthes test is mainly used to assess:",
      options: [
        "Arterial sufficiency",
        "Deep venous system patency/obstruction",
        "Lymphatic drainage",
        "Nerve conduction",
      ],
      answer: 1,
    },
    {
      question: "In Perthes test, if superficial veins become painful/swollen during calf pumping, it suggests:",
      options: [
        "Deep veins are patent and working well",
        "Deep venous obstruction is suspected",
        "Normal finding",
        "Only SFJ incompetence with normal deep system",
      ],
      answer: 1,
    },
  
    // -------------------------
    // DOPPLER / INVESTIGATIONS
    // -------------------------
    {
      question: "The gold standard investigation for mapping varicose veins is:",
      options: ["Plain X-ray", "Duplex ultrasonography", "ECG", "Venography routinely for all patients"],
      answer: 1,
    },
    {
      question: "Classic Doppler teaching at SFJ/SPJ: '2 whooshes' indicates:",
      options: ["Normal valve function", "Reflux/valve incompetence", "Arterial stenosis", "Deep vein occlusion always"],
      answer: 1,
    },
  
    // -------------------------
    // MANAGEMENT
    // -------------------------
    {
      question: "Which is an appropriate conservative management advice?",
      options: [
        "Avoid prolonged standing + compression stockings",
        "Strict bed rest for weeks",
        "High-dose antibiotics",
        "Immediate stripping for every patient",
      ],
      answer: 0,
    },
    {
      question: "Which of the following is a procedural option for selected patients?",
      options: ["Sclerotherapy", "Appendectomy", "Coronary stent", "Splenectomy"],
      answer: 0,
    },
    {
      question: "Trendelenburg procedure in classic teaching refers to:",
      options: [
        "Ligation of the SFJ",
        "Creation of an AV fistula",
        "Popliteal artery bypass",
        "IVC filter insertion",
      ],
      answer: 0,
    },
  
    // -------------------------
    // CASES
    // -------------------------
    {
      question:
        "CASE: A 38-year-old teacher has heavy aching legs worse after standing all day with visible medial leg varicosities. Most likely involved system?",
      options: [
        "Short saphenous vein territory (posterior calf)",
        "Long saphenous vein territory (medial leg)",
        "Deep venous system only",
        "Arterial system",
      ],
      answer: 1,
    },
    {
      question:
        "CASE: A patient with varicose veins undergoes Perthes test: veins EMPTY during calf pumping. Interpretation?",
      options: [
        "Deep venous system is patent",
        "Deep venous obstruction is present",
        "Severe arterial disease",
        "Test is always positive regardless",
      ],
      answer: 0,
    },
    {
      question:
        "CASE: A patient has recurrent varicose veins + history of previous DVT. This pattern suggests:",
      options: [
        "Primary varicose veins only",
        "Secondary varicose veins due to post-thrombotic changes",
        "No relation to DVT",
        "Acute limb ischemia",
      ],
      answer: 1,
    },
  ];
  
  export default varicoseVeinsQuestions;
  