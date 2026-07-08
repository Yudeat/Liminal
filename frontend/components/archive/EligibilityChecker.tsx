"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineCheckCircle, HiOutlineXCircle, HiOutlineExclamationCircle, HiOutlineArrowRight, HiOutlineSparkles } from "react-icons/hi2";
import {
  EligibilityProfile,
  MatchResult,
  SubjectArea,
  QualificationType,
  StudyLevel,
  ukUniversities,
  evaluateMatch,
} from "@/frontend/lib/archive-data";

type Props = {
  onResults: (results: MatchResult[], profile: EligibilityProfile) => void;
};

const subjects: SubjectArea[] = [
  "Computer Science", "Engineering", "Business", "Medicine", "Law",
  "Arts & Humanities", "Social Sciences", "Natural Sciences", "Architecture", "Education",
];

const qualTypes: { value: QualificationType; label: string; placeholder: string; max: number }[] = [
  { value: "percentage", label: "Percentage (%)", placeholder: "e.g. 85", max: 100 },
  { value: "cgpa10", label: "CGPA (out of 10)", placeholder: "e.g. 8.5", max: 10 },
  { value: "gpa4", label: "GPA (out of 4)", placeholder: "e.g. 3.6", max: 4 },
  { value: "ib", label: "IB Points (out of 45)", placeholder: "e.g. 36", max: 45 },
];

const verdictConfig = {
  eligible: {
    label: "Likely Eligible",
    color: "#80c4a0",
    bg: "rgba(128,196,160,0.08)",
    border: "rgba(128,196,160,0.25)",
    icon: HiOutlineCheckCircle,
  },
  borderline: {
    label: "Borderline",
    color: "#f9a8d4",
    bg: "rgba(232,196,160,0.08)",
    border: "rgba(232,196,160,0.25)",
    icon: HiOutlineExclamationCircle,
  },
  reach: {
    label: "Reach",
    color: "#c8a0e8",
    bg: "rgba(200,160,232,0.08)",
    border: "rgba(200,160,232,0.25)",
    icon: HiOutlineExclamationCircle,
  },
  "not-yet": {
    label: "Not Yet",
    color: "#e87070",
    bg: "rgba(232,112,112,0.08)",
    border: "rgba(232,112,112,0.25)",
    icon: HiOutlineXCircle,
  },
};

export default function EligibilityChecker({ onResults }: Props) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const [studyLevel, setStudyLevel] = useState<StudyLevel>("undergraduate");
  const [qualType, setQualType] = useState<QualificationType>("percentage");
  const [gradeValue, setGradeValue] = useState("");
  const [ielts, setIelts] = useState("");
  const [englishNotTaken, setEnglishNotTaken] = useState(false);
  const [subject, setSubject] = useState<SubjectArea | "">("");
  const [budget, setBudget] = useState("");
  const [isLondon, setIsLondon] = useState<boolean | null>(null);

  const currentQual = qualTypes.find((q) => q.value === qualType)!;

  function runEvaluation() {
    setLoading(true);
    const profile: EligibilityProfile = {
      studyLevel,
      qualificationType: qualType,
      gradeValue: parseFloat(gradeValue) || 0,
      ielts: englishNotTaken ? null : parseFloat(ielts) || null,
      toefl: null,
      englishNotTaken,
      subject: subject || null,
      budgetGbpPerYear: budget ? parseInt(budget) : null,
      nationality: "International",
      isLondonPreferred: isLondon,
    };

    const results = ukUniversities
      .map((uni) => evaluateMatch(profile, uni))
      .sort((a, b) => b.matchScore - a.matchScore);

    setTimeout(() => {
      setLoading(false);
      onResults(results, profile);
      setOpen(false);
    }, 800);
  }

  const steps = [
    {
      title: "What are you applying for?",
      content: (
        <div className="grid grid-cols-2 gap-3">
          {(["undergraduate", "postgraduate"] as StudyLevel[]).map((lvl) => (
            <button
              key={lvl}
              onClick={() => setStudyLevel(lvl)}
              className={`py-4 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                studyLevel === lvl
                  ? "bg-[#f9a8d4] text-black"
                  : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/8"
              }`}
            >
              {lvl === "undergraduate" ? "Undergraduate" : "Postgraduate"}
            </button>
          ))}
        </div>
      ),
      valid: true,
    },
    {
      title: "Your academic grades",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {qualTypes.map((qt) => (
              <button
                key={qt.value}
                onClick={() => setQualType(qt.value)}
                className={`py-2.5 px-3 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all text-left ${
                  qualType === qt.value
                    ? "bg-[#f9a8d4]/15 border border-[#f9a8d4]/40 text-[#f9a8d4]"
                    : "bg-white/4 border border-white/8 text-white/45 hover:border-white/15"
                }`}
              >
                {qt.label}
              </button>
            ))}
          </div>
          <input
            type="number"
            value={gradeValue}
            onChange={(e) => setGradeValue(e.target.value)}
            placeholder={currentQual.placeholder}
            max={currentQual.max}
            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-medium outline-none focus:border-white/25 transition-all placeholder:text-white/30"
          />
        </div>
      ),
      valid: !!gradeValue && parseFloat(gradeValue) > 0,
    },
    {
      title: "English proficiency",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setEnglishNotTaken(!englishNotTaken)}
              className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                englishNotTaken ? "bg-[#f9a8d4] border-[#f9a8d4]" : "border-white/20 bg-white/5"
              }`}
            >
              {englishNotTaken && <span className="text-black text-[10px]">✓</span>}
            </button>
            <span className="text-sm text-white/60 font-medium">I haven&apos;t taken IELTS/TOEFL yet</span>
          </div>
          {!englishNotTaken && (
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/45">IELTS Overall Band Score</label>
              <input
                type="number"
                value={ielts}
                onChange={(e) => setIelts(e.target.value)}
                placeholder="e.g. 7.0"
                step="0.5"
                min="1"
                max="9"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-medium outline-none focus:border-white/25 transition-all placeholder:text-white/30"
              />
            </div>
          )}
          {englishNotTaken && (
            <p className="text-[11px] text-white/40 leading-relaxed">
              No problem — we&apos;ll show you the requirement for each university so you know what score to target.
            </p>
          )}
        </div>
      ),
      valid: englishNotTaken || !!ielts,
    },
    {
      title: "Subject & budget",
      content: (
        <div className="space-y-4">
          <div>
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/45 block mb-2">Field of Study</label>
            <div className="grid grid-cols-2 gap-2">
              {subjects.map((s) => (
                <button
                  key={s}
                  onClick={() => setSubject(subject === s ? "" : s)}
                  className={`py-2 px-3 rounded-lg text-[10px] font-black uppercase tracking-wide transition-all text-left ${
                    subject === s
                      ? "bg-[#f9a8d4]/15 border border-[#f9a8d4]/40 text-[#f9a8d4]"
                      : "bg-white/4 border border-white/8 text-white/45 hover:border-white/15"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/45 block mb-2">Annual Budget (£ GBP)</label>
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="e.g. 25000"
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-medium outline-none focus:border-white/25 transition-all placeholder:text-white/30"
            />
          </div>
          <div>
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/45 block mb-2">Location preference</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { val: true, label: "London" },
                { val: false, label: "Outside London" },
                { val: null, label: "No Preference" },
              ].map((opt) => (
                <button
                  key={String(opt.val)}
                  onClick={() => setIsLondon(opt.val)}
                  className={`py-2.5 rounded-lg text-[10px] font-black uppercase tracking-wide transition-all ${
                    isLondon === opt.val
                      ? "bg-[#f9a8d4]/15 border border-[#f9a8d4]/40 text-[#f9a8d4]"
                      : "bg-white/4 border border-white/8 text-white/45 hover:border-white/15"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      ),
      valid: true,
    },
  ];

  const currentStep = steps[step];

  return (
    <div className="mb-16">
      <AnimatePresence>
        {!open ? (
          <motion.div
            key="cta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="relative bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10 overflow-hidden"
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(232,196,160,0.06) 0%, transparent 60%)" }}
            />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/8 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.22em] text-white/55">
                  <HiOutlineSparkles className="text-[#f9a8d4]" size={11} />
                  Eligibility Engine
                </div>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white leading-tight">
                  Is UK right for you?
                </h2>
                <p className="text-white/55 text-sm leading-relaxed max-w-sm">
                  4 quick questions. We cross-reference your profile against every Russell Group university and show you exactly where you stand.
                </p>
              </div>
              <button
                onClick={() => setOpen(true)}
                className="group shrink-0 inline-flex items-center gap-3 px-7 py-4 bg-white text-black rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-[#f9a8d4] transition-all active:scale-95"
              >
                Check My Profile
                <HiOutlineArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="bg-white/[0.04] border border-white/12 rounded-3xl p-8 md:p-10"
          >
            {/* Progress */}
            <div className="flex items-center gap-2 mb-8">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                    i <= step ? "bg-[#f9a8d4]" : "bg-white/10"
                  }`}
                />
              ))}
            </div>

            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/45 mb-3">
              Step {step + 1} of {steps.length}
            </p>
            <h3 className="text-xl font-black uppercase tracking-tight text-white mb-6">
              {currentStep.title}
            </h3>

            {currentStep.content}

            <div className="flex items-center justify-between mt-8">
              <button
                onClick={() => step === 0 ? setOpen(false) : setStep(step - 1)}
                className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white/70 transition-colors"
              >
                {step === 0 ? "Cancel" : "← Back"}
              </button>

              {step < steps.length - 1 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={!currentStep.valid}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-[#f9a8d4] disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
                >
                  Next
                  <HiOutlineArrowRight size={13} />
                </button>
              ) : (
                <button
                  onClick={runEvaluation}
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#f9a8d4] text-black rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white transition-all active:scale-95 disabled:opacity-60"
                >
                  {loading ? "Evaluating..." : "Run Evaluation"}
                  {!loading && <HiOutlineArrowRight size={13} />}
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-5">
        {Object.entries(verdictConfig).map(([key, cfg]) => (
          <div key={key} className="flex items-center gap-1.5">
            <cfg.icon size={12} style={{ color: cfg.color }} />
            <span className="text-[10px] font-black uppercase tracking-wider" style={{ color: cfg.color }}>
              {cfg.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
