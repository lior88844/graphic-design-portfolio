'use client';

import { motion } from 'framer-motion';
import { SectionReveal } from '@/components/SectionReveal';
import { Timeline, type TimelineEntry } from '@/components/Timeline';
import { useMotionPreference } from '@/lib/reduced-motion';

/** Hiring-focused career timeline that drives the About page. */
const timeline: TimelineEntry[] = [
  {
    period: '2013–2014',
    title: 'Educational Emissary — Toronto',
    points: [
      'Led educational and community programs abroad for a year of service.',
      'Built early experience in public speaking, facilitation, and cross-cultural communication.',
    ],
  },
  {
    period: '2014–2016',
    title: 'Israel Defense Forces — Instructor & Team Lead',
    points: [
      'Served as a Spike missile-systems instructor, then promoted to head of instructors.',
      'Designed and delivered training programs for new instructors.',
      'Developed leadership, instruction, and high-stakes communication skills.',
    ],
  },
  {
    period: '2016–2017',
    title: 'Educational Emissary — Washington, D.C.',
    points: [
      'Designed and ran education and outreach programs for diverse audiences.',
      'Organized large-scale events and managed multiple stakeholders.',
      'Strengthened communication, teaching, and program-management skills.',
    ],
  },
  {
    period: '2017–2020',
    title: 'Foundations in Communication & Psychology',
    points: [
      'Built public-speaking and live-performance experience.',
      'Developed early foundations in psychology and human behavior.',
    ],
  },
  {
    period: '2020–2021',
    title: 'B.A. Studies — Tel-Hai College',
    points: [
      'Began a degree focused on Psychology and East Asian Studies.',
      'Started tutoring statistics, including students with learning disabilities.',
    ],
  },
  {
    period: '2021–2022',
    title: 'Statistics Tutor',
    points: [
      'Tutored 40+ college students in statistics.',
      'Achieved top marks in statistics coursework.',
      'Sharpened quantitative, analytical, and teaching skills.',
    ],
  },
  {
    period: '2023',
    title: 'Full-Stack Engineering Training',
    points: [
      'Completed the Coding Academy full-stack bootcamp.',
      'JavaScript, React, Node.js, MongoDB, and modern web development.',
      'Transitioned from psychology and education into software engineering.',
    ],
  },
  {
    period: 'Mid 2023',
    title: 'Software Engineer — Plannie',
    points: [
      'Built frontend features and third-party integrations.',
      'Shipped payments, SMS, and WhatsApp functionality.',
      'Resolved customer-facing technical issues across support and engineering.',
    ],
  },
  {
    period: '2023–2024',
    title: 'Expanded Engineering Scope',
    points: [
      'Worked across Angular, Vue, React, Node.js, AWS, Twilio, payments, and calendar integrations.',
      'Took ownership of increasingly complex problems.',
      'Became a trusted point of contact for difficult technical issues.',
    ],
  },
  {
    period: '2024',
    title: 'B.A. in Psychology & East Asian Studies',
    points: [
      'Completed the degree with a dual major.',
      'Conducted academic research and wrote seminar papers on behavior, identity, and East Asian studies.',
    ],
  },
  {
    period: '2024–2025',
    title: 'Mandarin Studies & Remote Engineering — Taipei',
    points: [
      'Awarded a Huayu Scholarship to study Mandarin at NTNU (Mandarin Training Center).',
      'Balanced full-time language study with remote software engineering.',
      'Gained cross-cultural fluency working across time zones and cultures.',
    ],
  },
  {
    period: '2024–2025',
    title: 'Design, Branding & Web for Musicians',
    points: [
      'Designed posters, branding, and visual identities for musicians and cultural projects.',
      'Built and shipped websites for artists and events.',
      'Combined engineering, design, and visual storytelling end to end.',
    ],
  },
  {
    period: '2025',
    title: 'Expanding into Product & UX',
    points: [
      'Deepened focus on UX/UI design and product management.',
      'Moved from pure engineering toward human-centered, product-driven work.',
    ],
  },
  {
    period: '2025',
    title: 'Independent Product Projects',
    points: [
      'FairTips — a restaurant tip calculator.',
      "Wheel of Imagination — a children's creativity app.",
      'Lead-generation tools and user-retention dashboards.',
      'AI and WhatsApp automation prototypes.',
    ],
  },
  {
    period: '2025–2026',
    title: 'Product Engineer — Muza',
    points: [
      'Engineered a product-focused project in close collaboration with founders and stakeholders.',
      'Drove product thinking and user-experience decisions alongside the build.',
    ],
  },
  {
    period: '2026',
    title: 'Relocating to Boston',
    points: [
      'Moving to the Boston area and available for new opportunities.',
      'Open to roles in product management, customer success, solutions engineering, and UX/design.',
      'Focused on human-centered technology.',
    ],
  },
];

export default function AboutPage() {
  const { shouldReduceMotion } = useMotionPreference();

  return (
    <div className="min-h-screen px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-3xl mx-auto">
        {/* Semi-headline */}
        <SectionReveal>
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted sm:mb-4 sm:text-sm">
            About
          </p>
          <h1 className="mb-14 max-w-2xl font-display text-2xl leading-snug text-foreground sm:mb-20 sm:text-3xl md:text-4xl">
            Software engineer with a product and design sensibility — built on
            psychology, education, and work across four countries.
          </h1>
        </SectionReveal>

        {/* Timeline drives the page */}
        <Timeline entries={timeline} />

        {/* Contact CTA */}
        <div className="mt-24 text-center sm:mt-32">
          <h2 className="mb-6 font-display text-2xl font-normal sm:mb-8 sm:text-3xl md:text-4xl">
            Let&apos;s work together
          </h2>
          <motion.a
            href="/contact"
            className="inline-block min-h-[44px] rounded-full bg-foreground px-6 py-3 text-base font-medium text-background transition-colors hover:bg-foreground/90 sm:px-8 sm:py-4 sm:text-lg"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </div>
    </div>
  );
}
