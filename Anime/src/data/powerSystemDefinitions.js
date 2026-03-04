const powerSystemDefinitions = {
  // ===============================
  // DRAGON BALL
  // ===============================

  Ki: {
    type: "ki",
    stats: { strength: 98, versatility: 75, complexity: 70, scalability: 100 },
    rules: [
      {
        title: "Life Force Manipulation",
        description: "Ki is the life energy within all beings.",
        consequence: "Overuse drains stamina and damages the body."
      },
      {
        title: "Transformation Multiplier",
        description: "Emotional triggers unlock exponential forms.",
        consequence: "Higher forms cause extreme strain."
      }
    ],
    strengths: [
      "Planet-level destructive power",
      "Massive transformation scaling",
      "High-speed combat dominance"
    ],
    weaknesses: [
      "Emotion dependent",
      "Energy depletion risk",
      "Collateral damage heavy"
    ],
    comparison: {
      moreDestructiveThan: ["Chakra", "Nen"],
      lessComplexThan: ["Nen"]
    }
  },

  "Godly Ki": {
    type: "god-ki",
    stats: { strength: 100, versatility: 80, complexity: 85, scalability: 100 },
    rules: [
      {
        title: "Divine Energy",
        description: "Godly Ki exists beyond mortal perception.",
        consequence: "Mortals struggle to sense or counter it."
      }
    ],
    strengths: ["Transcendent power scaling", "Superior control", "Energy efficiency"],
    weaknesses: ["Requires divine training", "Rare access"],
    comparison: {
      superiorTo: ["Ki"]
    }
  },

  // ===============================
  // NARUTO
  // ===============================

  Chakra: {
    type: "chakra",
    stats: { strength: 85, versatility: 90, complexity: 80, scalability: 95 },
    rules: [
      {
        title: "Energy Fusion",
        description: "Chakra blends physical and spiritual energy.",
        consequence: "Imbalance causes exhaustion."
      },
      {
        title: "Elemental Affinity",
        description: "Users align chakra to elemental natures.",
        consequence: "Opposing elements increase strain."
      }
    ],
    strengths: [
      "Elemental diversity",
      "Genjutsu and sensory applications",
      "Team synergy techniques"
    ],
    weaknesses: [
      "High stamina cost",
      "Requires precision control",
      "Emotionally volatile users risk instability"
    ],
    comparison: {
      moreTechnicalThan: ["Ki"],
      lessStrategicThan: ["Nen"]
    }
  },

  // ===============================
  // ONE PIECE
  // ===============================

  "Devil Fruit": {
    type: "devil-fruit",
    stats: { strength: 90, versatility: 95, complexity: 75, scalability: 85 },
    rules: [
      {
        title: "Single Fruit Rule",
        description: "Only one fruit may be consumed.",
        consequence: "Second fruit causes death."
      },
      {
        title: "Sea Weakness",
        description: "Users lose power in seawater.",
        consequence: "Mobility collapse."
      }
    ],
    strengths: ["Reality-bending effects", "Creative combat variety"],
    weaknesses: ["Sea vulnerability", "Ability mastery dependent"],
    comparison: {
      moreCreativeThan: ["Ki"],
      lessConsistentThan: ["Chakra"]
    }
  },

  Haki: {
    type: "haki",
    stats: { strength: 88, versatility: 70, complexity: 75, scalability: 92 },
    rules: [
      {
        title: "Willpower Manifestation",
        description: "Haki is spiritual dominance made tangible.",
        consequence: "Weak resolve limits power."
      }
    ],
    strengths: ["Bypasses Devil Fruit immunity", "Enhances physical attacks"],
    weaknesses: ["Requires strong will", "Limited technique variety"],
    comparison: {
      counters: ["Devil Fruit"]
    }
  },

  // ===============================
  // BLEACH
  // ===============================

  "Spiritual Energy": {
    type: "reiatsu",
    stats: { strength: 92, versatility: 85, complexity: 80, scalability: 95 },
    rules: [
      {
        title: "Reiatsu Pressure",
        description: "Spiritual pressure overwhelms weaker opponents.",
        consequence: "Energy imbalance destabilizes the user."
      }
    ],
    strengths: ["Bankai amplification", "Soul-based combat"],
    weaknesses: ["Energy drain", "Requires spiritual awareness"],
    comparison: {
      similarTo: ["Ki"],
      moreStructuredThan: ["Ki"]
    }
  },

  // ===============================
  // HUNTER X HUNTER
  // ===============================

  Nen: {
    type: "nen",
    stats: { strength: 88, versatility: 95, complexity: 100, scalability: 92 },
    rules: [
      {
        title: "Aura Discipline",
        description: "Nen requires mastery of aura control.",
        consequence: "Improper use leaves aura exposed."
      },
      {
        title: "Vows & Restrictions",
        description: "Self-imposed limits amplify power.",
        consequence: "Breaking vows may cause death."
      }
    ],
    strengths: ["Highly strategic", "Personalized abilities"],
    weaknesses: ["Extremely complex", "Steep learning curve"],
    comparison: {
      moreComplexThan: ["Chakra"],
      moreStrategicThan: ["Ki"]
    }
  },

  // ===============================
  // JUJUTSU KAISEN
  // ===============================

  "Cursed Energy": {
    type: "cursed-energy",
    stats: { strength: 90, versatility: 88, complexity: 92, scalability: 95 },
    rules: [
      {
        title: "Negative Emotion Source",
        description: "Cursed energy manifests from negative emotions.",
        consequence: "Mental instability increases volatility."
      }
    ],
    strengths: ["Domain Expansions", "Reality-warping techniques"],
    weaknesses: ["Emotion dependent", "Energy burnout"],
    comparison: {
      darkerThan: ["Chakra"],
      similarComplexityTo: ["Nen"]
    }
  },

  // ===============================
  // MY HERO ACADEMIA
  // ===============================

  Quirk: {
    type: "quirk",
    stats: { strength: 85, versatility: 95, complexity: 65, scalability: 80 },
    rules: [
      {
        title: "Genetic Ability",
        description: "Quirks are inherited biological powers.",
        consequence: "Overuse strains the body."
      }
    ],
    strengths: ["Massive diversity", "Specialized combat roles"],
    weaknesses: ["Physical limitations", "Mutation unpredictability"],
    comparison: {
      lessStructuredThan: ["Chakra"]
    }
  },

  // ===============================
  // ATTACK ON TITAN
  // ===============================

  Titan: {
    type: "titan",
    stats: { strength: 95, versatility: 60, complexity: 70, scalability: 90 },
    rules: [
      {
        title: "Titan Shift",
        description: "Users transform into giant forms.",
        consequence: "Limited transformation time."
      }
    ],
    strengths: ["Massive physical dominance"],
    weaknesses: ["Predictable combat style"],
    comparison: {
      morePhysicalThan: ["Chakra"]
    }
  },

  // ===============================
  // SOLO LEVELING
  // ===============================

  "Shadow Monarch": {
    type: "shadow-monarch",
    stats: { strength: 100, versatility: 95, complexity: 90, scalability: 100 },
    rules: [
      {
        title: "Shadow Extraction",
        description: "Defeated enemies become shadows.",
        consequence: "Mana consumption scales with army size."
      }
    ],
    strengths: ["Army creation", "Near limitless scaling"],
    weaknesses: ["Mana dependency"],
    comparison: {
      moreScalableThan: ["Ki"]
    }
  },

  // ===============================
  // BLACK CLOVER
  // ===============================

  Magic: {
    type: "magic",
    stats: { strength: 85, versatility: 95, complexity: 85, scalability: 90 },
    rules: [
      {
        title: "Mana Control",
        description: "Magic relies on mana reserves.",
        consequence: "Mana depletion causes collapse."
      }
    ],
    strengths: ["Wide spell variety"],
    weaknesses: ["Mana limits"],
    comparison: {
      moreFlexibleThan: ["Ki"]
    }
  },

  "Anti-Magic": {
    type: "anti-magic",
    stats: { strength: 92, versatility: 70, complexity: 80, scalability: 95 },
    rules: [
      {
        title: "Magic Negation",
        description: "Erases magical effects.",
        consequence: "Requires physical contact."
      }
    ],
    strengths: ["Counters all magic systems"],
    weaknesses: ["Limited range"],
    comparison: {
      hardCounters: ["Magic"]
    }
  },

  // ===============================
  // JOJO
  // ===============================

  Stand: {
    type: "stand",
    stats: { strength: 90, versatility: 100, complexity: 95, scalability: 85 },
    rules: [
      {
        title: "Soul Manifestation",
        description: "Stands represent the user's spirit.",
        consequence: "Damage transfers to user."
      }
    ],
    strengths: ["Highly unique abilities"],
    weaknesses: ["User vulnerability"],
    comparison: {
      mostCreative: true
    }
  },

  // ===============================
  // DEATH NOTE
  // ===============================

  "Death Note": {
    type: "death-note",
    stats: { strength: 100, versatility: 60, complexity: 85, scalability: 70 },
    rules: [
      {
        title: "Name & Face Rule",
        description: "Must know face and real name.",
        consequence: "Incorrect info fails."
      }
    ],
    strengths: ["Instant kill potential"],
    weaknesses: ["Information dependent"],
    comparison: {
      mostLethalWithPrep: true
    }
  }
};

export default powerSystemDefinitions;