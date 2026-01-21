const aneurysmQuestions = [
    // =========================
    // Definition & Types
    // =========================
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
      question: "A pseudoaneurysm (false aneurysm) is best described as:",
      options: [
        "Circumferential dilatation of the artery involving all wall layers",
        "Breach in the arterial wall with a contained hematoma communicating with the lumen",
        "Diffuse dilatation of the artery due to atherosclerosis",
        "Thrombosis of an artery with no wall disruption",
      ],
      answer: 1,
    },
    {
      question: "Which aneurysm shape is circumferential dilatation of the vessel?",
      options: ["Saccular", "Fusiform", "Mycotic", "Dissecting"],
      answer: 1,
    },
    {
      question: "Which aneurysm shape is a focal outpouching of the vessel wall?",
      options: ["Saccular", "Fusiform", "Diffuse", "Tubular"],
      answer: 0,
    },
  
    // =========================
    // Why it matters / Complications
    // =========================
    {
      question: "Aneurysms are often dangerous because of all EXCEPT:",
      options: [
        "Rupture causing hemorrhagic shock",
        "Thrombosis within the aneurysm",
        "Distal embolization",
        "Venous reflux causing varicose veins",
      ],
      answer: 3,
    },
    {
      question: "Many aneurysms are discovered incidentally because they are commonly:",
      options: ["Asymptomatic", "Always painful early", "Always associated with fever", "Always cause tissue loss"],
      answer: 0,
    },
    {
      question: "Compression by an aneurysm may lead to:",
      options: [
        "Neurological symptoms due to local pressure effects",
        "Only pulmonary edema",
        "Only calf swelling",
        "Always immediate rupture",
      ],
      answer: 0,
    },
  
    // =========================
    // Common sites
    // =========================
    {
      question: "The most common site of arterial aneurysm is:",
      options: ["Femoral artery", "Popliteal artery", "Abdominal aorta (AAA)", "Radial artery"],
      answer: 2,
    },
    {
      question: "The most common peripheral arterial aneurysm is:",
      options: ["Popliteal artery", "Subclavian artery", "Carotid artery", "Ulnar artery"],
      answer: 0,
    },
    {
      question: "Popliteal aneurysms most commonly present with:",
      options: ["Rupture", "Ischemia from thrombosis/embolization", "Hemoptysis", "Epistaxis"],
      answer: 1,
    },
    {
      question: "If a popliteal aneurysm is found, you should also screen for:",
      options: ["AAA", "DVT only", "Carotid stenosis only", "Pulmonary embolism"],
      answer: 0,
    },
  
    // =========================
    // Etiology / Risk factors
    // =========================
    {
      question: "The most common underlying cause of arterial aneurysms is:",
      options: ["Atherosclerosis", "Asthma", "Hypothyroidism", "Appendicitis"],
      answer: 0,
    },
    {
      question: "Which of the following are recognized etiologies of aneurysm formation?",
      options: [
        "Atherosclerosis",
        "Trauma",
        "Infection (mycotic aneurysm)",
        "All of the above",
      ],
      answer: 3,
    },
    {
      question: "The strongest modifiable risk factor for aneurysmal disease is:",
      options: ["Smoking", "Male sex", "Age > 65", "Family history"],
      answer: 0,
    },
  
    // =========================
    // Diagnosis
    // =========================
    {
      question: "First-line investigation for screening and follow-up of AAA is:",
      options: ["CT angiography", "Duplex ultrasound", "MR angiography", "Conventional angiography"],
      answer: 1,
    },
    {
      question: "Gold standard imaging for aneurysm planning (anatomy and repair planning) is:",
      options: ["Plain X-ray", "CT angiography (CTA)", "ECG", "D-dimer"],
      answer: 1,
    },
  
    // =========================
    // Management principles & thresholds
    // =========================
    {
      question: "Small asymptomatic aneurysms are usually managed by:",
      options: [
        "Immediate surgery for all patients",
        "Risk factor modification and regular imaging surveillance",
        "Compression stockings",
        "High-dose antibiotics in all cases",
      ],
      answer: 1,
    },
    {
      question: "Which of the following is an indication for aneurysm repair?",
      options: [
        "Asymptomatic small aneurysm with stable size",
        "Symptomatic aneurysm",
        "Normal ultrasound screening result",
        "Mild varicose veins",
      ],
      answer: 1,
    },
    {
      question: "A common size threshold for elective repair of AAA is:",
      options: ["4.0 cm", "5.0 cm", "5.5 cm", "7.0 cm"],
      answer: 2,
    },
    {
      question: "A common size threshold for repair of popliteal aneurysm is approximately:",
      options: ["1 cm", "2 cm", "3.5 cm", "6 cm"],
      answer: 1,
    },
    {
      question: "Rapid expansion of an aneurysm is important because it increases risk of:",
      options: ["Rupture and complications", "Varicose veins", "Asthma attacks", "Appendicitis"],
      answer: 0,
    },
  
    // =========================
    // Treatment options
    // =========================
    {
      question: "Which statement about EVAR (endovascular repair) is most accurate?",
      options: [
        "It is always superior to open repair and needs no follow-up",
        "It is less invasive but requires long-term surveillance",
        "It cannot be used for AAA",
        "It is only used for popliteal aneurysms",
      ],
      answer: 1,
    },
    {
      question: "Which complication is specifically associated with EVAR?",
      options: ["Endoleak", "Bronchospasm", "DVT", "Pneumonia"],
      answer: 0,
    },
  
    // =========================
    // Cases (decision making)
    // =========================
    {
      question:
        "Case: A 70-year-old male smoker has an incidental AAA measuring 4.8 cm on ultrasound and no symptoms. Best management?",
      options: [
        "Immediate open repair",
        "Emergency EVAR",
        "Risk factor modification + surveillance imaging",
        "No follow-up needed",
      ],
      answer: 2,
    },
    {
      question:
        "Case: A 72-year-old male smoker presents with sudden severe abdominal/back pain and hypotension. Most likely diagnosis?",
      options: ["Renal colic", "Ruptured AAA", "Acute pancreatitis", "DVT"],
      answer: 1,
    },
    {
      question:
        "Case: A known AAA increased from 5.2 cm to 5.7 cm over 6 months. Patient is asymptomatic. Best next step?",
      options: [
        "Continue same surveillance only",
        "Elective repair (threshold exceeded and rapid expansion)",
        "Treat with antibiotics",
        "Compression stockings",
      ],
      answer: 1,
    },
    {
      question:
        "Case: A patient with popliteal aneurysm develops acute toe pain and blue discoloration. Most likely mechanism?",
      options: [
        "Rupture into the popliteal fossa",
        "Distal embolization or thrombosis causing ischemia",
        "Cellulitis",
        "Sciatica",
      ],
      answer: 1,
    },
    {
      question:
        "Case: A patient underwent EVAR. Follow-up imaging shows persistent flow into the aneurysm sac. What is this called?",
      options: ["Endoleak", "Steal syndrome", "Compartment syndrome", "Varicose veins"],
      answer: 0,
    },
  ];
  
  export default aneurysmQuestions;
  