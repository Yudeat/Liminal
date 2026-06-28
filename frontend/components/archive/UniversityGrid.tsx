"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineFunnel, HiOutlineArrowUpRight, HiOutlineStar } from "react-icons/hi2";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { MatchResult, EligibilityProfile, ukUniversities, University, SubjectArea } from "@/frontend/lib/archive-data";

type Props = {
  results: MatchResult[] | null;
  profile: EligibilityProfile | null;
};

const verdictStyles = {
  eligible: { label: "Eligible", color: "#80c4a0", dot: "bg-[#80c4a0]" },
  borderline: { label: "Borderline", color: "#e8c4a0", dot: "bg-[#e8c4a0]" },
  reach: { label: "Reach", color: "#c8a0e8", dot: "bg-[#c8a0e8]" },
  "not-yet": { label: "Not Yet", color: "#e87070", dot: "bg-[#e87070]" },
};

const subjects: SubjectArea[] = [
  "Computer Science", "Engineering", "Business", "Medicine", "Law",
  "Arts & Humanities", "Social Sciences", "Natural Sciences", "Architecture", "Education",
];

function StarScore({ score }: { score: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <HiOutlineStar
          key={i}
          size={11}
          className={i <= score ? "text-[#e8c4a0] fill-[#e8c4a0]" : "text-white/15"}
        />
      ))}
    </div>
  );
}

function UniversityCard({
  university,
  result,
  profile,
}: {
  university: University;
  result?: MatchResult;
  profile: EligibilityProfile | null;
}) {
  const [expanded, setExpanded] = useState(false);
  const verdict = result ? verdictStyles[result.verdict] : null;
  const req = profile
    ? profile.studyLevel === "undergraduate"
      ? university.entryRequirements.undergraduate
      : university.entryRequirements.postgraduate
    : university.entryRequirements.undergraduate;

  return (
    <motion.div
      layout
      className="bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-300"
    >
      <div className="p-6">
        {/* Top row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 border border-white/10 px-2 py-0.5 rounded-full">
                {university.tier}
              </span>
              <span className="text-[9px] font-black uppercase tracking-widest text-white/30">
                {university.city}
              </span>
            </div>
            <h3 className="text-base font-black uppercase tracking-tight text-white leading-tight">
              {university.name}
            </h3>
          </div>

          {verdict ? (
            <div
              className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest"
              style={{ background: `${verdict.color}15`, border: `1px solid ${verdict.color}30`, color: verdict.color }}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${verdict.dot}`} />
              {verdict.label}
            </div>
          ) : (
            <span className="text-[10px] font-black text-white/25 uppercase tracking-widest shrink-0">
              {university.acceptanceRate}% accept
            </span>
          )}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div>
            <p className="text-[9px] font-black uppercase tracking-widest text-white/35 mb-0.5">Tuition/yr</p>
            <p className="text-sm font-black text-white">
              £{(university.internationalFees.min / 1000).toFixed(0)}k–{(university.internationalFees.max / 1000).toFixed(0)}k
            </p>
          </div>
          <div>
            <p className="text-[9px] font-black uppercase tracking-widest text-white/35 mb-0.5">
              {profile?.studyLevel === "postgraduate" ? "Min Degree" : "A-Levels"}
            </p>
            <p className="text-sm font-black text-white">
              {profile?.studyLevel === "postgraduate"
                ? (university.entryRequirements.postgraduate?.degreeClass.split(" ")[0] ?? "—")
                : (university.entryRequirements.undergraduate?.aLevels ?? "—")}
            </p>
          </div>
          <div>
            <p className="text-[9px] font-black uppercase tracking-widest text-white/35 mb-0.5">IELTS Min</p>
            <p className="text-sm font-black text-white">{req?.ielts ?? "—"}</p>
          </div>
        </div>

        {/* Match score if profile present */}
        {result && (
          <div className="flex items-center gap-2 mb-4">
            <StarScore score={result.matchScore} />
            <span className="text-[10px] text-white/40 font-medium">Match score</span>
          </div>
        )}

        {/* Gap list if any */}
        {result && result.gaps.length > 0 && (
          <div className="space-y-1.5 mb-4">
            {result.gaps.map((gap, i) => (
              <div key={i} className="flex items-start gap-2 text-[11px]">
                <FaXmark className="text-[#e87070] shrink-0 mt-0.5" size={10} />
                <span className="text-white/55">
                  <span className="text-white/75 font-bold">{gap.field}:</span> You have {gap.yours} — need {gap.required}
                </span>
              </div>
            ))}
          </div>
        )}

        {result && result.gaps.length === 0 && (
          <div className="flex items-center gap-2 mb-4 text-[11px] text-[#80c4a0]">
            <FaCheck size={10} />
            <span>Your profile meets all core requirements</span>
          </div>
        )}

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white/70 transition-colors flex items-center justify-center gap-1.5 pt-2 border-t border-white/6"
        >
          {expanded ? "Hide Requirements" : "Full Requirements"}
          <HiOutlineArrowUpRight size={11} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Expanded details */}
      {expanded && req && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border-t border-white/8 px-6 py-5 bg-white/[0.02] space-y-5"
        >
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/45 mb-3">Grade Requirements</p>
            <div className="space-y-2">
              {"aLevels" in req && req.aLevels && (
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">A-Levels</span>
                  <span className="text-white font-bold">{req.aLevels}</span>
                </div>
              )}
              {"ibPoints" in req && req.ibPoints && (
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">IB Points</span>
                  <span className="text-white font-bold">{req.ibPoints}/45</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-white/50">CGPA (out of 10)</span>
                <span className="text-white font-bold">{req.cgpa}+</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/50">Percentage</span>
                <span className="text-white font-bold">{req.percentage}%+</span>
              </div>
              {"degreeClass" in req && req.degreeClass && (
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">UK Degree Class</span>
                  <span className="text-white font-bold">{req.degreeClass}</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/45 mb-3">English Requirements</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/50">IELTS Overall</span>
                <span className="text-white font-bold">{req.ielts}+</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/50">TOEFL iBT</span>
                <span className="text-white font-bold">{req.toefl}+</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/45 mb-3">Popular Subjects</p>
            <div className="flex flex-wrap gap-2">
              {university.popularSubjects.map((s) => (
                <span key={s} className="text-[9px] font-black uppercase tracking-wide text-white/50 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {university.notes && (
            <p className="text-[11px] text-white/45 leading-relaxed border-t border-white/6 pt-4">
              {university.notes}
            </p>
          )}

          <a
            href={university.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#e8c4a0]/70 hover:text-[#e8c4a0] transition-colors"
          >
            Official Website <HiOutlineArrowUpRight size={11} />
          </a>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function UniversityGrid({ results, profile }: Props) {
  const [filterVerdict, setFilterVerdict] = useState<string>("all");
  const [filterSubject, setFilterSubject] = useState<string>("all");
  const [filterLondon, setFilterLondon] = useState<string>("all");
  const [filterRussell, setFilterRussell] = useState(false);
  const [maxBudget, setMaxBudget] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const resultMap = useMemo(() => {
    const map = new Map<string, MatchResult>();
    results?.forEach((r) => map.set(r.university.id, r));
    return map;
  }, [results]);

  const universities = results
    ? results.map((r) => r.university)
    : ukUniversities;

  const filtered = useMemo(() => {
    return universities.filter((uni) => {
      const result = resultMap.get(uni.id);

      if (filterVerdict !== "all" && result && result.verdict !== filterVerdict) return false;
      if (filterLondon === "london" && !uni.isLondon) return false;
      if (filterLondon === "outside" && uni.isLondon) return false;
      if (filterRussell && uni.tier !== "Russell Group" && uni.tier !== "Ancient") return false;
      if (filterSubject !== "all" && !uni.popularSubjects.includes(filterSubject as SubjectArea)) return false;
      if (maxBudget && uni.internationalFees.min > parseInt(maxBudget)) return false;

      return true;
    });
  }, [universities, resultMap, filterVerdict, filterLondon, filterRussell, filterSubject, maxBudget]);

  const verdictCounts = useMemo(() => {
    if (!results) return null;
    const counts = { eligible: 0, borderline: 0, reach: 0, "not-yet": 0 };
    results.forEach((r) => counts[r.verdict]++);
    return counts;
  }, [results]);

  return (
    <section>
      {/* Header */}
      <div className="flex items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/45 mb-3">
            UK Universities
          </p>
          <div className="flex items-baseline gap-3">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-white">
              {filtered.length} {results ? "Matched" : "Indexed"}
            </h2>
            {results && verdictCounts && (
              <div className="flex gap-3 pb-0.5">
                <span className="text-[10px] font-black text-[#80c4a0]">{verdictCounts.eligible} eligible</span>
                <span className="text-[10px] font-black text-[#e8c4a0]">{verdictCounts.borderline} borderline</span>
                <span className="text-[10px] font-black text-[#e87070]">{verdictCounts["not-yet"]} not yet</span>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
            showFilters ? "bg-white/10 text-white border border-white/15" : "bg-white/5 border border-white/8 text-white/55 hover:border-white/15"
          }`}
        >
          <HiOutlineFunnel size={13} />
          Filters
        </button>
      </div>

      {/* Filter bar */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/[0.03] border border-white/8 rounded-2xl p-5 mb-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {results && (
            <div>
              <label className="text-[9px] font-black uppercase tracking-widest text-white/40 block mb-2">Match</label>
              <select
                value={filterVerdict}
                onChange={(e) => setFilterVerdict(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-xs font-medium outline-none"
              >
                <option value="all">All</option>
                <option value="eligible">Eligible</option>
                <option value="borderline">Borderline</option>
                <option value="reach">Reach</option>
                <option value="not-yet">Not Yet</option>
              </select>
            </div>
          )}

          <div>
            <label className="text-[9px] font-black uppercase tracking-widest text-white/40 block mb-2">Location</label>
            <select
              value={filterLondon}
              onChange={(e) => setFilterLondon(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-xs font-medium outline-none"
            >
              <option value="all">All UK</option>
              <option value="london">London Only</option>
              <option value="outside">Outside London</option>
            </select>
          </div>

          <div>
            <label className="text-[9px] font-black uppercase tracking-widest text-white/40 block mb-2">Subject</label>
            <select
              value={filterSubject}
              onChange={(e) => setFilterSubject(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-xs font-medium outline-none"
            >
              <option value="all">All Subjects</option>
              {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div>
            <label className="text-[9px] font-black uppercase tracking-widest text-white/40 block mb-2">Max Budget (£/yr)</label>
            <input
              type="number"
              value={maxBudget}
              onChange={(e) => setMaxBudget(e.target.value)}
              placeholder="No limit"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-xs font-medium outline-none placeholder:text-white/25"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterRussell(!filterRussell)}
              className={`w-4 h-4 rounded border transition-all ${
                filterRussell ? "bg-[#e8c4a0] border-[#e8c4a0]" : "border-white/20 bg-white/5"
              }`}
            >
              {filterRussell && <span className="text-black text-[8px] flex items-center justify-center w-full h-full">✓</span>}
            </button>
            <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Russell Group / Ancient Only</span>
          </div>
        </motion.div>
      )}

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-white/40">
          <HiOutlineAcademicCap size={40} className="mx-auto mb-4 opacity-30" />
          <p className="font-black uppercase tracking-widest text-sm">No universities match your filters</p>
          <p className="text-xs mt-2">Try relaxing your budget or removing subject filters</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((uni) => (
            <UniversityCard
              key={uni.id}
              university={uni}
              result={resultMap.get(uni.id)}
              profile={profile}
            />
          ))}
        </div>
      )}
    </section>
  );
}
