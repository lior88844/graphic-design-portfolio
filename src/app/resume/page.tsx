'use client';

import { useEffect } from 'react';

const ACCENT = '#c9a84c'; // warm gold matching portfolio accent

export default function ResumePage() {
  // Add print-specific overrides that suppress the root layout chrome
  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'resume-print-overrides';
    style.textContent = `
      @media print {
        @page { size: A4; margin: 14mm 18mm; }
        body::before { display: none !important; }
        body { background: #fff !important; }
        nav, footer, #resume-print-btn, #resume-screen-header { display: none !important; }
        main { padding-top: 0 !important; }
        #resume-paper {
          box-shadow: none !important;
          border-radius: 0 !important;
          padding: 0 !important;
          max-width: 100% !important;
          width: 100% !important;
          background: #fff !important;
        }
        #resume-root { background: #fff !important; padding: 0 !important; }
      }
    `;
    document.head.appendChild(style);
    return () => { document.getElementById('resume-print-overrides')?.remove(); };
  }, []);

  return (
    <div id="resume-root" className="min-h-screen bg-[oklch(0.13_0.04_240)] py-10 px-4 sm:px-6">

      {/* Screen-only header */}
      <div id="resume-screen-header" className="max-w-[760px] mx-auto mb-6 flex items-center justify-between">
        <p className="text-xs text-white/40 tracking-wide uppercase">Resume</p>
        <button
          id="resume-print-btn"
          onClick={() => window.print()}
          className="text-xs px-4 py-2 rounded-full border border-white/20 text-white/60 hover:border-white/50 hover:text-white/90 transition-all duration-200 tracking-wide"
        >
          Save as PDF ↓
        </button>
      </div>

      {/* Paper */}
      <div
        id="resume-paper"
        className="max-w-[760px] mx-auto bg-white rounded-lg shadow-2xl px-12 py-10"
        style={{ fontFamily: "'Geist', 'Inter', system-ui, sans-serif" }}
      >

        {/* ── Header ── */}
        <header className="mb-6">
          <h1
            className="text-[28px] font-normal leading-none tracking-[-0.02em] text-[#0a0a0a] mb-2"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            Lior Doron
          </h1>
          <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-[11px] text-[#555] leading-relaxed">
            <a href="mailto:dearliordoron@gmail.com" className="text-[#555] hover:text-[#0a0a0a]">dearliordoron@gmail.com</a>
            <span>·</span>
            <span>054-698-8844</span>
            <span>·</span>
            <a href="https://linkedin.com/in/dearliordoron" className="text-[#555] hover:text-[#0a0a0a]">linkedin.com/in/dearliordoron</a>
            <span>·</span>
            <a href="https://github.com/lior88844" className="text-[#555] hover:text-[#0a0a0a]">github.com/lior88844</a>
            <span>·</span>
            <a href="https://liordoron.com" className="text-[#555] hover:text-[#0a0a0a]">liordoron.com</a>
          </div>
        </header>

        <Divider />

        {/* ── Summary ── */}
        <Section title="Summary">
          <p className="text-[11px] text-[#333] leading-[1.65]">
            UX/UI engineer with 3+ years designing and shipping digital products end to end. Designs interfaces grounded in user behavior, then engineers them to production standard — no handoff required. Background in psychology provides a rigorous foundation for user research and cognitive design. Seeking product design and UX engineering roles where design and code are owned by the same person.
          </p>
        </Section>

        <Divider />

        {/* ── Experience ── */}
        <Section title="Experience">

          <Role
            title="Founding Product Engineer & UX Lead"
            company="Muza"
            period="2025 – Present"
          >
            <li>Led product definition, UX design, and front-end engineering from day one alongside the founding team.</li>
            <li>Owned the full product cycle: user flows, interface design, component architecture, and production build in Next.js and TypeScript.</li>
            <li>Drove iteration cycles from user feedback through to shipped improvements; used AI tooling to accelerate prototyping and build velocity.</li>
          </Role>

          <Role
            title="Full-Stack Engineer & Product Analyst"
            company="Plannie (Acquired by Movement Group)"
            period="2023 – 2024"
          >
            <li>Shipped frontend features across Angular, Vue, and React — including payments, SMS, and calendar integrations.</li>
            <li>Designed and built an internal analytics dashboard tracking user behavior and customer funnels, driving a ~35% reduction in recurring product issues.</li>
            <li>Became the primary technical escalation point, developing deep empathy for real user pain through direct investigation of 1,000+ user issues.</li>
            <li>Wrote 300+ knowledge base articles, sharpening skills in information architecture and UX writing.</li>
          </Role>

          <Role
            title="Freelance UX/UI Designer & Web Engineer"
            company="Independent"
            period="2024 – 2025"
          >
            <li>Designed and built websites and visual identities for musicians and cultural clients end to end — brief through shipped product.</li>
            <li>Clients: Raanana Jazz Festival, Amit Friedman, Alon Nir, Gil Livni.</li>
          </Role>

          <Role
            title="Independent Product Projects"
            company=""
            period="2025"
            last
          >
            <li><strong>FairTips</strong> — Tip-splitting app designed to reduce cognitive load in social payment scenarios.</li>
            <li><strong>Wheel of Imagination</strong> — Children's creativity app; designed the interaction model, built mobile-first UI with focus on delight and accessibility.</li>
          </Role>

        </Section>

        <Divider />

        {/* ── Education ── */}
        <Section title="Education">

          <Role
            title="B.A. Psychology & East Asian Studies"
            company="Tel-Hai Academic College, Israel"
            period="2020 – 2024"
          >
            <li>Dual major in human behavior, cognition, and cross-cultural communication — academic foundation for UX research and design rationale.</li>
            <li>Tutored 40+ students in statistics including students with learning disabilities: direct practice in cognitive load reduction and adaptive communication.</li>
          </Role>

          <Role
            title="Huayu Mandarin Enrichment Scholarship"
            company="National Taiwan Normal University, Taipei"
            period="2024 – 2025"
          >
            <li>Competitive government scholarship for full-time Mandarin immersion. Maintained remote engineering work in parallel across time zones.</li>
          </Role>

          <Role
            title="Full-Stack Engineering"
            company="Coding Academy"
            period="2023"
            last
          >
            <li>JavaScript, React, Node.js, MongoDB.</li>
          </Role>

        </Section>

        <Divider />

        {/* ── Skills ── */}
        <Section title="Skills">
          <div className="grid grid-cols-1 gap-[3px] text-[11px]">
            <SkillRow label="Design" value="UX Research · Interaction Design · Wireframing · Prototyping · Design Systems · Visual Identity · Figma" />
            <SkillRow label="Engineering" value="React · Next.js · TypeScript · Node.js · Angular · Vue · REST APIs · AWS · Tailwind CSS · Framer Motion" />
            <SkillRow label="Languages" value="English (fluent) · Hebrew (native) · Mandarin (conversational)" />
          </div>
        </Section>

      </div>
    </div>
  );
}

/* ── Sub-components ────────────────────────────────────────── */

function Divider() {
  return <hr className="border-0 border-t border-[#e8e8e8] my-4" />;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-1">
      <h2
        className="text-[9px] uppercase tracking-[0.18em] font-semibold mb-3"
        style={{ color: ACCENT }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function Role({
  title,
  company,
  period,
  children,
  last = false,
}: {
  title: string;
  company: string;
  period: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div className={last ? '' : 'mb-3.5'}>
      <div className="flex items-baseline justify-between gap-2 mb-1">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-[12px] font-semibold text-[#0a0a0a] leading-tight">{title}</span>
          {company && (
            <span className="text-[11px] text-[#666]">{company}</span>
          )}
        </div>
        <span className="text-[10px] text-[#888] whitespace-nowrap shrink-0">{period}</span>
      </div>
      <ul className="space-y-[2px] pl-3" style={{ listStyleType: 'disc' }}>
        <style>{`#resume-paper ul li::marker { color: ${ACCENT}; font-size: 10px; }`}</style>
        {children}
      </ul>
    </div>
  );
}

function SkillRow({ label, value }: { label: string; value: string }) {
  return (
    <p className="text-[#333] leading-[1.6]">
      <span className="font-semibold text-[#0a0a0a]">{label}:</span>{' '}
      <span className="text-[#555]">{value}</span>
    </p>
  );
}
