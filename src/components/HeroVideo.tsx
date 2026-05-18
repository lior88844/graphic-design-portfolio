'use client';

interface HeroVideoProps {
  src: string;
}

export default function HeroVideo({ src }: HeroVideoProps) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-0"
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
