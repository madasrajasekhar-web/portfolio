/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { ArrowUp } from 'lucide-react';
import {
  defaultStudentProfile,
  ProjectEntry,
  StudentProfile,
} from './data/studentProfile';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ResearchSection } from './components/ResearchSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AchievementsAndCertifications } from './components/AchievementsAndCertifications';
import { ResumeAndContactSection } from './components/ResumeAndContactSection';
import {
  ProjectDetailsModal,
  ResumePreviewModal,
  QuickNavModal,
  CustomizerDrawer,
} from './components/ModalsAndTools';

const PROFILE_STORAGE_KEY = 'scholarfolio_madasu_rajasekhar_v3';

const SECTION_IDS = [
  'home',
  'about',
  'education',
  'research',
  'projects',
  'achievements',
  'certifications',
  'experience',
  'skills',
  'future-direction',
  'contact',
];

export default function App() {
  // Enforce Light Mode Only on document root
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('scholarfolio_theme_preference');
  }, []);

  // Centralized Student Profile State (Madasu Rajasekhar CV Source of Truth)
  const [profile, setProfile] = useState<StudentProfile>(() => {
    try {
      const saved = localStorage.getItem(PROFILE_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...defaultStudentProfile,
          ...parsed,
          profileImage: defaultStudentProfile.profileImage,
        };
      }
    } catch {
      // Fallback to default
    }
    return defaultStudentProfile;
  });

  const handleUpdateProfile = useCallback(
    (updater: (prev: StudentProfile) => StudentProfile) => {
      setProfile((prev) => {
        const updated = updater(prev);
        try {
          localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(updated));
        } catch {
          // Ignore storage quota errors
        }
        return updated;
      });
    },
    []
  );

  const handleResetProfile = useCallback(() => {
    localStorage.removeItem(PROFILE_STORAGE_KEY);
    setProfile(defaultStudentProfile);
  }, []);

  // Sync Document Title for SEO
  useEffect(() => {
    document.title = `${profile.name} | Academic Portfolio — Commerce & Research`;
  }, [profile.name]);

  // Reading Progress, Active Section & Back-to-Top Visibility
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress =
        docHeight > 0
          ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100))
          : 0;
      setReadingProgress(progress);
      setShowBackToTop(scrollTop > 520);

      const viewportOffset = scrollTop + 180;
      let currentSection = 'home';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= viewportOffset) {
          currentSection = id;
        }
      }
      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Interactive Modals & Quick Navigation ("/" Shortcut)
  const [selectedProject, setSelectedProject] = useState<ProjectEntry | null>(
    null
  );
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [quickNavOpen, setQuickNavOpen] = useState(false);
  const [customizerOpen, setCustomizerOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isInput =
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable);
      if (!isInput && e.key === '/') {
        e.preventDefault();
        setQuickNavOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Download Formatted Complete CV Handler
  const handleDownloadResume = useCallback(() => {
    const lines = [
      `CURRICULUM VITAE`,
      `${profile.name.toUpperCase()}`,
      `${profile.permanentAddress}`,
      `Phone: ${profile.phone}`,
      `Email: ${profile.email}`,
      `====================================================================`,
      ``,
      `CAREER OBJECTIVE:`,
      `${profile.about.careerObjectiveVerbatim}`,
      ``,
      `ACADEMIC RECORD:`,
      ...profile.education.map(
        (e) =>
          `* ${e.degree} — ${e.institution} (${e.year} | ${e.aggregationOrStatus})\n  ${e.highlights.join(' ')}`
      ),
      ``,
      `EXPERIENCE:`,
      `Assistant Professor, Department of Commerce, DNR College, Bhimavaram, West Godavari District, Andhra Pradesh — Experience: 3 Years`,
      ``,
      `COMPUTER KNOWLEDGE:`,
      `* MS Office`,
      `* Tally ERP`,
      ``,
      `PATENTS (3):`,
      ...profile.patents.map((p) => `* ${p.title}, ${p.patentType}.`),
      ``,
      `PUBLICATIONS (${profile.publications.length}):`,
      ...profile.publications.map(
        (pub, idx) =>
          `${idx + 1}. ${pub.title}, ${pub.venue} (${pub.indexingOrIssn}).`
      ),
      ``,
      `SEMINARS / WEBINARS / WORKSHOPS / FDPs:`,
      ...profile.achievements
        .filter((a) => a.category !== 'Patents' && a.category !== 'Eligibility & Qualifications')
        .map((a) => `* ${a.title} — ${a.organization}`),
      ``,
      `SKILLS & PROFESSIONAL STRENGTHS:`,
      `* Management & Adaptability`,
      `* Excellent communication and instructional skills`,
      `* Good ability in teaching`,
      `* Good working knowledge with computer and internet`,
      `* Can plan and execute in-classroom and outdoor educational activities and events`,
      `* Innovative and quick in adapting in any situation`,
      `* Good communication and presentation skills`,
      ``,
      `PERSONAL BIO DATA:`,
      `Sex: ${profile.personalBioData.sex}`,
      `Marital Status: ${profile.personalBioData.maritalStatus}`,
      `Nationality: ${profile.personalBioData.nationality}`,
      `Date of Birth: ${profile.personalBioData.dateOfBirth}`,
      `Permanent Address: M. RAJASEKHAR, ${profile.personalBioData.fatherName}, ${profile.permanentAddress}`,
    ];

    const blob = new Blob([lines.join('\n')], {
      type: 'text/plain;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Madasu_Rajasekhar_Curriculum_Vitae.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [profile]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#141413]">
      {/* Skip to Main Content Accessibility Link */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#183153] focus:text-white focus:rounded focus:text-xs focus:font-mono"
      >
        Skip to main content
      </a>

      {/* Sticky Top Navigation Bar (Light Mode Monograph) */}
      <Navbar
        studentName={profile.name}
        activeSection={activeSection}
        readingProgress={readingProgress}
        onOpenResumeModal={() => setResumeModalOpen(true)}
        onOpenCustomizer={() => setCustomizerOpen(true)}
        onOpenQuickNav={() => setQuickNavOpen(true)}
        isEditMode={isEditMode}
      />

      {/* Main Coherent Academic Monograph Layout */}
      <main className="flex-1">
        {/* Broadsheet Hero & Academic Snapshot Ledger */}
        <HeroSection
          profile={profile}
          onUpdateProfile={handleUpdateProfile}
          onOpenResumeModal={() => setResumeModalOpen(true)}
          onOpenCustomizer={() => setCustomizerOpen(true)}
          isEditMode={isEditMode}
        />

        {/* Chapter 01 · Biography & Institutional Dossier */}
        <AboutSection
          profile={profile}
          onUpdateProfile={handleUpdateProfile}
          onOpenCustomizer={() => setCustomizerOpen(true)}
          isEditMode={isEditMode}
        />

        {/* Chapter 02 · Academic Record & Qualifications */}
        <EducationSection
          education={profile.education}
          onOpenCustomizer={() => setCustomizerOpen(true)}
          isEditMode={isEditMode}
        />

        {/* Chapter 03 · Doctoral Research & 9 Peer-Reviewed Publications */}
        <ResearchSection
          research={profile.research}
          publications={profile.publications}
          onOpenCustomizer={() => setCustomizerOpen(true)}
          isEditMode={isEditMode}
        />

        {/* Chapter 04 · Official Patents & Empirical Case Studies */}
        <ProjectsSection
          projects={profile.projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenCustomizer={() => setCustomizerOpen(true)}
          isEditMode={isEditMode}
        />

        {/* Chapter 05 & 06 · Seminars, Certifications, Faculty Teaching Experience */}
        <AchievementsAndCertifications
          achievements={profile.achievements}
          certifications={profile.certifications}
          experience={profile.experience}
          futureDirection={profile.futureDirection}
          onOpenCustomizer={() => setCustomizerOpen(true)}
          isEditMode={isEditMode}
        />

        {/* Competencies & Accounting/Computer Tools */}
        <SkillsSection
          skillCategories={profile.skillCategories}
          onOpenCustomizer={() => setCustomizerOpen(true)}
          isEditMode={isEditMode}
        />

        {/* Full CV Banner, Academic Correspondence & Footer */}
        <ResumeAndContactSection
          profile={profile}
          onOpenResumeModal={() => setResumeModalOpen(true)}
          onDownloadResume={handleDownloadResume}
        />
      </main>

      {/* Subtle Floating Back-to-Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-30 inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#183153] hover:bg-[#10223A] text-white shadow-md transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183153] no-print"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Modals & Interactive Customization Tools */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumePreviewModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        profile={profile}
        onDownloadResume={handleDownloadResume}
      />

      <QuickNavModal
        isOpen={quickNavOpen}
        onClose={() => setQuickNavOpen(false)}
        projects={profile.projects}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />

      <CustomizerDrawer
        isOpen={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
        profile={profile}
        onUpdateProfile={handleUpdateProfile}
        onResetProfile={handleResetProfile}
        isEditMode={isEditMode}
        onToggleEditMode={() => setIsEditMode((prev) => !prev)}
      />
    </div>
  );
}
