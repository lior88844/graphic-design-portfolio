'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/content/projects';
import { KineticHeadline } from '@/components/KineticHeadline';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { SectionReveal } from '@/components/SectionReveal';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { useMotionPreference } from '@/lib/reduced-motion';

export default function HomePage() {
  const { shouldReduceMotion } = useMotionPreference();

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex flex-col px-4 sm:px-6">
        <div className="max-w-7xl w-full mx-auto flex-1 flex flex-col">
          <div className="relative flex-1">
            {/* Hero Illustration - Background */}
            <motion.div
              className="absolute top-0 right-0 w-full md:w-2/3 lg:w-1/2 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] opacity-30 sm:opacity-40 md:opacity-60"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: shouldReduceMotion ? 0.6 : 0.6, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/images/hero-illustration.png"
                alt="Illustration of a woman sitting on the floor with a cat, working on a computer"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Text Content - Foreground */}
            <div className="relative z-10 max-w-3xl pt-4 sm:pt-8 md:pt-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <KineticHeadline
                  text="Graphic designer for jazz and cultural projects."
                  className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-3"
                  as="h1"
                />
              </motion.div>

              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Identity, web, and print for live music.
              </motion.p>
            </div>
          </div>

          {/* View Work Button - Bottom of Hero */}
          <motion.div
            className="relative z-10 mt-8 sm:mt-12 md:mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div
              whileHover={
                shouldReduceMotion
                  ? {}
                  : { 
                      y: -4,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? {}
                  : { scale: 0.98 }
              }
            >
              <Link
                href="/work"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-foreground hover:bg-foreground/90 text-background font-bold text-base sm:text-lg transition-colors rounded-full min-h-[44px] flex items-center justify-center"
              >
                View Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="h-1 w-16 sm:w-24 bg-accent mb-12 sm:mb-16" />
          </SectionReveal>

          <motion.div
            className="grid grid-cols-1 gap-12"
            variants={shouldReduceMotion ? {} : staggerContainer(0.2, 0.15)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
          >
            {projects.map((project, index) => (
              <SectionReveal key={project.id} delay={index * 0.1}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group block"
                >
                  <motion.div
                    className="relative overflow-hidden rounded-lg bg-gray-100 border border-foreground/10"
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 1.02,
                            transition: { duration: 0.4 },
                          }
                    }
                  >
                    <div className="aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] relative">
                      {/* Background Image */}
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                      />
                      
                      {/* Dark overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
                      
                      {/* Animated overlay on hover */}
                      <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Content */}
                      <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 md:p-12">
                        <div className="text-center">
                          <motion.h3
                            className="font-headline text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 text-white drop-shadow-lg"
                            initial={{ y: 0 }}
                            whileHover={shouldReduceMotion ? {} : { y: -10 }}
                            transition={{ duration: 0.3 }}
                          >
                            {project.title}
                          </motion.h3>
                          <p className="text-base sm:text-lg md:text-xl text-white/90 drop-shadow-md">
                            {project.category} • {project.year}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-2"
                      style={{ backgroundColor: project.color }}
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.6, ease: [0.87, 0, 0.13, 1] }}
                    />
                  </motion.div>
                </Link>
              </SectionReveal>
            ))}
          </motion.div>

          <SectionReveal delay={0.4}>
            <div className="mt-12 sm:mt-16 text-center">
              <Link
                href="/work"
                className="inline-block text-base sm:text-lg text-accent hover:text-accent-secondary transition-colors min-h-[44px] flex items-center justify-center"
              >
                View All Projects →
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}

