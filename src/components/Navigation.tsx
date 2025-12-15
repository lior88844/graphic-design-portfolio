'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { AnimatedLink } from './AnimatedLink';
import { fadeInUp, stagger } from '@/lib/motion';
import { useMotionPreference } from '@/lib/reduced-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navigation() {
  const pathname = usePathname();
  const { shouldReduceMotion } = useMotionPreference();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/98 backdrop-blur-xl border-b border-foreground/10 supports-[backdrop-filter]:bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-6">
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
                className="object-contain object-left"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Nav Links */}
          <motion.ul
            className="hidden md:flex gap-6 lg:gap-8"
            initial="initial"
            animate="animate"
            variants={shouldReduceMotion ? {} : {
              animate: {
                transition: {
                  staggerChildren: stagger.fast,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href || 
                (link.href === '/work' && pathname.startsWith('/work'));
              
              return (
                <motion.li
                  key={link.href}
                  variants={shouldReduceMotion ? {} : fadeInUp}
                >
                  <Link
                    href={link.href}
                    className={`text-sm md:text-base transition-colors relative ${
                      isActive ? 'text-accent' : 'text-foreground hover:text-accent'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent"
                        layoutId="activeNav"
                        transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 p-2 -mr-2"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <motion.div
              className="w-6 h-5 flex flex-col justify-between"
              animate={isMobileMenuOpen ? "open" : "closed"}
            >
              <motion.span
                className="w-full h-0.5 bg-foreground origin-center"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 9 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-foreground"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-foreground origin-center"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -9 },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-[#faf8f5] z-[45]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full px-6">
              <motion.ul
                className="flex flex-col items-center gap-8"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                  closed: {
                    transition: {
                      staggerChildren: 0.05,
                      staggerDirection: -1,
                    },
                  },
                }}
              >
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || 
                    (link.href === '/work' && pathname.startsWith('/work'));
                  
                  return (
                    <motion.li
                      key={link.href}
                      variants={{
                        open: { opacity: 1, y: 0 },
                        closed: { opacity: 0, y: 20 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className={`text-4xl font-bold transition-colors ${
                          isActive ? 'text-accent' : 'text-foreground'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

