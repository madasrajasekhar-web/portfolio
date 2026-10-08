import React, { useState } from 'react';
import {
  Download,
  FileText,
  Copy,
  Check,
  Send,
  AlertCircle,
  CheckCircle2,
  ArrowUp,
} from 'lucide-react';
import { StudentProfile } from '../data/studentProfile';
import { ALL_NAV_ITEMS } from './Navbar';

interface ResumeAndContactSectionProps {
  profile: StudentProfile;
  onOpenResumeModal: () => void;
  onDownloadResume: () => void;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ResumeAndContactSection: React.FC<ResumeAndContactSectionProps> = ({
  profile,
  onOpenResumeModal,
  onDownloadResume,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid academic or personal email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = 'Please include a brief subject line.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      newErrors.message = 'Please enter a message of at least 15 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(false);
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 450);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* CURRICULUM VITAE ARCHIVAL BANNER */}
      <section
        aria-labelledby="resume-cta-heading"
        className="py-14 sm:py-18 bg-[#F3EFE6] border-b border-[#DCD6C8] no-print"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="p-8 sm:p-10 rounded bg-white border border-[#DCD6C8] flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-[0_2px_8px_rgba(20,20,19,0.03)]">
            <div className="max-w-2xl space-y-2.5">
              <p className="text-[11px] font-mono text-[#8C3B2B] uppercase tracking-widest">
                COMPLETE CURRICULUM VITAE · MADASU RAJASEKHAR
              </p>
              <h2
                id="resume-cta-heading"
                className="font-serif text-2xl sm:text-3xl font-medium text-[#141413] tracking-tight text-balance"
              >
                Want to review my complete Curriculum Vitae?
              </h2>
              <p className="text-sm text-[#4A4843] leading-relaxed">
                Download or print the complete academic record including APSET qualification details (Cert. No: 300337), Ph.D. thesis at SV University, 3 years of Assistant Professor service at DNR College, 3 patents, and 9 research publications.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onDownloadResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-white bg-[#183153] hover:bg-[#10223A] rounded transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183153]"
              >
                <Download className="w-4 h-4" />
                <span>Download Full CV (.txt)</span>
              </button>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-[#141413] bg-[#FAF8F5] hover:bg-[#EDE8DC] border border-[#DCD6C8] rounded transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183153]"
              >
                <FileText className="w-4 h-4 text-[#8C3B2B]" />
                <span>View Printable CV</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 08 · ACADEMIC CORRESPONDENCE & CONTACT */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="py-16 sm:py-24 bg-white border-b border-[#DCD6C8] no-print"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left 3 Columns: Sticky Chapter Rail */}
            <div className="lg:col-span-3 lg:sticky lg:top-24 space-y-3">
              <p className="text-xs font-mono text-[#8C3B2B] uppercase tracking-widest">
                CHAPTER 08 / CORRESPONDENCE
              </p>
              <h2
                id="contact-heading"
                className="font-serif text-3xl sm:text-4xl font-medium text-[#141413] tracking-tight text-balance"
              >
                Academic Contact
              </h2>
              <p className="text-xs text-[#57544E] leading-relaxed">
                Direct correspondence for faculty appointments, commerce research collaboration, and academic inquiries.
              </p>
            </div>

            {/* Right 9 Columns: Contact Ledger + Correspondence Form */}
            <div className="lg:col-span-9 lg:border-l lg:border-[#DCD6C8] lg:pl-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Direct Contact Ledger (5 cols) */}
              <div className="md:col-span-5 bg-[#FAF8F5] p-6 rounded border border-[#DCD6C8] space-y-5">
                <div className="pb-3 border-b border-[#DCD6C8]">
                  <p className="text-[11px] font-mono text-[#8C3B2B] uppercase tracking-wider">
                    DIRECT CONTACT LEDGER
                  </p>
                  <h3 className="mt-1 font-serif text-lg font-medium text-[#141413]">
                    Madasu Rajasekhar
                  </h3>
                </div>

                <dl className="divide-y divide-[#E6E1D6] text-xs sm:text-sm">
                  <div className="py-3.5 space-y-2">
                    <dt className="text-[11px] font-mono text-[#78746C] uppercase">
                      Email Address
                    </dt>
                    <dd className="flex items-center justify-between gap-2">
                      <a
                        href={`mailto:${profile.email}`}
                        className="font-mono text-xs text-[#183153] font-medium hover:underline break-all"
                      >
                        {profile.email}
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        aria-label="Copy email address"
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono text-[#141413] bg-white border border-[#DCD6C8] rounded hover:bg-[#F3EFE6] shrink-0"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-700" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-[#8C3B2B]" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </dd>
                  </div>

                  <div className="py-3.5 space-y-2">
                    <dt className="text-[11px] font-mono text-[#78746C] uppercase">
                      Telephone
                    </dt>
                    <dd className="flex items-center justify-between gap-2">
                      <a
                        href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                        className="font-mono text-xs text-[#141413] font-medium tabular-nums"
                      >
                        {profile.phone}
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyPhone}
                        aria-label="Copy phone number"
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono text-[#141413] bg-white border border-[#DCD6C8] rounded hover:bg-[#F3EFE6] shrink-0"
                      >
                        {copiedPhone ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-700" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-[#8C3B2B]" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </dd>
                  </div>

                  <div className="py-3.5">
                    <dt className="text-[11px] font-mono text-[#78746C] uppercase">
                      Permanent Address
                    </dt>
                    <dd className="mt-1 text-xs text-[#2E2D2A] leading-relaxed">
                      M. Rajasekhar, {profile.personalBioData.fatherName},<br />
                      {profile.permanentAddress}
                    </dd>
                  </div>

                  <div className="pt-3.5 pb-1">
                    <dt className="text-[11px] font-mono text-[#78746C] uppercase">
                      Department & College
                    </dt>
                    <dd className="mt-1 text-xs text-[#2E2D2A] leading-relaxed">
                      Assistant Professor, Department of Commerce,<br />
                      DNR College, Bhimavaram, West Godavari District, Andhra Pradesh
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Validated Correspondence Form (7 cols) */}
              <div className="md:col-span-7">
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="p-6 sm:p-7 rounded bg-[#FAF8F5] border border-[#DCD6C8] space-y-4"
                >
                  <div className="pb-3 border-b border-[#DCD6C8]">
                    <p className="text-[11px] font-mono text-[#8C3B2B] uppercase tracking-wider">
                      SEND ACADEMIC INQUIRY
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-mono text-[#4A4843] mb-1"
                      >
                        Your Name <span className="text-[#8C3B2B]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, name: e.target.value }));
                          if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        placeholder="Dr. / Prof. / Name"
                        className={`w-full px-3 py-2 text-sm rounded bg-white border ${
                          errors.name ? 'border-rose-600' : 'border-[#DCD6C8]'
                        } text-[#141413] focus:outline-2 focus:outline-[#183153]`}
                      />
                      {errors.name && (
                        <p
                          id="contact-name-error"
                          role="alert"
                          className="mt-1 flex items-center gap-1 text-xs text-rose-700"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-mono text-[#4A4843] mb-1"
                      >
                        Your Email <span className="text-[#8C3B2B]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, email: e.target.value }));
                          if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        placeholder="colleague@university.edu"
                        className={`w-full px-3 py-2 text-sm rounded bg-white border ${
                          errors.email ? 'border-rose-600' : 'border-[#DCD6C8]'
                        } text-[#141413] focus:outline-2 focus:outline-[#183153]`}
                      />
                      {errors.email && (
                        <p
                          id="contact-email-error"
                          role="alert"
                          className="mt-1 flex items-center gap-1 text-xs text-rose-700"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-mono text-[#4A4843] mb-1"
                    >
                      Subject <span className="text-[#8C3B2B]">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, subject: e.target.value }));
                        if (errors.subject)
                          setErrors((prev) => ({ ...prev, subject: undefined }));
                      }}
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                      placeholder="Academic Inquiry / Commerce Department / Research Collaboration"
                      className={`w-full px-3 py-2 text-sm rounded bg-white border ${
                        errors.subject ? 'border-rose-600' : 'border-[#DCD6C8]'
                      } text-[#141413] focus:outline-2 focus:outline-[#183153]`}
                    />
                    {errors.subject && (
                      <p
                        id="contact-subject-error"
                        role="alert"
                        className="mt-1 flex items-center gap-1 text-xs text-rose-700"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono text-[#4A4843] mb-1"
                    >
                      Message <span className="text-[#8C3B2B]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, message: e.target.value }));
                        if (errors.message)
                          setErrors((prev) => ({ ...prev, message: undefined }));
                      }}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      placeholder="Write your message for Madasu Rajasekhar..."
                      className={`w-full px-3 py-2 text-sm rounded bg-white border ${
                        errors.message ? 'border-rose-600' : 'border-[#DCD6C8]'
                      } text-[#141413] focus:outline-2 focus:outline-[#183153]`}
                    />
                    {errors.message && (
                      <p
                        id="contact-message-error"
                        role="alert"
                        className="mt-1 flex items-center gap-1 text-xs text-rose-700"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {submitSuccess && (
                    <div
                      role="status"
                      className="p-3 rounded bg-emerald-50 border border-emerald-300 flex items-center gap-2 text-xs text-emerald-900"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-700" />
                      <span>
                        Thank you for your message. Your correspondence for Madasu Rajasekhar has been recorded.
                      </span>
                    </div>
                  )}

                  <div className="pt-2 flex items-center justify-between gap-4">
                    <span className="text-xs text-[#78746C]">
                      Fields marked with * are required.
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-white bg-[#183153] hover:bg-[#10223A] disabled:opacity-60 rounded transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183153]"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Correspondence'}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL ARCHIVAL FOOTER */}
      <footer className="bg-[#F3EFE6] py-12 sm:py-16 border-t border-[#DCD6C8] no-print">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#DCD6C8]">
            {/* Identity */}
            <div className="md:col-span-5 space-y-2">
              <p className="font-serif text-xl font-semibold text-[#141413]">
                {profile.name}
              </p>
              <p className="text-xs font-mono text-[#183153]">
                {profile.headline}
              </p>
              <p className="text-xs text-[#57544E] pt-1">
                {profile.currentInstitution} · {profile.location}
              </p>
            </div>

            {/* Monograph Chapters */}
            <div className="md:col-span-4 space-y-2">
              <p className="text-[11px] font-mono text-[#8C3B2B] uppercase tracking-wider">
                Monograph Index
              </p>
              <ul className="grid grid-cols-2 gap-1.5 text-xs text-[#4A4843]">
                {ALL_NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="hover:text-[#183153] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Correspondence & Back to Top */}
            <div className="md:col-span-3 flex flex-col justify-between space-y-4">
              <div className="space-y-1">
                <p className="text-[11px] font-mono text-[#8C3B2B] uppercase tracking-wider">
                  Direct Correspondence
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="block text-xs font-mono text-[#141413] hover:text-[#183153]"
                >
                  {profile.email}
                </a>
                <p className="text-xs font-mono text-[#57544E] tabular-nums">
                  {profile.phone}
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#141413] bg-white border border-[#DCD6C8] rounded hover:bg-[#FAF8F5] transition-colors"
                >
                  <ArrowUp className="w-3.5 h-3.5 text-[#183153]" />
                  <span>Return to Top</span>
                </button>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#57544E]">
            <p>© 2026 {profile.name}. All rights reserved.</p>
            <p className="font-mono text-[11px]">
              Press <kbd className="px-1.5 py-0.5 rounded bg-white border border-[#DCD6C8]">/</kbd> to open the Monograph Quick Index
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
