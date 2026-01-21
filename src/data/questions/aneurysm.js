const aneurysmQuestions = [
    // =========================
    // CORE CONCEPTS
    // =========================
    {
      question: "An arterial aneurysm is best defined as:",
      options: [
        "Any focal arterial dilatation regardless of size",
        "A localized arterial dilatation ≥ 1.5 times the normal diameter",
        "A dilated vein with incompetent valves",
        "An arterial spasm causing ischemia",
      ],
      answer: 1,
    },
    {
      question: "A true aneurysm involves:",
      options: [
        "Disruption of the arterial wall with contained hematoma",
        "All layers of the vessel wall dilating together",
        "Only the intima and media",
        "Only the adventitia",
      ],
      answer: 1,
    },
    {
      question: "A pseudoaneurysm (false aneurysm) is best described as:",
      options: [
        "Circumferential dilatation involving all wall layers",
        "Breach in arterial wall with a contained hematoma communicating with the lumen",
        "Congenital fusiform dilation of the aorta",
        "Venous dilation due to reflux",
      ],
      answer: 1,
    },
    {
      question: "Which aneurysm shape refers to circumferential dilatation of the vessel?",
      options: ["Saccular", "Fusiform", "Dissecting", "Mycotic"],
      answer: 1,
    },
    {
      question: "Which aneurysm shape refers to a focal outpouching of the vessel wall?",
      options: ["Saccular", "Fusiform", "Spindle", "Diffuse"],
      answer: 0,
    },
  
    // =========================
    // WHY IT MATTERS / COMPLICATIONS
    // =========================
    {
      question: "Which of the following is NOT a typical major risk of arterial aneurysms?",
      options: [
        "Rupture causing hemorrhagic shock",
        "Thrombosis",
        "Distal embolization",
        "Pulmonary edema due to pneumonia",
      ],
      answer: 3,
    },
    {
      question: "Aneurysms are often discovered incidentally because they are commonly:",
      options: ["Painful from early stages", "Asymptomatic", "Always associated with fever", "Always cause ischemia"],
      answer: 1,
    },
    {
      question: "Compression of adjacent structures by an aneurysm can cause:",
      options: ["Only distal emboli", "Neurological symptoms or local pain", "Immediate limb gangrene", "Always hemoptysis"],
      answer: 1,
    },
  
    // =========================
    // COMMON SITES
    // =========================
    {
      question: "The most common site of arterial aneurysm is:",
      options: ["Popliteal artery", "Abdominal aorta (AAA)", "Femoral artery", "Subclavian artery"],
      answer: 1,
    },
    {
      question: "The most common peripheral arterial aneurysm is:",
      options: ["Femoral aneurysm", "Popliteal aneurysm", "Radial aneurysm", "Carotid aneurysm"],
      answer: 1,
    },
    {
      question: "Popliteal aneurysms most commonly present with:",
      options: ["Rupture", "Ischemia from thrombosis/embolization", "Hemoptysis", "Syncope"],
      answer: 1,
    },
    {
      question: "If a popliteal aneurysm is found, you should also consider screening for:",
      options: ["DVT", "AAA", "Renal colic", "PE only"],
      answer: 1,
    },
  
    // =========================
    // ETIOLOGY / RISK FACTORS
    // =========================
    {
      question: "The most common underlying cause of arterial aneurysms is:",
      options: ["Atherosclerosis", "Tuberculosis", "Asthma", "Hypothyroidism"],
      answer: 0,
    },
    {
      question: "The strongest modifiable risk factor for aneurysmal disease is:",
      options: ["Smoking", "Male sex", "Age", "Family history"],
      answer: 0,
    },
    {
      question: "Which of the following can be a cause of aneurysm formation?",
      options: ["Atherosclerosis", "Trauma", "Infection (mycotic aneurysm)", "All of the above"],
      answer: 3,
    },
  
    // =========================
    // DIAGNOSIS / IMAGING
    // =========================
    {
      question: "Best first-line imaging for screening and follow-up of AAA is:",
      options: ["CT angiography", "Duplex ultrasound", "MR angiography", "Conventional angiography"],
      answer: 1,
    },
    {
      question: "The gold standard imaging for operative planning of aneurysms is typically:",
      options: ["Plain X-ray", "CT angiography (CTA)", "ECG", "D-dimer"],
      answer: 1,
    },
  
    // =========================
    // MANAGEMENT PRINCIPLES / THRESHOLDS
    // =========================
    {
      question: "Small asymptomatic aneurysms are generally managed by:",
      options: [
        "Immediate surgery for all cases",
        "Risk factor modification and surveillance imaging",
        "High-dose steroids",
        "Compression bandaging",
      ],
      answer: 1,
    },
    {
      question: "Which of the following is an indication for aneurysm repair?",
      options: [
        "Asymptomatic small aneurysm with no growth",
        "Symptomatic aneurysm",
        "Normal screening ultrasound",
        "Stable varicose veins",
      ],
      answer: 1,
    },
    {
      question: "A common size threshold for elective repair of AAA is:",
      options: ["3.0 cm", "4.0 cm", "5.5 cm", "7.5 cm"],
      answer: 2,
    },
    {
      question: "A common size threshold for repair of popliteal aneurysm is approximately:",
      options: ["1 cm", "2 cm", "4 cm", "6 cm"],
      answer: 1,
    },
  
    // =========================
    // TREATMENT OPTIONS
    // =========================
    {
      question: "Which statement about endovascular repair (EVAR) is most accurate?",
      options: [
        "It is always better than open repair with no downsides",
        "It is less invasive but requires long-term surveillance",
        "It cannot be used for AAA",
        "It eliminates the need for follow-up imaging",
      ],
      answer: 1,
    },
    {
      question: "A key EVAR-specific complication is:",
      options: ["Endoleak", "Pneumothorax", "Appendicitis", "Mitral stenosis"],
      answer: 0,
    },
  
    // =========================
    // CASES (HIGH YIELD)
    // =========================
    {
      question:
        "Case: A 70-year-old male smoker has an incidental AAA measuring 4.8 cm on ultrasound and no symptoms. Best next step?",
      options: [
        "Immediate open surgical repair",
        "Endovascular repair urgently",
        "Risk factor modification and surveillance imaging",
        "No follow-up needed",
      ],
      answer: 2,
    },
    {
      question:
        "Case: A 72-year-old male smoker presents with sudden severe abdominal/back pain and hypotension. What is the most concerning diagnosis?",
      options: ["Renal colic", "Ruptured AAA", "Acute pancreatitis", "DVT"],
      answer: 1,
    },
    {
      question:
        "Case: A 68-year-old has a known AAA that increased from 5.2 cm to 5.7 cm over 6 months. He remains asymptomatic. Best management?",
      options: [
        "Continue the same surveillance interval only",
        "Elective repair (size threshold exceeded and rapid expansion)",
        "Treat with antibiotics",
        "Compression stockings",
      ],
      answer: 1,
    },
    {
      question:
        "Case: A patient has a popliteal aneurysm and develops acute foot pain with blue toes. Most likely mechanism?",
      options: [
        "Rupture into the popliteal fossa",
        "Distal embolization / thrombosis",
        "Cellulitis",
        "Sciatica",
      ],
      answer: 1,
    },
    {
      question:
        "Case: A patient underwent EVAR for AAA. On follow-up imaging, persistent flow into the aneurysm sac is noted. What is this called?",
      options: ["Endoleak", "Reperfusion injury", "Vasospasm", "Pseudoaneurysm thrombosis"],
      answer: 0,
    },
  ];
  
  export default aneurysmQuestions;
  