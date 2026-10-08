import React, { useState } from 'react';
import { PencilLine } from 'lucide-react';
import { SkillCategory } from '../data/studentProfile';

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
  onOpenCustomizer: () => void;
  isEditMode: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  skillCategories,
  onOpenCustomizer,
  isEditMode,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const visibleCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#DCD6C8]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left 3 Columns: Sticky Chapter Index Rail */}
          <div className="lg:col-span-3 lg:sticky lg:top-24 space-y-3">
            <p className="text-xs font-mono text-[#8C3B2B] uppercase tracking-widest">
              CHAPTER 06 / COMPETENCIES
            </p>
            <h2
              id="skills-heading"
              className="font-serif text-3xl sm:text-4xl font-medium text-[#141413] tracking-tight text-balance"
            >
              Skills, Tools & Strengths
            </h2>
            <p className="text-xs text-[#57544E] leading-relaxed">
              Instructional delivery, accounting & office software (Tally ERP, MS Office), and professional management strengths.
            </p>
            {isEditMode && (
              <button
                type="button"
                onClick={onOpenCustomizer}
                className="inline-flex items-center gap-1 text-xs font-medium text-[#183153] hover:underline underline-offset-4 pt-2"
              >
                <PencilLine className="w-3.5 h-3.5" />
                <span>Edit Skills</span>
              </button>
            )}
          </div>

          {/* Right 9 Columns: Filterable Competency Matrix */}
          <div className="lg:col-span-9 lg:border-l lg:border-[#DCD6C8] lg:pl-12 space-y-8">
            {/* Segmented Filter Control */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E6E1D6]">
              <div
                role="group"
                aria-label="Filter skill domains"
                className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EDE8DC] border border-[#DCD6C8] rounded"
              >
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors duration-150 whitespace-nowrap ${
                    selectedCategory === 'all'
                      ? 'bg-white text-[#183153] font-semibold shadow-2xs'
                      : 'text-[#57544E] hover:text-[#141413]'
                  }`}
                >
                  All Domains
                </button>
                {skillCategories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors duration-150 whitespace-nowrap ${
                      selectedCategory === cat.id
                        ? 'bg-white text-[#183153] font-semibold shadow-2xs'
                        : 'text-[#57544E] hover:text-[#141413]'
                    }`}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Competency Cards */}
            <div
              className={`grid grid-cols-1 ${
                visibleCategories.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-3'
              } gap-6`}
            >
              {visibleCategories.map((category, idx) => (
                <div
                  key={category.id}
                  className="bg-white p-6 rounded border border-[#DCD6C8] flex flex-col justify-between"
                >
                  <div>
                    <div className="pb-4 border-b border-[#E6E1D6]">
                      <p className="text-[11px] font-mono text-[#8C3B2B] uppercase tracking-wider tabular-nums">
                        DOMAIN 0{idx + 1}
                      </p>
                      <h3 className="mt-1 font-serif text-xl font-medium text-[#141413]">
                        {category.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#57544E] leading-relaxed">
                        {category.subtitle}
                      </p>
                    </div>

                    <ul className="mt-4 divide-y divide-[#F3EFE6]">
                      {category.skills.map((skill, sIdx) => (
                        <li key={sIdx} className="py-3 first:pt-1 last:pb-1">
                          <div className="flex items-baseline justify-between gap-2">
                            <span className="text-sm font-semibold text-[#141413]">
                              {skill.name}
                            </span>
                            {skill.proficiency && (
                              <span className="text-xs font-mono text-[#183153] whitespace-nowrap">
                                {skill.proficiency}
                              </span>
                            )}
                          </div>
                          {skill.context && (
                            <p className="mt-1 text-xs text-[#4A4843] leading-relaxed">
                              {skill.context}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
