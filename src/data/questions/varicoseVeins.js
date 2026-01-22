const varicoseVeinsLesson = {
  quiz: {
    title: "Varicose Veins • Quiz",
    questions: [
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
      {
        question: "The gold standard investigation for mapping varicose veins is:",
        options: ["Plain X-ray", "Duplex ultrasonography", "ECG", "Venography routinely for all patients"],
        answer: 1,
      },
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
    ],
  },

  cases: [
    {
      id: "vv-case-1",
      title: "Case 1: Medial leg varicosities in a standing job",
      vignette:
        "A 38-year-old teacher complains of heavy aching legs worse at the end of the day. On standing examination, there are visible tortuous veins along the medial aspect of the leg. No history of DVT.",
      questions: [
        {
          question: "Most likely involved system/territory is:",
          options: [
            "Short saphenous vein territory (posterior calf)",
            "Long saphenous vein territory (medial leg)",
            "Deep venous system only",
            "Arterial system",
          ],
          answer: 1,
        },
        {
          question: "A positive cough impulse/thrill at the SFJ would most strongly suggest:",
          options: [
            "Normal valve function",
            "SFJ incompetence (reflux at sapheno-femoral junction)",
            "Deep venous obstruction",
            "Arterial occlusion",
          ],
          answer: 1,
        },
        {
          question: "Best initial management step (before procedures) is:",
          options: [
            "Avoid prolonged standing + compression stockings + leg elevation advice",
            "Immediate Trendelenburg procedure for all patients",
            "High-dose antibiotics",
            "Strict bed rest for 2 weeks",
          ],
          answer: 0,
        },
      ],
    },
    {
      id: "vv-case-2",
      title: "Case 2: Recurrent varicose veins with post-thrombotic history",
      vignette:
        "A 55-year-old patient has recurrent varicose veins with ankle skin changes (eczema/hyperpigmentation). There is a history of previous DVT years ago.",
      questions: [
        {
          question: "This pattern most strongly suggests:",
          options: [
            "Primary (idiopathic/familial) varicose veins only",
            "Secondary varicose veins due to post-thrombotic changes",
            "No relationship to DVT",
            "Acute limb ischemia",
          ],
          answer: 1,
        },
        {
          question: "Best investigation to assess reflux/obstruction pattern and map veins is:",
          options: ["Plain X-ray", "Duplex ultrasonography", "ECG", "Routine venography for all patients"],
          answer: 1,
        },
        {
          question: "Perthes test becomes painful/swollen superficial veins during calf pumping. This suggests:",
          options: [
            "Deep venous system is patent",
            "Deep venous obstruction is suspected",
            "Normal finding",
            "Only SFJ incompetence with normal deep system",
          ],
          answer: 1,
        },
      ],
    },
  ],
};

export default varicoseVeinsLesson;
