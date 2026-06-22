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
    heroImage: '/images/raanana-jazz/hero.png',
    images: [
      '/images/raanana-jazz/image-1.png',
      '/images/raanana-jazz/image-2.jpg',
      '/images/raanana-jazz/image-3.jpg',
      '/images/raanana-jazz/image-4.jpg',
      '/images/raanana-jazz/image-5.jpg',
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
    heroImage: '/images/jazz-websites/gil-1.png',
    images: [
      '/images/jazz-websites/gil-1.png',
    ],
    color: '#4ECDC4',
    subsections: [
      {
        title: 'Amit Friedman',
        description: 'Website and visual identity for saxophone player Amit Friedman.',
        images: [
          '/images/jazz-websites/amit-1.png',
          '/images/jazz-websites/amit-2.png',
          '/images/jazz-websites/amit-3.png',
          '/images/jazz-websites/amit-4.png',
        ],
        link: 'https://www.amitfriedman.com',
      },
      {
        title: 'Alon Nir',
        description: 'Digital presence for bass player Alon Nir, emphasizing rhythm and structure.',
        images: [
          '/images/jazz-websites/alon-1.png',
          '/images/jazz-websites/alon-2.png',
          '/images/jazz-websites/alon-3.png',
          '/images/jazz-websites/alon-4.png',
          '/images/jazz-websites/alon-5.png',
        ],
        link: 'https://www.alonnear.com',
      },
      {
        title: 'Gil Livni',
        description: 'Website for guitarist Gil Livni, focusing on minimalist aesthetics.',
        images: [
          '/images/jazz-websites/gil-1.png',
          '/images/jazz-websites/gil-2.png',
          '/images/jazz-websites/gil-3.png',
          '/images/jazz-websites/gil-4.png',
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
    heroImage: '/images/jazz-posters/hero.png',
    images: [
      '/images/jazz-posters/1.png',
      '/images/jazz-posters/2.png',
      '/images/jazz-posters/3.png',
      '/images/jazz-posters/4.png',
      '/images/jazz-posters/5.png',
      '/images/jazz-posters/6.png',
      '/images/jazz-posters/7.png',
      '/images/jazz-posters/8.png',
      '/images/jazz-posters/9.png',
      '/images/jazz-posters/10.png',
      '/images/jazz-posters/11.png',
      '/images/jazz-posters/12.png',
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
      { src: '/images/photography/01.jpg', width: 2560, height: 1707 },
      { src: '/images/photography/02.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/03.jpg', width: 1728, height: 2592 },
      { src: '/images/photography/04.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/05.jpg', width: 1438, height: 2560 },
      { src: '/images/photography/06.jpg', width: 1728, height: 2592 },
      { src: '/images/photography/07.jpg', width: 3456, height: 3285 },
      { src: '/images/photography/08.jpg', width: 1707, height: 2560 },
      { src: '/images/photography/09.jpg', width: 1438, height: 2560 },
      { src: '/images/photography/10.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/11.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/12.jpg', width: 1707, height: 2560 },
      { src: '/images/photography/13.jpg', width: 1438, height: 2560 },
      { src: '/images/photography/14.jpg', width: 4180, height: 3264 },
      { src: '/images/photography/15.jpg', width: 4912, height: 2760 },
      { src: '/images/photography/16.jpg', width: 3456, height: 5184 },
      { src: '/images/photography/17.jpg', width: 4912, height: 2760 },
      { src: '/images/photography/18.jpg', width: 1427, height: 2539 },
      { src: '/images/photography/19.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/20.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/21.jpg', width: 1433, height: 2551 },
      { src: '/images/photography/22.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/23.jpg', width: 1707, height: 2560 },
      { src: '/images/photography/24.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/25.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/26.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/27.jpg', width: 1438, height: 2560 },
      { src: '/images/photography/28.jpg', width: 4912, height: 2760 },
      { src: '/images/photography/29.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/30.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/31.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/32.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/33.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/34.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/35.jpg', width: 1707, height: 2560 },
      { src: '/images/photography/36.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/37.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/38.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/39.jpg', width: 1438, height: 2560 },
      { src: '/images/photography/40.jpg', width: 3456, height: 5184 },
      { src: '/images/photography/41.jpg', width: 4912, height: 2760 },
      { src: '/images/photography/42.jpg', width: 3456, height: 5184 },
      { src: '/images/photography/43.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/44.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/45.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/46.jpg', width: 4912, height: 2760 },
      { src: '/images/photography/47.jpg', width: 1438, height: 2560 },
      { src: '/images/photography/48.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/49.jpg', width: 4912, height: 2760 },
      { src: '/images/photography/50.jpg', width: 1438, height: 2560 },
      { src: '/images/photography/51.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/52.jpg', width: 4912, height: 2760 },
      { src: '/images/photography/53.jpg', width: 1429, height: 1949 },
      { src: '/images/photography/54.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/55.jpg', width: 2560, height: 1707 },
      { src: '/images/photography/56.jpg', width: 1438, height: 2560 },
      { src: '/images/photography/57.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/58.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/59.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/60.jpg', width: 1707, height: 2560 },
      { src: '/images/photography/61.jpg', width: 2560, height: 1438 },
      { src: '/images/photography/62.jpg', width: 2240, height: 1409 },
      { src: '/images/photography/63.jpg', width: 2560, height: 1707 },
      { src: '/images/photography/64.jpg', width: 4912, height: 2760 },
      { src: '/images/photography/65.jpg', width: 4912, height: 2760 },
    ],
  },
  {
    id: 'apps',
    title: 'Apps',
    slug: 'apps',
    category: 'Product Design',
    year: '2024',
    description:
      'Interface and product design for mobile and web apps — translating brand systems into usable, considered digital products with the same structure and care as building software.',
    services: ['Product Design', 'UI Design', 'UX', 'Prototyping'],
    heroImage: '/images/apps/hero.PNG',
    images: [
      '/images/apps/1.png',
      '/images/apps/2.png',
      '/images/apps/3.png',
      '/images/apps/4.PNG',
      '/images/apps/5.PNG',
      '/images/apps/7.png',
    ],
    color: '#6C5CE7',
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

