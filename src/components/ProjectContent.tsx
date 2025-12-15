'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { SectionReveal } from '@/components/SectionReveal';
import { useMotionPreference } from '@/lib/reduced-motion';
import { ImageModal } from '@/components/ImageModal';
import PhotoAlbum from 'react-photo-album';

interface ProjectContentProps {
  description: string;
  services: string[];
  images: string[];
  link?: string;
  instagram?: string;
  subsections?: {
    title: string;
    description: string;
    images: string[];
    link?: string;
  }[];
  slug?: string;
}

export function ProjectContent({ description, services, images, link, instagram, subsections, slug }: ProjectContentProps) {
  const isJazzPosters = slug === 'posters-for-jazz-performances';
  const isRaananaJazz = slug === 'raanana-jazz-festival';
  
  return (
    <div className="bg-background">
      {/* Description & Services */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          <SectionReveal>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Overview</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              {description}
            </p>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <h3 className="font-headline text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3 text-base sm:text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  {service}
                </motion.li>
              ))}
            </ul>

            {/* Project Links */}
            {(link || instagram) && (
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors font-medium text-sm sm:text-base min-h-[44px]"
                  >
                    Visit Website
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
                {instagram && (
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 border-2 border-accent text-accent rounded-full hover:bg-accent hover:text-white transition-colors font-medium text-sm sm:text-base min-h-[44px]"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                )}
              </div>
            )}
          </SectionReveal>
        </div>
      </section>

      {/* Main Images - Grid layout for jazz posters only */}
      {isJazzPosters && (
        <section className="py-8 sm:py-12 px-4 sm:px-6">
          <div className="max-w-[1800px] mx-auto">
            <PosterCollageGrid images={images} />
          </div>
        </section>
      )}

      {/* Raanana Jazz Festival Grid */}
      {isRaananaJazz && (
        <section className="py-8 sm:py-12 px-4 sm:px-6">
          <div className="max-w-[1800px] mx-auto">
            <RaananaJazzGrid images={images} />
          </div>
        </section>
      )}

      {/* Subsections */}
      {subsections && subsections.map((subsection, subIndex) => (
        <section key={subIndex} className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <SectionReveal>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16">
                <div>
                  <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">{subsection.title}</h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl">
                    {subsection.description}
                  </p>
                </div>
                {subsection.link && (
                  <a
                    href={subsection.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors whitespace-nowrap font-medium text-sm sm:text-base min-h-[44px]"
                  >
                    Visit Website
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </SectionReveal>

            {/* Horizontal row of images with fixed height */}
            <WebsiteImageRow images={subsection.images} title={subsection.title} />
          </div>
        </section>
      ))}
    </div>
  );
}

function WebsiteImageRow({ images, title }: { images: string[]; title: string }) {
  const { shouldReduceMotion } = useMotionPreference();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState<string>('');

  const handleImageClick = (image: string, alt: string) => {
    setSelectedImage(image);
    setSelectedAlt(alt);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setSelectedAlt('');
  };

  return (
    <>
      <div className="flex gap-2 sm:gap-3 md:gap-4 h-[150px] sm:h-[180px] md:h-[200px] overflow-x-auto overflow-y-hidden pb-2 -mx-4 sm:mx-0 px-4 sm:px-0">
        {images.map((image, index) => {
          const altText = `${title} image ${index + 1}`;
          
          return (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-[200px] sm:flex-1 group cursor-pointer"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={shouldReduceMotion ? {} : { scale: 1.02, zIndex: 10 }}
              onClick={() => handleImageClick(image, altText)}
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={image}
                  alt={altText}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 200px, (max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                
                {/* Zoom indicator on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-full p-3 shadow-lg">
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <ImageModal
        isOpen={selectedImage !== null}
        onClose={handleCloseModal}
        imageSrc={selectedImage || ''}
        imageAlt={selectedAlt}
      />
    </>
  );
}

function PosterCollageGrid({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState<string>('');
  
  // Prepare photos for react-photo-album
  // Using approximate poster dimensions (portrait orientation)
  const photos = images.map((src, index) => ({
    src,
    width: 600,
    height: 800,
    alt: `Jazz poster ${index + 1}`,
  }));

  const handleImageClick = (index: number) => {
    setSelectedImage(images[index]);
    setSelectedAlt(`Jazz poster ${index + 1}`);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setSelectedAlt('');
  };
  
  return (
    <>
      <PhotoAlbum
        layout="masonry"
        photos={photos}
        spacing={0}
        columns={(containerWidth) => {
          if (containerWidth < 640) return 2;
          if (containerWidth < 768) return 3;
          if (containerWidth < 1024) return 4;
          return 5;
        }}
        renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
          <div
            style={wrapperStyle}
            className="cursor-pointer group relative overflow-hidden"
            onClick={() => handleImageClick(photos.findIndex(p => p.src === photo.src))}
          >
            {renderDefaultPhoto({ wrapped: true })}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            
            {/* Zoom indicator on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/90 rounded-full p-2 sm:p-3 shadow-lg">
                <svg
                  className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      />

      <ImageModal
        isOpen={selectedImage !== null}
        onClose={handleCloseModal}
        imageSrc={selectedImage || ''}
        imageAlt={selectedAlt}
      />
    </>
  );
}

function RaananaJazzGrid({ images }: { images: string[] }) {
  const { shouldReduceMotion } = useMotionPreference();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState<string>('');

  const handleImageClick = (image: string, alt: string) => {
    setSelectedImage(image);
    setSelectedAlt(alt);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setSelectedAlt('');
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
        {images.map((image, index) => {
          const altText = `Raanana Jazz Festival image ${index + 1}`;
          
          return (
            <motion.div
              key={index}
              className="relative aspect-square group cursor-pointer overflow-hidden"
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleImageClick(image, altText)}
            >
              <Image
                src={image}
                alt={altText}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              
              {/* Zoom indicator on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 rounded-full p-2 sm:p-3 shadow-lg">
                  <svg
                    className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <ImageModal
        isOpen={selectedImage !== null}
        onClose={handleCloseModal}
        imageSrc={selectedImage || ''}
        imageAlt={selectedAlt}
      />
    </>
  );
}

function ImageSection({ src, alt, index }: { src: string; alt: string; index: number }) {
  const ref = useRef(null);
  const { shouldReduceMotion } = useMotionPreference();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Alternate layouts for visual interest
  const isEven = index % 2 === 0;
  const maxWidth = isEven ? 'max-w-7xl' : 'max-w-5xl';
  const marginSide = isEven ? 'mx-auto' : index % 4 === 1 ? 'ml-auto mr-12' : 'mr-auto ml-12';

  return (
    <motion.div
      ref={ref}
      className={`relative ${maxWidth} ${marginSide} px-6 md:px-0`}
      style={shouldReduceMotion ? {} : { opacity }}
    >
      <motion.div
        className="relative aspect-[16/10] overflow-hidden rounded-lg"
        style={shouldReduceMotion ? {} : { scale }}
      >
        <motion.div
          className="relative w-full h-full"
          style={shouldReduceMotion ? {} : { y }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1400px"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

