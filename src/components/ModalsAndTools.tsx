import React, { useState, useEffect } from 'react';
import {
  X,
  Printer,
  Download,
  RotateCcw,
  Search,
  ArrowRight,
  SlidersHorizontal,
  Check,
} from 'lucide-react';
import { ProjectEntry, StudentProfile } from '../data/studentProfile';

/* -------------------------------------------------------------------------- */
/* 1. PROJECT DETAILS / CASE STUDY MODAL (LIGHT MODE MONOGRAPH)               */
/* -------------------------------------------------------------------------- */

interface ProjectModalProps {
  project: ProjectEntry | null;
  onClose: () => void;
}

export const ProjectDetailsModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#141413]/55 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded bg-white border border-[#DCD6C8] shadow-2xl p-6 sm:p-10 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#E6E1D6]">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#57544E]">
            <span className="text-[#8C3B2B] font-semibold">
              {project.category}
            </span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{project.year}</span>
            <span aria-hidden="true">·</span>
            <span>Role: {project.role}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close study modal"
            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono text-[#57544E] hover:text-[#141413] bg-[#FAF8F5] border border-[#DCD6C8] rounded"
          >
            <X className="w-3.5 h-3.5" />
            <span>ESC</span>
          </button>
        </div>

        <div>
          <h2
            id="project-modal-title"
            className="font-serif text-2xl sm:text-3xl font-medium text-[#141413] leading-snug"
          >
            {project.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#2E2D2A] leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E6E1D6]">
          <div className="p-4 rounded bg-[#FAF8F5] border border-[#DCD6C8]">
            <h3 className="text-[11px] font-mono text-[#8C3B2B] uppercase tracking-wider">
              01 · Research Context & Problem
            </h3>
            <p className="mt-2 text-sm text-[#141413] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded bg-[#FAF8F5] border border-[#DCD6C8]">
            <h3 className="text-[11px] font-mono text-[#8C3B2B] uppercase tracking-wider">
              02 · Study Objective
            </h3>
            <p className="mt-2 text-sm text-[#141413] leading-relaxed">
              {project.objective}
            </p>
          </div>
        </div>

        <div className="space-y-5 pt-2">
          <div>
            <h3 className="text-[11px] font-mono text-[#8C3B2B] uppercase tracking-wider">
              03 · Methodology
            </h3>
            <p className="mt-1.5 text-sm text-[#2E2D2A] leading-relaxed">
              {project.methodology}
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-mono text-[#8C3B2B] uppercase tracking-wider">
              04 · Domains, Scope & Methods
            </h3>
            <p className="mt-1.5 text-xs font-mono text-[#183153] leading-relaxed">
              {project.technologies.join(' · ')}
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-mono text-[#8C3B2B] uppercase tracking-wider">
              05 · Execution & Documentation
            </h3>
            <p className="mt-1.5 text-sm text-[#2E2D2A] leading-relaxed">
              {project.implementation}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-3 border-t border-[#E6E1D6]">
            <div>
              <h3 className="text-[11px] font-mono text-[#8C3B2B] uppercase tracking-wider">
                06 · Published Results & Outcome
              </h3>
              <p className="mt-1.5 text-sm text-[#2E2D2A] leading-relaxed">
                {project.results}
              </p>
            </div>

            <div>
              <h3 className="text-[11px] font-mono text-[#8C3B2B] uppercase tracking-wider">
                07 · Scholarly Takeaway
              </h3>
              <p className="mt-1.5 text-sm text-[#2E2D2A] leading-relaxed">
                {project.keyLearning}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#E6E1D6] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-medium text-white bg-[#183153] hover:bg-[#10223A] rounded"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 2. PRINT-FRIENDLY ACADEMIC CV / RESUME PREVIEW MODAL                       */
/* -------------------------------------------------------------------------- */

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: StudentProfile;
  onDownloadResume: () => void;
}

export const ResumePreviewModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  onDownloadResume,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#141413]/55 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded bg-white border border-[#DCD6C8] shadow-2xl p-6 sm:p-10 space-y-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E6E1D6] no-print">
          <span className="text-xs font-mono text-[#8C3B2B]">
            OFFICIAL CURRICULUM VITAE · MADASU RAJASEKHAR
          </span>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#141413] bg-[#FAF8F5] border border-[#DCD6C8] rounded hover:bg-[#F3EFE6]"
            >
              <Printer className="w-3.5 h-3.5 text-[#183153]" />
              <span>Print CV</span>
            </button>

            <button
              type="button"
              onClick={onDownloadResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-[#183153] hover:bg-[#10223A] rounded"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV (.txt)</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume preview"
              className="p-1.5 text-[#57544E] hover:text-[#141413]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Complete Verbatim CV Content */}
        <div className="space-y-6 text-sm text-[#2E2D2A]">
          <div className="border-b border-[#DCD6C8] pb-5">
            <h2
              id="cv-modal-title"
              className="font-serif text-3xl font-medium text-[#141413]"
            >
              {profile.name.toUpperCase()}
            </h2>
            <p className="mt-1 text-sm text-[#183153] font-medium">
              {profile.headline}
            </p>
            <p className="mt-2 text-xs font-mono text-[#57544E]">
              {profile.permanentAddress}
            </p>
            <p className="mt-1 text-xs font-mono text-[#57544E] tabular-nums">
              Phone: {profile.phone} · Email: {profile.email}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#8C3B2B] border-b border-[#E6E1D6] pb-1.5">
              Career Objective
            </h3>
            <p className="mt-2 text-sm leading-relaxed">
              {profile.about.careerObjectiveVerbatim}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#8C3B2B] border-b border-[#E6E1D6] pb-1.5">
              Academic Record
            </h3>
            <div className="mt-3 space-y-3">
              {profile.education.map((edu) => (
                <div key={edu.id} className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <div>
                    <p className="font-semibold text-[#141413]">
                      {edu.degree} — {edu.institution}
                    </p>
                    <p className="text-xs text-[#57544E]">
                      {edu.highlights.join(' ')}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#183153] font-medium tabular-nums shrink-0">
                    {edu.aggregationOrStatus}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#8C3B2B] border-b border-[#E6E1D6] pb-1.5">
              Experience
            </h3>
            <p className="mt-2 text-sm font-medium text-[#141413]">
              Assistant Professor, Department of Commerce, DNR College, Bhimavaram, West Godavari District, Andhra Pradesh — Experience: 3 Years
            </p>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#8C3B2B] border-b border-[#E6E1D6] pb-1.5">
              Patents (3)
            </h3>
            <ul className="mt-2 space-y-1.5 text-xs">
              {profile.patents.map((pat) => (
                <li key={pat.id}>
                  • <strong>{pat.title}</strong> — {pat.patentType}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#8C3B2B] border-b border-[#E6E1D6] pb-1.5">
              Publications ({profile.publications.length})
            </h3>
            <ol className="mt-2 space-y-2 text-xs list-decimal list-inside">
              {profile.publications.map((pub) => (
                <li key={pub.id} className="leading-relaxed">
                  <span className="font-medium text-[#141413]">
                    {pub.title}
                  </span>{' '}
                  — <em>{pub.venue}</em> ({pub.indexingOrIssn})
                </li>
              ))}
            </ol>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#E6E1D6] text-xs">
            <div>
              <h4 className="font-mono uppercase text-[#8C3B2B] mb-1.5">
                Computer Knowledge & Skills
              </h4>
              <p>MS Office · Tally ERP · Management · Adaptability · Communication & Instructional Skills · Classroom & Outdoor Educational Event Planning</p>
            </div>
            <div>
              <h4 className="font-mono uppercase text-[#8C3B2B] mb-1.5">
                Personal Bio Data
              </h4>
              <p>
                Sex: {profile.personalBioData.sex} · Marital Status: {profile.personalBioData.maritalStatus} · Nationality: {profile.personalBioData.nationality} · DOB: {profile.personalBioData.dateOfBirth}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 3. QUICK NAVIGATION COMMAND PALETTE ("/" SHORTCUT)                         */
/* -------------------------------------------------------------------------- */

interface QuickNavModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: ProjectEntry[];
  onSelectProject: (p: ProjectEntry) => void;
}

const QUICK_SECTIONS = [
  { id: 'home', label: '00 · Broadsheet Overview & Academic Ledger' },
  { id: 'about', label: 'Ch. 01 · Biography & Institutional Dossier' },
  { id: 'education', label: 'Ch. 02 · Academic Record (Ph.D., APSET, M.Com, B.Com)' },
  { id: 'research', label: 'Ch. 03 · Doctoral Thesis & 9 Research Publications' },
  { id: 'projects', label: 'Ch. 04 · 3 Official Patents & Empirical Case Studies' },
  { id: 'achievements', label: 'Ch. 05 · Seminars, Workshops, Conferences & FDPs' },
  { id: 'certifications', label: 'Ch. 05B · APSET & Academic Certifications' },
  { id: 'experience', label: 'Ch. 06 · Faculty Service (DNR College, Bhimavaram)' },
  { id: 'skills', label: 'Ch. 06B · Skills & Computer Knowledge (Tally ERP, MS Office)' },
  { id: 'future-direction', label: 'Ch. 07 · Academic Vision & Future Direction' },
  { id: 'contact', label: 'Ch. 08 · Correspondence & Contact' },
];

export const QuickNavModal: React.FC<QuickNavModalProps> = ({
  isOpen,
  onClose,
  projects,
  onSelectProject,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      return;
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();
  const matchingSections = QUICK_SECTIONS.filter((s) =>
    s.label.toLowerCase().includes(q)
  );
  const matchingProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );

  const jumpTo = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Quick navigation command palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-[#141413]/50 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded bg-white border border-[#DCD6C8] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-3.5 border-b border-[#E6E1D6] bg-[#FAF8F5] flex items-center gap-2.5">
          <Search className="w-4 h-4 text-[#78746C]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to chapter or search patents & studies..."
            className="w-full text-sm bg-transparent text-[#141413] placeholder:text-[#78746C] focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-mono text-[#57544E] hover:text-[#141413] px-1.5 py-0.5 bg-white border border-[#DCD6C8] rounded"
          >
            ESC
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-[#E6E1D6]">
          <div className="py-1.5">
            <p className="px-3 py-1 text-[11px] font-mono text-[#8C3B2B] uppercase">
              Monograph Chapters
            </p>
            {matchingSections.map((sec) => (
              <button
                key={sec.id}
                type="button"
                onClick={() => jumpTo(sec.id)}
                className="w-full px-3 py-2 text-left text-xs font-medium text-[#2E2D2A] hover:bg-[#F3EFE6] rounded flex items-center justify-between"
              >
                <span>{sec.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#78746C]" />
              </button>
            ))}
          </div>

          {matchingProjects.length > 0 && (
            <div className="py-1.5">
              <p className="px-3 py-1 text-[11px] font-mono text-[#8C3B2B] uppercase">
                Patents & Research Studies
              </p>
              {matchingProjects.map((proj) => (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => {
                    onClose();
                    onSelectProject(proj);
                  }}
                  className="w-full px-3 py-2 text-left text-xs font-medium text-[#2E2D2A] hover:bg-[#F3EFE6] rounded flex items-center justify-between gap-2"
                >
                  <span className="truncate">{proj.title}</span>
                  <span className="font-mono text-[11px] text-[#183153] shrink-0">
                    {proj.category}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 4. LIVE PROFILE CUSTOMIZER DRAWER (LIGHT MODE)                             */
/* -------------------------------------------------------------------------- */

interface CustomizerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: StudentProfile;
  onUpdateProfile: (updater: (prev: StudentProfile) => StudentProfile) => void;
  onResetProfile: () => void;
  isEditMode: boolean;
  onToggleEditMode: () => void;
}

export const CustomizerDrawer: React.FC<CustomizerDrawerProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
  onResetProfile,
  isEditMode,
  onToggleEditMode,
}) => {
  const [copiedJson, setCopiedJson] = useState(false);

  if (!isOpen) return null;

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(profile, null, 2));
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="customizer-title"
      className="fixed inset-0 z-50 flex justify-end bg-[#141413]/45 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#FAF8F5] border-l border-[#DCD6C8] h-full overflow-y-auto p-6 space-y-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#DCD6C8]">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#183153]" />
            <h2
              id="customizer-title"
              className="font-serif text-xl font-medium text-[#141413]"
            >
              Edit Faculty Dossier
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close customizer drawer"
            className="p-1 text-[#57544E] hover:text-[#141413]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-[#4A4843] leading-relaxed">
          Populated with verified information from the Curriculum Vitae of <strong>Madasu Rajasekhar</strong>.
        </p>

        <div className="p-4 rounded bg-white border border-[#DCD6C8] flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-[#141413]">
              Inline Hero Editing
            </p>
            <p className="text-[11px] text-[#57544E]">
              Show direct input controls on the hero section
            </p>
          </div>
          <button
            type="button"
            onClick={onToggleEditMode}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
              isEditMode
                ? 'bg-[#183153] text-white'
                : 'bg-[#FAF8F5] text-[#141413] border border-[#DCD6C8]'
            }`}
          >
            {isEditMode ? 'Active' : 'Enable'}
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-[#57544E] mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) =>
                onUpdateProfile((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full px-3 py-2 text-sm bg-white border border-[#DCD6C8] rounded text-[#141413]"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-[#57544E] mb-1">
              Academic Headline
            </label>
            <input
              type="text"
              value={profile.headline}
              onChange={(e) =>
                onUpdateProfile((prev) => ({ ...prev, headline: e.target.value }))
              }
              className="w-full px-3 py-2 text-sm bg-white border border-[#DCD6C8] rounded text-[#141413]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-mono text-[#57544E] mb-1">
                Email
              </label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) =>
                  onUpdateProfile((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full px-3 py-2 text-sm bg-white border border-[#DCD6C8] rounded text-[#141413]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#57544E] mb-1">
                Phone
              </label>
              <input
                type="text"
                value={profile.phone}
                onChange={(e) =>
                  onUpdateProfile((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="w-full px-3 py-2 text-sm bg-white border border-[#DCD6C8] rounded text-[#141413]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-[#57544E] mb-1">
              Hero Introduction
            </label>
            <textarea
              rows={4}
              value={profile.heroIntroduction}
              onChange={(e) =>
                onUpdateProfile((prev) => ({
                  ...prev,
                  heroIntroduction: e.target.value,
                }))
              }
              className="w-full px-3 py-2 text-sm bg-white border border-[#DCD6C8] rounded text-[#141413]"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-[#DCD6C8] flex flex-col gap-2.5">
          <button
            type="button"
            onClick={handleCopyJson}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-mono text-[#141413] bg-white border border-[#DCD6C8] rounded hover:bg-[#F3EFE6] transition-colors"
          >
            {copiedJson ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-700" />
                <span>Copied Profile JSON!</span>
              </>
            ) : (
              <span>Copy Profile JSON</span>
            )}
          </button>

          <button
            type="button"
            onClick={onResetProfile}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-[#8C3B2B] bg-white hover:bg-[#FDF4F2] border border-[#D9A79C] rounded transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restore Original CV Data</span>
          </button>
        </div>
      </div>
    </div>
  );
};
