import React from 'react';
import { PencilLine } from 'lucide-react';
import { StudentProfile } from '../data/studentProfile';

interface AboutSectionProps {
  profile: StudentProfile;
  onUpdateProfile: (updater: (prev: StudentProfile) => StudentProfile) => void;
  onOpenCustomizer: () => void;
  isEditMode: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  profile,
  onOpenCustomizer,
  isEditMode,
}) => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 sm:py-24 bg-white border-b border-[#DCD6C8]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left 3 Columns: Sticky Chapter Index Rail */}
          <div className="lg:col-span-3 lg:sticky lg:top-24 space-y-3">
            <p className="text-xs font-mono text-[#8C3B2B] uppercase tracking-widest">
              CHAPTER 01 / BIOGRAPHY
            </p>
            <h2
              id="about-heading"
              className="font-serif text-3xl sm:text-4xl font-medium text-[#141413] tracking-tight text-balance"
            >
              Academic Profile & Dossier
            </h2>
            <p className="text-xs text-[#57544E] leading-relaxed">
              Personal academic narrative, institutional affiliation, and verified biographical record.
            </p>
            {isEditMode && (
              <button
                type="button"
                onClick={onOpenCustomizer}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#183153] hover:underline underline-offset-4 pt-2"
              >
                <PencilLine className="w-3.5 h-3.5" />
                <span>Edit Profile Metadata</span>
              </button>
            )}
          </div>

          {/* Right 9 Columns: Editorial Narrative + Institutional Dossier Ledger */}
          <div className="lg:col-span-9 lg:border-l lg:border-[#DCD6C8] lg:pl-12 space-y-12">
            {/* Academic Narrative */}
            <div className="space-y-5 text-base sm:text-[16.5px] text-[#2E2D2A] leading-[1.85] max-w-[70ch]">
              {profile.about.paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={
                    idx === 0
                      ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-medium first-letter:float-left first-letter:mr-3.5 first-letter:mt-1 first-letter:leading-none first-letter:text-[#183153]'
                      : ''
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Career Objective Editorial Pull-Quote */}
            <blockquote className="p-6 sm:p-7 rounded bg-[#FAF8F5] border border-[#DCD6C8] border-l-4 border-l-[#183153]">
              <p className="text-[11px] font-mono text-[#8C3B2B] uppercase tracking-widest">
                CAREER OBJECTIVE · CURRICULUM VITAE STATEMENT
              </p>
              <p className="mt-2.5 font-serif italic text-lg sm:text-xl text-[#141413] leading-relaxed">
                “{profile.about.careerObjectiveVerbatim}”
              </p>
            </blockquote>

            {/* Two-Column Sub-Grid: Dossier Ledger + Active Research Inquiry */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-[#E6E1D6]">
              {/* Dossier Table (7 cols) */}
              <div className="md:col-span-7 bg-[#FAF8F5] p-6 rounded border border-[#DCD6C8]">
                <div className="pb-3.5 border-b border-[#DCD6C8] flex items-center justify-between">
                  <h3 className="font-serif text-lg font-medium text-[#141413]">
                    Institutional & Personal Dossier
                  </h3>
                  <span className="text-[11px] font-mono text-[#78746C] uppercase">
                    Verified Record
                  </span>
                </div>

                <dl className="divide-y divide-[#E6E1D6] text-xs sm:text-sm">
                  <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3">
                    <dt className="text-xs font-mono text-[#78746C]">Current Role</dt>
                    <dd className="sm:col-span-2 font-medium text-[#141413]">
                      {profile.about.currentRole}
                    </dd>
                  </div>

                  <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3">
                    <dt className="text-xs font-mono text-[#78746C]">Institution</dt>
                    <dd className="sm:col-span-2 text-[#2E2D2A]">
                      {profile.about.teachingInstitution}
                    </dd>
                  </div>

                  <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3">
                    <dt className="text-xs font-mono text-[#78746C]">Doctoral Study</dt>
                    <dd className="sm:col-span-2 text-[#2E2D2A]">
                      {profile.about.doctoralUniversity}
                    </dd>
                  </div>

                  <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3">
                    <dt className="text-xs font-mono text-[#78746C]">Qualifications</dt>
                    <dd className="sm:col-span-2 text-[#183153] font-medium">
                      {profile.about.academicQualification}
                    </dd>
                  </div>

                  <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3">
                    <dt className="text-xs font-mono text-[#78746C]">Address</dt>
                    <dd className="sm:col-span-2 text-[#2E2D2A] leading-relaxed">
                      {profile.permanentAddress}
                    </dd>
                  </div>

                  <div className="pt-3 pb-1 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3">
                    <dt className="text-xs font-mono text-[#78746C]">Bio Data</dt>
                    <dd className="sm:col-span-2 font-mono text-xs text-[#4A4843] tabular-nums">
                      DOB: {profile.personalBioData.dateOfBirth} · {profile.personalBioData.nationality} ·{' '}
                      {profile.personalBioData.fatherName} · {profile.personalBioData.maritalStatus}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Active Research Themes (5 cols) */}
              <div className="md:col-span-5 bg-[#F3EFE6]/60 p-6 rounded border border-[#DCD6C8] flex flex-col justify-between">
                <div>
                  <p className="text-[11px] font-mono text-[#8C3B2B] uppercase tracking-wider">
                    SCHOLARLY FOCUS
                  </p>
                  <h3 className="mt-1 font-serif text-lg font-medium text-[#141413]">
                    Primary Inquiry Themes
                  </h3>

                  <ul className="mt-4 space-y-3">
                    {profile.about.currentlyExploring.map((topic, index) => (
                      <li
                        key={index}
                        className="flex items-baseline gap-2.5 text-xs sm:text-sm text-[#2E2D2A] leading-relaxed"
                      >
                        <span className="font-mono text-xs text-[#8C3B2B] font-medium tabular-nums select-none">
                          0{index + 1}.
                        </span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DCD6C8]">
                  <p className="text-[11px] font-mono text-[#78746C]">
                    Core Specializations:
                  </p>
                  <p className="mt-1 text-xs text-[#4A4843] leading-relaxed">
                    {profile.about.areasOfInterest.join(' · ')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
