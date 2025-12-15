'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/content/projects';
import { useMotionPreference } from '@/lib/reduced-motion';

interface NextProjectProps {
  project: Project;
}

export function NextProject({ project }: NextProjectProps) {
  const { shouldReduceMotion } = useMotionPreference();

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-foreground/5 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wider">Next Project</p>
          <Link
            href={`/work/${project.slug}`}
            className="group block"
          >
            <motion.h2
              className="font-headline text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 md:mb-8"
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      x: 20,
                      transition: { duration: 0.3 },
                    }
              }
            >
              {project.title}
              <motion.span
                className="inline-block ml-2 sm:ml-4 text-accent"
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        x: 10,
                        transition: { duration: 0.3 },
                      }
                }
              >
                →
              </motion.span>
            </motion.h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              {project.category} • {project.year}
            </p>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

