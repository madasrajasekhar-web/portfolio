import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  FileText,
  SlidersHorizontal,
  ChevronDown,
  Search,
} from 'lucide-react';

interface NavbarProps {
  studentName: string;
  activeSection: string;
  readingProgress: number;
  onOpenResumeModal: () => void;
  onOpenCustomizer: () => void;
  onOpenQuickNav: () => void;
  isEditMode: boolean;
}

export interface NavItem {
  id: string;
  label: string;
}

export const ALL_NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Overview' },
  { id: 'about', label: 'Biography' },
  { id: 'education', label: 'Academic Record' },
  { id: 'research', label: 'Research & Papers' },
  { id: 'projects', label: 'Patents & Studies' },
  { id: 'achievements', label: 'Seminars & FDPs' },
  { id: 'experience', label: 'Faculty Service' },
  { id: 'skills', label: 'Competencies' },
  { id: 'contact', label: 'Correspondence' },
];

export const MORE_NAV_ITEMS: NavItem[] = [
  { id: 'achievements', label: 'Seminars & FDPs' },
  { id: 'certifications', label: 'Eligibility & Certificates' },
  { id: 'experience', label: 'Faculty Service' },
  { id: 'skills', label: 'Competencies' },
  { id: 'future-direction', label: 'Academic Vision' },
  { id: 'contact', label: 'Correspondence' },
];

export const Navbar: React.FC<NavbarProps> = ({
  studentName,
  activeSection,
  readingProgress,
  onOpenResumeModal,
  onOpenCustomizer,
  onOpenQuickNav,
  isEditMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-150 no-print ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#DCD6C8] shadow-[0_1px_3px_rgba(20,20,19,0.04)]'
          : 'bg-[#FAF8F5] border-b border-[#E6E1D6]'
      }`}
    >
      {/* Reading Progress Bar */}
      <div
        className="h-[2px] bg-[#EDE8DC] w-full overflow-hidden"
        role="progressbar"
        aria-label="Page reading progress"
        aria-valuenow={Math.round(readingProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full bg-[#183153] transition-transform duration-150 origin-left"
          style={{ transform: `scaleX(${readingProgress / 100})` }}
        />
      </div>

      {/* Strict 3-Zone Top Bar Contract */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="font-serif text-xl sm:text-[22px] font-semibold tracking-tight text-[#141413] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#183153]"
        >
          {studentName}
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-6 text-[13px] font-medium"
        >
          {ALL_NAV_ITEMS.slice(0, 5).map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1.5 whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#183153] ${
                  isActive
                    ? 'text-[#183153] font-semibold'
                    : 'text-[#57544E] hover:text-[#141413]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8C3B2B]"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}

          {/* Dropdown for Additional Sections */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setMoreDropdownOpen((prev) => !prev)}
              aria-expanded={moreDropdownOpen}
              aria-haspopup="true"
              className="flex items-center gap-1 py-1.5 text-[#57544E] hover:text-[#141413] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#183153]"
            >
              <span>Archive & More</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  moreDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {moreDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-md bg-white border border-[#DCD6C8] shadow-[0_10px_30px_rgba(20,20,19,0.08)] py-1.5 z-50">
                {MORE_NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      className={`block px-4 py-2 text-xs font-medium transition-colors ${
                        isActive
                          ? 'text-[#183153] font-semibold bg-[#F3EFE6]'
                          : 'text-[#4A4843] hover:bg-[#FAF8F5] hover:text-[#141413]'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <button
            type="button"
            onClick={onOpenQuickNav}
            title="Quick Index Search (Press /)"
            aria-label="Open quick navigation palette"
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-[#57544E] hover:text-[#141413] bg-white hover:bg-[#F3EFE6] border border-[#DCD6C8] rounded transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#183153]"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Index /</span>
          </button>

          <button
            type="button"
            onClick={onOpenCustomizer}
            aria-label="Customize portfolio data"
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded border transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#183153] ${
              isEditMode
                ? 'bg-[#FDF4F2] text-[#8C3B2B] border-[#D9A79C]'
                : 'bg-white text-[#4A4843] border-[#DCD6C8] hover:bg-[#F3EFE6] hover:text-[#141413]'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{isEditMode ? 'Editing' : 'Edit Dossier'}</span>
          </button>

          <button
            type="button"
            onClick={onOpenResumeModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[#183153] hover:bg-[#10223A] rounded transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183153]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </button>

          {/* Mobile Hamburger Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded bg-white border border-[#DCD6C8] text-[#141413] hover:bg-[#F3EFE6] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#DCD6C8] bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-4">
          <nav aria-label="Mobile Navigation" className="grid grid-cols-2 gap-1.5">
            {[
              ...ALL_NAV_ITEMS,
              { id: 'certifications', label: 'Certificates' },
              { id: 'future-direction', label: 'Academic Vision' },
            ].map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`px-3 py-2.5 rounded text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-[#183153] text-white font-semibold'
                      : 'text-[#4A4843] bg-white border border-[#E6E1D6] hover:bg-[#F3EFE6]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-[#E6E1D6] flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuickNav();
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-[#141413] bg-white border border-[#DCD6C8] rounded"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Quick Jump (/)</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-white bg-[#183153] rounded"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Full CV</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
