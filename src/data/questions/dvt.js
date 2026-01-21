const dvtQuestions = [
    // -------------------------
    // BASIC / PATHOPHYSIOLOGY
    // -------------------------
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
      options: [
        "Varicose veins",
        "Pulmonary embolism (PE)",
        "Cellulitis",
        "Lymphedema",
      ],
      answer: 1,
    },
  
    // -------------------------
    // RISK FACTORS
    // -------------------------
    {
      question: "Which of the following is a well-known risk factor for DVT?",
      options: [
        "Early ambulation after surgery",
        "Oral contraceptive pills (OCP)",
        "Low body weight",
        "Daily walking",
      ],
      answer: 1,
    },
    {
      question: "Which scenario is classically associated with increased DVT risk?",
      options: [
        "Surgery lasting > 30 minutes (especially ortho)",
        "Mild dehydration only",
        "Short 5-minute procedure",
        "Topical antibiotic use",
      ],
      answer: 0,
    },
  
    // -------------------------
    // CLINICAL FEATURES
    // -------------------------
    {
      question: "Which statement about Homan’s sign is most accurate?",
      options: [
        "It is highly sensitive and specific for DVT",
        "It rules out DVT if negative",
        "It is not reliable for diagnosing DVT",
        "It confirms DVT if positive",
      ],
      answer: 2,
    },
    {
      question: "A proximal DVT is more likely to cause:",
      options: [
        "Swelling limited below the knee only",
        "Swelling extending up to the groin",
        "No swelling at all",
        "Only foot pain with normal calf",
      ],
      answer: 1,
    },
    {
      question: "Severe venous obstruction with cyanosis can present as:",
      options: [
        "Phlegmasia cerulea dolens",
        "Raynaud phenomenon",
        "Buerger disease",
        "Erythromelalgia",
      ],
      answer: 0,
    },
  
    // -------------------------
    // INVESTIGATIONS
    // -------------------------
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
      options: [
        "Duplex (Doppler) ultrasound",
        "CT pulmonary angiography",
        "Plain X-ray",
        "PET scan",
      ],
      answer: 0,
    },
    {
      question: "Duplex ultrasound is generally:",
      options: [
        "Better for proximal DVT than distal DVT",
        "Better for distal DVT than proximal DVT",
        "Equally reliable for all DVT sites",
        "Not used in DVT diagnosis",
      ],
      answer: 0,
    },
    {
      question: "Thrombophilia testing is most appropriate in which patient?",
      options: [
        "First provoked DVT after major surgery in an older patient",
        "Idiopathic VTE in a patient < 50 years old",
        "Mild ankle edema with no DVT suspicion",
        "Any patient on anticoagulation already (always best timing)",
      ],
      answer: 1,
    },
  
    // -------------------------
    // TREATMENT / PREVENTION
    // -------------------------
    {
      question: "Mainstay of treatment for most DVT cases is:",
      options: [
        "Anticoagulation",
        "Immediate surgical thrombectomy for everyone",
        "IV antibiotics",
        "Compression only without anticoagulation",
      ],
      answer: 0,
    },
    {
      question: "Which of the following is a prevention measure for DVT?",
      options: [
        "Early mobilization",
        "Keeping patients on strict bed rest",
        "Avoiding all compression devices",
        "Stopping all fluids post-op",
      ],
      answer: 0,
    },
    {
      question: "IVC filter is best described as:",
      options: [
        "A treatment that prevents post-thrombotic syndrome",
        "A device that reduces PE risk in selected cases but does not prevent DVT recurrence",
        "A replacement for anticoagulation in all patients",
        "A standard for every distal DVT",
      ],
      answer: 1,
    },
  
    // -------------------------
    // CASES
    // -------------------------
    {
      question:
        "CASE: A 34-year-old woman on OCP presents with calf swelling and tenderness. D-dimer is negative and clinical suspicion is low. Best interpretation?",
      options: [
        "DVT is confirmed",
        "DVT is unlikely; a negative D-dimer helps rule out in low suspicion cases",
        "D-dimer is useless; proceed to venography in all patients",
        "Start thrombolysis immediately",
      ],
      answer: 1,
    },
    {
      question:
        "CASE: A 60-year-old post-hip surgery patient develops whole-leg swelling up to the groin. What does this suggest?",
      options: [
        "Distal (calf) DVT only",
        "Proximal DVT (iliofemoral/proximal veins) more likely",
        "It rules out DVT",
        "Only superficial thrombophlebitis",
      ],
      answer: 1,
    },
    {
      question:
        "CASE: A patient with massive iliofemoral thrombosis has severe pain, swelling, and threatened limb viability. Best next advanced option (selected cases)?",
      options: [
        "No treatment; observe",
        "Thrombolysis (catheter-directed) may be considered",
        "Compression stockings only",
        "Topical heparin gel",
      ],
      answer: 1,
    },
  ];
  
  export default dvtQuestions;