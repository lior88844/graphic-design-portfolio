'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LinkedinLogoIcon, EnvelopeIcon } from '@phosphor-icons/react';

const EMAIL = 'dearliordoron@gmail.com';
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("I want to work with you Lior!")}`;
const LINKEDIN_URL = 'https://www.linkedin.com/in/dearliordoron/';
const GITHUB_URL = 'https://github.com/liordoron';

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function Footer() {
  const pathname = usePathname();

  // Home page has its own footer overlaid on the hero video
  if (pathname === '/') return null;

  return (
    <footer className="mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-foreground/35 tracking-wide">
          © {new Date().getFullYear()} Lior Doron.
        </p>

        <div className="flex items-center gap-1">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-9 h-9 rounded-full text-foreground/40 hover:text-foreground/80 transition-colors duration-200"
          >
            <LinkedinLogoIcon size={16} weight="regular" aria-hidden />
          </a>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-9 h-9 rounded-full text-foreground/40 hover:text-foreground/80 transition-colors duration-200"
          >
            <GitHubIcon size={16} />
          </a>

          <a
            href={MAILTO}
            aria-label="Email"
            className="flex items-center justify-center w-9 h-9 rounded-full text-foreground/40 hover:text-foreground/80 transition-colors duration-200"
          >
            <EnvelopeIcon size={16} weight="regular" aria-hidden />
          </a>

          <a
            href="/Lior Doron - cv.pdf"
            download="Lior Doron - CV.pdf"
            className="ml-2 text-xs text-foreground/40 hover:text-foreground/80 transition-colors duration-200 tracking-wide"
          >
            CV ↓
          </a>

        </div>
      </div>
    </footer>
  );
}
