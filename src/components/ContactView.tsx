import React, { useState } from 'react';
import { Mail, Linkedin, Copy, Check, Send, MapPin, Sparkles, Clock, ShieldCheck } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'UX Case Study --- PE.solutions Energy Solutions',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@shad360.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 animate-fadeIn">
      {/* Contact Hero */}
      <section className="bg-[#FAF6ED] border border-[#EAE2B7] rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto relative overflow-hidden">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-96 h-96 bg-[#F77F00]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#F77F00]/40 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#F77F00]"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#D62828]">
              Contact
            </span>
          </div>

          <h1 className="font-fraunces font-bold text-4xl sm:text-6xl text-[#003049] leading-tight mb-4">
            Let's build something <span className="text-[#F77F00] italic font-normal">together</span>.
          </h1>

          <p className="text-lg sm:text-xl text-[#1F3646] font-medium mb-2">
            Ready to create amazing experiences.
          </p>
          <p className="text-base sm:text-lg text-[#8C765C] mb-8">
            Excited to collaborate on innovative enterprise projects.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/shadhaque/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-[#003049] hover:bg-[#244B63] text-white font-semibold text-sm transition-all shadow-md hover:scale-102 flex items-center gap-2.5"
            >
              <Linkedin className="w-4 h-4 text-[#FCBF49]" />
              <span>Connect on LinkedIn ↗</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF6ED] text-[#003049] border-2 border-[#EAE2B7] hover:border-[#F77F00] font-semibold text-sm transition-all cursor-pointer flex items-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Email Copied! (info@shad360.com)</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#F77F00]" />
                  <span>Copy Email (info@shad360.com)</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Two Column: Form and Information */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
        {/* Direct Contact Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#FAF6ED] border border-[#EAE2B7] rounded-3xl p-6 sm:p-8">
            <div className="w-10 h-10 rounded-xl bg-[#D62828] text-white flex items-center justify-center mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-fraunces font-bold text-xl text-[#003049] mb-1">
              Direct Inquiries
            </h3>
            <p className="text-xs text-[#8C765C] mb-3">
              Reach out directly for service design consultations, case study deep dives, or enterprise speaking.
            </p>
            <a
              href="mailto:info@shad360.com"
              className="font-bold text-base text-[#D62828] hover:underline"
            >
              info@shad360.com
            </a>
          </div>

          <div className="bg-[#FAF6ED] border border-[#EAE2B7] rounded-3xl p-6 sm:p-8">
            <div className="w-10 h-10 rounded-xl bg-[#003049] text-white flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-[#FCBF49]" />
            </div>
            <h3 className="font-fraunces font-bold text-xl text-[#003049] mb-1">
              Location &amp; Time Zones
            </h3>
            <p className="text-sm text-[#1F3646] font-medium">
              Based between Massachusetts and New York
            </p>
            <p className="text-xs text-[#8C765C] mt-1">
              Eastern Time (US &amp; Canada) · Available for remote and hybrid engagements.
            </p>
          </div>

          <div className="bg-white border border-[#EAE2B7] rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#F77F00] mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Accessibility Commitment</span>
            </div>
            <p className="text-xs text-[#1F3646] leading-relaxed">
              Every digital experience is built with high-contrast, WCAG AA compliance, and accessible typography using the Ember Dusk palette.
            </p>
          </div>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-7 bg-white border border-[#EAE2B7] rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-[0.16em] font-bold text-[#D62828]">
              Send a Note
            </span>
            <h3 className="font-fraunces font-bold text-2xl text-[#003049] mt-1">
              Start the Conversation
            </h3>
            <p className="text-xs sm:text-sm text-[#8C765C] mt-1">
              Share your project details or inquiries. You will receive a response promptly.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-[#FAF6ED] border border-[#FCBF49] text-center space-y-3 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-fraunces font-bold text-xl text-[#003049]">
                Message Ready
              </h4>
              <p className="text-sm text-[#1F3646]">
                Thank you, <strong>{formData.name}</strong>! Your inquiry regarding <em>{formData.interest}</em> has been prepared.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-full bg-[#003049] text-white text-xs font-semibold hover:bg-[#244B63] transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#003049] mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full p-3.5 rounded-xl border border-[#EAE2B7] bg-[#FAF6ED] text-sm text-[#003049] focus:outline-none focus:border-[#F77F00]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#003049] mb-1.5">
                  Your Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="sarah@company.com"
                  className="w-full p-3.5 rounded-xl border border-[#EAE2B7] bg-[#FAF6ED] text-sm text-[#003049] focus:outline-none focus:border-[#F77F00]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#003049] mb-1.5">
                  Topic of Discussion
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full p-3.5 rounded-xl border border-[#EAE2B7] bg-[#FAF6ED] text-sm text-[#003049] focus:outline-none focus:border-[#F77F00]"
                >
                  <option value="UX Case Study --- PE.solutions Energy Solutions">
                    UX Case Study: PE.solutions Energy Solutions (Provide Details)
                  </option>
                  <option value="UX Case Study --- Dell Enterprise Services">
                    UX Case Study: Dell Enterprise Services
                  </option>
                  <option value="New Enterprise Service Design Engagement">
                    New Enterprise Service Design Engagement
                  </option>
                  <option value="Design System & Architecture Consultation">
                    Design System &amp; Architecture Consultation
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#003049] mb-1.5">
                  Message / Project Brief
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your product challenges, timeline, or energy management objectives..."
                  className="w-full p-3.5 rounded-xl border border-[#EAE2B7] bg-[#FAF6ED] text-sm text-[#003049] focus:outline-none focus:border-[#F77F00]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#F77F00] hover:bg-[#db7000] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2 mt-2"
              >
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
