'use client';

import { motion } from 'framer-motion';
import { InstagramLogoIcon, LinkedinLogoIcon, WhatsappLogoIcon, EnvelopeIcon } from '@phosphor-icons/react';

const EMAIL = 'dearliordoron@gmail.com';
const EMAIL_SUBJECT = "I want to work with you Lior!";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;
const INSTAGRAM_URL = 'https://www.instagram.com/dearliordoron/';
const INSTAGRAM_HANDLE = '@dearliordoron';
const LINKEDIN_URL = 'https://www.linkedin.com/in/dearliordoron/';
const WHATSAPP_URL = 'https://wa.me/972546988844';

const CHANNELS = [
  { label: 'Instagram', href: INSTAGRAM_URL, external: true,  Icon: InstagramLogoIcon },
  { label: 'LinkedIn',  href: LINKEDIN_URL,  external: true,  Icon: LinkedinLogoIcon  },
  { label: 'Email',     href: MAILTO,        external: false, Icon: EnvelopeIcon      },
  { label: 'WhatsApp',  href: WHATSAPP_URL,  external: true,  Icon: WhatsappLogoIcon  },
];

const EASE = [0.25, 0.1, 0.25, 1] as const;

const DISPLAY_FONT = 'var(--font-display), Georgia, serif';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-12 sm:pt-16 pb-24 sm:pb-32">
      <div className="max-w-5xl mx-auto px-5 md:px-10 lg:px-16">
        {/* Headline */}
        <motion.h1
          className="font-normal leading-[0.92] text-foreground"
          style={{
            fontFamily: DISPLAY_FONT,
            fontSize: 'clamp(3.5rem, 12vw, 8rem)',
            letterSpacing: '-0.04em',
          }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          Let&rsquo;s{' '}
          <em className="not-italic text-foreground/70">Talk</em>
        </motion.h1>

        <motion.p
          className="mt-8 sm:mt-10 text-base sm:text-lg text-foreground/70 max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: EASE }}
        >
          Interested in working together? Reach out to discuss engineering support, visual identity,
          web design, or print — for products, artists, and cultural initiatives.
        </motion.p>

        {/* Email — the centerpiece, treated as a typographic statement */}
        <motion.div
          className="mt-20 sm:mt-32"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: EASE }}
        >
          <span className="block text-[10px] sm:text-xs uppercase tracking-[0.22em] text-foreground/50 mb-4 sm:mb-6">
            Write to me
          </span>

          <a
            href={MAILTO}
            className="group inline-block max-w-full"
            aria-label={`Send an email to ${EMAIL}`}
          >
            <span
              className="block font-normal text-foreground break-all transition-colors duration-300 group-hover:text-foreground/80"
              style={{
                fontFamily: DISPLAY_FONT,
                fontSize: 'clamp(1.75rem, 5.5vw, 3.75rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
              }}
            >
              {EMAIL}
            </span>
            <span
              aria-hidden="true"
              className="block mt-3 h-px bg-foreground/80 origin-left scale-x-[0.06] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-x-100"
            />
          </a>

          <p className="mt-5 text-sm text-foreground/55 max-w-md leading-relaxed">
            Typical reply within 24&ndash;48 hours.
          </p>
        </motion.div>

        {/* Social / contact icons */}
        <motion.div
          className="mt-20 sm:mt-28"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span className="block text-[10px] sm:text-xs uppercase tracking-[0.22em] text-foreground/50 mb-6">
            Find me
          </span>
          <div className="flex items-center gap-5">
            {CHANNELS.map(({ label, href, external, Icon }) => (
              <motion.a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                aria-label={label}
                className="group flex items-center justify-center w-11 h-11 rounded-full border border-foreground/20 text-foreground/60 transition-colors duration-300 hover:border-foreground/70 hover:text-foreground"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Icon size={18} weight="regular" aria-hidden />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Availability */}
        <motion.div
          className="mt-16 sm:mt-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ delay: 0.1, duration: 0.6, ease: EASE }}
        >
          <span className="block text-[10px] sm:text-xs uppercase tracking-[0.22em] text-foreground/50 mb-4">
            Right Now
          </span>
          <p
            className="font-normal text-foreground"
            style={{
              fontFamily: DISPLAY_FONT,
              fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
            }}
          >
            Open for{' '}
            <em className="not-italic text-foreground/60">2026</em>
          </p>
          <p className="mt-3 text-sm text-foreground/55 max-w-xs leading-relaxed">
            Accepting select projects. Typical timelines range from two to eight weeks depending on scope.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
