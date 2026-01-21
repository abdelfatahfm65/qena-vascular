const vascularTraumaQuestions = [
    // -------------------------
    // BASIC CONCEPTS
    // -------------------------
    {
      question: "Which of the following is considered a hard sign of vascular injury?",
      options: [
        "History of bleeding at the scene",
        "Diminished distal pulse",
        "Expanding pulsatile hematoma",
        "Stable hematoma"
      ],
      correctAnswer: 2,
      explanation:
        "Expanding pulsatile hematoma is a hard sign and mandates immediate surgical exploration."
    },
  
    {
      question: "The most common mechanism of vascular trauma is:",
      options: [
        "Blunt trauma",
        "Penetrating trauma",
        "Iatrogenic injury",
        "Crush injury"
      ],
      correctAnswer: 1,
      explanation:
        "Penetrating trauma is the most common cause of vascular injury worldwide."
    },
  
    // -------------------------
    // DIAGNOSIS
    // -------------------------
    {
      question: "In a stable patient with suspected vascular injury and no hard signs, the investigation of choice is:",
      options: [
        "Duplex ultrasound",
        "CT angiography",
        "Conventional angiography",
        "MRI angiography"
      ],
      correctAnswer: 1,
      explanation:
        "CT angiography is the first-line investigation in stable patients without hard signs."
    },
  
    // -------------------------
    // MANAGEMENT
    // -------------------------
    {
      question: "Which of the following mandates immediate surgical exploration without imaging?",
      options: [
        "ABI of 0.85",
        "Stable hematoma",
        "Bruit over injury site",
        "Active pulsatile bleeding"
      ],
      correctAnswer: 3,
      explanation:
        "Active pulsatile bleeding is a hard sign and requires immediate exploration."
    },
  
    // -------------------------
    // CASE 1
    // -------------------------
    {
      question:
        "A 25-year-old man presents after a stab wound to the thigh. He is hypotensive with active pulsatile bleeding from the wound. What is the next best step?",
      options: [
        "CT angiography",
        "Apply pressure and observe",
        "Immediate surgical exploration",
        "Duplex ultrasound"
      ],
      correctAnswer: 2,
      explanation:
        "Hard signs are present (active bleeding + shock). Immediate surgery is required."
    },
  
    // -------------------------
    // CASE 2
    // -------------------------
    {
      question:
        "A patient presents after knee dislocation. Pulses are palpable but weak. ABI is 0.7. What is the most appropriate next step?",
      options: [
        "Observation only",
        "Immediate surgery",
        "CT angiography",
        "Amputation"
      ],
      correctAnswer: 2,
      explanation:
        "Knee dislocation carries high risk of popliteal artery injury. ABI < 0.9 mandates CTA."
    },
  
    // -------------------------
    // CASE 3
    // -------------------------
    {
      question:
        "After revascularization of a limb following vascular trauma, which complication should be actively anticipated?",
      options: [
        "Pulmonary embolism",
        "Compartment syndrome",
        "Deep vein thrombosis",
        "Chronic venous insufficiency"
      ],
      correctAnswer: 1,
      explanation:
        "Reperfusion injury can cause compartment syndrome, especially after prolonged ischemia."
    }
  ];
  
  export default vascularTraumaQuestions;
  