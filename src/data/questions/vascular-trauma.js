const vascularTraumaLesson = {
  quiz: {
    title: "Vascular Trauma • Quiz",
    questions: [
      {
        question: "Which of the following is considered a hard sign of vascular injury?",
        options: [
          "History of bleeding at the scene",
          "Diminished distal pulse",
          "Expanding pulsatile hematoma",
          "Stable hematoma",
        ],
        answer: 2,
      },
      {
        question: "The most common mechanism of vascular trauma is:",
        options: ["Blunt trauma", "Penetrating trauma", "Iatrogenic injury", "Crush injury"],
        answer: 1,
      },
      {
        question:
          "In a stable patient with suspected vascular injury and no hard signs, the investigation of choice is:",
        options: ["Duplex ultrasound", "CT angiography", "Conventional angiography", "MRI angiography"],
        answer: 1,
      },
      {
        question: "Which of the following mandates immediate surgical exploration without imaging?",
        options: ["ABI of 0.85", "Stable hematoma", "Bruit over injury site", "Active pulsatile bleeding"],
        answer: 3,
      },
      {
        question: "ABI < 0.9 in the setting of trauma suggests:",
        options: [
          "No vascular injury",
          "Vascular injury is unlikely",
          "Possible vascular injury requiring further evaluation",
          "Chronic venous insufficiency",
        ],
        answer: 2,
      },
    ],
  },

  cases: [
    {
      id: "vt-case-1",
      title: "Case 1",
      vignette:
        "A 29-year-old man presents after a stab wound to the medial thigh. He is pale and diaphoretic. Exam shows active pulsatile bleeding controlled temporarily with direct pressure. There is an expanding, tense hematoma in the thigh. Distal pulses in the foot are absent, and the limb is cool with severe pain.",
      questions: [
        {
          question: "This patient has which category of vascular injury signs?",
          options: ["No signs", "Soft signs only", "Hard signs", "Chronic ischemia signs"],
          answer: 2,
        },
        {
          question: "Most appropriate next step is:",
          options: [
            "CT angiography before any intervention",
            "Duplex ultrasound and outpatient follow-up",
            "Immediate surgical exploration (no imaging delay)",
            "ABI measurement only and discharge if > 0.9",
          ],
          answer: 2,
        },
        {
          question: "Which of the following is considered a hard sign of vascular injury?",
          options: [
            "Proximity to a major vessel only",
            "Stable, non-expanding hematoma",
            "Bruit or thrill over the injury",
            "Mild pain with normal pulses",
          ],
          answer: 2,
        },
      ],
    },

    {
      id: "vt-case-2",
      title: "Case 2",
      vignette:
        "A 24-year-old man is brought after a road traffic accident. His knee was dislocated and reduced in the emergency department. He currently has palpable dorsalis pedis and posterior tibial pulses, but the knee is swollen and painful. There is no active bleeding. He is hemodynamically stable.",
      questions: [
        {
          question: "Most concerning vascular injury in this scenario is:",
          options: ["Femoral vein thrombosis", "Popliteal artery injury", "Carotid artery dissection", "Radial artery spasm"],
          answer: 1,
        },
        {
          question: "Best next step in vascular assessment is:",
          options: [
            "No further evaluation needed because pulses are present",
            "Mandatory vascular assessment (e.g., ABI; and CTA if abnormal/concern)",
            "Immediate amputation",
            "D-dimer test",
          ],
          answer: 1,
        },
        {
          question: "Which bedside finding suggests significant vascular injury and should prompt further imaging?",
          options: ["ABI ≥ 1.0", "ABI < 0.9", "Mild bruising only", "Normal skin temperature"],
          answer: 1,
        },
      ],
    },
  ],
};

export default vascularTraumaLesson;
