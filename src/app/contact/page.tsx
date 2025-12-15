'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { KineticHeadline } from '@/components/KineticHeadline';
import { SectionReveal } from '@/components/SectionReveal';
import { useMotionPreference } from '@/lib/reduced-motion';

export default function ContactPage() {
  const [email] = useState('dearliordoron@gmail.com');
  const { shouldReduceMotion } = useMotionPreference();
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent('I want to work with you Lior!')}`;

  return (
    <div className="min-h-screen px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 sm:mb-24">
          <KineticHeadline
            text="Let's Connect"
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 sm:mb-12"
            as="h1"
          />
        </div>

        {/* Main Content */}
        <SectionReveal>
          <motion.div
            className="space-y-12 sm:space-y-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {/* Intro */}
            <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed text-gray-700">
              Interested in working together on a project? Get in touch to discuss visual identity,
              web design, or print materials for your musical or cultural initiative.
            </p>

            {/* Email Section */}
            <div className="py-8 sm:py-16">
              <motion.a
                href={mailtoLink}
                className="group relative block w-full text-left"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              >
                <div className="relative bg-gradient-to-br from-accent/5 to-accent-secondary/5 rounded-2xl p-6 sm:p-8 md:p-12 border border-foreground/10 hover:border-accent/50 transition-colors overflow-hidden">
                  {/* Animated background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent-secondary/10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />

                  <div className="relative z-10">
                    <span className="block text-xs sm:text-sm text-gray-500 mb-2 uppercase tracking-wider">
                      Email
                    </span>
                    <span className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 group-hover:text-accent transition-colors break-all">
                      {email}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm text-gray-600">
                      <span>✉️</span>
                      Click to send email
                    </span>
                  </div>

                  {/* Corner decoration */}
                  <motion.div
                    className="absolute bottom-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-accent/20 rounded-tl-full"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  name: 'Instagram',
                  handle: '@dearliordoron',
                  url: 'https://instagram.com/dearliordoron',
                  color: '#E1306C',
                },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-foreground/5 hover:bg-foreground/10 rounded-xl p-6 sm:p-8 transition-colors border border-foreground/10 hover:border-foreground/20 min-h-[120px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={shouldReduceMotion ? {} : { y: -4 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl sm:text-2xl font-bold">{social.name}</span>
                    <motion.span
                      className="text-xl sm:text-2xl"
                      whileHover={
                        shouldReduceMotion
                          ? {}
                          : {
                              x: 4,
                              y: -4,
                              transition: { duration: 0.2 },
                            }
                      }
                    >
                      ↗
                    </motion.span>
                  </div>
                  <span className="text-base text-gray-600">{social.handle}</span>
                  
                  {/* Animated underline */}
                  <motion.div
                    className="mt-4 h-1 rounded-full"
                    style={{ backgroundColor: social.color }}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <SectionReveal delay={0.9}>
              <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-foreground/10">
                <h2 className="font-headline text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Availability</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Currently accepting select projects for 2025. Typical project timelines range
                  from 2-8 weeks depending on scope. For inquiries about existing projects or
                  general questions, please reach out via email.
                </p>
              </div>
            </SectionReveal>
          </motion.div>
        </SectionReveal>
      </div>
    </div>
  );
}
