'use client';

import { motion } from 'framer-motion';
import { projects } from '@/content/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { KineticHeadline } from '@/components/KineticHeadline';
import { staggerContainer } from '@/lib/motion';
import { useMotionPreference } from '@/lib/reduced-motion';

export default function WorkPage() {
  const { shouldReduceMotion } = useMotionPreference();

  return (
    <div className="min-h-screen px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <KineticHeadline
            text="Selected Work"
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6"
            as="h1"
          />
          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            A collection of projects spanning visual identity, web design, and print for jazz musicians and cultural initiatives.
          </motion.p>
        </div>

        {/* Filter (placeholder for future) */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="inline-flex gap-3 sm:gap-4 items-center">
            <span className="text-sm text-gray-500">Filter:</span>
            <button className="px-4 py-2 bg-foreground text-background rounded-full text-sm font-medium min-h-[44px]">
              All
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16"
          variants={shouldReduceMotion ? {} : staggerContainer(0.3, 0.1)}
          initial="initial"
          animate="animate"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

