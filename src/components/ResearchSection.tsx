import React, { useState, useMemo } from 'react';
import {
  CheckCircle2,
  BookMarked,
  PencilLine,
  Copy,
  Check,
  Search,
  X,
} from 'lucide-react';
import {
  PublicationEntry,
  ResearchStatus,
  StudentProfile,
} from '../data/studentProfile';

interface ResearchSectionProps {
  research: StudentProfile['research'];
  publications: PublicationEntry[];
  onOpenCustomizer: () => void;
  isEditMode: boolean;
}

const PUB_CATEGORIES: ('All' | PublicationEntry['category'])[] = [
  'All',
  'Online Buying Behavior',
  'UPI & FinTech',
  'Digital Marketing',
  'Finance & AI',
];

const StatusIndicator: React.FC<{ status: ResearchStatus }> = ({ status }) => {
  if (status === 'Published') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#183153]">
        <BookMarked className="w-3.5 h-3.5 text-[#8C3B2B]" />
        <span>Status: Published</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#183153]">
      <CheckCircle2 className="w-3.5 h-3.5 text-[#8C3B2B]" />
      <span>Status: {status}</span>
    </span>
  );
};

export const ResearchSection: React.FC<ResearchSectionProps> = ({
  research,
  publications,
  onOpenCustomizer,
  isEditMode,
}) => {
  const [selectedPubCategory, setSelectedPubCategory] = useState<
    'All' | PublicationEntry['category']
  >('All');
  const [pubSearch, setPubSearch] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const matchesCat =
        selectedPubCategory === 'All' || pub.category === selectedPubCategory;
      const q = pubSearch.trim().toLowerCase();
      if (!q) return matchesCat;
      return (
        matchesCat &&
        (pub.title.toLowerCase().includes(q) ||
          pub.venue.toLowerCase().includes(q) ||
          pub.indexingOrIssn.toLowerCase().includes(q) ||
          pub.abstract.toLowerCase().includes(q))
      );
    });
  }, [publications, selectedPubCategory, pubSearch]);

  const handleCopyCitation = (pub: PublicationEntry) => {
    const text = `${pub.authors}. "${pub.title}." ${pub.venue} (${pub.year}). ${pub.indexingOrIssn}.`;
    navigator.clipboard.writeText(text);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section
      id="research"
      aria-labelledby="research-heading"
      className="py-16 sm:py-24 bg-white border-b border-[#DCD6C8]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left 3 Columns: Sticky Chapter Index Rail */}
          <div className="lg:col-span-3 lg:sticky lg:top-24 space-y-3">
            <p className="text-xs font-mono text-[#8C3B2B] uppercase tracking-widest">
              CHAPTER 03 / SCHOLARSHIP
            </p>
            <h2
              id="research-heading"
              className="font-serif text-3xl sm:text-4xl font-medium text-[#141413] tracking-tight text-balance"
            >
              Doctoral Research & Publications
            </h2>
            <p className="text-xs text-[#57544E] leading-relaxed">
              Ph.D. dissertation submitted at Sri Venkateswara University and 9 peer-reviewed research papers.
            </p>
            <div className="pt-2 space-y-1 text-[11px] font-mono text-[#78746C]">
              <p>· UGC CARE Listed (2024)</p>
              <p>· ABDC Indexing (Vol. 16)</p>
              <p>· 2025 IEEE (ICRISET)</p>
              <p>· JETIR / IJCRT / IJFMR</p>
            </div>
            {isEditMode && (
              <button
                type="button"
                onClick={onOpenCustomizer}
                className="inline-flex items-center gap-1 text-xs font-medium text-[#183153] hover:underline underline-offset-4 pt-2"
              >
                <PencilLine className="w-3.5 h-3.5" />
                <span>Edit Research Profile</span>
              </button>
            )}
          </div>

          {/* Right 9 Columns: Doctoral Thesis + Research Synthesis + 9 Publications Catalog */}
          <div className="lg:col-span-9 lg:border-l lg:border-[#DCD6C8] lg:pl-12 space-y-12">
            {/* Doctoral Dissertation Feature Box */}
            <div className="p-6 sm:p-8 rounded bg-[#FAF8F5] border border-[#DCD6C8]">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#E6E1D6]">
                <span className="text-xs font-mono text-[#8C3B2B] font-semibold uppercase tracking-wider">
                  PH.D. DOCTORAL DISSERTATION · {research.thesisDepartment.toUpperCase()}
                </span>
                <StatusIndicator status="Submitted" />
              </div>

              <h3 className="mt-4 font-serif text-2xl sm:text-3xl font-medium text-[#141413] leading-snug">
                “{research.thesisTitle}”
              </h3>

              <p className="mt-2 text-sm font-medium text-[#183153]">
                {research.thesisUniversity}
              </p>

              <p className="mt-3 text-sm text-[#3D3B37] leading-relaxed max-w-[72ch]">
                {research.works[0]?.abstract}
              </p>
            </div>

            {/* Methodology & Research Interests Sub-Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10 border-b border-[#DCD6C8]">
              <div className="space-y-4">
                <div>
                  <h4 className="text-[11px] font-mono text-[#8C3B2B] uppercase tracking-wider">
                    Research Scope & Methodology
                  </h4>
                  <p className="mt-2 text-sm text-[#2E2D2A] leading-relaxed">
                    {research.currentFocus}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E6E1D6]">
                  <p className="text-xs text-[#4A4843] leading-relaxed">
                    {research.methodologyOverview}
                  </p>
                </div>
              </div>

              <div className="bg-[#F3EFE6]/60 p-5 rounded border border-[#DCD6C8] space-y-4">
                <h4 className="text-[11px] font-mono text-[#8C3B2B] uppercase tracking-wider">
                  Core Research Domains
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#141413]">
                  {research.interests.map((interest, idx) => (
                    <li key={idx} className="flex items-baseline gap-2.5">
                      <span className="font-mono text-xs text-[#8C3B2B] font-semibold tabular-nums">
                        0{idx + 1}.
                      </span>
                      <span>{interest}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* PEER-REVIEWED PUBLICATIONS CATALOG (9 PAPERS) */}
            <div id="publications" className="scroll-mt-24 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] font-mono text-[#8C3B2B] uppercase tracking-wider">
                    INDEXED JOURNAL & CONFERENCE CATALOG
                  </p>
                  <h3 className="mt-1 font-serif text-2xl sm:text-3xl font-medium text-[#141413]">
                    Published Research Papers ({publications.length})
                  </h3>
                </div>

                <p className="text-xs font-mono text-[#57544E] tabular-nums">
                  Showing {filteredPublications.length} of {publications.length} papers
                </p>
              </div>

              {/* Filter & Search Bar */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                <div
                  role="group"
                  aria-label="Filter publications by research theme"
                  className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EDE8DC] border border-[#DCD6C8] rounded"
                >
                  {PUB_CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedPubCategory(cat)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors duration-150 whitespace-nowrap ${
                        selectedPubCategory === cat
                          ? 'bg-white text-[#183153] font-semibold shadow-2xs'
                          : 'text-[#57544E] hover:text-[#141413]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="relative w-full md:w-64">
                  <label htmlFor="pub-search-input" className="sr-only">
                    Search publications by title, journal, or ISSN
                  </label>
                  <Search className="w-3.5 h-3.5 text-[#78746C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="pub-search-input"
                    type="search"
                    value={pubSearch}
                    onChange={(e) => setPubSearch(e.target.value)}
                    placeholder="Search ISSN, UGC CARE, IEEE..."
                    className="w-full pl-8 pr-7 py-1.5 text-xs bg-[#FAF8F5] border border-[#DCD6C8] rounded text-[#141413] placeholder:text-[#78746C] focus:outline-2 focus:outline-[#183153]"
                  />
                  {pubSearch && (
                    <button
                      type="button"
                      onClick={() => setPubSearch('')}
                      aria-label="Clear publication search"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-[#78746C] hover:text-[#141413]"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Publications Ledger Rows */}
              {filteredPublications.length === 0 ? (
                <div className="p-10 text-center rounded bg-[#FAF8F5] border border-[#DCD6C8]">
                  <p className="font-serif text-lg text-[#141413]">
                    No publications match your search filter.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPubCategory('All');
                      setPubSearch('');
                    }}
                    className="mt-3 text-xs font-medium text-[#183153] hover:underline"
                  >
                    Reset publication filters
                  </button>
                </div>
              ) : (
                <div className="divide-y divide-[#DCD6C8] border-t border-b border-[#DCD6C8]">
                  {filteredPublications.map((pub, index) => (
                    <article key={pub.id} className="py-6 first:pt-6 last:pb-6">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[#8C3B2B] font-semibold tabular-nums">
                            PAPER 0{index + 1}
                          </span>
                          <span className="text-[#DCD6C8]" aria-hidden="true">
                            ·
                          </span>
                          <span className="text-[#183153] font-medium">{pub.category}</span>
                          <span className="text-[#DCD6C8]" aria-hidden="true">
                            ·
                          </span>
                          <span className="text-[#57544E] tabular-nums">{pub.year}</span>
                        </div>
                        <span className="tabular-nums text-[#57544E]">
                          {pub.indexingOrIssn}
                        </span>
                      </div>

                      <h4 className="mt-2.5 font-serif text-xl font-medium text-[#141413] leading-snug">
                        {pub.title}
                      </h4>

                      <p className="mt-1 text-sm text-[#2E2D2A]">
                        <span className="font-medium">{pub.authors}</span> —{' '}
                        <em className="font-serif text-[#183153]">{pub.venue}</em>
                      </p>

                      <p className="mt-2 text-xs sm:text-sm text-[#4A4843] leading-relaxed max-w-[74ch]">
                        {pub.abstract}
                      </p>

                      <div className="mt-3.5 flex items-center justify-between gap-4">
                        <span className="text-[11px] font-mono text-[#78746C]">
                          Author: Madasu Rajasekhar
                        </span>

                        <button
                          type="button"
                          onClick={() => handleCopyCitation(pub)}
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-[#141413] bg-[#FAF8F5] hover:bg-[#F3EFE6] border border-[#DCD6C8] rounded transition-colors whitespace-nowrap"
                        >
                          {copiedId === pub.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-700" />
                              <span>Citation Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-[#8C3B2B]" />
                              <span>Copy Citation</span>
                            </>
                          )}
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
