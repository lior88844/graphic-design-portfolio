'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PhotoAlbum from 'react-photo-album';
import { ImageModal } from '@/components/ImageModal';
import { useMotionPreference } from '@/lib/reduced-motion';
import type { PhotoMeta } from '@/content/projects';

interface PhotographyGalleryProps {
  readonly photos: PhotoMeta[];
  readonly color?: string;
}

export function PhotographyGallery({ photos, color = '#F4A261' }: PhotographyGalleryProps) {
  const { shouldReduceMotion } = useMotionPreference();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const albumPhotos = photos.map((p, i) => ({
    src: p.src,
    width: p.width,
    height: p.height,
    alt: p.caption ?? `Concert photo ${i + 1}`,
  }));

  const handleClose = () => setSelectedIndex(null);

  const selectedPhoto = selectedIndex === null ? null : photos[selectedIndex];

  return (
    <>
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <PhotoAlbum
          layout="masonry"
          photos={albumPhotos}
          spacing={8}
          columns={(containerWidth) => {
            if (containerWidth < 480) return 2;
            if (containerWidth < 768) return 3;
            if (containerWidth < 1280) return 3;
            return 4;
          }}
          render={{
            wrapper: ({ onClick: _onClick }, { photo, index, width, height }) => (
              <PhotoTile
                key={photo.src}
                src={photo.src}
                alt={photo.alt ?? `Concert photo ${index + 1}`}
                width={width}
                height={height}
                index={index}
                color={color}
                shouldReduceMotion={shouldReduceMotion}
                onClick={() => setSelectedIndex(index)}
              />
            ),
          }}
        />
      </motion.div>

      <ImageModal
        isOpen={selectedPhoto !== null}
        onClose={handleClose}
        imageSrc={selectedPhoto?.src ?? ''}
        imageAlt={selectedPhoto?.caption ?? `Concert photo ${(selectedIndex ?? 0) + 1}`}
      />
    </>
  );
}

interface PhotoTileProps {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
  readonly index: number;
  readonly color: string;
  readonly shouldReduceMotion: boolean;
  readonly onClick: () => void;
}

function PhotoTile({ src, alt, width, height, index, color, shouldReduceMotion, onClick }: PhotoTileProps) {
  return (
    <motion.div
      style={{ width, height }}
      className="relative overflow-hidden rounded-xl cursor-pointer group"
      initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.97 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      onClick={onClick}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        className="transition-transform duration-500 ease-out group-hover:scale-[1.04] group-hover:brightness-110"
        sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1280px) 33vw, 25vw"
      />

      {/* Ambient overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-xl" />

      {/* Accent bottom bar that appears on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />

      {/* Expand icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-black/50 backdrop-blur-sm rounded-full p-2.5 ring-1 ring-white/20">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
