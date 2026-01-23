const aneurysmLesson = {
  quiz: {
    title: "Arterial Aneurysms • Quiz",
    questions: [
      {
        question: "An arterial aneurysm is best defined as:",
        options: [
          "Any focal arterial dilatation regardless of size",
          "A permanent localized dilatation ≥ 1.5 times the normal diameter",
          "A chronic venous dilatation due to reflux",
          "A transient arterial spasm causing ischemia",
        ],
        answer: 1,
      },
      {
        question: "A true aneurysm involves:",
        options: [
          "A breach in the arterial wall with a contained hematoma",
          "All layers of the vessel wall dilating together",
          "Only the intima being dilated",
          "Only the adventitia being dilated",
        ],
        answer: 1,
      },
      {
        question: "The most common site of arterial aneurysm is:",
        options: ["Femoral artery", "Popliteal artery", "Abdominal aorta (AAA)", "Radial artery"],
        answer: 2,
      },
      {
        question: "First-line investigation for screening and follow-up of AAA is:",
        options: ["CT angiography", "Duplex ultrasound", "MR angiography", "Conventional angiography"],
        answer: 1,
      },
      {
        question: "A common size threshold for elective repair of AAA is:",
        options: ["4.0 cm", "5.0 cm", "5.5 cm", "7.0 cm"],
        answer: 2,
      },
    ],
  },

  cases: [
    {
      id: "aneurysm-case-1",
      title: "Case 1",
      vignette:
        "A 68-year-old man with a 40-pack-year smoking history and hypertension is found to have a pulsatile abdominal mass during a routine exam. He denies abdominal pain. Duplex ultrasound shows an infrarenal abdominal aortic aneurysm measuring 5.8 cm. He is hemodynamically stable and has normal renal function.",
      questions: [
        {
          question: "Most appropriate management is:",
          options: [
            "Reassure and repeat ultrasound in 2 years",
            "Conservative therapy only with risk factor control regardless of size",
            "Elective repair (open or EVAR) is indicated",
            "Antibiotics for presumed mycotic aneurysm",
          ],
          answer: 2,
        },
        {
          question: "The strongest modifiable risk factor associated with AAA is:",
          options: ["Smoking", "Male sex", "Age > 65", "Family history"],
          answer: 0,
        },
        {
          question: "Best imaging modality for operative planning is:",
          options: ["Plain X-ray", "CT angiography (CTA)", "ECG", "D-dimer"],
          answer: 1,
        },
      ],
    },

    {
      id: "aneurysm-case-2",
      title: "Case 2",
      vignette:
        "A 72-year-old man presents with intermittent episodes of sudden foot pain and toe discoloration over the past week. He reports no trauma. Exam shows a palpable pulsatile mass in the popliteal fossa and diminished distal pulses. The foot is cool with signs of distal ischemia. Duplex ultrasound confirms a popliteal artery aneurysm measuring 2.4 cm.",
      questions: [
        {
          question: "Most likely mechanism of his toe ischemia is:",
          options: [
            "Rupture of the popliteal aneurysm into the calf",
            "Distal embolization from mural thrombus within the aneurysm",
            "Venous reflux from incompetent perforators",
            "Acute compartment syndrome",
          ],
          answer: 1,
        },
        {
          question: "Best next step in evaluation given this diagnosis is:",
          options: [
            "No further evaluation is needed",
            "Screen for abdominal aortic aneurysm (AAA)",
            "Start antibiotics immediately for all patients",
            "CT pulmonary angiography",
          ],
          answer: 1,
        },
        {
          question: "This aneurysm is most likely to require repair because:",
          options: [
            "All popliteal aneurysms rupture early",
            "Popliteal aneurysm ≥ 2 cm and/or symptomatic is an indication for repair",
            "Surgery is contraindicated in popliteal aneurysms",
            "Repair is only done if size ≥ 6 cm",
          ],
          answer: 1,
        },
      ],
    },
  ],
};

export default aneurysmLesson;
