const avfLesson = {
  quiz: {
    title: "Arteriovenous Fistula (AVF) • Quiz",
    questions: [
      {
        question: "An arteriovenous fistula (AVF) is best defined as:",
        options: [
          "Atherosclerotic narrowing of an artery",
          "An abnormal direct connection between an artery and a vein bypassing capillaries",
          "A clot in a deep vein causing swelling",
          "A dilatation of an artery ≥ 1.5 times normal diameter",
        ],
        answer: 1,
      },
      {
        question: "A classic clinical clue strongly suggestive of an AVF is:",
        options: [
          "Intermittent claudication",
          "Continuous machinery bruit with palpable thrill",
          "Calf tenderness with positive Homans sign",
          "Absent femoral pulse only",
        ],
        answer: 1,
      },
      {
        question: "Which systemic complication can occur with large untreated AVFs?",
        options: [
          "Low-output heart failure",
          "High-output cardiac failure",
          "Atrial myxoma",
          "Aortic dissection",
        ],
        answer: 1,
      },
      {
        question: "Steal syndrome in a dialysis AVF refers to:",
        options: [
          "Venous infection around the fistula",
          "Aneurysmal dilatation of the vein",
          "Diversion of blood away from distal limb causing ischemia",
          "Thrombosis of the inferior vena cava",
        ],
        answer: 2,
      },
      {
        question: "First-line imaging modality for suspected AVF in most cases is:",
        options: [
          "MRI angiography",
          "Conventional angiography for everyone",
          "Duplex ultrasound",
          "Plain X-ray",
        ],
        answer: 2,
      },
    ],
  },

  cases: [
    {
      id: "avf-case-1",
      title: "Case 1",
      vignette:
        "A 40-year-old patient underwent femoral artery catheterization 2 weeks ago. He now notices a growing groin swelling and a \"buzzing\" sensation. Exam reveals a palpable thrill and a continuous machinery-like bruit over the groin. Distal pulses are present.",
      questions: [
        {
          question: "Most likely diagnosis is:",
          options: [
            "Deep venous thrombosis",
            "Arteriovenous fistula",
            "Inguinal hernia",
            "Acute limb ischemia",
          ],
          answer: 1,
        },
        {
          question: "Best next step to confirm the diagnosis is:",
          options: [
            "Plain X-ray",
            "Duplex ultrasound",
            "D-dimer",
            "MRI brain",
          ],
          answer: 1,
        },
        {
          question: "Most appropriate definitive management in a symptomatic acquired AVF is:",
          options: [
            "Observation only in all cases",
            "Endovascular embolization / covered stent or surgical repair depending on anatomy",
            "Compression stockings only",
            "Antibiotics and discharge",
          ],
          answer: 1,
        },
      ],
    },

    {
      id: "avf-case-2",
      title: "Case 2",
      vignette:
        "A 60-year-old woman with end-stage renal disease has a brachiocephalic hemodialysis AVF created 6 months ago. She now reports coldness, pain, and numbness in the hand during dialysis and at night. Exam shows a prominent AVF with strong thrill. The hand is cool with delayed capillary refill and early fingertip skin changes.",
      questions: [
        {
          question: "The most likely cause of her symptoms is:",
          options: [
            "Raynaud phenomenon",
            "Steal syndrome due to AVF diverting blood away from distal limb",
            "Acute DVT of the arm",
            "Cellulitis",
          ],
          answer: 1,
        },
        {
          question: "Which management principle is most appropriate?",
          options: [
            "Ignore—this is expected in all AVFs",
            "Urgent evaluation; consider banding/DRIL/AVF revision or ligation depending on severity",
            "Ligate all AVFs immediately without assessment",
            "Give antibiotics and discharge",
          ],
          answer: 1,
        },
        {
          question: "A key finding that supports ischemia (rather than neuropathy alone) is:",
          options: [
            "Warm hand with normal capillary refill",
            "Cool hand with delayed capillary refill and distal ischemic changes",
            "Only tingling sensation with normal temperature",
            "Pain relieved by elevating the limb above heart",
          ],
          answer: 1,
        },
      ],
    },
  ],
};

export default avfLesson;
