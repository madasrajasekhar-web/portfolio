import React, { useState } from 'react';
import {
  ArrowDownRight,
  FileText,
  Mail,
  UserCheck,
  PencilLine,
} from 'lucide-react';
import { StudentProfile } from '../data/studentProfile';

interface HeroSectionProps {
  profile: StudentProfile;
  onUpdateProfile: (updater: (prev: StudentProfile) => StudentProfile) => void;
  onOpenResumeModal: () => void;
  onOpenCustomizer: () => void;
  isEditMode: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  onUpdateProfile,
  onOpenResumeModal,
  onOpenCustomizer,
  isEditMode,
}) => {
  const [imageError, setImageError] = useState(false);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative bg-[#FAF8F5] border-b border-[#DCD6C8]"
    >
      {/* Top Institutional Broadsheet Ribbon */}
      <div className="bg-[#F3EFE6] border-b border-[#E2DDD2]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-2.5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#57544E] tracking-wider">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-[#183153]">FACULTY MONOGRAPH</span>
            <span aria-hidden="true">·</span>
            <span>DEPARTMENT OF COMMERCE, DNR COLLEGE, BHIMAVARAM</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 tabular-nums">
            <span>APSET QUALIFIED (2024)</span>
            <span aria-hidden="true">·</span>
            <span>PH.D. THESIS SUBMITTED (SV UNIVERSITY)</span>
          </div>
        </div>
      </div>

      {/* Main Architectural Broadsheet Grid */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left 8 Columns: Editorial Typography, Bio, CTAs & 4-Column Ledger */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#8C3B2B] tracking-widest uppercase">
                <span>{profile.greetingLabel}</span>
                <span aria-hidden="true">/</span>
                <span>WEST GODAVARI, ANDHRA PRADESH, INDIA</span>
                {isEditMode && (
                  <button
                    type="button"
                    onClick={onOpenCustomizer}
                    className="inline-flex items-center gap-1 text-[#183153] underline underline-offset-4 font-sans normal-case tracking-normal"
                  >
                    <PencilLine className="w-3 h-3" />
                    <span>Edit Hero</span>
                  </button>
                )}
              </div>

              {isEditMode ? (
                <div className="space-y-3 bg-white p-5 rounded border border-[#DCD6C8]">
                  <label className="block text-xs font-mono text-[#57544E]">
                    FULL NAME
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) =>
                        onUpdateProfile((prev) => ({ ...prev, name: e.target.value }))
                      }
                      className="mt-1 w-full px-3 py-2 bg-[#FAF8F5] border border-[#DCD6C8] rounded text-2xl font-serif font-semibold text-[#141413]"
                    />
                  </label>
                  <label className="block text-xs font-mono text-[#57544E]">
                    HEADLINE
                    <input
                      type="text"
                      value={profile.headline}
                      onChange={(e) =>
                        onUpdateProfile((prev) => ({ ...prev, headline: e.target.value }))
                      }
                      className="mt-1 w-full px-3 py-2 bg-[#FAF8F5] border border-[#DCD6C8] rounded text-sm font-sans text-[#141413]"
                    />
                  </label>
                  <label className="block text-xs font-mono text-[#57544E]">
                    ACADEMIC INTRODUCTION
                    <textarea
                      rows={3}
                      value={profile.heroIntroduction}
                      onChange={(e) =>
                        onUpdateProfile((prev) => ({
                          ...prev,
                          heroIntroduction: e.target.value,
                        }))
                      }
                      className="mt-1 w-full px-3 py-2 bg-[#FAF8F5] border border-[#DCD6C8] rounded text-sm font-sans text-[#4A4843]"
                    />
                  </label>
                </div>
              ) : (
                <>
                  <h1
                    id="hero-heading"
                    className="font-serif text-4xl sm:text-5xl lg:text-[60px] font-medium tracking-tight text-[#141413] leading-[1.06] text-balance"
                  >
                    {profile.name}
                  </h1>

                  <p className="font-serif italic text-xl sm:text-2xl text-[#183153] leading-snug">
                    {profile.headline}
                  </p>

                  <div className="h-[1px] w-24 bg-[#8C3B2B]" aria-hidden="true" />

                  <p className="text-base sm:text-[17px] text-[#3D3B37] leading-[1.75] max-w-[66ch]">
                    {profile.heroIntroduction}
                  </p>
                </>
              )}

              {/* Primary & Secondary Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => scrollToId('research')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-white bg-[#183153] hover:bg-[#10223A] rounded transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183153]"
                >
                  <span>Explore Research & 9 Publications</span>
                  <ArrowDownRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={onOpenResumeModal}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-[#141413] bg-white hover:bg-[#F3EFE6] border border-[#DCD6C8] rounded transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183153]"
                >
                  <FileText className="w-4 h-4 text-[#8C3B2B]" />
                  <span>Inspect Printable CV</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToId('contact')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-[#4A4843] hover:text-[#141413] transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183153]"
                >
                  <Mail className="w-4 h-4 text-[#183153]" />
                  <span>Correspondence</span>
                </button>
              </div>
            </div>

            {/* Integrated 2x2 Architectural Academic Snapshot Ledger */}
            <div
              aria-label="Academic Snapshot Ledger"
              className="pt-8 border-t border-[#DCD6C8] grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#DCD6C8] border border-[#DCD6C8] rounded overflow-hidden"
            >
              {/* Cell 1 */}
              <div className="bg-white p-5">
                <p className="text-[11px] font-mono text-[#8C3B2B] uppercase tracking-wider">
                  01 · Doctoral & Degree Record
                </p>
                <h2 className="mt-1.5 font-serif text-lg font-medium text-[#141413]">
                  {profile.snapshot.educationTitle}
                </h2>
                <p className="mt-1 text-xs text-[#57544E] leading-relaxed">
                  {profile.snapshot.educationSubtitle}
                </p>
              </div>

              {/* Cell 2 */}
              <div className="bg-white p-5">
                <p className="text-[11px] font-mono text-[#8C3B2B] uppercase tracking-wider">
                  02 · Assistant Professor Eligibility
                </p>
                <h2 className="mt-1.5 font-serif text-lg font-medium text-[#141413]">
                  {profile.snapshot.researchTitle}
                </h2>
                <p className="mt-1 text-xs font-mono text-[#57544E] leading-relaxed tabular-nums">
                  {profile.snapshot.researchSubtitle}
                </p>
              </div>

              {/* Cell 3 */}
              <div className="bg-white p-5">
                <p className="text-[11px] font-mono text-[#8C3B2B] uppercase tracking-wider">
                  03 · Scholarly Publications & Patents
                </p>
                <h2 className="mt-1.5 font-serif text-lg font-medium text-[#141413]">
                  {profile.snapshot.projectsTitle}
                </h2>
                <p className="mt-1 text-xs text-[#57544E] leading-relaxed">
                  {profile.snapshot.projectsSubtitle}
                </p>
              </div>

              {/* Cell 4 */}
              <div className="bg-white p-5">
                <p className="text-[11px] font-mono text-[#8C3B2B] uppercase tracking-wider">
                  04 · Faculty Appointment
                </p>
                <h2 className="mt-1.5 font-serif text-lg font-medium text-[#141413]">
                  {profile.snapshot.locationTitle}
                </h2>
                <p className="mt-1 text-xs text-[#57544E] leading-relaxed">
                  {profile.snapshot.locationSubtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Right 4 Columns: Museum-Style Framed Faculty Portrait & Immediate Verification Card */}
          <div className="lg:col-span-4">
            <div className="bg-white p-4 border border-[#DCD6C8] rounded shadow-[0_2px_10px_rgba(20,20,19,0.03)] space-y-4">
              <figure className="relative">
                <div className="aspect-[3/4] w-full relative overflow-hidden bg-[#FDF4DC] border border-[#E6E1D6] rounded-xs">
                  {!imageError && profile.profileImage ? (
                    <img
                      src={profile.profileImage}
                      alt={profile.profileImageAlt}
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#F3EFE6]">
                      <UserCheck className="w-12 h-12 text-[#78746C] mb-3 stroke-[1.25]" />
                      <p className="font-serif text-lg text-[#141413]">
                        {profile.name}
                      </p>
                      <p className="text-xs text-[#57544E] mt-1">
                        Assistant Professor of Commerce
                      </p>
                    </div>
                  )}
                </div>

                <figcaption className="pt-3 flex items-center justify-between text-xs text-[#57544E] font-serif italic">
                  <span>Fig. 1 — {profile.name}</span>
                  <span className="font-mono not-italic text-[11px] text-[#183153] tabular-nums">
                    DNR College, Bhimavaram
                  </span>
                </figcaption>
              </figure>

              {/* Compact Institutional Verification Ledger Under Portrait */}
              <div className="pt-3 border-t border-[#E6E1D6] space-y-2 text-xs">
                <div className="flex justify-between gap-2">
                  <span className="font-mono text-[#78746C]">APSET Cert. No:</span>
                  <span className="font-mono font-medium text-[#141413] tabular-nums">
                    300337 (26 Apr 2024)
                  </span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="font-mono text-[#78746C]">APSET Ref / Roll:</span>
                  <span className="font-mono text-[#141413] tabular-nums">
                    APSLET/3637/2024 · 010408108
                  </span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="font-mono text-[#78746C]">Direct Email:</span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-mono text-[#183153] hover:underline"
                  >
                    {profile.email}
                  </a>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="font-mono text-[#78746C]">Telephone:</span>
                  <span className="font-mono text-[#141413] tabular-nums">
                    {profile.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
