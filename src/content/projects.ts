/**
 * Project content data
 */

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
        description: 'Website and visual identity for pianist and composer Amit Friedman.',
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
        description: 'Digital presence for drummer Alon Nir, emphasizing rhythm and structure.',
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
        description: 'Website for bassist Gil Livni, focusing on minimalist aesthetics.',
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

