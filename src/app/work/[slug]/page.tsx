import { notFound } from 'next/navigation';
import { getProjectBySlug, getNextProject } from '@/content/projects';
import { ProjectHeader } from '@/components/ProjectHeader';
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
    { slug: 'apps' },
    { slug: 'photography' },
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
    <div className="min-h-screen -mt-[var(--nav-height)]">
      <ProjectHeader
        title={project.title}
        category={project.category}
        year={project.year}
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
        photoAlbum={project.photoAlbum}
        color={project.color}
      />

      {nextProject && <NextProject project={nextProject} />}
    </div>
  );
}

