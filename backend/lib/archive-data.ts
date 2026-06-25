export type UniversityTier = "Russell Group" | "Red Brick" | "Modern" | "Ancient";
export type StudyLevel = "undergraduate" | "postgraduate";
export type SubjectArea =
  | "Computer Science"
  | "Engineering"
  | "Business"
  | "Medicine"
  | "Law"
  | "Arts & Humanities"
  | "Social Sciences"
  | "Natural Sciences"
  | "Architecture"
  | "Education";

export type University = {
  id: string;
  name: string;
  city: string;
  isLondon: boolean;
  tier: UniversityTier;
  founded: number;
  acceptanceRate: number; // percentage
  internationalFees: { min: number; max: number }; // GBP per year
  entryRequirements: {
    undergraduate: {
      aLevels: string; // e.g. "AAA"
      ibPoints: number;
      cgpa: number; // out of 10
      percentage: number; // out of 100
      ielts: number;
      toefl: number;
    } | null;
    postgraduate: {
      degreeClass: string; // e.g. "2:1 (Upper Second)"
      cgpa: number;
      percentage: number;
      ielts: number;
      toefl: number;
    } | null;
  };
  popularSubjects: SubjectArea[];
  ucasCode?: string;
  website: string;
  notes?: string;
};

export const ukUniversities: University[] = [
  {
    id: "oxford",
    name: "University of Oxford",
    city: "Oxford",
    isLondon: false,
    tier: "Ancient",
    founded: 1096,
    acceptanceRate: 17,
    internationalFees: { min: 28950, max: 39010 },
    entryRequirements: {
      undergraduate: {
        aLevels: "A*A*A",
        ibPoints: 39,
        cgpa: 9.5,
        percentage: 95,
        ielts: 7.5,
        toefl: 110,
      },
      postgraduate: {
        degreeClass: "First Class",
        cgpa: 9.0,
        percentage: 90,
        ielts: 7.5,
        toefl: 110,
      },
    },
    popularSubjects: ["Computer Science", "Medicine", "Law", "Natural Sciences", "Social Sciences"],
    website: "https://www.ox.ac.uk",
  },
  {
    id: "cambridge",
    name: "University of Cambridge",
    city: "Cambridge",
    isLondon: false,
    tier: "Ancient",
    founded: 1209,
    acceptanceRate: 18,
    internationalFees: { min: 24507, max: 58038 },
    entryRequirements: {
      undergraduate: {
        aLevels: "A*A*A",
        ibPoints: 40,
        cgpa: 9.5,
        percentage: 95,
        ielts: 7.5,
        toefl: 110,
      },
      postgraduate: {
        degreeClass: "First Class",
        cgpa: 9.0,
        percentage: 90,
        ielts: 7.5,
        toefl: 110,
      },
    },
    popularSubjects: ["Natural Sciences", "Computer Science", "Engineering", "Medicine", "Law"],
    website: "https://www.cam.ac.uk",
  },
  {
    id: "imperial",
    name: "Imperial College London",
    city: "London",
    isLondon: true,
    tier: "Russell Group",
    founded: 1907,
    acceptanceRate: 14,
    internationalFees: { min: 35100, max: 46500 },
    entryRequirements: {
      undergraduate: {
        aLevels: "A*AA",
        ibPoints: 38,
        cgpa: 9.0,
        percentage: 92,
        ielts: 6.5,
        toefl: 92,
      },
      postgraduate: {
        degreeClass: "2:1 (Upper Second)",
        cgpa: 8.5,
        percentage: 85,
        ielts: 6.5,
        toefl: 92,
      },
    },
    popularSubjects: ["Engineering", "Natural Sciences", "Computer Science", "Medicine"],
    website: "https://www.imperial.ac.uk",
  },
  {
    id: "ucl",
    name: "University College London",
    city: "London",
    isLondon: true,
    tier: "Russell Group",
    founded: 1826,
    acceptanceRate: 16,
    internationalFees: { min: 27500, max: 38000 },
    entryRequirements: {
      undergraduate: {
        aLevels: "A*AA",
        ibPoints: 38,
        cgpa: 9.0,
        percentage: 90,
        ielts: 6.5,
        toefl: 92,
      },
      postgraduate: {
        degreeClass: "2:1 (Upper Second)",
        cgpa: 8.0,
        percentage: 82,
        ielts: 6.5,
        toefl: 92,
      },
    },
    popularSubjects: ["Medicine", "Law", "Architecture", "Social Sciences", "Arts & Humanities"],
    website: "https://www.ucl.ac.uk",
  },
  {
    id: "lse",
    name: "London School of Economics",
    city: "London",
    isLondon: true,
    tier: "Russell Group",
    founded: 1895,
    acceptanceRate: 16,
    internationalFees: { min: 22000, max: 32000 },
    entryRequirements: {
      undergraduate: {
        aLevels: "AAA",
        ibPoints: 38,
        cgpa: 9.0,
        percentage: 90,
        ielts: 7.0,
        toefl: 107,
      },
      postgraduate: {
        degreeClass: "2:1 (Upper Second)",
        cgpa: 8.0,
        percentage: 82,
        ielts: 7.0,
        toefl: 107,
      },
    },
    popularSubjects: ["Business", "Social Sciences", "Law", "Arts & Humanities"],
    website: "https://www.lse.ac.uk",
  },
  {
    id: "kings",
    name: "King's College London",
    city: "London",
    isLondon: true,
    tier: "Russell Group",
    founded: 1829,
    acceptanceRate: 21,
    internationalFees: { min: 23400, max: 36800 },
    entryRequirements: {
      undergraduate: {
        aLevels: "AAA",
        ibPoints: 35,
        cgpa: 8.5,
        percentage: 85,
        ielts: 6.5,
        toefl: 92,
      },
      postgraduate: {
        degreeClass: "2:1 (Upper Second)",
        cgpa: 7.5,
        percentage: 75,
        ielts: 6.5,
        toefl: 92,
      },
    },
    popularSubjects: ["Medicine", "Law", "Natural Sciences", "Social Sciences"],
    website: "https://www.kcl.ac.uk",
  },
  {
    id: "edinburgh",
    name: "University of Edinburgh",
    city: "Edinburgh",
    isLondon: false,
    tier: "Ancient",
    founded: 1583,
    acceptanceRate: 36,
    internationalFees: { min: 23700, max: 34800 },
    entryRequirements: {
      undergraduate: {
        aLevels: "AAA",
        ibPoints: 37,
        cgpa: 8.5,
        percentage: 87,
        ielts: 6.5,
        toefl: 92,
      },
      postgraduate: {
        degreeClass: "2:1 (Upper Second)",
        cgpa: 7.5,
        percentage: 75,
        ielts: 6.5,
        toefl: 92,
      },
    },
    popularSubjects: ["Computer Science", "Medicine", "Social Sciences", "Arts & Humanities"],
    website: "https://www.ed.ac.uk",
  },
  {
    id: "manchester",
    name: "University of Manchester",
    city: "Manchester",
    isLondon: false,
    tier: "Russell Group",
    founded: 1824,
    acceptanceRate: 57,
    internationalFees: { min: 21000, max: 32000 },
    entryRequirements: {
      undergraduate: {
        aLevels: "AAB",
        ibPoints: 35,
        cgpa: 8.0,
        percentage: 80,
        ielts: 6.5,
        toefl: 90,
      },
      postgraduate: {
        degreeClass: "2:1 (Upper Second)",
        cgpa: 7.0,
        percentage: 70,
        ielts: 6.5,
        toefl: 90,
      },
    },
    popularSubjects: ["Computer Science", "Business", "Engineering", "Medicine", "Social Sciences"],
    website: "https://www.manchester.ac.uk",
  },
  {
    id: "bristol",
    name: "University of Bristol",
    city: "Bristol",
    isLondon: false,
    tier: "Russell Group",
    founded: 1909,
    acceptanceRate: 42,
    internationalFees: { min: 21900, max: 31500 },
    entryRequirements: {
      undergraduate: {
        aLevels: "AAA",
        ibPoints: 36,
        cgpa: 8.5,
        percentage: 85,
        ielts: 6.5,
        toefl: 92,
      },
      postgraduate: {
        degreeClass: "2:1 (Upper Second)",
        cgpa: 7.5,
        percentage: 75,
        ielts: 6.5,
        toefl: 92,
      },
    },
    popularSubjects: ["Engineering", "Computer Science", "Law", "Arts & Humanities"],
    website: "https://www.bristol.ac.uk",
  },
  {
    id: "warwick",
    name: "University of Warwick",
    city: "Coventry",
    isLondon: false,
    tier: "Russell Group",
    founded: 1965,
    acceptanceRate: 46,
    internationalFees: { min: 22250, max: 30650 },
    entryRequirements: {
      undergraduate: {
        aLevels: "AAA",
        ibPoints: 38,
        cgpa: 8.5,
        percentage: 85,
        ielts: 6.5,
        toefl: 92,
      },
      postgraduate: {
        degreeClass: "2:1 (Upper Second)",
        cgpa: 7.5,
        percentage: 75,
        ielts: 6.5,
        toefl: 90,
      },
    },
    popularSubjects: ["Business", "Computer Science", "Engineering", "Social Sciences"],
    website: "https://www.warwick.ac.uk",
  },
  {
    id: "glasgow",
    name: "University of Glasgow",
    city: "Glasgow",
    isLondon: false,
    tier: "Ancient",
    founded: 1451,
    acceptanceRate: 52,
    internationalFees: { min: 19800, max: 29600 },
    entryRequirements: {
      undergraduate: {
        aLevels: "AAB",
        ibPoints: 34,
        cgpa: 7.5,
        percentage: 78,
        ielts: 6.5,
        toefl: 90,
      },
      postgraduate: {
        degreeClass: "2:1 (Upper Second)",
        cgpa: 7.0,
        percentage: 70,
        ielts: 6.5,
        toefl: 90,
      },
    },
    popularSubjects: ["Medicine", "Law", "Social Sciences", "Arts & Humanities"],
    website: "https://www.gla.ac.uk",
  },
  {
    id: "birmingham",
    name: "University of Birmingham",
    city: "Birmingham",
    isLondon: false,
    tier: "Russell Group",
    founded: 1900,
    acceptanceRate: 55,
    internationalFees: { min: 19800, max: 28700 },
    entryRequirements: {
      undergraduate: {
        aLevels: "AAB",
        ibPoints: 32,
        cgpa: 7.5,
        percentage: 78,
        ielts: 6.0,
        toefl: 88,
      },
      postgraduate: {
        degreeClass: "2:1 (Upper Second)",
        cgpa: 7.0,
        percentage: 70,
        ielts: 6.5,
        toefl: 88,
      },
    },
    popularSubjects: ["Engineering", "Business", "Medicine", "Law"],
    website: "https://www.birmingham.ac.uk",
  },
  {
    id: "sheffield",
    name: "University of Sheffield",
    city: "Sheffield",
    isLondon: false,
    tier: "Russell Group",
    founded: 1905,
    acceptanceRate: 67,
    internationalFees: { min: 18450, max: 26800 },
    entryRequirements: {
      undergraduate: {
        aLevels: "ABB",
        ibPoints: 32,
        cgpa: 7.0,
        percentage: 75,
        ielts: 6.0,
        toefl: 80,
      },
      postgraduate: {
        degreeClass: "2:1 (Upper Second)",
        cgpa: 6.5,
        percentage: 65,
        ielts: 6.5,
        toefl: 88,
      },
    },
    popularSubjects: ["Engineering", "Computer Science", "Architecture", "Natural Sciences"],
    website: "https://www.sheffield.ac.uk",
  },
  {
    id: "leeds",
    name: "University of Leeds",
    city: "Leeds",
    isLondon: false,
    tier: "Russell Group",
    founded: 1904,
    acceptanceRate: 61,
    internationalFees: { min: 19250, max: 27500 },
    entryRequirements: {
      undergraduate: {
        aLevels: "ABB",
        ibPoints: 33,
        cgpa: 7.0,
        percentage: 75,
        ielts: 6.0,
        toefl: 79,
      },
      postgraduate: {
        degreeClass: "2:1 (Upper Second)",
        cgpa: 6.5,
        percentage: 65,
        ielts: 6.0,
        toefl: 79,
      },
    },
    popularSubjects: ["Business", "Engineering", "Arts & Humanities", "Social Sciences"],
    website: "https://www.leeds.ac.uk",
  },
  {
    id: "southampton",
    name: "University of Southampton",
    city: "Southampton",
    isLondon: false,
    tier: "Russell Group",
    founded: 1952,
    acceptanceRate: 58,
    internationalFees: { min: 19100, max: 27600 },
    entryRequirements: {
      undergraduate: {
        aLevels: "AAB",
        ibPoints: 34,
        cgpa: 7.5,
        percentage: 78,
        ielts: 6.5,
        toefl: 88,
      },
      postgraduate: {
        degreeClass: "2:1 (Upper Second)",
        cgpa: 7.0,
        percentage: 70,
        ielts: 6.5,
        toefl: 88,
      },
    },
    popularSubjects: ["Engineering", "Computer Science", "Natural Sciences"],
    website: "https://www.soton.ac.uk",
  },
  {
    id: "nottingham",
    name: "University of Nottingham",
    city: "Nottingham",
    isLondon: false,
    tier: "Russell Group",
    founded: 1948,
    acceptanceRate: 61,
    internationalFees: { min: 18750, max: 26900 },
    entryRequirements: {
      undergraduate: {
        aLevels: "ABB",
        ibPoints: 32,
        cgpa: 7.0,
        percentage: 75,
        ielts: 6.0,
        toefl: 79,
      },
      postgraduate: {
        degreeClass: "2:1 (Upper Second)",
        cgpa: 6.5,
        percentage: 65,
        ielts: 6.0,
        toefl: 79,
      },
    },
    popularSubjects: ["Business", "Engineering", "Medicine", "Computer Science"],
    website: "https://www.nottingham.ac.uk",
  },
  {
    id: "liverpool",
    name: "University of Liverpool",
    city: "Liverpool",
    isLondon: false,
    tier: "Russell Group",
    founded: 1881,
    acceptanceRate: 64,
    internationalFees: { min: 18450, max: 25900 },
    entryRequirements: {
      undergraduate: {
        aLevels: "ABB",
        ibPoints: 30,
        cgpa: 7.0,
        percentage: 72,
        ielts: 6.0,
        toefl: 79,
      },
      postgraduate: {
        degreeClass: "2:1 (Upper Second)",
        cgpa: 6.5,
        percentage: 65,
        ielts: 6.0,
        toefl: 79,
      },
    },
    popularSubjects: ["Medicine", "Engineering", "Business", "Arts & Humanities"],
    website: "https://www.liverpool.ac.uk",
  },
  {
    id: "newcastle",
    name: "Newcastle University",
    city: "Newcastle",
    isLondon: false,
    tier: "Russell Group",
    founded: 1963,
    acceptanceRate: 62,
    internationalFees: { min: 18000, max: 27400 },
    entryRequirements: {
      undergraduate: {
        aLevels: "ABB",
        ibPoints: 32,
        cgpa: 7.0,
        percentage: 74,
        ielts: 6.0,
        toefl: 79,
      },
      postgraduate: {
        degreeClass: "2:1 (Upper Second)",
        cgpa: 6.5,
        percentage: 65,
        ielts: 6.0,
        toefl: 79,
      },
    },
    popularSubjects: ["Medicine", "Architecture", "Engineering", "Computer Science"],
    website: "https://www.ncl.ac.uk",
  },
  {
    id: "durham",
    name: "Durham University",
    city: "Durham",
    isLondon: false,
    tier: "Russell Group",
    founded: 1832,
    acceptanceRate: 31,
    internationalFees: { min: 19500, max: 27000 },
    entryRequirements: {
      undergraduate: {
        aLevels: "AAA",
        ibPoints: 37,
        cgpa: 8.5,
        percentage: 85,
        ielts: 6.5,
        toefl: 92,
      },
      postgraduate: {
        degreeClass: "2:1 (Upper Second)",
        cgpa: 7.5,
        percentage: 75,
        ielts: 6.5,
        toefl: 92,
      },
    },
    popularSubjects: ["Law", "Business", "Natural Sciences", "Arts & Humanities"],
    website: "https://www.durham.ac.uk",
  },
  {
    id: "exeter",
    name: "University of Exeter",
    city: "Exeter",
    isLondon: false,
    tier: "Russell Group",
    founded: 1955,
    acceptanceRate: 55,
    internationalFees: { min: 18450, max: 25600 },
    entryRequirements: {
      undergraduate: {
        aLevels: "AAB",
        ibPoints: 34,
        cgpa: 7.5,
        percentage: 78,
        ielts: 6.0,
        toefl: 80,
      },
      postgraduate: {
        degreeClass: "2:1 (Upper Second)",
        cgpa: 7.0,
        percentage: 70,
        ielts: 6.0,
        toefl: 80,
      },
    },
    popularSubjects: ["Business", "Law", "Natural Sciences", "Social Sciences"],
    website: "https://www.exeter.ac.uk",
  },
  {
    id: "cardiff",
    name: "Cardiff University",
    city: "Cardiff",
    isLondon: false,
    tier: "Russell Group",
    founded: 1883,
    acceptanceRate: 66,
    internationalFees: { min: 18700, max: 26500 },
    entryRequirements: {
      undergraduate: {
        aLevels: "ABB",
        ibPoints: 30,
        cgpa: 7.0,
        percentage: 72,
        ielts: 6.0,
        toefl: 79,
      },
      postgraduate: {
        degreeClass: "2:1 (Upper Second)",
        cgpa: 6.5,
        percentage: 65,
        ielts: 6.0,
        toefl: 79,
      },
    },
    popularSubjects: ["Medicine", "Law", "Engineering", "Social Sciences"],
    website: "https://www.cardiff.ac.uk",
  },
  {
    id: "qub",
    name: "Queen's University Belfast",
    city: "Belfast",
    isLondon: false,
    tier: "Russell Group",
    founded: 1845,
    acceptanceRate: 69,
    internationalFees: { min: 17000, max: 24000 },
    entryRequirements: {
      undergraduate: {
        aLevels: "ABB",
        ibPoints: 30,
        cgpa: 6.5,
        percentage: 70,
        ielts: 6.0,
        toefl: 79,
      },
      postgraduate: {
        degreeClass: "2:1 (Upper Second)",
        cgpa: 6.0,
        percentage: 60,
        ielts: 6.0,
        toefl: 79,
      },
    },
    popularSubjects: ["Medicine", "Law", "Engineering", "Business"],
    website: "https://www.qub.ac.uk",
  },
  {
    id: "york",
    name: "University of York",
    city: "York",
    isLondon: false,
    tier: "Russell Group",
    founded: 1963,
    acceptanceRate: 60,
    internationalFees: { min: 18000, max: 25000 },
    entryRequirements: {
      undergraduate: {
        aLevels: "ABB",
        ibPoints: 33,
        cgpa: 7.0,
        percentage: 74,
        ielts: 6.0,
        toefl: 79,
      },
      postgraduate: {
        degreeClass: "2:1 (Upper Second)",
        cgpa: 6.5,
        percentage: 65,
        ielts: 6.0,
        toefl: 79,
      },
    },
    popularSubjects: ["Computer Science", "Social Sciences", "Arts & Humanities", "Natural Sciences"],
    website: "https://www.york.ac.uk",
  },
  {
    id: "lancaster",
    name: "Lancaster University",
    city: "Lancaster",
    isLondon: false,
    tier: "Red Brick",
    founded: 1964,
    acceptanceRate: 57,
    internationalFees: { min: 17600, max: 24200 },
    entryRequirements: {
      undergraduate: {
        aLevels: "ABB",
        ibPoints: 30,
        cgpa: 7.0,
        percentage: 72,
        ielts: 6.0,
        toefl: 79,
      },
      postgraduate: {
        degreeClass: "2:1 (Upper Second)",
        cgpa: 6.5,
        percentage: 65,
        ielts: 6.0,
        toefl: 79,
      },
    },
    popularSubjects: ["Business", "Computer Science", "Social Sciences", "Engineering"],
    website: "https://www.lancaster.ac.uk",
  },
];

export type QualificationType =
  | "alevel"
  | "ib"
  | "cgpa10"
  | "percentage"
  | "gpa4";

export type EligibilityProfile = {
  studyLevel: StudyLevel;
  qualificationType: QualificationType;
  gradeValue: number;
  ielts: number | null;
  toefl: number | null;
  englishNotTaken: boolean;
  subject: SubjectArea | null;
  budgetGbpPerYear: number | null;
  nationality: string;
  isLondonPreferred: boolean | null;
};

export type MatchResult = {
  university: University;
  verdict: "eligible" | "borderline" | "reach" | "not-yet";
  gaps: { field: string; yours: string; required: string }[];
  matchScore: number; // 0-5
};

function normalizeToCgpa(type: QualificationType, value: number): number {
  switch (type) {
    case "cgpa10": return value;
    case "percentage": return (value / 100) * 10;
    case "gpa4": return (value / 4) * 10;
    case "alevel": return value; // pre-scored externally
    case "ib": return (value / 45) * 10;
    default: return value;
  }
}

export function evaluateMatch(
  profile: EligibilityProfile,
  university: University
): MatchResult {
  const req =
    profile.studyLevel === "undergraduate"
      ? university.entryRequirements.undergraduate
      : university.entryRequirements.postgraduate;

  if (!req) {
    return {
      university,
      verdict: "not-yet",
      gaps: [{ field: "Level", yours: profile.studyLevel, required: "Not offered" }],
      matchScore: 0,
    };
  }

  const gaps: { field: string; yours: string; required: string }[] = [];
  let score = 5;

  const normalizedCgpa = normalizeToCgpa(profile.qualificationType, profile.gradeValue);
  const requiredCgpa = profile.studyLevel === "undergraduate"
    ? (req as { cgpa: number }).cgpa
    : (req as { cgpa: number }).cgpa;

  if (normalizedCgpa < requiredCgpa - 1) {
    gaps.push({
      field: "Grades",
      yours: `CGPA ${normalizedCgpa.toFixed(1)}/10`,
      required: `${requiredCgpa.toFixed(1)}/10 minimum`,
    });
    score -= 2;
  } else if (normalizedCgpa < requiredCgpa) {
    gaps.push({
      field: "Grades",
      yours: `CGPA ${normalizedCgpa.toFixed(1)}/10`,
      required: `${requiredCgpa.toFixed(1)}/10 (borderline)`,
    });
    score -= 1;
  }

  const ieltsReq = req.ielts;
  if (profile.englishNotTaken) {
    gaps.push({ field: "English Test", yours: "Not taken", required: `IELTS ${ieltsReq}+` });
    score -= 1;
  } else if (profile.ielts !== null && profile.ielts < ieltsReq) {
    gaps.push({
      field: "IELTS",
      yours: `${profile.ielts}`,
      required: `${ieltsReq} minimum`,
    });
    score -= profile.ielts < ieltsReq - 0.5 ? 2 : 1;
  }

  if (
    profile.budgetGbpPerYear !== null &&
    profile.budgetGbpPerYear < university.internationalFees.min
  ) {
    gaps.push({
      field: "Budget",
      yours: `£${profile.budgetGbpPerYear.toLocaleString()}/yr`,
      required: `£${university.internationalFees.min.toLocaleString()}+ /yr`,
    });
    score -= 1;
  }

  const clampedScore = Math.max(0, Math.min(5, score));
  const verdict =
    gaps.length === 0
      ? "eligible"
      : clampedScore >= 4
      ? "borderline"
      : clampedScore >= 2
      ? "reach"
      : "not-yet";

  return { university, verdict, gaps, matchScore: clampedScore };
}

export const ukAtAGlance = {
  universities: 170,
  avgTuitionMin: 10000,
  avgTuitionMax: 38000,
  maintenanceLondon: 1334,
  maintenanceOutside: 1023,
  visaProcessingWeeks: 3,
  postStudyWorkYears: 2,
  ugDeadline: "31 January (UCAS)",
  currency: "GBP",
};

export const ukVisaSteps = [
  {
    step: 1,
    title: "Receive Your CAS",
    desc: "Once you accept an unconditional offer, your university sends you a Confirmation of Acceptance for Studies (CAS) number. This is the key that unlocks your visa application.",
    cost: null,
    failPoint: "Universities only issue CAS close to your course start date — usually 3 months before. Don't apply for the visa without it.",
  },
  {
    step: 2,
    title: "Apply Online",
    desc: "Submit your Student Visa application on the UK Visas and Immigration portal. You'll need your CAS, passport, financial evidence, and proof of English proficiency.",
    cost: 490,
    failPoint: "Insufficient financial evidence is the #1 reason for refusal. You must show tuition + 9 months of maintenance funds held for 28 consecutive days.",
  },
  {
    step: 3,
    title: "Pay IHS Surcharge",
    desc: "The Immigration Health Surcharge gives you access to the NHS during your stay. It's paid upfront for the full duration of your visa.",
    cost: 776,
    failPoint: "The IHS cost is per year — a 3-year course costs £776 × 3 = £2,328 upfront. Factor this into your budget early.",
  },
  {
    step: 4,
    title: "Book Biometrics",
    desc: "Visit a UKVI Visa Application Centre to submit your fingerprints and photo. Available worldwide — book early as slots fill fast in peak season (June–August).",
    cost: null,
    failPoint: "Biometric centres in South Asia book up 4–6 weeks in advance during peak periods. Book the moment you submit your online application.",
  },
  {
    step: 5,
    title: "Decision & BRP",
    desc: "Standard processing is 3 weeks from biometrics. You'll receive a visa vignette in your passport. Collect your Biometric Residence Permit (BRP) in the UK.",
    cost: null,
    failPoint: "The vignette is valid for 30 days to travel. Do not book flights before your decision arrives.",
  },
];

export const ukTimeline = [
  { month: -18, label: "Research", desc: "Shortlist countries and course types. Begin IELTS/TOEFL prep." },
  { month: -15, label: "IELTS Test", desc: "Sit your English test. You may need 2–3 attempts — budget time." },
  { month: -12, label: "Shortlist Unis", desc: "Finalize 5–8 universities. Start drafting SOP and personal statement." },
  { month: -10, label: "Approach Referees", desc: "Request letters of recommendation. Give referees 6+ weeks notice." },
  { month: -8, label: "Submit Applications", desc: "UG: submit via UCAS by Jan 31. PG: apply directly to universities." },
  { month: -5, label: "Receive Offers", desc: "Universities respond with conditional or unconditional offers. Accept your first choice." },
  { month: -4, label: "Meet Conditions", desc: "Submit final transcripts, certificates, and any outstanding documents to meet offer conditions." },
  { month: -3, label: "Receive CAS", desc: "University issues your CAS number once you hold an unconditional offer." },
  { month: -2, label: "Apply for Visa", desc: "Submit Student Visa application, pay IHS surcharge, book biometrics appointment." },
  { month: -1, label: "Visa Decision", desc: "Collect your vignette. Book flights. Arrange accommodation." },
  { month: 0, label: "Arrive in UK", desc: "Collect BRP within 10 days of arrival. Register with GP. Open UK bank account." },
];
