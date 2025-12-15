import { notFound } from 'next/navigation';
import { getProjectBySlug, getNextProject } from '@/content/projects';
import { ProjectHero } from '@/components/ProjectHero';
import { ProjectContent } from '@/components/ProjectContent';
import { NextProject } from '@/components/NextProject';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { slug: 'raanana-jazz-festival' },
    { slug: 'websites-for-jazz-musicians' },
    { slug: 'posters-for-jazz-performances' },
  ];
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(slug);

  return (
    <div className="min-h-screen -mt-24">
      <ProjectHero
        title={project.title}
        category={project.category}
        year={project.year}
        imageSrc={project.heroImage}
        color={project.color}
      />

      <ProjectContent
        description={project.description}
        services={project.services}
        images={project.images}
        link={project.link}
        instagram={project.instagram}
        subsections={project.subsections}
        slug={project.slug}
      />

      {nextProject && <NextProject project={nextProject} />}
    </div>
  );
}

