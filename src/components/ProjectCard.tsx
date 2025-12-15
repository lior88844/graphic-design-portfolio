'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, MouseEvent } from 'react';
import { Project } from '@/content/projects';
import { fadeInUp } from '@/lib/motion';
import { useMotionPreference } from '@/lib/reduced-motion';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { shouldReduceMotion } = useMotionPreference();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (shouldReduceMotion) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={shouldReduceMotion ? {} : fadeInUp}
      custom={index}
    >
      <Link
        ref={ref}
        href={`/work/${project.slug}`}
        className="group block relative overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="relative aspect-[4/3] bg-gray-100 overflow-hidden"
          style={
            shouldReduceMotion
              ? {}
              : {
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }
          }
          whileHover={
            shouldReduceMotion
              ? {}
              : {
                  scale: 1.02,
                  transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] },
                }
          }
        >
          {/* Image */}
          <div className="relative w-full h-full">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Accent bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-1"
            style={{ backgroundColor: project.color || '#fff' }}
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.5, ease: [0.87, 0, 0.13, 1] }}
          />
        </motion.div>

        {/* Info */}
        <motion.div 
          className="mt-3 sm:mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-baseline justify-between gap-3 sm:gap-4">
            <h3 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">{project.year}</span>
          </div>
            <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">{project.category}</p>
        </motion.div>
      </Link>
    </motion.div>
  );
}

