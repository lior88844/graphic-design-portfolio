'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { LinkedinLogoIcon, EnvelopeIcon } from '@phosphor-icons/react';
import { MobileOnePager } from '@/components/MobileOnePager';

const HeroVideo = dynamic(() => import('@/components/HeroVideo'), { ssr: false });
const HeroCursor = dynamic(() => import('@/components/HeroCursor'), { ssr: false });

const EMAIL = 'dearliordoron@gmail.com';
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("I want to work with you Lior!")}`;
const LINKEDIN_URL = 'https://www.linkedin.com/in/dearliordoron/';
const GITHUB_URL = 'https://github.com/lior88844';

function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const HERO_VIDEO = '/videos/hero-video.mp4';

export default function HomePage() {
  return (
    <div className="relative">
      <HeroCursor />

      <section
        id="hero-section"
        className="relative -mt-[var(--nav-height)] min-h-[100dvh] flex flex-col overflow-hidden bg-background [&_*]:cursor-none cursor-none"
      >
        <HeroVideo src={HERO_VIDEO} />

        <div className="absolute inset-0 bg-black/30 z-[1]" aria-hidden="true" />

        <div className="relative z-10 flex flex-col items-center flex-1 text-center px-6 py-[90px]">
          <div className="h-20 md:h-24 shrink-0" aria-hidden="true" />

          <h1
            className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl font-normal leading-[0.95] max-w-7xl text-white"
            style={{ fontFamily: 'var(--font-display), serif', letterSpacing: '-2.46px' }}
          >
            Code, design,{' '}
            <em className="not-italic text-white/60">and the space</em>{' '}
            between.
          </h1>

          <p className="animate-fade-rise-delay text-white/60 text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
            Lior is a creative developer and designer shaping digital products and identities for music, culture, and independent brands.
          </p>

          <div className="animate-fade-rise-delay-2 mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Desktop: navigate to /work route */}
            <Link
              id="hero-cta"
              href="/work"
              className="liquid-glass rounded-full px-14 py-5 text-base text-white hover:scale-[1.03] transition-transform duration-200 hidden md:inline-block cursor-none"
            >
              View Work
            </Link>
            {/* Mobile: social links as pills */}
            <div className="flex items-center gap-3 md:hidden">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="liquid-glass rounded-full px-5 py-3 text-white hover:scale-[1.03] transition-transform duration-200 flex items-center justify-center"
              >
                <LinkedinLogoIcon size={18} weight="fill" aria-hidden />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="liquid-glass rounded-full px-5 py-3 text-white hover:scale-[1.03] transition-transform duration-200 flex items-center justify-center"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href={MAILTO}
                aria-label="Email"
                className="liquid-glass rounded-full px-5 py-3 text-white hover:scale-[1.03] transition-transform duration-200 flex items-center justify-center"
              >
                <EnvelopeIcon size={18} weight="fill" aria-hidden />
              </a>
              <a
                href="/Lior Doron - cv.pdf"
                download="Lior Doron - CV.pdf"
                className="liquid-glass rounded-full px-5 py-3 text-sm text-white hover:scale-[1.03] transition-transform duration-200 tracking-wide"
              >
                CV ↓
              </a>
            </div>
          </div>
        </div>

        {/* Footer bar — overlaid on the hero video, desktop only */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 lg:px-10 py-5 hidden md:flex items-center justify-between">
          <p className="text-[11px] text-white/50 tracking-wide">
            © {new Date().getFullYear()} Lior Doron.
          </p>

          <div className="flex items-center gap-1">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-8 h-8 text-white hover:opacity-70 transition-opacity duration-200 cursor-none"
            >
              <LinkedinLogoIcon size={14} weight="regular" aria-hidden />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center w-8 h-8 text-white hover:opacity-70 transition-opacity duration-200 cursor-none"
            >
              <GitHubIcon size={14} />
            </a>
            <a
              href={MAILTO}
              aria-label="Email"
              className="flex items-center justify-center w-8 h-8 text-white hover:opacity-70 transition-opacity duration-200 cursor-none"
            >
              <EnvelopeIcon size={14} weight="regular" aria-hidden />
            </a>
            <a
              href="/Lior Doron - cv.pdf"
              download="Lior Doron - CV.pdf"
              className="ml-2 text-[11px] text-white hover:opacity-70 transition-opacity duration-200 tracking-wide cursor-none"
            >
              CV ↓
            </a>
          </div>
        </div>
      </section>

      {/* Mobile one-pager: Work, About, Contact sections stacked below hero */}
      <MobileOnePager />
    </div>
  );
}
