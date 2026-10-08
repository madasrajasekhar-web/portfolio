import React, { useState } from 'react';
import {
  Award,
  ExternalLink,
  PencilLine,
  Compass,
} from 'lucide-react';
import {
  AchievementCategory,
  AchievementEntry,
  CertificationEntry,
  ExperienceEntry,
  StudentProfile,
} from '../data/studentProfile';

interface AchievementsAndCertificationsProps {
  achievements: AchievementEntry[];
  certifications: CertificationEntry[];
  experience: ExperienceEntry[];
  futureDirection: StudentProfile['futureDirection'];
  onOpenCustomizer: () => void;
  isEditMode: boolean;
}

const ACHIEVEMENT_CATEGORIES: ('All' | AchievementCategory)[] = [
  'All',
  'Eligibility & Qualifications',
  'Patents',
  'Conferences',
  'Workshops',
  'Seminars & Webinars',
  'Faculty Development (FDP)',
];

export const AchievementsAndCertifications: React.FC<
  AchievementsAndCertificationsProps
> = ({
  achievements,
  certifications,
  experience,
  futureDirection,
  onOpenCustomizer,
  isEditMode,
}) => {
  const [selectedAchCategory, setSelectedAchCategory] = useState<
    'All' | AchievementCategory
  >('All');
  const [activeCertificate, setActiveCertificate] =
    useState<CertificationEntry | null>(null);

  const filteredAchievements =
    selectedAchCategory === 'All'
      ? achievements
      : achievements.filter((a) => a.category === selectedAchCategory);

  return (
    <>
      {/* CHAPTER 05 · SEMINARS, PATENTS, WORKSHOPS & CERTIFICATIONS */}
      <section
        id="achievements"
        aria-labelledby="achievements-heading"
        className="py-16 sm:py-24 bg-white border-b border-[#DCD6C8]"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left 3 Columns: Sticky Chapter Index Rail */}
            <div className="lg:col-span-3 lg:sticky lg:top-24 space-y-3">
              <p className="text-xs font-mono text-[#8C3B2B] uppercase tracking-widest">
                CHAPTER 05 / HONORS & SEMINARS
              </p>
              <h2
                id="achievements-heading"
                className="font-serif text-3xl sm:text-4xl font-medium text-[#141413] tracking-tight text-balance"
              >
                Patents, Seminars & Workshops
              </h2>
              <p className="text-xs text-[#57544E] leading-relaxed">
                APSET qualification, 3 Official Journal Patents, and 7 academic workshops, conferences, and FDPs.
              </p>
              {isEditMode && (
                <button
                  type="button"
                  onClick={onOpenCustomizer}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#183153] hover:underline underline-offset-4 pt-2"
                >
                  <PencilLine className="w-3.5 h-3.5" />
                  <span>Edit Seminars</span>
                </button>
              )}
            </div>

            {/* Right 9 Columns: Filterable Seminars & Credentials */}
            <div className="lg:col-span-9 lg:border-l lg:border-[#DCD6C8] lg:pl-12 space-y-12">
              {/* Filter Bar */}
              <div className="overflow-x-auto pb-2">
                <div
                  role="group"
                  aria-label="Filter achievements by category"
                  className="inline-flex items-center gap-1 p-1 bg-[#EDE8DC] border border-[#DCD6C8] rounded"
                >
                  {ACHIEVEMENT_CATEGORIES.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedAchCategory(category)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors duration-150 whitespace-nowrap ${
                        selectedAchCategory === category
                          ? 'bg-white text-[#183153] font-semibold shadow-2xs'
                          : 'text-[#57544E] hover:text-[#141413]'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Achievements & Seminars Ledger */}
              <div className="divide-y divide-[#DCD6C8] border-t border-b border-[#DCD6C8]">
                {filteredAchievements.map((item) => (
                  <div
                    key={item.id}
                    className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3 items-baseline"
                  >
                    <div className="md:col-span-4 flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="tabular-nums font-semibold text-[#8C3B2B]">
                        {item.year}
                      </span>
                      <span className="text-[#DCD6C8]" aria-hidden="true">
                        ·
                      </span>
                      <span className="text-[#183153]">{item.category}</span>
                    </div>

                    <div className="md:col-span-8 space-y-1">
                      <h3 className="font-serif text-lg sm:text-xl font-medium text-[#141413]">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-[#57544E]">
                        {item.organization}
                      </p>
                      <p className="text-xs sm:text-sm text-[#4A4843] leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications & Eligibility Subsection */}
              <div id="certifications" className="pt-6 scroll-mt-24 space-y-6">
                <div>
                  <p className="text-[11px] font-mono text-[#8C3B2B] uppercase tracking-wider">
                    VERIFIED ELIGIBILITY & TRAINING CERTIFICATES
                  </p>
                  <h3
                    id="certifications-heading"
                    className="mt-1 font-serif text-2xl font-medium text-[#141413]"
                  >
                    Eligibility & Academic Certifications
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {certifications.map((cert) => (
                    <article
                      key={cert.id}
                      className="p-5 rounded bg-[#FAF8F5] border border-[#DCD6C8] flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#E6E1D6] text-[11px] font-mono text-[#57544E]">
                          <span>{cert.issueDate}</span>
                        </div>

                        <h4 className="mt-3.5 font-serif text-lg font-medium text-[#141413] leading-snug">
                          {cert.name}
                        </h4>

                        <p className="mt-1 text-xs font-medium text-[#183153]">
                          {cert.issuer}
                        </p>

                        <p className="mt-2 text-[11px] font-mono text-[#57544E] leading-relaxed">
                          {cert.credentialId}
                        </p>

                        <div className="mt-3 pt-3 border-t border-[#E6E1D6]">
                          <p className="text-xs text-[#4A4843] leading-relaxed">
                            {cert.skillsAcquired.join(' · ')}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 pt-3 border-t border-[#E6E1D6]">
                        <button
                          type="button"
                          onClick={() => setActiveCertificate(cert)}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#183153] hover:text-[#8C3B2B] transition-colors whitespace-nowrap"
                        >
                          <Award className="w-3.5 h-3.5 text-[#8C3B2B]" />
                          <span>Inspect Record</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 06 · FACULTY TEACHING EXPERIENCE */}
      <section
        id="experience"
        aria-labelledby="experience-heading"
        className="py-16 sm:py-24 bg-[#F3EFE6]/70 border-b border-[#DCD6C8]"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left 3 Columns: Sticky Chapter Index Rail */}
            <div className="lg:col-span-3 lg:sticky lg:top-24 space-y-3">
              <p className="text-xs font-mono text-[#8C3B2B] uppercase tracking-widest">
                CHAPTER 06 / FACULTY SERVICE
              </p>
              <h2
                id="experience-heading"
                className="font-serif text-3xl sm:text-4xl font-medium text-[#141413] tracking-tight text-balance"
              >
                Teaching & Academic Experience
              </h2>
              <p className="text-xs text-[#57544E] leading-relaxed">
                3 years of collegiate teaching service in the Department of Commerce at DNR College, Bhimavaram.
              </p>
            </div>

            {/* Right 9 Columns: Faculty Experience Dossier */}
            <div className="lg:col-span-9 lg:border-l lg:border-[#DCD6C8] lg:pl-12">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white p-6 sm:p-8 rounded border border-[#DCD6C8] space-y-6 shadow-[0_1px_4px_rgba(20,20,19,0.02)]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[#E6E1D6]">
                    <div>
                      <p className="text-xs font-mono text-[#8C3B2B] uppercase tracking-wider">
                        {exp.category}
                      </p>
                      <h3 className="mt-1 font-serif text-2xl sm:text-3xl font-medium text-[#141413]">
                        {exp.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-[#183153]">
                        {exp.organization} — {exp.location}
                      </p>
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#141413] bg-[#F3EFE6] px-3 py-1 rounded border border-[#DCD6C8] tabular-nums whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-[11px] font-mono text-[#78746C] uppercase tracking-wider">
                        Instructional Responsibilities
                      </h4>
                      <ul className="mt-3 space-y-2.5 text-xs sm:text-sm text-[#2E2D2A] leading-relaxed">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-baseline gap-2.5">
                            <span className="text-xs font-mono text-[#8C3B2B]" aria-hidden="true">
                              —
                            </span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-mono text-[#78746C] uppercase tracking-wider">
                        Departmental Contributions
                      </h4>
                      <ul className="mt-3 space-y-2.5 text-xs sm:text-sm text-[#2E2D2A] leading-relaxed">
                        {exp.keyContributions.map((contrib, idx) => (
                          <li key={idx} className="flex items-baseline gap-2.5">
                            <span
                              className="text-xs font-mono text-[#183153] font-bold"
                              aria-hidden="true"
                            >
                              ·
                            </span>
                            <span>{contrib}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 07 · ACADEMIC VISION & FUTURE DIRECTION */}
      <section
        id="future-direction"
        aria-labelledby="future-heading"
        className="py-16 sm:py-24 bg-white border-b border-[#DCD6C8]"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-3 lg:sticky lg:top-24 space-y-3">
              <p className="text-xs font-mono text-[#8C3B2B] uppercase tracking-widest">
                CHAPTER 07 / DIRECTION
              </p>
              <h2
                id="future-heading"
                className="font-serif text-3xl sm:text-4xl font-medium text-[#141413] tracking-tight text-balance"
              >
                {futureDirection.heading}
              </h2>
              <p className="text-xs text-[#57544E] leading-relaxed">
                Long-term commitment to commerce scholarship, student mentorship, and institutional growth.
              </p>
            </div>

            <div className="lg:col-span-9 lg:border-l lg:border-[#DCD6C8] lg:pl-12 space-y-8">
              <p className="text-base text-[#2E2D2A] leading-relaxed max-w-[70ch]">
                {futureDirection.summary}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {futureDirection.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded bg-[#FAF8F5] border border-[#DCD6C8] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-[#8C3B2B]">
                        <span>PILLAR 0{idx + 1}</span>
                        <Compass className="w-4 h-4 text-[#183153]" />
                      </div>
                      <h3 className="mt-3 font-serif text-lg font-medium text-[#141413] leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-[#4A4843] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Verification Preview Modal */}
      {activeCertificate && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141413]/50 backdrop-blur-xs"
          onClick={() => setActiveCertificate(null)}
        >
          <div
            className="w-full max-w-lg rounded bg-white border border-[#DCD6C8] p-6 sm:p-8 shadow-xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E6E1D6] pb-4">
              <span className="text-xs font-mono text-[#8C3B2B]">
                OFFICIAL CREDENTIAL RECORD
              </span>
              <button
                type="button"
                onClick={() => setActiveCertificate(null)}
                className="text-xs font-mono text-[#57544E] hover:text-[#141413]"
              >
                [ESC / Close]
              </button>
            </div>

            <div>
              <p className="text-xs font-mono text-[#183153]">
                {activeCertificate.issuer}
              </p>
              <h3
                id="cert-modal-title"
                className="mt-1 font-serif text-2xl font-medium text-[#141413]"
              >
                {activeCertificate.name}
              </h3>
              <p className="mt-1 text-xs font-mono text-[#57544E]">
                Date / Status: {activeCertificate.issueDate}
              </p>
              <p className="mt-1 text-xs font-mono text-[#141413] font-medium">
                {activeCertificate.credentialId}
              </p>
            </div>

            <div className="p-4 rounded bg-[#FAF8F5] border border-[#DCD6C8]">
              <p className="text-xs font-mono text-[#78746C]">
                Verified Competencies & Scope:
              </p>
              <p className="mt-1.5 text-sm text-[#141413]">
                {activeCertificate.skillsAcquired.join(' · ')}
              </p>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setActiveCertificate(null)}
                className="px-4 py-2 text-xs font-medium text-white bg-[#183153] rounded"
              >
                Close Record
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
