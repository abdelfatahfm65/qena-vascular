const cltiLesson = {
  quiz: {
    title: "Chronic Limb-Threatening Ischemia (CLTI) • Quiz",
    questions: [
      {
        question: "Which presentation best defines CLTI?",
        options: [
          "Intermittent claudication only",
          "Acute pain with sudden pulselessness",
          "Rest pain or tissue loss (ulcer/gangrene) due to PAD lasting >2 weeks",
          "Leg swelling with varicosities",
        ],
        answer: 2,
      },
      {
        question: "In diabetics, ABI can be falsely elevated mainly due to:",
        options: [
          "Venous reflux",
          "Arterial calcification (non-compressible arteries)",
          "Low cardiac output",
          "Hyperventilation",
        ],
        answer: 1,
      },
      {
        question: "A key urgent red flag in CLTI is:",
        options: [
          "Dry gangrene with clear demarcation and no infection",
          "Rest pain relieved by elevation",
          "Infection + ischemia (wet gangrene/cellulitis) threatening limb",
          "Mild claudication after walking 2 km",
        ],
        answer: 2,
      },
      {
        question: "Best Medical Therapy (BMT) in PAD/CLTI typically includes:",
        options: [
          "High-intensity statin + antiplatelet + risk factor control",
          "Antibiotics for all patients",
          "Routine thrombolysis",
          "Only analgesics until surgery",
        ],
        answer: 0,
      },
      {
        question: "A common overall goal of revascularization in CLTI is:",
        options: [
          "Restore straight-line flow to the foot when possible to support healing",
          "Eliminate all atherosclerosis permanently",
          "Avoid any imaging before intervention",
          "Treat only the inflow and ignore outflow",
        ],
        answer: 0,
      },
    ],
  },

  cases: [
    {
      id: "clti-case-1",
      title: "Case 1",
      vignette:
        "A 62-year-old man with long-standing type 2 diabetes and chronic kidney disease presents with a non-healing ulcer on the plantar surface of the great toe for 3 weeks. He reports burning pain in the forefoot that is worse at night and improves when he hangs his leg off the bed. Exam shows shiny, hairless skin and cool foot with dependent rubor. Dorsalis pedis pulse is weak. ABI is 1.25.",
      questions: [
        {
          question: "The ABI result is most likely misleading because:",
          options: [
            "ABI is always low in diabetics regardless of disease",
            "Medial arterial calcification can falsely elevate ABI",
            "ABI is only useful for venous disease",
            "ABI becomes inaccurate only if the patient is febrile",
          ],
          answer: 1,
        },
        {
          question: "Best next bedside physiologic test to assess severity in this patient is:",
          options: [
            "Repeat ABI after exercise test",
            "Toe–brachial index (TBI) / toe pressure",
            "ECG",
            "Plain X-ray of the foot only",
          ],
          answer: 1,
        },
        {
          question: "Most appropriate overall management approach (assuming limb is salvageable) is:",
          options: [
            "Wound dressing only until it heals",
            "Best medical therapy + revascularization planning + wound care/offloading",
            "Immediate primary major amputation for all diabetic ulcers",
            "Compression stockings and elevation",
          ],
          answer: 1,
        },
      ],
    },

    {
      id: "clti-case-2",
      title: "Case 2",
      vignette:
        "A 70-year-old man with a history of smoking, hypertension, and dyslipidemia presents with a blackened area on the forefoot with foul-smelling discharge and increasing redness extending up the midfoot. He has severe rest pain and cannot sleep at night. Exam shows a cool foot, delayed capillary refill, and absent distal pulses. He is febrile (38.5°C) and tachycardic.",
      questions: [
        {
          question: "This presentation is most consistent with:",
          options: [
            "Intermittent claudication only",
            "Chronic limb-threatening ischemia with infected (wet) gangrene",
            "Acute limb ischemia due to embolus",
            "Superficial cellulitis with normal perfusion",
          ],
          answer: 1,
        },
        {
          question: "The most important clinical principle in this scenario is:",
          options: [
            "Delay all antibiotics until angiography is complete",
            "Infection + ischemia is a limb-threatening emergency requiring urgent multidisciplinary management",
            "ABI alone is enough to plan treatment",
            "Rest pain indicates venous insufficiency",
          ],
          answer: 1,
        },
        {
          question:
            "Which option is most appropriate to consider if the limb is non-salvageable or anatomy is non-reconstructable with severe infection/systemic compromise?",
          options: [
            "Primary major amputation",
            "Exercise therapy only",
            "Sclerotherapy",
            "Reassure and outpatient follow-up",
          ],
          answer: 0,
        },
      ],
    },
  ],
};

export default cltiLesson;
