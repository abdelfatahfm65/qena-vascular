const aliLesson = {
  quiz: {
    title: "Acute Limb Ischemia (ALI) • Quiz",
    questions: [
      {
        question: "Acute Limb Ischemia (ALI) is best defined as:",
        options: [
          "Chronic leg pain on walking due to PAD",
          "Sudden decrease in limb perfusion threatening tissue viability",
          "Leg swelling due to venous obstruction",
          "Painful varicose veins with skin pigmentation",
        ],
        answer: 1,
      },
      {
        question: "Which of the following is a late and ominous sign in ALI?",
        options: ["Pain", "Pallor", "Paralysis", "Poikilothermia"],
        answer: 2,
      },
      {
        question: "The classical 6 Ps of ALI include all EXCEPT:",
        options: ["Pain", "Pulselessness", "Pulsatile mass", "Paresthesia"],
        answer: 2,
      },
      {
        question: "The first immediate medical step in suspected ALI (unless contraindicated) is:",
        options: [
          "Start IV unfractionated heparin",
          "Give thrombolysis to all patients immediately",
          "Perform CTA before any treatment",
          "Apply compression stockings",
        ],
        answer: 0,
      },
      {
        question: "Rutherford Grade IIb limb ischemia is best described as:",
        options: [
          "Viable limb with no sensory or motor deficit",
          "Marginally threatened limb with minimal sensory changes",
          "Immediately threatened limb requiring urgent revascularization",
          "Irreversible ischemia with profound anesthesia and paralysis",
        ],
        answer: 2,
      },
    ],
  },

  cases: [
    {
      id: "ali-case-1",
      title: "Case 1",
      vignette:
        "A 72-year-old man with a history of atrial fibrillation (not on anticoagulation) presents with sudden onset severe pain in the right leg that started 3 hours ago. The leg is pale and cold. On exam, the right foot has absent dorsalis pedis and posterior tibial pulses. He reports numbness in the toes and has mild weakness with ankle dorsiflexion. Handheld Doppler shows no arterial signals, but venous signals are present.",
      questions: [
        {
          question: "Which Rutherford class best describes this limb?",
          options: [
            "Grade I (Viable)",
            "Grade IIa (Marginally threatened)",
            "Grade IIb (Immediately threatened)",
            "Grade III (Irreversible)",
          ],
          answer: 2,
        },
        {
          question: "What is the most appropriate immediate management step?",
          options: [
            "Start IV unfractionated heparin",
            "Delay treatment until CTA confirms the diagnosis",
            "Start aspirin only and observe",
            "Apply compression bandage and elevate the limb",
          ],
          answer: 0,
        },
        {
          question: "Most likely definitive treatment for this patient’s etiology is:",
          options: [
            "Primary amputation",
            "Surgical embolectomy with Fogarty catheter",
            "Long-term antibiotics",
            "Varicose vein stripping",
          ],
          answer: 1,
        },
      ],
    },

    {
      id: "ali-case-2",
      title: "Case 2",
      vignette:
        "A 66-year-old man with long-standing diabetes and peripheral arterial disease (history of exertional calf claudication) presents with worsening left leg pain over the last 12 hours. The limb is cool with delayed capillary refill. Pulses are absent distally. He has minimal sensory loss in the toes but no motor weakness. He is hemodynamically stable.",
      questions: [
        {
          question: "Which statement is most appropriate regarding imaging in this patient?",
          options: [
            "CTA is appropriate because the limb is viable/marginally threatened",
            "Imaging is contraindicated in all suspected ALI",
            "Always perform venography first",
            "MRI is the first-line imaging in ALI",
          ],
          answer: 0,
        },
        {
          question: "The most likely underlying etiology in this scenario is:",
          options: [
            "Arterial embolism from atrial fibrillation",
            "In-situ thrombosis on atherosclerotic disease",
            "Cellulitis",
            "Deep venous thrombosis",
          ],
          answer: 1,
        },
        {
          question:
            "After revascularization, he develops severe increasing leg pain, tense swelling, pain with passive stretching, and paresthesia. Best next step?",
          options: [
            "Reassure and discharge",
            "Urgent fasciotomy for compartment syndrome",
            "High-dose steroids",
            "Elevate limb above heart and apply tight bandage",
          ],
          answer: 1,
        },
      ],
    },
  ],
};

export default aliLesson;
