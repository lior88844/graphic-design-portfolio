'use client';

interface HeroVideoProps {
  src: string;
}

export default function HeroVideo({ src }: HeroVideoProps) {
  const handleCanPlay = () => {
    // Signal to the loader that the hero video is ready.
    // Set a flag first so the loader can check synchronously if it mounts late.
    (window as Window & { __heroVideoReady?: boolean }).__heroVideoReady = true;
    window.dispatchEvent(new Event('hero-media-ready'));
  };

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      onCanPlay={handleCanPlay}
      className="absolute inset-0 w-full h-full object-cover z-0"
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
