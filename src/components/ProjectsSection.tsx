import React, { useState, useMemo } from 'react';
import {
  Search,
  X,
  ArrowUpRight,
  BookOpen,
  FolderGit2,
  PencilLine,
} from 'lucide-react';
import { ProjectCategory, ProjectEntry } from '../data/studentProfile';

interface ProjectsSectionProps {
  projects: ProjectEntry[];
  onSelectProject: (project: ProjectEntry) => void;
  onOpenCustomizer: () => void;
  isEditMode: boolean;
}

const CATEGORIES: ('All' | ProjectCategory)[] = [
  'All',
  'Doctoral Study',
  'Patents',
  'Digital Commerce',
  'UPI & FinTech',
  'Finance & AI',
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject,
  onOpenCustomizer,
  isEditMode,
}) => {
  const [activeCategory, setActiveCategory] = useState<'All' | ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.problem.toLowerCase().includes(q) ||
        project.objective.toLowerCase().includes(q) ||
        project.role.toLowerCase().includes(q) ||
        project.technologies.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [projects, activeCategory, searchQuery]);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#DCD6C8]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left 3 Columns: Sticky Chapter Index Rail */}
          <div className="lg:col-span-3 lg:sticky lg:top-24 space-y-3">
            <p className="text-xs font-mono text-[#8C3B2B] uppercase tracking-widest">
              CHAPTER 04 / PATENTS & STUDIES
            </p>
            <h2
              id="projects-heading"
              className="font-serif text-3xl sm:text-4xl font-medium text-[#141413] tracking-tight text-balance"
            >
              Official Patents & Case Studies
            </h2>
            <p className="text-xs text-[#57544E] leading-relaxed">
              3 Official Journal Patents (including 1 Design Patent) and regional empirical studies in West & East Godavari Districts.
            </p>
            <p className="text-xs font-mono text-[#183153] pt-1 tabular-nums">
              Showing {filteredProjects.length} of {projects.length} dossiers
            </p>
            {isEditMode && (
              <button
                type="button"
                onClick={onOpenCustomizer}
                className="inline-flex items-center gap-1 text-xs font-medium text-[#183153] hover:underline underline-offset-4 pt-2"
              >
                <PencilLine className="w-3.5 h-3.5" />
                <span>Edit Studies</span>
              </button>
            )}
          </div>

          {/* Right 9 Columns: Filter Toolbar + Study Cards */}
          <div className="lg:col-span-9 lg:border-l lg:border-[#DCD6C8] lg:pl-12 space-y-8">
            {/* Filter & Search Toolbar */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-[#E6E1D6]">
              <div
                role="group"
                aria-label="Filter studies by category"
                className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EDE8DC] border border-[#DCD6C8] rounded"
              >
                {CATEGORIES.map((category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors duration-150 whitespace-nowrap ${
                        isActive
                          ? 'bg-white text-[#183153] font-semibold shadow-2xs'
                          : 'text-[#57544E] hover:text-[#141413]'
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              <div className="relative w-full md:w-64">
                <label htmlFor="project-search-input" className="sr-only">
                  Search patents and research studies
                </label>
                <Search className="w-3.5 h-3.5 text-[#78746C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="project-search-input"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search patents, UPI, Godavari..."
                  className="w-full pl-8 pr-7 py-1.5 text-xs bg-white border border-[#DCD6C8] rounded text-[#141413] placeholder:text-[#78746C] focus:outline-2 focus:outline-[#183153]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear project search"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-[#78746C] hover:text-[#141413]"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Study Grid */}
            {filteredProjects.length === 0 ? (
              <div className="p-12 text-center rounded bg-white border border-[#DCD6C8]">
                <p className="font-serif text-xl text-[#141413]">
                  No studies match your current filter criteria
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory('All');
                    setSearchQuery('');
                  }}
                  className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[#183153] rounded"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((project, idx) => {
                  const hasImage = Boolean(project.image && !failedImages[project.id]);
                  return (
                    <article
                      key={project.id}
                      className="group rounded bg-white border border-[#DCD6C8] hover:border-[#B8B0A0] transition-colors duration-150 flex flex-col justify-between overflow-hidden shadow-[0_1px_4px_rgba(20,20,19,0.02)]"
                    >
                      <div>
                        {/* Visual Header with Archival Fallback */}
                        <div
                          onClick={() => onSelectProject(project)}
                          className="cursor-pointer aspect-[16/9] w-full overflow-hidden bg-[#F3EFE6] border-b border-[#E6E1D6] relative"
                        >
                          {hasImage ? (
                            <img
                              src={project.image}
                              alt={`Visual preview for ${project.title}`}
                              loading="lazy"
                              referrerPolicy="no-referrer"
                              onError={() =>
                                setFailedImages((prev) => ({ ...prev, [project.id]: true }))
                              }
                              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-200"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col justify-between p-6 bg-gradient-to-br from-[#FAF8F5] via-[#F3EFE6] to-[#E6E1D6]">
                              <div className="flex items-center justify-between text-[11px] font-mono text-[#78746C]">
                                <span>CASE DOSSIER · 0{idx + 1}</span>
                                <span className="tabular-nums text-[#8C3B2B] font-medium">
                                  {project.year}
                                </span>
                              </div>
                              <div>
                                <FolderGit2 className="w-7 h-7 text-[#183153] mb-2 stroke-[1.5]" />
                                <p className="font-serif text-base text-[#2E2D2A]">
                                  {project.category} · Commerce & Empirical Inquiry
                                </p>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Card Body */}
                        <div className="p-6 space-y-3.5">
                          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#57544E]">
                            <span className="text-[#8C3B2B] font-semibold">
                              {project.category}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span className="tabular-nums">{project.year}</span>
                            <span aria-hidden="true">·</span>
                            <span>{project.role}</span>
                          </div>

                          <h3 className="font-serif text-xl font-medium text-[#141413] leading-snug">
                            <button
                              type="button"
                              onClick={() => onSelectProject(project)}
                              className="text-left hover:text-[#183153] transition-colors focus-visible:outline-2 focus-visible:outline-[#183153]"
                            >
                              {project.title}
                            </button>
                          </h3>

                          <p className="text-xs sm:text-sm text-[#4A4843] leading-relaxed">
                            {project.description}
                          </p>

                          <dl className="pt-3 border-t border-[#F3EFE6] space-y-2 text-xs">
                            <div>
                              <dt className="font-mono text-[#78746C] inline">
                                Objective:{' '}
                              </dt>
                              <dd className="inline text-[#2E2D2A] leading-relaxed">
                                {project.objective}
                              </dd>
                            </div>
                            <div>
                              <dt className="font-mono text-[#78746C] inline">
                                Outcome:{' '}
                              </dt>
                              <dd className="inline text-[#2E2D2A] leading-relaxed">
                                {project.results}
                              </dd>
                            </div>
                          </dl>

                          <div className="pt-1">
                            <p className="text-[11px] font-mono text-[#57544E]">
                              {project.technologies.join(' · ')}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="px-6 py-3.5 border-t border-[#E6E1D6] bg-[#FAF8F5] flex items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => onSelectProject(project)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-[#183153] hover:bg-[#10223A] rounded transition-colors whitespace-nowrap"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Read Full Case Study</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => onSelectProject(project)}
                          className="inline-flex items-center gap-1 text-xs font-medium text-[#4A4843] hover:text-[#141413] whitespace-nowrap"
                        >
                          <span>Inspect</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
