/**
 * Project content data
 */

export interface PhotoMeta {
  src: string;
  width: number;
  height: number;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  year: string;
  description: string;
  services: string[];
  heroImage: string;
  images: string[];
  color?: string;
  link?: string;
  instagram?: string;
  photoAlbum?: PhotoMeta[];
  subsections?: {
    title: string;
    description: string;
    images: string[];
    link?: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 'raanana-jazz',
    title: 'Raanana Jazz Festival',
    slug: 'raanana-jazz-festival',
    category: 'Festival Identity',
    year: '2024',
    description:
      'A comprehensive visual identity for an annual jazz festival, including website design, merchandise, and social media presence. The system emphasizes bold typography and vibrant colors to capture the energy of live jazz performance.',
    services: ['Visual Identity', 'Website Design', 'Merchandise', 'Social Media'],
    heroImage: '/images/festivals/hero.webp',
    images: [
      '/images/festivals/image-1.webp',
      '/images/festivals/image-2.jpg',
      '/images/festivals/image-3.jpg',
      '/images/festivals/image-4.jpg',
      '/images/festivals/image-5.jpg',
    ],
    color: '#FF6B35',
    link: 'https://www.raananajazzfestival.com',
    instagram: 'https://www.instagram.com/world.jazz.music',
  },
  {
    id: 'jazz-websites',
    title: 'Websites for Jazz Musicians',
    slug: 'websites-for-jazz-musicians',
    category: 'Web Design',
    year: '2023-2024',
    description:
      'A series of website projects for jazz musicians, each with its own visual identity and logo. The work explores how digital presence can reflect individual musical voice while maintaining clarity and usability.',
    services: ['Web Design', 'Visual Identity', 'Logo Design', 'Typography'],
    heroImage: '/images/websites/gil-1.webp',
    images: [
      '/images/websites/gil-1.webp',
    ],
    color: '#4ECDC4',
    subsections: [
      {
        title: 'Amit Friedman',
        description: 'Website and visual identity for saxophone player Amit Friedman.',
        images: [
          '/images/websites/amit-1.webp',
          '/images/websites/amit-2.webp',
          '/images/websites/amit-3.webp',
          '/images/websites/amit-4.webp',
        ],
        link: 'https://www.amitfriedman.com',
      },
      {
        title: 'Alon Nir',
        description: 'Digital presence for bass player Alon Nir, emphasizing rhythm and structure.',
        images: [
          '/images/websites/alon-1.webp',
          '/images/websites/alon-2.webp',
          '/images/websites/alon-3.webp',
          '/images/websites/alon-4.webp',
          '/images/websites/alon-5.webp',
        ],
        link: 'https://www.alonnear.com',
      },
      {
        title: 'Gil Livni',
        description: 'Website for guitarist Gil Livni, focusing on minimalist aesthetics.',
        images: [
          '/images/websites/gil-1.webp',
          '/images/websites/gil-2.webp',
          '/images/websites/gil-3.webp',
          '/images/websites/gil-4.webp',
        ],
        link: 'https://www.gillivni.com',
      },
    ],
  },
  {
    id: 'jazz-posters',
    title: 'Posters for Jazz Performances',
    slug: 'posters-for-jazz-performances',
    category: 'Print Design',
    year: '2022-2024',
    description:
      'A collection of posters for live jazz performances. Each piece responds to the specific musical context while maintaining a coherent visual language rooted in typographic experimentation and high contrast.',
    services: ['Poster Design', 'Typography', 'Print Production'],
    heroImage: '/images/posters/hero.webp',
    images: [
      '/images/posters/1.webp',
      '/images/posters/2.webp',
      '/images/posters/3.webp',
      '/images/posters/4.webp',
      '/images/posters/5.webp',
      '/images/posters/6.webp',
      '/images/posters/7.webp',
      '/images/posters/8.webp',
      '/images/posters/9.webp',
      '/images/posters/10.webp',
      '/images/posters/11.webp',
      '/images/posters/12.webp',
    ],
    color: '#F7B731',
  },
  {
    id: 'photography',
    title: 'Photography',
    slug: 'photography',
    category: 'Photography',
    year: '2022–2025',
    description:
      'Jazz concert photography shot across stages and intimate venues. Each frame chases the unrepeatable — a horn player mid-phrase, a drummer in silhouette, a spotlight dissolving into smoke.',
    services: ['Concert Photography', 'Event Coverage', 'Photo Editing'],
    heroImage: '/images/photography/15.jpg',
    images: Array.from({ length: 65 }, (_, i) => `/images/photography/${String(i + 1).padStart(2, '0')}.jpg`),
    color: '#F4A261',
    photoAlbum: [
      { src: '/images/photography/01.jpg', width: 1920, height: 1280 },
      { src: '/images/photography/02.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/03.jpg', width: 1280, height: 1920 },
      { src: '/images/photography/04.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/05.jpg', width: 1079, height: 1920 },
      { src: '/images/photography/06.jpg', width: 1280, height: 1920 },
      { src: '/images/photography/07.jpg', width: 1920, height: 1825 },
      { src: '/images/photography/08.jpg', width: 1280, height: 1920 },
      { src: '/images/photography/09.jpg', width: 1079, height: 1920 },
      { src: '/images/photography/10.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/11.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/12.jpg', width: 1280, height: 1920 },
      { src: '/images/photography/13.jpg', width: 1079, height: 1920 },
      { src: '/images/photography/14.jpg', width: 1920, height: 1499 },
      { src: '/images/photography/15.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/16.jpg', width: 1280, height: 1920 },
      { src: '/images/photography/17.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/18.jpg', width: 1079, height: 1920 },
      { src: '/images/photography/19.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/20.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/21.jpg', width: 1079, height: 1920 },
      { src: '/images/photography/22.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/23.jpg', width: 1280, height: 1920 },
      { src: '/images/photography/24.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/25.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/26.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/27.jpg', width: 1079, height: 1920 },
      { src: '/images/photography/28.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/29.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/30.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/31.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/32.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/33.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/34.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/35.jpg', width: 1280, height: 1920 },
      { src: '/images/photography/36.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/37.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/38.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/39.jpg', width: 1079, height: 1920 },
      { src: '/images/photography/40.jpg', width: 1280, height: 1920 },
      { src: '/images/photography/41.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/42.jpg', width: 1280, height: 1920 },
      { src: '/images/photography/43.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/44.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/45.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/46.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/47.jpg', width: 1079, height: 1920 },
      { src: '/images/photography/48.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/49.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/50.jpg', width: 1079, height: 1920 },
      { src: '/images/photography/51.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/52.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/53.jpg', width: 1408, height: 1920 },
      { src: '/images/photography/54.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/55.jpg', width: 1920, height: 1280 },
      { src: '/images/photography/56.jpg', width: 1079, height: 1920 },
      { src: '/images/photography/57.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/58.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/59.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/60.jpg', width: 1280, height: 1920 },
      { src: '/images/photography/61.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/62.jpg', width: 1920, height: 1208 },
      { src: '/images/photography/63.jpg', width: 1920, height: 1280 },
      { src: '/images/photography/64.jpg', width: 1920, height: 1079 },
      { src: '/images/photography/65.jpg', width: 1920, height: 1079 },
    ],
  },
  {
    id: 'apps',
    title: 'Product Design',
    slug: 'apps',
    category: 'Product Design',
    year: '2024–2025',
    description:
      'UX/UI work across three products — each starting from a specific user problem and built through to a shipped interface.',
    services: ['UX Research', 'Product Design', 'UI Engineering', 'Prototyping', 'Design Systems'],
    heroImage: '/images/apps/hero.webp',
    images: [
      '/images/apps/1.webp',
      '/images/apps/2.webp',
      '/images/apps/3.webp',
      '/images/apps/4.webp',
      '/images/apps/5.webp',
      '/images/apps/7.webp',
    ],
    color: '#6C5CE7',
    subsections: [
      {
        title: 'Muza',
        description:
          'Built end-to-end with the founding team. The challenge: a product at the intersection of music discovery and social curation, where the interface had to feel effortless while surfacing complex relational data. Worked on problem definition, user flows, component architecture, and front-end engineering from the beginning through launch.',
        images: [
          '/images/apps/hero.webp',
          '/images/apps/1.webp',
          '/images/apps/2.webp',
        ],
      },
      {
        title: 'FairTips',
        description:
          'A restaurant tip calculator designed around a specific friction point: groups that want to split tips fairly by hours worked, not just evenly. The design problem was reducing cognitive load on a task people do under social pressure. Designed the interaction model, built the UI, and shipped it as a mobile-first web app.',
        images: [
          '/images/apps/3.webp',
          '/images/apps/4.webp',
        ],
      },
      {
        title: 'Wheel of Imagination',
        description:
          'A creativity tool for children, built around open-ended prompts and random exploration. The challenge: designing for delight and surprise without overwhelming young users. Focused on minimal UI, large touch targets, and motion that feels responsive rather than decorative.',
        images: [
          '/images/apps/5.webp',
          '/images/apps/7.webp',
        ],
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return undefined;
  const nextIndex = (currentIndex + 1) % projects.length;
  return projects[nextIndex];
}

