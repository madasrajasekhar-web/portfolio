import React from 'react';
import { PencilLine } from 'lucide-react';
import { EducationEntry } from '../data/studentProfile';

interface EducationSectionProps {
  education: EducationEntry[];
  onOpenCustomizer: () => void;
  isEditMode: boolean;
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  education,
  onOpenCustomizer,
  isEditMode,
}) => {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#DCD6C8]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left 3 Columns: Sticky Chapter Index Rail */}
          <div className="lg:col-span-3 lg:sticky lg:top-24 space-y-3">
            <p className="text-xs font-mono text-[#8C3B2B] uppercase tracking-widest">
              CHAPTER 02 / QUALIFICATIONS
            </p>
            <h2
              id="education-heading"
              className="font-serif text-3xl sm:text-4xl font-medium text-[#141413] tracking-tight text-balance"
            >
              Academic Record & Degrees
            </h2>
            <p className="text-xs text-[#57544E] leading-relaxed">
              Verified university degrees, state assistant professor eligibility (APSET), and aggregation scores.
            </p>
            {isEditMode && (
              <button
                type="button"
                onClick={onOpenCustomizer}
                className="inline-flex items-center gap-1 text-xs font-medium text-[#183153] hover:underline underline-offset-4 pt-2"
              >
                <PencilLine className="w-3.5 h-3.5" />
                <span>Edit Academic Record</span>
              </button>
            )}
          </div>

          {/* Right 9 Columns: Chronological Ledger Cards */}
          <div className="lg:col-span-9 lg:border-l lg:border-[#DCD6C8] lg:pl-12">
            <ol className="space-y-6">
              {education.map((entry, idx) => (
                <li
                  key={entry.id}
                  className="bg-white rounded border border-[#DCD6C8] p-6 sm:p-8 shadow-[0_1px_4px_rgba(20,20,19,0.02)]"
                >
                  {/* Top Metadata Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#E6E1D6]">
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="text-[#8C3B2B] font-semibold tabular-nums">
                        RECORD 0{idx + 1}
                      </span>
                      <span className="text-[#DCD6C8]" aria-hidden="true">
                        /
                      </span>
                      <span className="text-[#141413] font-medium tabular-nums">
                        {entry.year}
                      </span>
                    </div>

                    <span className="text-xs font-mono font-semibold text-[#183153] tabular-nums">
                      {entry.aggregationOrStatus}
                    </span>
                  </div>

                  {/* Degree & Institution */}
                  <div className="mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#141413]">
                        {entry.degree}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-[#183153]">
                        {entry.institution} ·{' '}
                        <span className="font-normal text-[#57544E]">{entry.location}</span>
                      </p>
                    </div>
                    <p className="text-xs font-mono text-[#78746C]">
                      {entry.specialization}
                    </p>
                  </div>

                  {/* Subjects */}
                  <div className="mt-5 pt-4 border-t border-[#F3EFE6]">
                    <h4 className="text-[11px] font-mono text-[#78746C] uppercase tracking-wider">
                      Core Discipline & Subjects
                    </h4>
                    <p className="mt-1.5 text-xs sm:text-sm text-[#3D3B37] leading-relaxed">
                      {entry.coursework.join(' · ')}
                    </p>
                  </div>

                  {/* Academic Highlights */}
                  {entry.highlights.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-[#F3EFE6]">
                      <ul className="space-y-1.5 text-xs sm:text-sm text-[#2E2D2A] leading-relaxed">
                        {entry.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-baseline gap-2.5">
                            <span
                              className="text-xs font-mono text-[#8C3B2B] select-none"
                              aria-hidden="true"
                            >
                              —
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
