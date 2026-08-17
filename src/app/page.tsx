'use client';

import dynamic from 'next/dynamic';
import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { LinkedinLogoIcon, EnvelopeIcon, ArrowLeftIcon, PaperPlaneTiltIcon } from '@phosphor-icons/react';
import { MobileOnePager } from '@/components/MobileOnePager';

const HeroVideo = dynamic(() => import('@/components/HeroVideo'), { ssr: false });
const HeroCursor = dynamic(() => import('@/components/HeroCursor'), { ssr: false });

const EMAIL = 'dearliordoron@gmail.com';
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("I want to work with you Lior!")}`;
const LINKEDIN_URL = 'https://www.linkedin.com/in/dearliordoron/';
const GITHUB_URL = 'https://github.com/lior88844';

function GitHubIcon({ size = 14 }: Readonly<{ size?: number }>) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const HERO_VIDEO = '/videos/hero-video.mp4';

type SendState = 'idle' | 'sending' | 'sent' | 'error';

const STAR_COLORS = ['#ffffff', '#ffffff', '#F7B731', '#F7B731', '#5DADE2', '#5DADE2', '#f5f5f5'];

function fireStars(originX: number, originY: number) {
  void confetti({
    particleCount: 220,
    spread: 360,
    startVelocity: 30,
    origin: { x: originX, y: originY },
    colors: STAR_COLORS,
    shapes: ['star'],
    scalar: 0.85,
    ticks: 180,
    gravity: 0.4,
    drift: 0,
    decay: 0.82,
  });
}

function LeftStatusContent({
  sendState,
  hasMessage,
  onGoBack,
}: Readonly<{ sendState: SendState; hasMessage: boolean; onGoBack: () => void }>) {
  if (sendState === 'sent') {
    return (
      <motion.span
        key="sent-msg"
        className="text-white text-xs tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        sent ✓
      </motion.span>
    );
  }
  if (sendState === 'error') {
    return (
      <motion.span
        key="error-msg"
        className="text-red-400/80 text-xs tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        something went wrong — try again
      </motion.span>
    );
  }
  return (
    <motion.button
      key="go-back"
      onClick={onGoBack}
      className="liquid-glass rounded-full px-5 py-2.5 flex items-center gap-2 text-white text-xs hover:scale-[1.03] transition-transform duration-200 cursor-none tracking-widest uppercase"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <ArrowLeftIcon size={14} weight="bold" aria-hidden />
      go back
    </motion.button>
  );
}

export default function HomePage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [replyEmail, setReplyEmail] = useState('');
  const [sendState, setSendState] = useState<SendState>('idle');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const subtitleRef = useRef<HTMLTextAreaElement>(null);
  const measurerRef = useRef<HTMLSpanElement>(null);
  const sendBtnRef = useRef<HTMLButtonElement>(null);
  const hasMessage = message.trim().length > 0;

  useEffect(() => {
    if (contactOpen) {
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 350);
    }
  }, [contactOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    autoResizeSubtitle();
  }, [subtitle]);

  function autoResizeSubtitle() {
    const el = subtitleRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }

  function getTextWidth(text: string): number {
    const el = measurerRef.current;
    if (!el) return 0;
    el.textContent = text;
    return el.offsetWidth;
  }

  function handleMainChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const val = e.target.value;
    const containerWidth = textareaRef.current?.offsetWidth ?? Infinity;
    const totalWidth = getTextWidth(val);

    if (totalWidth <= containerWidth) {
      setMessage(val);
      return;
    }

    // Find split point at last word boundary that fits
    const words = val.split(' ');
    let firstLine = '';
    let splitIdx = 0;

    for (let i = 0; i < words.length; i++) {
      const candidate = i === 0 ? words[i] : `${firstLine} ${words[i]}`;
      if (getTextWidth(candidate) > containerWidth) {
        splitIdx = i;
        break;
      }
      firstLine = candidate;
      splitIdx = i + 1;
    }

    const overflow = words.slice(splitIdx).join(' ');
    setMessage(firstLine);
    setSubtitle((prev) => (overflow + (prev ? ` ${prev}` : '')).trimStart());
    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.focus();
        subtitleRef.current.setSelectionRange(overflow.length, overflow.length);
      }
    }, 0);
  }

  function handleSend() {
    if (!hasMessage || sendState === 'sending') return;

    // Capture position before any state change unmounts the button
    const rect = sendBtnRef.current?.getBoundingClientRect();
    const ox = rect ? (rect.left + rect.width / 2) / globalThis.innerWidth : 0.5;
    const oy = rect ? (rect.top + rect.height / 2) / globalThis.innerHeight : 0.8;

    setSendState('sending');

    const fullMessage = subtitle.trim()
      ? `${message.trim()}\n\n${subtitle.trim()}`
      : message.trim();
    const replyTo = replyEmail.trim();
    // GitHub Pages is static — open the user's mail client instead of a server API
    const subject = encodeURIComponent(
      replyTo ? `Hey Lior! (from ${replyTo}) — portfolio contact` : 'Hey Lior! — portfolio contact',
    );
    const body = encodeURIComponent(replyTo ? `${fullMessage}\n\n— ${replyTo}` : fullMessage);
    const link = document.createElement('a');
    link.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    link.click();

    setMessage('');
    setSubtitle('');
    setReplyEmail('');
    fireStars(ox, oy);
    setTimeout(() => {
      setContactOpen(false);
      setTimeout(() => setSendState('idle'), 1500);
    }, 200);
  }

  function handleGoBack() {
    setMessage('');
    setSubtitle('');
    setReplyEmail('');
    setSendState('idle');
    setContactOpen(false);
  }

  return (
    <div className="relative">
      <HeroCursor />

      <section
        id="hero-section"
        className="relative -mt-[var(--nav-height)] min-h-[100dvh] flex flex-col overflow-hidden bg-background [&_*]:cursor-none cursor-none"
      >
        <HeroVideo src={HERO_VIDEO} />

        <div className="absolute inset-0 bg-black/30 z-[1]" aria-hidden="true" />

        <motion.div
          className="relative z-10 flex flex-col items-center flex-1 text-center px-6 py-[90px]"
          animate={{ opacity: contactOpen ? 0 : 1, pointerEvents: contactOpen ? 'none' : 'auto' }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
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
            {/* Desktop: Say Hi CTA */}
            <motion.button
              id="hero-cta"
              onClick={() => setContactOpen(true)}
              className="liquid-glass rounded-full px-14 py-5 text-base text-white hidden md:inline-block cursor-none"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18 }}
            >
              Say Hi
            </motion.button>

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
        </motion.div>

        {/* Inline message box — centered in the hero when open on desktop */}
        <AnimatePresence>
          {contactOpen && (
            <motion.div
              key="contact-box"
              className="absolute inset-0 z-20 hidden md:flex flex-col items-center flex-1 text-center px-6 py-[90px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="h-20 md:h-24 shrink-0" aria-hidden="true" />
              {/* Hidden measurer — same font as the main textarea */}
              <span
                ref={measurerRef}
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  visibility: 'hidden',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                  padding: 0,
                  fontFamily: 'var(--font-display), serif',
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  letterSpacing: '-2.46px',
                  lineHeight: 0.95,
                }}
              />

              <div className="w-full max-w-7xl flex flex-col items-center">
                <textarea
                  ref={textareaRef}
                  value={message}
                  onChange={handleMainChange}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey) && hasMessage) {
                      void handleSend();
                    } else if (e.key === 'Enter') {
                      e.preventDefault();
                      subtitleRef.current?.focus();
                    }
                    if (e.key === 'Escape') handleGoBack();
                  }}
                  placeholder="say something..."
                  dir="auto"
                  disabled={sendState === 'sending' || sendState === 'sent'}
                  className="w-full bg-transparent border-none outline-none ring-0 focus:ring-0 focus:outline-none resize-none text-center text-white placeholder:text-white/30 leading-[0.95] disabled:opacity-50 cursor-text"
                  style={{
                    fontFamily: 'var(--font-display), serif',
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    letterSpacing: '-2.46px',
                    lineHeight: 0.95,
                    overflow: 'hidden',
                    boxShadow: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'block',
                    height: '1.1em',
                    maxHeight: '1.1em',
                  }}
                />

                <textarea
                  ref={subtitleRef}
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey) && hasMessage) {
                      void handleSend();
                    }
                    if (e.key === 'Backspace' && subtitle === '') {
                      e.preventDefault();
                      textareaRef.current?.focus();
                    }
                    if (e.key === 'Escape') {
                      handleGoBack();
                    }
                  }}
                  placeholder="a little more context..."
                  dir="auto"
                  disabled={sendState === 'sending' || sendState === 'sent'}
                  className="w-full bg-transparent border-none outline-none ring-0 focus:ring-0 focus:outline-none resize-none text-center text-white/60 placeholder:text-white/25 leading-relaxed disabled:opacity-50 cursor-text"
                  style={{
                    fontSize: '1.125rem',
                    overflow: 'hidden',
                    boxShadow: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'block',
                    minHeight: '1.625em',
                    maxWidth: '42rem',
                    alignSelf: 'center',
                  }}
                />

                <input
                  type="email"
                  value={replyEmail}
                  onChange={(e) => setReplyEmail(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && hasMessage) void handleSend();
                    if (e.key === 'Escape') handleGoBack();
                  }}
                  placeholder="your email, so I can write back (optional)"
                  disabled={sendState === 'sending' || sendState === 'sent'}
                  className="bg-transparent border-none outline-none ring-0 focus:ring-0 focus:outline-none text-center text-white placeholder:text-white/40 disabled:opacity-50 cursor-text mt-3"
                  style={{
                    fontSize: '0.8rem',
                    boxShadow: 'none',
                    padding: 0,
                    width: '24rem',
                    maxWidth: '100%',
                    letterSpacing: '0.03em',
                  }}
                />

                <div className="flex items-center justify-between w-full mt-8 px-8">
                  <AnimatePresence mode="wait">
                    <LeftStatusContent
                      sendState={sendState}
                      hasMessage={hasMessage}
                      onGoBack={handleGoBack}
                    />
                  </AnimatePresence>

                  <AnimatePresence>
                    {hasMessage && sendState === 'idle' && (
                      <motion.button
                        ref={sendBtnRef}
                        key="send"
                        onClick={() => void handleSend()}
                        className="liquid-glass rounded-full px-5 py-2.5 flex items-center gap-2 text-white text-xs hover:scale-[1.03] transition-transform duration-200 cursor-none tracking-widest uppercase"
                        initial={{ opacity: 0, x: 6 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 6 }}
                        transition={{ duration: 0.2 }}
                      >
                        send
                        <PaperPlaneTiltIcon size={14} weight="bold" aria-hidden />
                      </motion.button>
                    )}
                    {sendState === 'sending' && (
                      <motion.span
                        key="sending"
                        className="text-white/40 text-xs tracking-widest uppercase"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        sending…
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer bar — overlaid on the hero video, desktop only */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-10 px-6 lg:px-10 py-5 hidden md:flex items-center justify-between"
          animate={{ opacity: contactOpen ? 0 : 1, pointerEvents: contactOpen ? 'none' : 'auto' }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
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
        </motion.div>
      </section>

      {/* Mobile one-pager: Work, About, Contact sections stacked below hero */}
      <MobileOnePager />
    </div>
  );
}
