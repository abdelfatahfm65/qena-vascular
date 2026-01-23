const dvtLesson = {
  quiz: {
    title: "DVT • Quiz",
    questions: [
      {
        question: "Virchow triad includes all of the following EXCEPT:",
        options: [
          "Stasis (abnormal blood flow)",
          "Hypercoagulability (abnormal blood)",
          "Vascular injury",
          "Arterial vasospasm",
        ],
        answer: 3,
      },
      {
        question: "The most serious complication of DVT is:",
        options: ["Varicose veins", "Pulmonary embolism (PE)", "Cellulitis", "Lymphedema"],
        answer: 1,
      },
      {
        question: "D-dimer is most useful because it has:",
        options: [
          "High specificity for DVT",
          "High negative predictive value in low suspicion settings",
          "High positive predictive value in all patients",
          "No role in DVT workup",
        ],
        answer: 1,
      },
      {
        question: "The first-line imaging test for suspected DVT is usually:",
        options: ["Duplex (Doppler) ultrasound", "CT pulmonary angiography", "Plain X-ray", "PET scan"],
        answer: 0,
      },
      {
        question: "Mainstay of treatment for most DVT cases is:",
        options: ["Anticoagulation", "Immediate surgical thrombectomy for everyone", "IV antibiotics", "Compression only"],
        answer: 0,
      },
    ],
  },

  cases: [
    {
      id: "dvt-case-1",
      title: "Case 1",
      vignette:
        "A 34-year-old woman presents with 2 days of unilateral calf swelling and mild tenderness. She started combined oral contraceptive pills 3 months ago. She is afebrile and hemodynamically stable. There is no chest pain or dyspnea. Clinical suspicion for DVT is low. A D-dimer test is negative.",
      questions: [
        {
          question: "What is the best next step in management?",
          options: [
            "Start anticoagulation immediately",
            "Order CT pulmonary angiography",
            "No further testing is needed; DVT is unlikely in low-risk patient with negative D-dimer",
            "Proceed directly to venography to rule out DVT",
          ],
          answer: 2,
        },
        {
          question: "The main reason D-dimer is useful in this setting is its:",
          options: [
            "High specificity for DVT in all patients",
            "High negative predictive value when pretest probability is low",
            "Ability to localize thrombus to proximal vs distal veins",
            "Ability to determine the duration of the clot",
          ],
          answer: 1,
        },
        {
          question: "Which factor in this patient increases the risk of DVT?",
          options: [
            "Oral contraceptive pill use",
            "Negative D-dimer result",
            "Afebrile status",
            "Mild tenderness only",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "dvt-case-2",
      title: "Case 2",
      vignette:
        "A 60-year-old man is 5 days post–total hip replacement surgery. He develops severe pain and marked swelling of the entire left leg extending to the groin. The leg appears tense and dusky/cyanotic. Distal pulses are palpable. He is tachycardic but normotensive and afebrile.",
      questions: [
        {
          question: "The pattern of swelling extending to the groin most strongly suggests:",
          options: [
            "Isolated distal (calf) DVT",
            "Proximal/iliofemoral DVT",
            "Superficial thrombophlebitis only",
            "Lymphedema as the primary diagnosis",
          ],
          answer: 1,
        },
        {
          question: "Severe venous obstruction with cyanosis in this context is most consistent with:",
          options: [
            "Raynaud phenomenon",
            "Phlegmasia cerulea dolens",
            "Buerger disease",
            "Erythromelalgia",
          ],
          answer: 1,
        },
        {
          question: "In selected cases with threatened limb viability, which advanced therapy may be considered?",
          options: [
            "Topical heparin gel only",
            "Catheter-directed thrombolysis",
            "No treatment; observe for spontaneous resolution",
            "Avoid anticoagulation until imaging confirms PE",
          ],
          answer: 1,
        },
      ],
    },
  ],
};

export default dvtLesson;
