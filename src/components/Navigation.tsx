'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { stagger } from '@/lib/motion';
import { useMotionPreference } from '@/lib/reduced-motion';

const navLinks = [
  { href: '/', label: 'Home', mobileAnchor: 'hero-section' },
  { href: '/work', label: 'Work', mobileAnchor: 'work' },
  { href: '/about', label: 'About', mobileAnchor: 'about' },
  { href: '/contact', label: 'Contact', mobileAnchor: 'contact' },
];

/** Maps section IDs (from IntersectionObserver) back to the nav link's href. */
const SECTION_HREF_MAP: Record<string, string> = {
  'hero-section': '/',
  work: '/work',
  about: '/about',
  contact: '/contact',
};

export function Navigation() {
  const pathname = usePathname();
  const { shouldReduceMotion } = useMotionPreference();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /**
   * On the home route (mobile one-pager), track which section is in view so we
   * can highlight the correct nav item even though the URL never changes.
   */
  const [activeMobileHref, setActiveMobileHref] = useState<string>('/');

  const isHome = pathname === '/';

  // Track whether the user has scrolled past the hero
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  // Track active section on the mobile one-pager (only when at '/')
  useEffect(() => {
    if (pathname !== '/') {
      setActiveMobileHref(pathname);
      return;
    }

    setActiveMobileHref('/');

    const observers: IntersectionObserver[] = [];

    Object.keys(SECTION_HREF_MAP).forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveMobileHref(SECTION_HREF_MAP[id]);
          }
        },
        // Trigger when the top 30% of the section crosses the middle of the screen
        { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  /**
   * Handles mobile menu anchor clicks.
   *   - When already on '/', prevent default navigation and smooth-scroll after
   *     the menu close animation (≈ 350 ms) has finished.
   *   - When on another route, let the browser navigate to '/#anchor' naturally.
   */
  const handleMobileAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
      setIsMobileMenuOpen(false);

      if (pathname === '/') {
        e.preventDefault();
        setTimeout(() => {
          document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 320);
      }
      // On other routes: let browser navigate to '/#anchor'; natural hash scrolling
    },
    [pathname],
  );

  const isGlass = !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isGlass
          ? 'bg-transparent'
          : 'bg-background/98 backdrop-blur-xl supports-[backdrop-filter]:bg-background/95'
      } ${isHome ? '[&_*]:cursor-none cursor-none' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="block relative z-50">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-28 h-10 sm:w-32 sm:h-12 md:w-40 md:h-14"
            >
              <Image
                src="/logo.png"
                alt="Lior Doron"
                fill
                className="object-contain object-left transition-all duration-300"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex gap-6 lg:gap-8 items-center">
            {navLinks.map((link, index) => {
              const isActive =
                pathname === link.href ||
                (link.href === '/work' && pathname.startsWith('/work'));

              return (
                <motion.li
                  key={link.href}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.43, 0.13, 0.23, 0.96],
                    delay: 0.2 + index * stagger.fast,
                  }}
                >
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors duration-200 relative ${
                      isGlass
                        ? isActive
                          ? 'text-white'
                          : 'text-white/60 hover:text-white'
                        : isActive
                          ? 'text-accent'
                          : 'text-foreground hover:text-accent'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        className={`absolute -bottom-1 left-0 right-0 h-[2px] ${isGlass ? 'bg-white' : 'bg-accent'}`}
                        layoutId="activeNav"
                        transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}

            {/* CTA */}
            <motion.li
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.43, 0.13, 0.23, 0.96],
                delay: 0.2 + navLinks.length * stagger.fast,
              }}
            >
              <a
                href="/Lior Doron - cv.pdf"
                download="Lior Doron - CV.pdf"
                className="liquid-glass rounded-full px-6 py-2.5 text-sm text-white hover:scale-[1.03] transition-transform duration-200 inline-block"
              >
                Download{' '}
                <em
                  className="italic"
                  style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
                >
                  CV
                </em>
              </a>
            </motion.li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 p-2 -mr-2"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <motion.div
              className="w-6 h-5 flex flex-col justify-between"
              animate={isMobileMenuOpen ? 'open' : 'closed'}
            >
              {[
                { closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 9 } },
                { closed: { opacity: 1 }, open: { opacity: 0 } },
                { closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -9 } },
              ].map((variants, i) => (
                <motion.span
                  key={i}
                  className={`w-full h-0.5 origin-center ${isGlass ? 'bg-white' : 'bg-foreground'}`}
                  variants={variants}
                  transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                />
              ))}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-background z-[45]"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex flex-col items-center justify-center h-full px-6">
              <motion.ul
                className="flex flex-col items-center gap-8"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
                  closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
                }}
              >
                {navLinks.map((link) => {
                  const isActive = activeMobileHref === link.href;

                  return (
                    <motion.li
                      key={link.href}
                      variants={{
                        open: { opacity: 1, y: 0 },
                        closed: { opacity: 0, y: 20 },
                      }}
                      transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <a
                        href={`/#${link.mobileAnchor}`}
                        onClick={(e) => handleMobileAnchorClick(e, link.mobileAnchor)}
                        className={`text-4xl font-bold transition-colors duration-200 ${
                          isActive ? 'text-accent' : 'text-foreground/70 hover:text-foreground'
                        }`}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  );
                })}

                <motion.li
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 },
                  }}
                  transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                  className="pt-4"
                >
                  <a
                    href="/Lior Doron - cv.pdf"
                    download="Lior Doron - CV.pdf"
                    className="liquid-glass rounded-full px-7 py-3 text-base text-foreground inline-block"
                  >
                    Download{' '}
                    <em
                      className="italic"
                      style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
                    >
                      CV
                    </em>
                  </a>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
